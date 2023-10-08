import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom";

const Detailblog = () => {
    let { id } = useParams();
    let history = useHistory();
    const handleBackData = () => {
        history.push('/blog');
    }
    return (
        <div>
            <div onClick={handleBackData}>&lt;--Back</div>
            <div>Hello detail blog with id = {id}</div>
        </div>

    )
}

export default Detailblog;