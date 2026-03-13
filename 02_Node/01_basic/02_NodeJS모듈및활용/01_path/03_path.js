const path = require('path');

const ext = path.extname(__filename);

//파일 확장자
console.log("확장자 : ", ext);

const parsePath = path.parse(__filename);

// console.log(`parsePath : ${parsePath}`);
console.log(`parsePath : `, parsePath);