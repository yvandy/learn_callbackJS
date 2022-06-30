import { useState } from "react";

// const posts = [
//     { title: 'Post  One', body: 'This is post one' },
//     { title: 'Post  Two', body: 'This is post two' }
// ]

// function getPosts() {
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post, index) => {
//             output += `<li> ${post.title} </li>`
//         });
//         console.log("hi from get posts");
//         document.body.innerHTML = output;
//     }, 1000);
// }


// function createPost(post, callback) {
//     setTimeout(() => {
//         posts.push(post);
//         console.log("before callback ");
//         callback();
//         console.log("hi from create posts !!");
//     }, 5000);
// }
// createPost({ title: 'Post Three', body: ' This is post three' }, getPosts);

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject('Error : Something went wrong');
//             }
//         }, 2000)
//     })
// }

// createPost({ title: 'Post Three', body: ' This is post three' })
//     .then(getPosts)
//     .catch(err => console.log(err));




// ================================================

// Promise.all

// const promise1 = Promise.resolve('Hello World !');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Goodbye'));

// console.log(Promise.all([promise1, promise2, promise3]).then(values=>
//     console.log(values)));

// Async/await

// async function init(){
//     await createPost({ title: 'Post Three', body: ' This is post three' })
//     getPosts();
// }

// init()

const Fun = () => {
    const [count, setCount] = useState(0);

    const handleClick = (e) => {
        console.log(e.target)
        setCount(count + 1);
    }
    return (<>
        <div>
            Counting is : {count}
            <button onClick={((e) => handleClick(e))}> Click Me to Increment</button>
        </div>
    </>)
}

export default Fun;