import { useEffect, useState } from "react";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import {db} from '../firebase/config'

export function useCollection(collectionName, id) {
  const { id: routeId } = useParams(); // retrieve ID from URL
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        let q;
        if (id || routeId) {
          q = query(collection(db, collectionName), where("id", "==", id || routeId));
          console.log(q);
        } else {
          q = collection(db, collectionName);
        }
        
        const unsub = onSnapshot(ref, (snapshot) => {
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
  
  }, [collectionName, id, routeId]);

  return { documents };
}