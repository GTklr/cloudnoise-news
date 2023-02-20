
import { useParams } from 'react-router-dom'
import {useCollection2} from "../hooks/useCollection2"

export default function BlogPost() {
    const params = useParams()
    const { documents: data } = useCollection2("BlogPosts", params.title);

    return (
        <div className="max-w-2xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50">
            <div className="p-10 bg-green-500 mx-auto">
                {data.map((post) => (
                    <div key={post.id} className="bg-primary rounded-lg">
                    <div className="overflow-hidden">
                        <img src={post.featureIMG} className="max-w-md" alt="" />
                    </div>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{__html: post.content}} />
                    <p>{post.date}</p>
                    {/* access other properties here */}
                    </div>
                ))}
            </div>
        </div>
      );
}
