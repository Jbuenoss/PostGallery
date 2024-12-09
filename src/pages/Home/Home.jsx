import { useEffect, useState } from "react";
import './Home.css';
//components
import { Posts } from "../../components/Posts/Posts";
import { loadPosts } from "../../utils/loadPosts";
import { TextInput } from "../../components/TextInput/TextInput";
import { Button } from "../../components/Button/Button";

function Home() {
    const [allposts, setAllPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [postPerPage] = useState(5);
    const [noMorePosts, setNoMorePosts] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);

    const loadPostsData = async () => {
        const data = await loadPosts();
        setAllPosts(data);
        setPosts(data.slice(page, page + postPerPage));
    }

    const loadMorePosts = () => {
        const nextPage = page + postPerPage;
        setPage(nextPage);
        setPosts(p => [...p, ...allposts.slice(nextPage, nextPage + postPerPage)]);

        if ((nextPage + postPerPage) >= allposts.length) {
            setNoMorePosts(true);
        }
    }

    const handleSearch = () => {
        if (searchValue) {
            const postsFiltered = allposts.filter(post => {
                return post.title.toLowerCase().includes(searchValue.toLowerCase());
            });
            setFilteredPosts(postsFiltered);
        } else {
            setFilteredPosts(posts);
        }
    }

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        handleSearch();
    }, [searchValue, posts]);

    useEffect(() => {
        loadPostsData();
    }, []);

    return (
        <div>
            <section className="container">

                <div className="search-container">
                    <TextInput
                        handleChange={handleChange}
                        searchValue={searchValue} />
                </div>


                {filteredPosts.length ? (
                    <Posts allposts={filteredPosts} />
                ) : (
                    <div>
                        Posts not found
                    </div>
                )}


                {!searchValue && (
                    <Button text="Load more posts"
                        onClick={loadMorePosts}
                        disabled={noMorePosts} />
                )}
            </section>
        </div>
    );
}

export default Home
