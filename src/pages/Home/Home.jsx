import { useEffect, useState } from "react";
import './Home.css';

function Home() {
    const [allposts, setAllPosts] = useState([]);

    const loadPosts = async () => {
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await postsResponse.json();

        const photosAndPosts = postsData.map((post, index) => {
            return { ...post, cover: `https://picsum.photos/600/600?random=${index}` };
        })
        setAllPosts(photosAndPosts);
    }

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div>
            <section className="container">
                <div className="posts-container">
                    {allposts.map((post) => (
                        <div key={post.id} className="post">
                            <img src={post.cover} alt={post.title} />
                            <div className="post-content">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>
        </div>
    );
}

export default Home