import useFetch from "../customs/fetch";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewBlog from "./AddNewBlog";
import "./Blog.scss"
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

const Blog = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { data: dataBlog, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/posts');
    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9);
    }

    let history = useHistory();

    const handleAddNew = () => {
        return history.push('/add-new-blog');
    }

    return (
        <div className="blog">
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog />
                </Modal.Body>
            </Modal>
            <div className="blog-container">
                {isLoading === false && newData && newData.length > 0 && newData.map((item) => {
                    return (
                        <div className="single-blog">
                            <div className="title">title: {item.title}</div>
                            <div className="content">content: {item.body}</div>
                            <button className="btn-view-detail">
                                <Link to={`/blog/${item.id}`}>
                                    View details
                                </Link>
                            </button>
                        </div>
                    );
                })}

                {isLoading === true && <div style={{ 'font-size': '18px' }}>Loading data....</div>}
            </div>
        </div>

    )
}

export default Blog;