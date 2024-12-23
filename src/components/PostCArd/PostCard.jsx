import P from 'prop-types';
import './PostCArd.css';

export const PostCard = ({ post }) => (
  <div key={post.id} className="post">
    <img src={post.cover} alt={post.title} />
    <div className="post-content">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  post: P.shape({
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired,
    id: P.number.isRequired,
  }).isRequired,
};
