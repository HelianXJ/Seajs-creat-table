# Seajs_creat_table
利用Sea.js模块化编程思想实现动态创建表格

### 需求 

- 样式用less实现
- js用jquery 和 seajs 实现。
- seajs 需要保护两个模块: builder.js、update.js、main.js 文件
- builder.js 用于生成表格模块
- update.js 用于更新输入内容操作模块
- main.js 主逻辑模块

### 页面显示接口
/index.html

### 分句接口
/submit
> 参数1： submit='yes'
> 参数2： name=项目名称
> 参数3:  content=要分句的内容

### 返回
- 成功：{"message":"success","name":"xxx","content":["xxx","sdsdf"]}
- 失败: {"message":"failed","error":"内容为空"}


模块化开发之sea.js实现原理总结
2014-07-24 00:21
seajs官网说：seajs是一个模块加载器，所以学习它并不难。

在我的理解就是：本来我们是需要手动创建 script标签 引入 js文件的，但用seajs后，它就自动帮我们完成这些工作。

 这里只说实现原理，具体使用请看seajs官网：http://seajs.org/docs/

下面总结一下：

1. sea.js 是怎样解决 模块加载(这里说的模块其实就是js文件加载)，

2. sea.js 是怎样解决 模块依赖

3. sea.js 是怎样解决 命名冲突

##1.模块加载

　　其实，原理很简单，和手动引入js文件是一样的。

　　就是当调用有加载功能的函数 如 seajs.use 、 require 、require.async 时，

　　其内部代码会创建一个script标签，把src设置成你要引入的js文件，然后append到DOM文档中进行加载，

　　当加载完毕后，再把这个script标签移除掉，所以当我们审查元素时看不到有那个script标签，

　　但因为文件已经引入了，即使把这个script移除也不会影响代码使用.

　　我们可以用360卫士限制网速的功能，把网速降低，然后引入jq,是可以看到它就是这样处理的

　　sea.js,原理,模块化,开发

加载完毕后，sea.js会把这个script标签移除：

总的一句 ： 就是利用 script 标签进行模块加载

##2.模块依赖

　　上面的问题清楚了，其实这个依赖也很简单啦，也就是 加载 顺序的问题。

　　例如 a.js 依赖于 b.js， 那在sea.js内部代码中，就先加载b.js然后再加载a.js，这样就可以解决依赖问题了。

##3.命名冲突

　　解决了上面的两个问题，就剩下依赖接口的问题了， 就是模块的依赖是搞定了，但是sea.js是用define( fn )函数来定义模块的，里面的变量都是局部的，

　　得给外面一个接口调用才行啊。

　　so,  exports对象就出场啦， 当你使用sea.js定义一个模块的时候，你可以把你的 对外函数接口 都放在exports对象上，　　如： 

 define(function (require, exports, module){

     var arr = [12,3,4,5,56];

     var method = function (){ 
     
         //code...
      }

     exports.arr = arr;   //对外接口

     exports.method = method;  //对外接口

 })

当别一个文件要依赖此文件时， 调用 require( url )时，返回值就是这个exports对象，所以就解决了接口的问题。

同时也很好的解决了命名冲突的问题，就算几个同事都用一样的名字，也不会有问题。

因为这里返回的exports就相当于一个命名空间了。
