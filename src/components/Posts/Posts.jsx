import { PostCard } from "../PostCard/PostCard.jsx";
import './Posts.css';

// Initialize allPosts as an empty array to avoid map on undefined
export const Posts = ({ allposts = [] }) => (
    <div className="posts-container">
        {allposts.map((post) => (
            <PostCard
                key={post.id}
                post={post} />
        ))}
    </div>
);