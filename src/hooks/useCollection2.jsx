import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where, getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import {db} from '../firebase/config'

export function useCollection2(collectionName, title) {
  const dbRef = collection(db, "BlogPosts");

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        let q;
        if (title != null) {
          q = query(dbRef, where("title", "==", title));
        } else {
          q = collection(db, collectionName);
        }

        const unsub = onSnapshot(q, (snapshot) => {
               let results = []
               snapshot.docs.forEach(doc => {
                  results.push({id: doc.id, ...doc.data()})
      
               })
               setDocuments(results)
               })

    return () => unsub()
      } catch (err) {
        console.error("Error getting documents: ", err);
      }
    };
  
    fetchDocuments();
  
  }, [collectionName, title]);

  return { documents };
}
