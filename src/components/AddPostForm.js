import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../feautures/posts/postsSlice";
import { selectAllUsers } from "../feautures/users/usersSlice";

export const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

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

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSave = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId })).unwrap();

                setTitle('');
                setContent('');
                setUserId('');
            } catch (error) {
                console.log('Failder to save the post', error);
            } finally {
                setAddRequestStatus('idle');
            }
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