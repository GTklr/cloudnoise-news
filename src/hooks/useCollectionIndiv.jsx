import {useState, useEffect} from 'react'
import {db} from '../firebase/config'
import { useAuthContext } from "../hooks/useAuthContext";

//firebase imports
import {collection, onSnapshot, query, where, getDocs, doc, getDoc} from 'firebase/firestore'

export const useCollectionIndiv = (c, uid) => {
   const [documents, setDocuments] = useState(null)
   const {user} = useAuthContext()

   useEffect(() => {
      let ref = collection(db, c)
// TODO GET CURRENT USER UID HERE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>v
      const q = query(collection(db, "LinkTree"), where("uid", "==", "Y7u8izJvlsc3p2OiPBB5NcwxPDm1"));

      const unsub = onSnapshot(q, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
               results.push({id: doc.id, ...doc.data()})
   
            })
            setDocuments(results)
            })

      return () => unsub()

   }, [c, uid])

   return {documents}
}

