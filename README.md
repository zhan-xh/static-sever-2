# static-sever-2
动态服务器
动态服务器与静态服务器的区别是是否访问了数据库

## 实现的功能  
### 1. 用户注册 
用户提交用户名和密码
user.json 就新增了一行数据
思路：  
前端 写一个form表单，让用户填写name和password
前端监听submit事件，前端发送POST请求，数据位于请求体，后端接受POST请求；后端获取请求体中的name和password；后端再存储数据
### 2. 实现用户登录
首页home.html,用户登录后可以看到自己的用户名   
登录页 sign_in.html 供提交用户名和密码  
若用户名和密码匹配，则自动跳转首页 并且标记用户(使用cookie)已登录
### 3.显示用户名  
home.html渲染前获取user信息   
如果user存在，将{{user.name}}替换成user.name  
如果不存在则显示登录按钮

### 4.使用session绘画保存用户信息 防止用户篡改userid
 把信息隐藏在服务器，把用户信息放在服务器的session文件里，再给信息一个随机id，把随机id发送给浏览器，后端下次读取id时，通过session[id]获取用户信息  
 因为每登陆一次，会生成新的sessionid 防止来信息泄露
 
 ## 新知识
 1. 序列化 JSON.stringfy() 把一个对象变为string
 2. 反序列胡 JSON.parse() 把string变为对应的对象
 3. cookie 是服务器下发给浏览器的一段字符串，浏览器必须保存下这个cookie，之后发起的相同的二级域名请求时，浏览器必须附上cookie 
 使用setHeader发cookie 具体实现查看mdn文档