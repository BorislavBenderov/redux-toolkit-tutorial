import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { selectAllUsers } from "../users/usersSlice";
import { selectAllPosts, updatePost } from "./postsSlice";

export const EditPostForm = () => {
    const { postId } = useParams();
    const navigate = useNavigate();

    const posts = useSelector(selectAllPosts);
    const post = posts.find(post => post.id === Number(postId));
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState(post?.title);
    const [content, setContent] = useState(post?.body);
    const [userId, setUserId] = useState(post?.userId);
    const [requestStatus, setRequestStatus] = useState('idle');

    const dispatch = useDispatch();

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    const onTitleChanged = (e) => {
        setTitle(e.target.value);
    }

    const onContentChanged = (e) => {
        setContent(e.target.value);
    }

    const onAuthorChanged = (e) => {
        setUserId(e.target.value);
    }

    const canSave = [title, content, userId].every(Boolean) && requestStatus === 'idle';

    const onSave = () => {
        if (canSave) {
            try {
                setRequestStatus('pending');
                dispatch(updatePost({ id: post.id, title, body: content, userId, reactions: post.reactions })).unwrap();

                setTitle('');
                setContent('');
                setUserId('');
                navigate(`/post/${postId}`);
            } catch (error) {
                console.log('Failder to save the post', error);
            } finally {
                setRequestStatus('idle');
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
                <select id="postAuthor" defaultValue={userId} onChange={onAuthorChanged}>
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