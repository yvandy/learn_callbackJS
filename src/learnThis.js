
var o ={prop:37};
function independent(){
    return this.prop;
}
o.f = independent;
console.log(o.f());


export default o;
// ==============================

// var o = {
//     prop: 37,
//     f: function () {
//         return this.prop;
//     }
// }

// let refer = o.f;
// console.log(refer())