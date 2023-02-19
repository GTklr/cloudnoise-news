
import BlogList from "../components/BlogList";
import {useCollection} from "../hooks/useCollection"


export default function Blog() {
 const {documents: data} = useCollection('BlogPosts')
   
  return (
   <div id="linkinbioBG" className="d-flex align-items-center">
      <div className="container w-75 LinkContainer ">


         <div className="LinkSection ">
         <h1 className="text-center">Blogs</h1>
            {data && <BlogList BlogDATA={data} /> } 
         </div>
      </div>
   </div>    
  )
}
