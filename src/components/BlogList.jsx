import { Link } from 'react-router-dom';

export default function BlogList( {BlogDATA}) {

   if(BlogDATA.length === 0) {

      return <div className="error">No links to load...</div>
    }


    const sortedLinks = (
      BlogDATA.sort(function compare (a,b){
         var dateA = new Date(a.date);
         var dateB = new Date(b.date);
         var sortedLinks = dateB - dateA
         return sortedLinks
      }))

  return (
   
      <div className="">
        <div className="grid mt-8 grid lg:grid-cols-4 gap-10">
        {sortedLinks.map(sortedLinks => (
            <div key={sortedLinks.id} className="card">
              <div>
                <img src={sortedLinks.featureIMG} />
                {/* <div dangerouslySetInnerHTML={{__html: sortedLinks.content}} /> */}
              </div>  
              <div className="m-4">
                <span className="font-bold">{sortedLinks.title}</span>
                <span className="block text-gray-500 text-sm">AUTHOR VARIABLE</span>
                <span className="block text-secondary text-sm"><Link to={`/blogpost/${sortedLinks.title}`}> Read more...</Link></span>
                

              </div>  
            </div>
        ))}
        </div>
      </div>
  )
}
