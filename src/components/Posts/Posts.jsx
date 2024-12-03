import { PostCard } from "../PostCArd/PostCard";
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