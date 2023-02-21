import { useParams } from 'react-router-dom'
import {useCollection2} from "../hooks/useCollection2"
import { useAuthContext } from "../hooks/useAuthContext";

export default function BlogPost() {
    const params = useParams()
    const { documents: data } = useCollection2("BlogPosts", params.title);
    const {user} = useAuthContext()
    

    return (
        <div className="max-w-3xl py-16 mx-auto text-gray-200">
            

            <div className="p-10 bg-fourth mx-auto rounded-lg">
                {data.map((post) => (
                    
                    <div key={post.id} className="w-full mx-auto space-y-4 text-center">
                            <h1 className="font-bold leading-tight ">{post.title}</h1>
                            <p className="text-sm text-gray-500">by {post.author} on
                                <time datetime={new Date(post.date).toISOString()}> {new Date(post.date).toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })} </time>
                            </p>
                        <div className="overflow-hidden w-full">
                            <img src={post.featureIMG} className="rounded-lg w-full h-96 object-cover"/>
                        </div>

                        <div className="text-gray-200">
                            <div dangerouslySetInnerHTML={{__html: post.content}} />
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
      );
}
