

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
   
      <div className="bg-green-600">
        <div className="grid grid-cols-3">
        {sortedLinks.map(sortedLinks => (
            <div key={sortedLinks.id} className="card">
                <div>
                  <h3 className="text-2xl">{sortedLinks.title}</h3>
                  <div dangerouslySetInnerHTML={{__html: sortedLinks.content}} />
                </div>    
            </div>
        ))}
        </div>
      </div>
  )
}