# 目录

1. JS 基础 - JS 简介
2. JS 基础 - JS 的 HelloWorld
3. JS 基础 - JS 编写位置
4. JS 基础 - 基本语法
5. JS 基础 - 字面量和变量
6. JS 基础 - 标识符
7. JS 基础 - 字符串
8. JS 基础 - Number
9. JS 基础 - 布尔值
10. JS 基础 - Null 和 Undefined
11. JS 基础 - 强制类型转换 - String
12. JS 基础 - 强制类型转换 - Number
13. JS 基础 - 其他进制的数字
14. JS 基础 - 转换为 Boolean
15. JS 基础 - 算数运算符
16. JS 基础 - 一元运算符
17. JS 基础 - 自增和自减
18. JS 基础 - 自增练习
19. JS 基础 - 逻辑运算符
20. JS 基础 - 非布尔值的与或运算
21. JS 基础 - 赋值运算符
22. JS 基础 - 关系运算符
23. JS 基础 - Unicode 编码表
24. JS 基础 - 相等运算符
25. JS 基础 - 条件运算符
26. JS 基础 - 运算符优先级
27. JS 基础 - 代码块
28. JS 基础 - if 语句
29. JS 基础 - 练习
30. JS 基础 - 条件分支语句
31. JS 基础 - switch 练习
32. JS 基础 - while 循环
33. JS 基础 - for 循环
34. JS 基础 - 质数练习
35. JS 基础 - 嵌套的 for 循环
36. JS 基础 - break 和 continue
37. JS 基础 - 对象的简介
38. JS 基础 - 对象的基本操作
39. JS 基础 - 属性名和属性值
40. JS 基础 - 基本数据类型和引用数据类型
41. JS 基础 - 对象字面量
42. JS 基础 - 函数的简介
43. JS 基础 - 函数的参数
44. JS 基础 - 函数的返回值
45. JS 基础 - 实参可以是任何值
46. JS 基础 - 返回值的类型
47. JS 基础 - 立即执行函数
48. JS 基础 - 方法
49. JS 基础 - 全局作用域
50. JS 基础 - 函数作用域
51. JS 基础 - debug
52. JS 基础 - this
53. JS 基础 - 使用工厂方法创建对象
54. JS 基础 - 构造函数
55. JS 基础 - 原型对象
56. JS 基础 - toString()
57. JS 基础 - 垃圾回收
58. JS 基础 - 数组简介
59. JS 基础 - 数组字面量
60. JS 基础 - 数组的四个方法
61. JS 基础 - 数组的遍历
62. JS 基础 - 数组练习
63. JS 基础 - forEach
64. JS 基础 - slice 和 splice
65. JS 基础 - 数组去重
66. JS 基础 - 数组的剩余方法
67. JS 基础 - call 和 apply
68. JS 基础 - arguments
69. JS 基础 - Date 对象
70. JS 基础 - Math
71. JS 基础 - 包装类
72. JS 基础 - 字符串的方法
73. JS 基础 - 正则表达式的简介
74. JS 基础 - 正则语法
75. JS 基础 - 字符串和正则相关的方法
76. JS 基础 - 正则表达式语法
77. JS 基础 - 邮件的正则

-----







# 目录

1. JS 基础 - JS 简介

2. JS 基础 - JS 的 HelloWorld

   ```javascript
   // 三条输出语言
   
   alert('向浏览器窗口输出一个内容')
   
   document.write('向页面输出一个内容')
   
   console.log('向控制台输出一个内容')
   ```

   

3. JS 基础 - JS 编写位置

   - ```html
     <!-- 虽然可以写在标签的属性中，但是结构和行为耦合，不方便维护，不推荐 -->
     <a href="javascript:alert('lokit');">点击</a>
     <a href="javascript:;">点击</a>
     ```

   - 可以将 js 代码编写到外部 js 文件中，然后通过 script 标签引入，写到外部文件中可以在不同的页面同时引用，也可以利用到浏览器的缓存机制，推荐使用。

   - 可以将 js 代码编写到 script 标签，但是会被忽略掉。

     ```html
     <script type="text/javascript">
     	alert("lokit~");
     </script>
     ```

     

4. JS 基础 - 基本语法

   - 可以通过注释来进行简单的调试

     ```javascript
     // 判断是在哪里输出
     // alert('向浏览器窗口输出一个内容')
     // document.write('向页面输出一个内容')
     console.log('向控制台输出一个内容')
     ```

   - js 中严格区分大小写

   - js 中每条语句以分号结尾，如果不写分号，浏览器会自动添加，消耗系统资源，有时甚至加错

   - js 中会忽略多个空格和换行

     

5. JS 基础 - 字面量和变量

   - 字面量：都是不可改变的值，如：1，2，3...，字面量都是可以直接使用的，但一般都不会这样使用

     ```javascript
     alert(123)
     ```

   - 变量：可以用来保存字面量，而且变量的值是可以改变的，开发中，通过变量保存字面量，很少直接使用字面量，通过变量对字面量进行描述。

     ```javascript
     // 1. 声明和赋值同时使用
     // 变量 a
     // 字面量 123
     var a = 123
     
     
     // 2.1 声明变量
     var a
     
     // 2.2 为变量赋值
     a = 123
     a = 456
     console.log(a)
     ```

     

