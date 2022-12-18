import { useSelector } from "react-redux";
import { selectAllPosts } from "../feautures/posts/postsSlice";
import { PostAuthor } from "./PostAuthor";

export const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    return (
        <section>
            <h2>Posts</h2>
            {posts.map(post => (<article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <p><PostAuthor userId={post.userId}/></p>
            </article>))}
        </section>
    );
}