import useFetch from "../customs/fetch";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddNewBlog from "./AddNewBlog";
import "./Blog.scss";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";

const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    data: dataBlog,
    isLoading,
    isError,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  useEffect(() => {
    if (dataBlog && dataBlog.length > 0) {
      let newDataSimple = dataBlog.slice(0, 9);
      setNewData(newDataSimple);
    }
  }, [dataBlog]);

  const handleAddNew = (blog) => {
    let data = newData;
    data.unshift(blog);

    setShow(false);
    setNewData(data);
    console.log(">>>check handle and new data blog: ", newData);
  };

  const handleDeleteBlog = (id) => {
    let data = newData;
    data = data.filter((item) => item.id !== id);
    setNewData(data);
    console.log(">>> check data:", data);
  };

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
          <AddNewBlog handleAddNew={handleAddNew} />
        </Modal.Body>
      </Modal>
      <div className="blog-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map((item) => {
            return (
              <div className="single-blog">
                <div className="title">title: {item.title}</div>
                <div className="content">content: {item.body}</div>
                <div className="buttons-blog">
                  <button className="btn-view-detail">
                    <Link to={`/blog/${item.id}`}>View details</Link>
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(item.id)}
                    className="btn-delete-blog"
                  >
                    Delete blog
                  </button>
                </div>
              </div>
            );
          })}

        {isLoading === true && (
          <div style={{ "font-size": "18px" }}>Loading data....</div>
        )}
      </div>
    </div>
  );
};

export default Blog;