6. JS 基础 - 标识符
  - 标识符：在 js 中所有的都可以由我们自主命名的，如：变量名、函数名、属性名

  - 命名标识符规则：

    - 标识符中可以有：字母、数字、下划线、$
    - 不能以数字开头
    - 不能为 ES 中的关键字或保留字
    - 建议驼峰命名法：首字母小写，其余每个首字母大写，如：helloWorld

  - js 底层保存标识符时，实际采用的 unicode 编码，理论上所有 utf-8 中含有的内容都可以作为标识符，如：汉字，但是不推荐

    ```javascript
    let 姓名 = 'lokit'
    console.log(姓名)	// lokit
    ```


7. JS 基础 - 字符串
  - 数据类型：字面量的类型

  - 六种数据类型（5种基本数据类型和1种引用数据类型）：

    - String
    - Number
    - Boolean
    - Null
    - Undefined
    - Object

  - 字符串需要引号引起来

    ```javascript
    // 不是引号引起来的是变量
    var str = 'hello'
    console.log(hello)	// 报错,无 hello 变量
    
    // 引号不能嵌套
    var str = "你说："我叫lokit~""
    
    // 正确的方式1：
    var str = '你说："我叫lokit~"'
    
    // 正确方式2：转义字符\
    var str = "你说：\"我叫lokit~\""
    
    // 打印两个 \\
    console.log('\\\\')
    ```

    

8. JS 基础 - Number
  - 所有的数值都是 Number 类型：整数和浮点数

  - 使用 ```typeof``` 检查变量类型

  - js 中表示数字的最大值：```Number.MAX_VALUE```，如果超过了就是 ```Infinity```，正无穷大

  - js 中表示数字的最小值：```Number.MIN_VALUE```，

  - Infinity 和 NaN 都会返回 Number 类型

    ```javascript
    let n = NaN
    let n1 = 'NaN'
    
    console.log(typeof n)	// Number
    console.log(typeof n1)	// String
    ```

  - js 中可以基本可以保证整数的运算精度，但是无法保证浮点数的运算精度，因为机器运算是二进制运算，无法保证 1/10，就比如像10进制无法表示 1/3 一样，出现精度损失。

9. JS 基础 - 布尔值
  - Boolean 只有两个值，主要做逻辑判断：

    - true
    - false

  - ```javascript
    let bool = true
    let bool1 = 'true'
    
    console.log(bool)	// boolean
    console.log(bool1)	// string
    ```
    

10. JS 基础 - Null 和 Undefined
  - Null 类型的值只有一个，就是 null，其专门用来表示一个空的对象，使用 ```typeof``` 检查返回 ```object```

    ```javascript
    let a = null
    console.log(a)	// object
    ```

  - Undefined 类型的值只有一个，就是 undefined

    - 当声明一个变量，但是没有赋值时，其值就是 undefined
    - 使用 ```typeof``` 检查一个 undefined 时，也会返回 undefined

    ```javascript
    let b;
    let c = undefined
    console.log(b)	// undefined
    console.log(c)	// undefined
    console.log(typeof c)	// undefined
    ```

11. JS 基础 - 强制类型转换 - String
  - 强制类型转换：指将一个数据类型强制转换为其他的数据类型

  - 类型转换：将其他的数据类型，转换为 String、Number、Boolean

  - 将其他数据类型转换为 String：

    - 方式一：调用被转换数据类型的 ```toString()```方法

      ```javascript
      // 该方法不会影响到原变量，它会将转换的结果返回
      let a = 123
      let b = a.toString()
      console.log(typeof a)	// number
      console.log(typeof b)	// string
      
      a = true
      a = a.toString()
      console.log(a)	// 'true'
      
      // 注意：null 和 undefined 这两个值没有 toString() 方法，如果调用了，会报错
      a = null
      a = a.toString()
      console.log(a)	// 报错
      
      a = undefined
      a = a.toString()
      console.log(a)	// 报错
      ```

    - 调用 ```String()``` 函数，并将被转换的数据作为参数传递给函数。

      - 注意：函数是直接用，方法是被调用

      ```javascript
      // 对 Number 和 Boolean 实际上就是调用 toString() 方法
      let a = 123
      a = String(a)
      console.log(typeof a)	// string
      
      // 但是对于 null 和 undefined 就不会调用 toString() 方法
      // 将 null 直接转换为 "null"
      // 将 undefined 直接转换为 "undefined"
      let a = null
      a = String(a)
      console.log(typeof a)	// string
      ```

      

