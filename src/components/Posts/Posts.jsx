import { PostCard } from "../PostCard/PostCard.jsx";
import './Posts.css';
import P from 'prop-types'

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

Posts.propTypes = {
  allposts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
