import useFetch from "../customs/fetch";
import "./Blog.scss"
import { Link } from "react-router-dom/cjs/react-router-dom";

const Blog = () => {
    const { data: dataBlog, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts');
    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9);
    }

    return (
        <div className="blog-container">
            {isLoading === false && newData && newData.length > 0 && newData.map((item) => {
                return (
                    <div className="single-blog">
                        <div className="title">title: {item.title}</div>
                        <div className="content">content: {item.body}</div>
                        <button>
                            <Link to={`/blog/${item.id}`}>
                                View details
                            </Link>
                        </button>
                    </div>
                );
            })}
            {isLoading === true && <div>
                Loading data....
            </div>}
        </div>
    )
}

export default Blog;