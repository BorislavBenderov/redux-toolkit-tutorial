import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllPosts, selectPostById } from "../posts/postsSlice";
import { ReactionButtons } from './ReactionButtons';
import { PostAuthor } from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";

export const SinglePostPage = () => {
    const { postId } = useParams();
    const posts = useSelector(selectAllPosts);
    const post = posts.find(post => post.id === Number(postId));

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