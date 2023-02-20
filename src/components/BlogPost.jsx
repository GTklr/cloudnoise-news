
import { useParams } from 'react-router-dom'
import {useCollection2} from "../hooks/useCollection2"

export default function BlogPost() {
    const params = useParams()
    const { documents: data } = useCollection2("BlogPosts", params.title);
    

    return (
        <div className="max-w-3xl py-16 mx-auto dark:text-gray-50">
            

            <div className="p-10 bg-fourth mx-auto rounded-lg">
                {data.map((post) => (
                    
                    <div key={post.id} className="w-full mx-auto space-y-4 text-center">
                            <h1 className="text-4xl font-bold leading-tight md:text-5xl">{post.title}</h1>
                            <p className="text-sm dark:text-gray-400">by AUTHOR
                                <time datetime={new Date(post.date).toISOString()}> {new Date(post.date).toLocaleString('en-US', { dateStyle: 'full' })} </time>
                            </p>
                        <div className="overflow-hidden w-full">
                            <img src={post.featureIMG} className="rounded-lg w-full h-96 object-cover"/>
                        </div>

                        <div className="dark:text-gray-100">
                            <div dangerouslySetInnerHTML={{__html: post.content}} />
                        </div>
                    
                    </div>
                ))}
            </div>
        </div>
      );
}
