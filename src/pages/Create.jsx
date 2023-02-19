import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

//firebase imports
import {db} from '../firebase/config'
import {collection, addDoc} from 'firebase/firestore'
import {useCollection} from "../hooks/useCollection"


export default function Create() {

  const [title, setTitle] = useState('')
  const [embedd, setEmbedd] = useState('')


  const newMiliTime = Date.now()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addDoc(collection(db, "BlogPosts"), {
      title: title,
      content: editorRef.current.getContent(),
      date: newMiliTime,
    })

    setTitle('')

  }

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className=' bg-slate-500 text-center'>

      <div className="py-5">
        <h1>Create new blogpost</h1>
      </div>

      <div className='w-1/2 mx-auto py-5'>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <label>
            <span> title:</span>
            <input className="mb-5" type="text" onChange={(e) => setTitle(e.target.value)}
             value={title}
            required/>
          </label>
          {/* TODO find out why the fuck the buttos not working */}
          <Editor tinymceScriptSrc="../node_modules/tinymce/tinymce.min.js" 
            onInit={(evt, editor) => editorRef.current = editor}
            apiKey='qlg68c2xisozytp1ar0uwnqkruqovu2awgckfdyh6emv9tf7'
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist", "autolink", "link", "image", "lists", "charmap", "preview", "anchor", "pagebreak",
                "searchreplace", "wordcount", "visualblocks", "visualchars", "code", "fullscreen", "insertdatetime", "media", "nonbreaking",
                "table", "emoticons", "template", "help"
              ],
              
              toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media | forecolor backcolor emoticons',
              
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
          />
          <button className="btn mt-5">submit</button>
        </form>
      </div>

    </ div>
  );
}
