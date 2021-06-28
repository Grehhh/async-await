import{ newPost, getPosts, createPost } from './promises.js';

async function init() {
    console.log('Resolving with async-await');
    await createPost(newPost);
    getPosts();
}

async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

init();
fetchUsers();