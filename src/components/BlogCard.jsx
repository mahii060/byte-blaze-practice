import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { cover_image, published_at, title, description, id } = blog;
    return (
        <Link to={`/blog/${id}`} className="max-w-sm mx-auto p-4 group hover:scale-105 hover:no-underline focus:no-underline border-2 border-primary hover:border-secondary transition rounded-lg">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-base-200" src={cover_image} alt={title} />
            <div className=" space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs ">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default BlogCard;