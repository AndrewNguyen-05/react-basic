import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";
import useFetch from "../customs/fetch";
import './Blog.scss'

const DetailBlog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleBackData = () => {
        history.push('/blog');
    }
    const { data: dataBlogDetail, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);


    return (
        <div>
            <div onClick={handleBackData}>&lt;--Back</div>
            {dataBlogDetail &&
                <div className="blog-detail">
                    <div className="title">
                        Blog ID {id} --- {isLoading === true ? 'Loading...' : dataBlogDetail.title}
                    </div>
                    <div className="content">{dataBlogDetail.body}</div>
                </div>
            }
        </div>

    )
}

export default DetailBlog;