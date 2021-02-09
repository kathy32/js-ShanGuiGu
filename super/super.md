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

    ![image-20210209155837092](/Users/apple/Library/Application Support/typora-user-images/image-20210209155837092.png)

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