var o = { prop: 37 };
function independent() {
    return this.prop;
}
o.f = independent;
console.log(o.f());


export default o;

function map(f, a) {
    let result = [];
    let i;
    for (i = 0; i != a.lenght; i++) {
        result[i] = f(a[i]);        
    }
    return result;
}

const f = function(x){
    return x*x*x;
}

let numbers = [0,1,2,5,10];
let cube = map(f,numbers);
console.log(cube);





// const myCallBack = function (goodFun, badFun, character) {
//     let timmy = Math.floor(Math.random() * 1000);
//     if (character.isGood) {
//         setTimeout(goodFun, timmy, character.name);
//     } else {
//         setTimeout(badFun, timmy, character.name);
//     }
// }

// let goodFun = function (name) {
//     console.log("Depending on the season,", name, "is a good girl")
// }

// let badFun = function (name) {
//     console.log("Depending on the season,", name, "is a bad gyu")
// }
// let app = function () {
//     const innocent = { name: "Vandana", isGood: true };
//     const badGuy = { name: " Yogesh", isGood: false };
//     myCallBack(goodFun, badFun, innocent);
//     myCallBack(goodFun, badFun, badGuy);
// }()