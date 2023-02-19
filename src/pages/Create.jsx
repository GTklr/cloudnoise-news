import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

//firebase imports
import {db} from '../firebase/config'
import {collection, addDoc} from 'firebase/firestore'

import { getStorage, ref, uploadBytes, getDownloadURL, } from "firebase/storage";




export default function Create() {

  const storage = getStorage();
  

  const imagesUploadHandler = async (blobInfo, success, failure) => {
    try {
      const file = blobInfo.blob();
      const storageRef = ref(storage, file.name);
      const metadata = {
        contentType: file.type,
      };
      
      // Create a new Blob object with the file data
      const blob2 = await new Blob([file], { type: file.type });
      
      // Upload the Blob to Firebase Storage
      await uploadBytes(storageRef, blob2, metadata);
      const url = await getDownloadURL(storageRef);
      console.log(url);
      return url;
    
    } catch (error) {
      // Call the failure callback with the error message;;
      console.log(error.message)
    }
  };
  
  const handleEditorChange = async (content, editor) => {
    const blobUrls = editor.dom.select("img[src^='blob:']");
    // Replace the blob URLs with the uploaded image URLs
    blobUrls.forEach(async (blobUrl) => {
      const src = blobUrl.getAttribute("src");
      const newSrc = src.replace(/^blob:/, await imagesUploadHandler());
      blobUrl.setAttribute("src", newSrc);
    });
  };
  
  const [title, setTitle] = useState('')
  const newMiliTime = Date.now()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    await addDoc(collection(db, "BlogPosts"), {
      title: title,
      content: editorRef.current.getContent(),
      date: newMiliTime,
    })
    setTitle('')
    editorRef.current.setContent('')
  }

  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {
      e.preventDefault()
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className=' bg-slate-500 text-center'>

      <div className="py-5">
        <h1>Create new blogpost</h1>
      </div>

      <div className='w-9/12 mx-auto py-5'>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <label>
            <span> title:</span>
            <input className="mb-5" type="text" onChange={(e) => setTitle(e.target.value)}
             value={title}
            required/>
          </label>
          {/* TODO fix display image properly */}
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
                "table", "emoticons", "template", "help"
              ],
              
              toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media | forecolor backcolor emoticons',
              
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              
            }}
            onEditorChange={handleEditorChange}
            
          />
          <button className="btn mt-5">submit</button>
        </form>

        <div>
          
        </div>
      </div>

    </ div>
  );
}
