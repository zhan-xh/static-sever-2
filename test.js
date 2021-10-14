const fs = require('fs')

// 读取数据库的数据
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
// JSON.parse()会把字符串变成对应的数组对象
console.log( usersArray instanceof Array)//判断是否是数组 是则返回true
console.log(usersArray)


//写数据库
const user3 = {"id":3,"name":'tom',"password":'yyy'}
usersArray.push(user3) //只是存到本地数组 还需要转变为string然后存到数据库
const string = JSON.stringify(usersArray)
fs.writeFileSync("./db/users.json",string)