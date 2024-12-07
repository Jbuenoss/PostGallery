import { PostCard } from "../PostCard/PostCard.jsx";
import './Posts.css';

export const Posts = ({ allposts }) => (
    <div className="posts-container">
        {allposts.map((post) => (
            <PostCard
                key={post.id}
                post={post} />
        ))}
    </div>
);