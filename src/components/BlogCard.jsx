import { Link } from 'react-router-dom';
import { MdDeleteForever } from "react-icons/md";
import { deleteBlog } from '../utils';

const BlogCard = ({ blog, deletable, handleDelete }) => {
    const { cover_image, published_at, title, description, id } = blog;


    return (

        <div className="flex relative">
            <Link to={`/blog/${id}`} className="relative max-w-sm mx-auto group hover:scale-105 hover:no-underline focus:no-underline border-2 border-primary hover:border-secondary transition rounded-lg">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-base-200" src={cover_image} alt={title} />
                <div className="space-y-4 p-4">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link >
            {deletable &&
                <div className='absolute -top-5 -right-5 '>
                    <MdDeleteForever onClick={() => handleDelete(id)} size={40} className="rounded-full text-secondary hover:text-accent bg-primary hover:bg-secondary cursor-pointer p-2 overflow-hidden" />
                </div>
            }
        </div>

    );
};

export default BlogCard;