12. JS 基础 - 强制类型转换 - Number
  - 方式一：使用 ```Number()``` 函数

    - 字符串 -> 数字
      - 如果是纯数字的字符串，则直接将其转换为数字
      - 如果是非数字的字符串，则转换为 NaN
      - 如果是一个空串或一个全是空格的字符串，则转换为 0

    ```javascript
    let a = "123"
    a = Number(a)
    console.log(typeof a)	// number
    
    let a = "123abc"
    a = Number(a)
    console.log(a)	// NaN
    console.log(typeof a)	// number
    
    let a = ""
    a = Number(a)
    console.log(a)	// 0
    console.log(typeof a)	// number
    
    let a = "   "
    a = Number(a)
    console.log(a)	// 0
    console.log(typeof a)	// number
    ```

    - 布尔 -> 数字
      - true 转成 1
      - false 转成 0
    - null -> 数字 0
    - undefined -> 数字 NaN

  - 方式二：这种方式专门对付字符串

    - ```parseInt()``` 把一个字符串转换为一个整数，将一个字符串的有效整数内容取出来转换为 number

      ```javascript
      let a = "123.456px"
      a = parseInt(a)
      console.log(a)	// 123
      console.log(typeof a)	// number
      ```

      

    - ```parseFloat()``` 把一个字符串转换为一个浮点数，和 parseInt() 类似，不同的是获取有效的小数

      ```javascript
      let a = "123.456.789px"
      a = parseFloat(a)
      console.log(a)	// 123.456
      console.log(typeof a)	// number
      ```

    - 如果对非 String 使用 parseInt() 或 parseFloat()，会先将其转换为 String，然后操作

      ```javascript
      let a = true
      a = parseInt(a)
      console.log(a)	// NaN
      console.log(typeof a)	// number
      ```

    

13. JS 基础 - 其他进制的数字
  - 在 js 中，如果需要16进制的数字，则需要以 0X 开头

  - 如果需要8进制的数字，则需要以 0 开头

  - 如果需要2进制的数字，则需要以 0b 开头

  - ```javascript
    // "070" 这种字符串，有的当成8进制，有的当成10进制
    // 解决：
    let a = "070"
    a = parseInt(a, 10)	// 第二个参数指定数字的进制
    console.log(a)	// 70
    ```


14. JS 基础 - 转换为 Boolean
  将其他的数据类型转换为 Boolean，使用 ```Boolean() ```函数

  - 数字 -> 布尔
    - 除了 0 和 NaN，其余都是 true
  - 字符串 -> 布尔
    - 除了空串，其余都是 true
  - null 和 undefined 都会转换为 false
  - 对象也会转换为 true

15. JS 基础 - 算数运算符

16. JS 基础 - 一元运算符

17. JS 基础 - 自增和自减

18. JS 基础 - 自增练习

19. JS 基础 - 逻辑运算符

20. JS 基础 - 非布尔值的与或运算

21. JS 基础 - 赋值运算符

22. JS 基础 - 关系运算符

23. JS 基础 - Unicode 编码表

24. JS 基础 - 相等运算符

25. JS 基础 - 条件运算符

26. JS 基础 - 运算符优先级

27. JS 基础 - 代码块

28. JS 基础 - if 语句

29. JS 基础 - 练习

30. JS 基础 - 条件分支语句

31. JS 基础 - switch 练习

32. JS 基础 - while 循环

33. JS 基础 - for 循环

34. JS 基础 - 质数练习

35. JS 基础 - 嵌套的 for 循环

36. JS 基础 - break 和 continue

37. JS 基础 - 对象的简介

38. JS 基础 - 对象的基本操作

39. JS 基础 - 属性名和属性值

40. JS 基础 - 基本数据类型和引用数据类型

41. JS 基础 - 对象字面量

42. JS 基础 - 函数的简介

43. JS 基础 - 函数的参数

44. JS 基础 - 函数的返回值

45. JS 基础 - 实参可以是任何值

46. JS 基础 - 返回值的类型

47. JS 基础 - 立即执行函数

48. JS 基础 - 方法

49. JS 基础 - 全局作用域

50. JS 基础 - 函数作用域

51. JS 基础 - debug

52. JS 基础 - this

53. JS 基础 - 使用工厂方法创建对象

54. JS 基础 - 构造函数

55. JS 基础 - 原型对象

56. JS 基础 - toString()

57. JS 基础 - 垃圾回收

58. JS 基础 - 数组简介

59. JS 基础 - 数组字面量

60. JS 基础 - 数组的四个方法

61. JS 基础 - 数组的遍历

62. JS 基础 - 数组练习

63. JS 基础 - forEach

64. JS 基础 - slice 和 splice

65. JS 基础 - 数组去重

66. JS 基础 - 数组的剩余方法

67. JS 基础 - call 和 apply

68. JS 基础 - arguments

69. JS 基础 - Date 对象

70. JS 基础 - Math

71. JS 基础 - 包装类

72. JS 基础 - 字符串的方法

73. JS 基础 - 正则表达式的简介

74. JS 基础 - 正则语法

75. JS 基础 - 字符串和正则相关的方法

76. JS 基础 - 正则表达式语法

77. JS 基础 - 邮件的正则