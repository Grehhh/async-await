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

async function init() {
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