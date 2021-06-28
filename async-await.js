import{ header, posts, newPost, getPosts, createPost } from './promises.js';

async function init() {
    console.log('Resolving with async-await');
    document.body.innerHTML = header;
    await createPost(newPost);
    getPosts();
}

init();

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

fetchUsers();