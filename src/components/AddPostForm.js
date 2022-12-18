import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../feautures/posts/postsSlice";
import { selectAllUsers } from "../feautures/users/usersSlice";

export const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }

    const onContentChanged = (e) => {
        setContent(e.target.value);
    }

    const onAuthorChanged = (e) => {
        setUserId(e.target.value);
    }

    const onSave = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            );

            setTitle('');
            setContent('');
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

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
                <label htmlFor="postAuthor">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button
                    type="button"
                    onClick={onSave}
                    disabled={!canSave}>Save Post</button>
            </form>
        </section>
    );
}