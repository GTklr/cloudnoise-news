
import { useState } from "react";
import Iframe from 'react-iframe'
import {Spotify} from 'react-spotify-embed'
import {Accordion, AccordionHeader, AccordionBody,} from "@material-tailwind/react";

//firebase
import {db} from '../firebase/config'
import {doc, deleteDoc} from 'firebase/firestore'

export default function CreateLinkList( {LinkDATA, urls}) {

const sortedLinks = (
   LinkDATA.sort(function compare (a,b){
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      var sortedLinks = dateB - dateA
      return sortedLinks
   }))

   if(sortedLinks.length === 0) {

      return <div className="error">No Links to load</div>
    }

    const handleDelete = async (id) => {
      const docRef = doc(db, "LinkTree", id)
      await deleteDoc(docRef)

    }

// Accordion functions-----------------------
    const [open, setOpen] = useState(1);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  return (
   <div>
     {sortedLinks.map(sortedLinks => (
            <div key={sortedLinks.id} className="text-white mt-5">
               <div className="border border-gray-900 rounded-lg overflow-hidden">
               <Accordion open={open === sortedLinks.id} className="">
                    <AccordionHeader onClick={() => handleOpen(sortedLinks.id)} className="px-5 bg-primary border-none">
                    {sortedLinks.title}
                    </AccordionHeader>
                    <AccordionBody className="bg-fourth p-5 border-none justify-center align-middle">
                        {sortedLinks.embedd.includes('spotify') && <Spotify wide link={sortedLinks.embedd}/>}
                        {sortedLinks.embedd.includes('iframe') && <Iframe url={sortedLinks.embedd} width="100%" height="120" />}
                        {sortedLinks.normalLink&& <a className="btn flex" href={sortedLinks.normalLink} target="_blank"> VISIT SITE </a>}
                    </AccordionBody>
                </Accordion>
               </div>

               <div className="pt-3">
                  <button className="btn btn-sm purplebtn btn-success" onClick={() => handleDelete(sortedLinks.id)}>Delete</button>
               </div>
            </div>
        ))}
   </div>
      
  )
}