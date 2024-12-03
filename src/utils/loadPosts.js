export const loadPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsData = await postsResponse.json();

    const photosAndPosts = postsData.map((post, index) => {
        return { ...post, cover: `https://picsum.photos/600/600?random=${index}` };
    })
    
    return photosAndPosts;
}