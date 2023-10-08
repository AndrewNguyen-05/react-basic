import { useParams } from "react-router-dom/cjs/react-router-dom";

const Detailblog = () => {
    let { id } = useParams();
    return (
        <div>Hello detail blog with id = {id}</div>
    )
}

export default Detailblog;