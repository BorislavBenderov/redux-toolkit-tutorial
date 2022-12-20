import { useSelector } from "react-redux";
import { selectPostIds, getPostsStatus, getPostsError } from "../posts/postsSlice";
import { PostsExcerpt } from "./PostsExcerpt";


export const PostsList = () => {

    const orederedPostIds = useSelector(selectPostIds);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded') {
        content = orederedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    );
}