import './Blog.scss';
import { useState } from 'react';

const AddNewBlog = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmitForm = () => {
        if (!title) alert('Empty title');
        if (!content) alert('Empty content');
    }

    return (
        <div className="add-new-container">
            <div className="text-add-new">---Add new blog---</div>
            <div className='input-data'>
                <label className="title">Title: </label>
                <input value={title} onChange={(event) => { setTitle(event.target.value) }} type="text" />
            </div>
            <div className='input-data'>
                <label className="content">Content: </label>
                <textarea value={content} onChange={(event) => { setContent(event.target.value) }} cols={40} rows={5} type="text" />
            </div>
            <button className='btn-add-new' onClick={handleSubmitForm}>Submit</button>
        </div>
    )
}

export default AddNewBlog;