import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../feautures/posts/postsSlice";

export const AddPostForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }

    const onContentChanged = (e) => {
        setContent(e.target.value);
    }

    const onSave = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content)
            );

            setTitle('');
            setContent('');
        }
    }

    return (
        <section>
            <h2>Add Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSave}>Save Post</button>
            </form>
        </section>
    );
}