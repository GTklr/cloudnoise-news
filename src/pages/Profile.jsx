import {useState} from 'react'
import { useAuthContext } from "../hooks/useAuthContext";
import { getAuth, updateProfile } from 'firebase/auth'
import {collection, addDoc, doc} from 'firebase/firestore'
import {useCollectionIndiv} from "../hooks/useCollectionIndiv"
import CreateLinkList from '../components/CreateLinkList';
import {db} from '../firebase/config'


import { useParams } from 'react-router-dom'
import TransitionsIndiv from '../components/transitions/TransitionIndiv';

export default function Profile() {
    
    const [displayName, setDisplayName] = useState('')
    const {user} = useAuthContext()
    const {documents: data} = useCollectionIndiv("LinkTree")

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
            updateProfile(auth.currentUser, {displayName: displayName})
                .then(() => {

            console.log("profile updated")})
            .catch((error) => {
            });
                            }

    const [title, setTitle] = useState('')
    const [embedd, setEmbedd] = useState('')
    const [normalLink, setNormalLink] = useState('')
    
    var m,
        urls = [], 
        str = embedd,
        rex = /(?<=src=").*?(?=[\"])/g;
    
    function embeddLinkExtract() {
        
        if (str.includes('spotify')) {
            urls = ( str )
        } else {
            while ( m = rex.exec( str ) ) {
                urls = ( m[0] );
            }}}
    
        const newMiliTime = Date.now()

    const handleSubmitLink = async (e) => {
        e.preventDefault()
    
        embeddLinkExtract(embedd)
    
        await addDoc(collection(db, "LinkTree"), {
            title: title,
            embedd: urls,
            normalLink: normalLink,
            date: newMiliTime,
            uid: user.uid,
        })
    
        setTitle('')
        setEmbedd('')
        setNormalLink('')
        }
    
  return (
    <TransitionsIndiv>
    <div className='text-white text-center lg:px-20'>
        <div className="max-w-lg py-16 mx-auto dark:text-gray-50">
            <div className="p-10 shadow-lg mx-auto rounded-lg">
            <h1 className="font-bold leading-tight">Update Profile</h1>
                <div className="">
                <form onSubmit={handleSubmit} className="py-5">
                    <label className='block'>
                        <span> Username: {user?.displayName}</span>
                        <input className="formField" type="text" placeholder="Update Username" onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                        />
                    </label>
                    <button className="btn">update</button>
                </form>
                </div>
            </div>

            <div className="p-10 mt-5 shadow-lg mx-auto rounded-lg">
                <h2 className="font-bold leading-tight">Create Links</h2>
                <form onSubmit={handleSubmitLink} className="d-flex flex-column">
                    <label>
                        <input type="text" className="formField" placeholder="Link Title" onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required/>
                    </label>

                    <label>
                        <textarea className="formField"  placeholder="HTML Embed link" onChange={(e) => setEmbedd(e.target.value)} value={embedd}/>
                    </label>

                    <label>
                        <textarea className="formField" placeholder="Normal link" onChange={(e) => setNormalLink(e.target.value)} value={normalLink} />
                    </label>    

                    <button className="btn purplebtn btn-success">Add to LinkTree</button>
                </form>
            </div>

            <div className="p-10 mt-5 shadow-lg mx-auto rounded-lg">
                <h2 className="font-bold leading-tight">Current Links</h2>
            {data && <CreateLinkList LinkDATA={data} urls={urls}/> }
         </div>
        </div>
    </div>
    </TransitionsIndiv>
  )
}
