const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: Sequelize.STRING
});


module.exports = User;

// let arr2=["a",1,["b",2]];
// //["a",1,"b",2]
// function arrFlat(arr){
//   let stack=[];
//   for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//       stack.push(arr[i][j]);
//     }
//   }
//   return stack;
// };
// console.log(arrFlat(arr2));
// let a='hello';
// function greet(){
//     let b='world';
//     console.log(a+' '+b);
//     if(b=='world'){
//         let c='hello';
//         console.log(a+' '+b+' '+c);
//     }
//     console.log(a+' '+b+' '+c);
// }
// greet();



