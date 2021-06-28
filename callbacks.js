import { posts, newPost, getPosts } from './promises.js'

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        console.log('Resolving with callbacks');
        callback();
    },2000)
}

createPost(newPost,getPosts);
//setTimeout() para simular comunicacion con servidor

