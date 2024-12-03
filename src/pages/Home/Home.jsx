import { useEffect, useState } from "react";
import './Home.css';
import { Posts } from "../../components/Posts/Posts";
import { loadPosts } from "../../utils/loadPosts";

function Home() {
    const [allposts, setAllPosts] = useState([]);

    const loadPostsData = async () => {
        const data = await loadPosts();
        setAllPosts(data);
    }

    useEffect(() => {
        loadPostsData();
    }, []);

    return (
        <div>
            <section className="container">
                <Posts allposts={allposts}/>
            </section>
        </div>
    );
}

export default Home