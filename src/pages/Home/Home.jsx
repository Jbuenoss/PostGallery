import { useEffect, useState } from "react";
import './Home.css';
import { Posts } from "../../components/Posts/Posts";
import { loadPosts } from "../../utils/loadPosts";

function Home() {
    const [allposts, setAllPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postPerPage, setPostPerPage] = useState(5);
    const [noMorePosts, setNoMorePosts] = useState(false);

    const loadPostsData = async () => {
        const data = await loadPosts();
        setAllPosts(data);
        setPosts(data.slice(page, page+postPerPage));
    }

    const loadMorePosts = () => {
        const nextPage = page + postPerPage;
        setPage(nextPage);
        setPosts(p => [...p, ...allposts.slice(nextPage, nextPage+postPerPage)]);

        if((nextPage + postPerPage) >= allposts.length){
            setNoMorePosts(true)
        }
    }

    useEffect(() => {
        loadPostsData();
    }, []);

    return (
        <div>
            <section className="container">
                <Posts allposts={posts}/>
                <button className="button-load-posts"
                    onClick={loadMorePosts}
                    disabled={noMorePosts}
                >Load more posts</button>
            </section>
        </div>
    );
}

export default Home