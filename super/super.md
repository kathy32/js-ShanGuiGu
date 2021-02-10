# 目录

1. 准备
2. 数据类型
3. 相关问题
4. 数据 - 变量 - 内存
5. 相关问题
6. 对象
7. 函数
8. 回调函数
9. IIFE
10. 函数的 this
11. 关于语句分号问题
12. webstorm 设置
13. 复习
14. 函数的 prototype
15. 显示原型和隐式原型
16. 原型链
17. 探索 instanceof
18. 原型 - 面试题
19. 变量提升与函数提升
20. 执行上下文
21. 执行上下文栈
22. 面试题
23. 复习
24. 作用域与作用域链
25. 循环遍历加监听
26. 闭包理解
27. 常见的闭包
28. 闭包的作用
29. 闭包的生命周期
30. 闭包应用 - 自定义 js 模块
31. 内存溢出与内存泄漏
32. 面试题
33. 对象创建模式
34. 原型链继承
35. 组合继承
36. 复习
37. 闭包终极面试题
38. 进程与线程
39. 浏览器内核
40. 定时器引发的思考
41. js 是单线程执行的
42. 事件循环模型
43. H5 Web Workers 多线程
44. 复习





# 目录

1. 准备
2. 数据类型
3. 相关问题
4. 数据 - 变量 - 内存
5. 相关问题
6. 对象
7. 函数
8. 回调函数
9. IIFE
10. 函数的 this
11. 关于语句分号问题
12. webstorm 设置
13. 复习
14. 函数的 prototype
15. 显示原型和隐式原型
16. 原型链
17. 探索 instanceof
18. 原型 - 面试题
19. 变量提升与函数提升
20. 执行上下文
21. 执行上下文栈
22. 面试题
23. 复习
24. 作用域与作用域链
  - 理解：就是一块“地盘”，一个代码段所在的区域

  - 是静态的（相对于上下文对象），在编写代码时就确定了

  - 分类：

    - 全局作用域
    - 函数作用域
    - 没有块作用域（ES6有）

  - 作用：**隔离变量**，不同作用域下同名变量不会有冲突

    ```javascript
    // 作用域数：n+1，即3个
    var a = 10
    var b = 20
    
    function fn (x) {
      var a = 100
      var c = 300
      console.log('fn()', a, b, c, x)
    
      function bar (x) {
        var a = 1000
        var d = 400
        console.log('bar()', a, b, c, d, x)
      }
    
      bar(100)  // bar() 1000 20 300 400 100
      bar(200)  // bar() 1000 20 300 400 200
    }
    
    fn(10)  // fn() 100 20 300 10
    ```

  - 作用域与执行上下文的区别：

    - 区别1：
      - 全局作用域之外，每个函数都会创建自己的作用域，**作用域在函数定义时**就已经确定了，而不是在函数调用时
      - 全局执行上下文环境是在全局作用域确定之后，js 代码马上执行之前创建
      - 函数执行上下文环境是在**调用**函数时，函数体代码执行之前创建
    - 区别2：
      - 作用域是静态的，只要函数**定义**好了就一直存在，且不会再变化
      - 执行上下文是动态的，调用**函数**时创建，函数调用结束时就会自动**释放**
    - 联系
      - 执行上下文（对象）是从属于所在的作用域
      - 全局上下文环境 ==> 全局作用域
      - 函数上下文环境 ==> 对应的函数作用域

  - 经典面试题：

    ```javascript
    // 题目一
    var x = 10
    function fn () {
      console.log(x)
    }
    function show (f) {
      var x = 20
      f()
    }
    show(fn)	// 10,依据作用域的划分
    
    // 题目二
    var fn = function () {
      console.log(fn)
    }
    fn()  // 输出fn函数
    
    var obj = {
      fn2: function () {
        console.log(fn2)
      }
    }
    obj.fn2() // 报错，应该是 this.fn2
    ```


