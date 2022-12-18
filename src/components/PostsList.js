import { useSelector } from "react-redux";
import { selectAllPosts } from "../feautures/posts/postsSlice";
import { PostAuthor } from "./PostAuthor";
import { ReactionButtons } from "./ReactionButtons";
import { TimeAgo } from "./TimeAgo";

export const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
    return (
        <section>
            <h2>Posts</h2>
            {orderedPosts.map(post => (<article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </p>
                <ReactionButtons post={post}/>
            </article>))}
        </section>
    );
}