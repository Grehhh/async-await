const posts = [
    {title:'Post one', body:'this is post one'},
    {title:'Post two', body:'this is post two'}
];

const newPost = {title:'Post three', body:'this is post three'}

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000)
}

function createPost(post) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        },2000);
    }); 
}

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
     console.log(values);
})
//tardara en resolverse la duracion de la promesa que mas tarde en resolverse


