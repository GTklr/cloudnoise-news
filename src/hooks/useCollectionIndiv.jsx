import {useState, useEffect} from 'react'
import {db} from '../firebase/config'
import { useAuthContext } from "../hooks/useAuthContext";

//firebase imports
import {collection, onSnapshot, query, where, getDocs, doc, getDoc} from 'firebase/firestore'

export const useCollectionIndiv = (c, uid) => {
   const [documents, setDocuments] = useState(null)
   const {user} = useAuthContext()

   useEffect(() => {
      if (user?.uid) { // Execute the query only if user.uid is available
       const q = query(
         collection(db, c),
         where('uid', '==', user.uid)
       );
       const unsub = onSnapshot(q, (snapshot) => {
         let results = [];
         snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
         });
         setDocuments(results);
       });
       return () => unsub();
      } else {
       setDocuments(null); // Set documents to null when user is not available
      }
    }, [c, user]);

   return {documents}
}

