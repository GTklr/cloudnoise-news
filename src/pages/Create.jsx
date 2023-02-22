import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useAuthContext } from "../hooks/useAuthContext"

//firebase imports
import {db} from '../firebase/config'
import {collection, addDoc} from 'firebase/firestore'

import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL, } from "firebase/storage";
import TransitionsIndiv from '../components/transitions/TransitionIndiv';




export default function Create() {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState('')
  const [percent, setPercent] = useState(0)
  const { user } = useAuthContext()
  const newMiliTime = Date.now()

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
    }

  // UPLOAD BLOB TO FIREBASE STORAGE IN TINYMCE
  const storage = getStorage();
  const imagesUploadHandler = async (blobInfo, success, failure) => {
    try {
      const file = blobInfo.blob();
      const storageRef = ref(storage, file.name);
      const metadata = {
        contentType: file.type,
      };
      
      const blob2 = await new Blob([file], { type: file.type });
      
      await uploadBytes(storageRef, blob2, metadata);
      const url = await getDownloadURL(storageRef);
      console.log(url);
      return url;
    
    } catch (error) {
      console.log(error.message)
    }
  };
  
  // REPLACE BLOB URL WITH UPLOADED IMAGE URL
  const handleEditorChange = async (content, editor) => {
    const blobUrls = editor.dom.select("img[src^='blob:']");
    blobUrls.forEach(async (blobUrl) => {
      const src = blobUrl.getAttribute("src");
      const newSrc = src.replace(/^blob:/, await imagesUploadHandler());
      blobUrl.setAttribute("src", newSrc);
    });
  };
  
// SUBMIT THE WHOLE THING
  const handleSubmit = async (e) => {
    e.preventDefault()
  
    if (!file) {
      alert("Please upload an image first!");
      return;
    }
  
    const storageRef = ref(storage, `/featureimages/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
  
    await new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
  
          setPercent(percent);
        },
        (err) => {
          console.log(err);
          reject(err);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((featureUrl) => {
            console.log(featureUrl);
  
            addDoc(collection(db, "BlogPosts"), {
              title: title,
              content: editorRef.current.getContent(),
              date: newMiliTime,
              featureIMG: featureUrl,
              uid: user.uid,
              author: user.displayName
              
            }).then(() => {
              setTitle("");
              editorRef.current.setContent("");
              resolve();
            }).catch((err) => {
              console.log(err);
              reject(err);
            });
          }).catch((err) => {
            console.log(err);
            reject(err);
          });
        }
      );
    });
  };

  const editorRef = useRef(null);

  return (
    <TransitionsIndiv>
    <div className='text-center text-white min-h-screen'>
      <div className="p-10">
        <div className="py-5">
          <h1>Create new blogpost</h1>
        </div>

        <div className='w-9/12 mx-auto py-5'>
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <label>
              <span> Title:</span>
              <input className="mb-5 formField" type="text" onChange={(e) => setTitle(e.target.value)}
              value={title}
              required/>
            </label>

            <div className="my-4">
              <label>
                <span> Feature Image: </span>
                <input type="file" onChange={handleChange} accept="/image/*" />
                <p className='inline'>"{percent}% done"</p>
              </label>
            </div>
            
           <div className="">
            <Editor tinymceScriptSrc="../node_modules/tinymce/tinymce.min.js" 
              onInit={(evt, editor) => editorRef.current = editor}
              apiKey='qlg68c2xisozytp1ar0uwnqkruqovu2awgckfdyh6emv9tf7'
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                images_upload_handler: imagesUploadHandler,  
                height: 500,
                menubar: false,
                plugins: [
                  "advlist", "autolink", "link", "image", "lists", "charmap", "preview", "anchor", "pagebreak",
                  "searchreplace", "wordcount", "visualblocks", "visualchars", "code", "fullscreen", "insertdatetime", "media", "nonbreaking",
                  "table", "emoticons", "template", "help"],
                toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media | forecolor backcolor emoticons',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',}}
              onEditorChange={handleEditorChange}/>
            </div>    

            <div className="w-1/2 mx-auto">
            <button className="btn mt-5">submit</button>
            </div>
          </form>
        </div>

      </div>
    </ div>
    </TransitionsIndiv>
  );
}