25. 循环遍历加监听
  - 案例：

  ```html
  <body>
    <button>测试1</button>
    <button>测试2</button>
    <button>测试3</button>

    <script>
      // 需求：点击某个按钮，提示“点击的是第 n 个按钮”
      // 错误方案
      var btns = document.getElementsByTagName('button')
      for (var i=0; i<btns.length; i++) {
        btns[i].onclick = function () {
          console.log(`点击的是第 ${i+1} 个按钮`) // 永远是 i = 2
        }
      }

      // 更改方案1：定义一个变量
      for (var i=0; i<btns.length; i++) {
        btns[i].index = i
        btns[i].onclick = function () {
          console.log(`点击的是第 ${this.index+1} 个按钮`) 
        }
      }

      // 更改方案2：立即执行函数
      for (var i=0; i<btns.length; i++) {
        (function (i) {
          btns[i].onclick = function () {
            console.log(`点击的是第 ${i+1} 个按钮`)
          }
        })(i)
      }
    </script>
  </body>
  ```


26. 闭包理解
  - 如何产生闭包：当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包
  - 闭包是什么？
    - 使用 chrome 调试器查看
    - 理解一：闭包是嵌套的内部函数（绝大部分人）
    - 理解二：包含被引用的变量（函数）的对象（极少数人）
    - 注意：闭包存在于嵌套的内部函数中
  - 产生闭包的条件：
    - 函数嵌套
    - 内部函数引用了外部函数的数据（变量/函数）

  ```javascript
  function fn1 () {
    var a = 2
    function fn2 () {// 执行函数定义就会产生闭包（不用调用内部函数）
      console.log(a)
    }
  }
  fn1()
  ```


27. 常见的闭包
  - 将函数作为另一个函数的**返回值**

    ```javascript
    function fn1 () {
      var a = 2 // 打点在此处时已经有 fn2 了，因为函数提升优先
      function fn2 () {
        a++
        console.log(a)
      }
      return fn2
    }
    var f = fn1()
    f() // 3
    f() // 4
    
    ```

  - 将函数作为**实参**传递给另一个函数调用

    ```javascript
    function showDelay (msg, timer) {
      setTimeout(function () {
        console.log(msg)
      }, timer)
    }
    showDelay('lokit', 3000)
    ```

  
28. 闭包的作用
  - 使用函数内部的变量在函数执行完后，仍然存活在内存中（延长了局部变量的生命周期）
  - 让函数外部可以间接操作（读写）到函数内部的数据（变量/函数）--> 如：闭包内部的```a++```
  - 问题：
    - 函数执行完后，函数内部声明的局部变量是否还存在？一般不存在，存在于闭包中的变量才可以存在
    - 在函数外部就直接访问函数内部的局部变量吗？不能，但是通过闭包让外部操作它

  ```javascript
  function fn1 () {
    var a = 2 
    function fn2 () {
      a++
      console.log(a)
    }
    return fn2
  }
  var f = fn1()	// 此处是关键，变量 f 引用了，所以函数 fn2 没有被回收
  f() // 3
  f() // 4
  ```


29. 闭包的生命周期
  - 产生：在嵌套内部函数定义执行完时就产生了（不是在调用）
  - 死亡：在嵌套的内部函数成为垃圾对象时

  ```javascript
  function fn1 () {
    // 此时闭包就已经产生了（函数提升，内部函数对象已经创建了）
    var a = 2 
    function fn2 () {
      a++
      console.log(a)
    }
    return fn2
  }
  var f = fn1()	
  f() 
  f = null	// 闭包死亡（包含闭包的函数对象成为垃圾对象，即没有引用了）
  ```


