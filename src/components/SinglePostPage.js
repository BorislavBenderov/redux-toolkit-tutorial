import { useSelector } from "react-redux";
import { selectPostById } from "../feautures/posts/postsSlice";
import { ReactionButtons } from './ReactionButtons';

export const SinglePostPage = () => {
    const post = useSelector((state) => selectPostById(state, postId));

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    );
}