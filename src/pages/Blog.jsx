
import BlogList from "../components/BlogList";
import {useCollection} from "../hooks/useCollection"
import TransitionsIndiv from '../components/transitions/TransitionIndiv'


export default function Blog() {
 const {documents: data} = useCollection('BlogPosts')
   
  return (
   <TransitionsIndiv className="flex align-middle justify-center min-h-screen text-white">

         <div className="px-16 py-6 md:col-span-2 ">
            <h1 className="text-center font-bold">News & Updates</h1>
               {data && <BlogList BlogDATA={data} /> } 
         </div>

   </TransitionsIndiv>    
  )
}