30. 闭包应用 - 自定义 js 模块
  - 具有特定功能的 js 文件
  - 将所有的数据和功能都封装在一个函数内部（私有的）
  - 只向外暴露一个包含 n 个方法的对象或函数
  - 模块的使用者，只需要通过模块暴露的对象调用方法来实现对应的功能

  ```javascript
  // 方式一：
  function myModule () {
    // 私有数据
    var msg = 'Lokit'
    // 操作数据的函数
    function doSomething () {
      console.log('doSomething()' + msg.toUpperCase())
    }
    function doOtherthing () {
      console.log('doOtherthing()' + msg.toLowerCase())
    }
    // 向外暴露对象（给外部使用的方法）
    return {
      doSomething: doSomething,
      doOtherthing: doOtherthing
    }
  }

  // 方式二：匿名函数自调用（推荐）
  (function (window) {
    var msg = 'Lokit'
    function doSomething () {
      console.log('doSomething()' + msg.toUpperCase())
    }
    function doOtherthing () {
      console.log('doOtherthing()' + msg.toLowerCase())
    }
    window.myModule2 = {
      doSomething: doSomething,
      doOtherthing: doOtherthing
    }
  })(window)
  ```

  ```html
  <script src='myModule.js'></script>
  <!-- 方式一 -->
  <script>
    var module = myModule()
    module.doSomething()
    module.doOtherthing()
  </script>

  <!-- 方式二 -->
  <script>
    myModule2.doSomething()
    myModule2.doOtherthing()
  </script>
  ```


31. 内存溢出与内存泄漏
  - 缺点：

    - 函数执行完后，函数内的**局部变量没有释放**，占用内存时间会变长
    - 容易造成内存泄漏

    ```javascript
    function fn1 () {
      var arr = new Array[1000]
      function fn2 () {
        console.log(arr.length)
      }
      return fn2
    }
    var f = fn1()
    f()
    ```

  - 解决：

    - 能不用闭包就不用
    - 及时释放

  - 内存溢出：

    - 一种程序运行出现的错误
    - 当程序运行需要的内存超过了剩余的内存时，就抛出内存溢出的错误

    ```javascript
    var obj = {}
    for (var i=0; i<1000; i++) {
      obj[i] = new Array(1000000)
      console.log('---')
    }
    ```

  - 内存泄露：

    - 占用的内存没有及时释放
    - 内存泄露积累了就容易导致内存溢出
    - 常见的内存泄露：
      - 意外的全局变量
      - 没有及时清理的计时器或回调函数
      - 闭包

    ```javascript
    // 意外的全局变量
    function fn () {
      a = 3
      console.log(a)
    }
    fn()
    
    // 没有及时清理的计时器或回调函数
    setInterval(function () {	// 启动循环定时器后不清理
      console.log('---')
    }, 300)
    
    // 闭包
    function fn1 () {
      var a = 4
      function fn2 () {
        console.log(++a)
      }
      return fn2
    }
    var f = fn1()
    f()	// 闭包未释放
    ```

  
32. 面试题
  - 题目一：

    ```javascript
    var name = 'The window'
    var object = {
      name: 'My Object',
      getNameFunc: function () {
        return function () {
          return this.name
        }
      }
    }
    console.log(object.getNameFunc()()) // The window
    
    var name2 = 'The window'
    var object2 = {
      name2: 'My Object',
      getNameFunc: function () {
        var that = this
        return function () {
          return that.name2
        }
      }
    }
    console.log(object2.getNameFunc()())  // My Object
    ```

  - 题目二：

    ```javascript
    function fun (n, o) {
      console.log(o)
      return {
        fun: function (m) {
          return fun(m, n)
        }
      }
    }
    var a = fun(0); a.fun(1); a.fun(2); a.fun(3); // undefined,0,0,0
    var b = fun(0).fun(1).fun(2).fun(3);  // undefined,1,2
    var c = fun(0).fun(1);  c.fun(2); c.fun(3); // undefined,1,1
    ```

  
33. 对象创建模式
34. 原型链继承
35. 组合继承
36. 复习
37. 闭包终极面试题
38. 进程与线程
39. 浏览器内核
40. 定时器引发的思考
41. js 是单线程执行的
42. 事件循环模型
43. H5 Web Workers 多线程
44. 复习