import { newPost, getPosts, createPost } from './promises.js'; 

// createPost(newPost)
// .then(getPosts)
// .catch(err => console.log(err));

//PROMISE.ALL
const promise1 = Promise.resolve('hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000,'Goodbye')
});
const promise4 = createPost(newPost).then(getPosts).catch(err => console.log(err));
const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1,promise2,promise3,promise4,promise5])
.then((values) => {
    console.log('Resolving with then-catch');
    console.log(values);
})
//tardara en resolverse la duracion de la promesa que mas tarde en resolverse