import { useLoaderData } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
    const blog = useLoaderData()
    const { cover_image, title, body_html, tags } = blog;
    return (
        <div className=" mx-auto p-4  border-2  transition rounded-lg">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-base-200" src={cover_image} alt={title} />
            <div className="flex flex-wrap py-6 gap-2">
                {
                    tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50">#{tag}</a>)
                }

            </div>
            <div className="space-y-2">
                <h3 className="text-2xl font-semibold hover:underline group-hover:underline group-focus:underline">{title}</h3>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>

            </div>
        </div>
    );
};

export default Content;