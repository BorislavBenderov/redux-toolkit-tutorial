import { useDispatch } from "react-redux";
import { reactionAdded } from "../posts/postsSlice";

const reactionEmoji = {
    thumbsUp: 'ok',
    wow: 'wow',
    heart: 'heart',
    rocket: 'rocket',
    coffee: 'coffee'
}

export const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type='button'
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>{reactionButtons}</div>
    );
}