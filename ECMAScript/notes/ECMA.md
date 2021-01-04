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
18. JS 基础 - 逻辑运算符
19. JS 基础 - 非布尔值的与或运算
20. JS 基础 - 赋值运算符
21. JS 基础 - 关系运算符
22. JS 基础 - Unicode 编码表
23. JS 基础 - 相等运算符
24. JS 基础 - 条件运算符
25. JS 基础 - 运算符优先级
26. JS 基础 - 代码块
27. JS 基础 - if 语句
28. JS 基础 - 练习
29. JS 基础 - 条件分支语句
30. JS 基础 - switch 练习
31. JS 基础 - while 循环
32. JS 基础 - for 循环
33. JS 基础 - 质数练习
34. JS 基础 - 嵌套的 for 循环
35. JS 基础 - break 和 continue
36. JS 基础 - 对象的简介
37. JS 基础 - 对象的基本操作
38. JS 基础 - 属性名和属性值
39. JS 基础 - 基本数据类型和引用数据类型
40. JS 基础 - 对象字面量
41. JS 基础 - 函数的简介
42. JS 基础 - 函数的参数
43. JS 基础 - 函数的返回值
44. JS 基础 - 实参可以是任何值
45. JS 基础 - 返回值的类型
46. JS 基础 - 立即执行函数
47. JS 基础 - 方法
48. JS 基础 - 全局作用域
49. JS 基础 - 函数作用域
50. JS 基础 - debug
51. JS 基础 - this
52. JS 基础 - 使用工厂方法创建对象
53. JS 基础 - 构造函数
54. JS 基础 - 原型对象
55. JS 基础 - toString()
56. JS 基础 - 垃圾回收
57. JS 基础 - 数组简介
58. JS 基础 - 数组字面量
59. JS 基础 - 数组的四个方法
60. JS 基础 - 数组的遍历
61. JS 基础 - 数组练习
62. JS 基础 - forEach
63. JS 基础 - slice 和 splice
64. JS 基础 - 数组去重
65. JS 基础 - 数组的剩余方法
66. JS 基础 - call 和 apply
67. JS 基础 - arguments
68. JS 基础 - Date 对象
69. JS 基础 - Math
70. JS 基础 - 包装类
71. JS 基础 - 字符串的方法
72. JS 基础 - 正则表达式的简介
73. JS 基础 - 正则语法
74. JS 基础 - 字符串和正则相关的方法
75. JS 基础 - 正则表达式语法
76. JS 基础 - 邮件的正则

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

   - Infinity 和 NaN 都会返回 number 类型

     ```javascript
     let n = NaN
     let n1 = 'NaN'
     
     console.log(typeof n)	// number
     console.log(typeof n1)	// string
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

    - 将其他的数据类型转换为 Boolean，使用 ```Boolean() ```函数
      - 数字 -> 布尔
        - 除了 0 和 NaN，其余都是 true
      - 字符串 -> 布尔
        - 除了空串，其余都是 true
      - null 和 undefined 都会转换为 false
      - 对象也会转换为 true

15. JS 基础 - 算数运算符

    - 运算符也叫操作符，通过运算符可以对一个或多个值进行运算。如：typeof 就是运算符。

    - 算数运算符：当对非 Number 类型的值进行运算时，会将这些值转换为 Number，然后再运算。

      - 任何值和 NaN 运算都得 NaN

      - +：可以对两个值进行加法运算，并将结果返回。

        - 如果对两个字符串进行加法运算，则会做拼串，会将**两个**字符串拼接为一个字符串，并返回。
        - 任何的值和字符串做加法运算，都会先转换为字符串，然后再和字符串做拼串的操作。可以利用这一特点，将一个任意的数据类型转换为 String，只需要为任意的数据类型 + 一个 “” 即可，这是一种隐式的类型转换。浏览器自动完成，相当于调用 ```String() ```函数

        ```javascript
        let res = true + 1	// 2
        res = true + false	// 1
        res = 2 + null	// 2
        res = 2 + NaN	// NaN
        
        res = 123 + '1'	// '1231'
        res = true + '123'	// 'true123'
        res = 123 + ''	// '123'
        res = null + ''	// 'null'
        
        res = 1 + 2 + "3"	// 33
        res = '1' + 2 + 3	// 123
        ```

      - -：可以对两个值进行减法运算，并将结果返回。

        ```javascript
        let res = 100 - '1'	// 99
        res = 100 - true // 99
        ```

      - *：乘法

        ```javascript
        let res = 2 * undefined	// NaN
        res = 2 * null	// 0
        ```

      - /：除法

        ```javascript
        let res = 3 / 2	// 1.5
        ```

      - %：取余

        ```javascript
        let res = 9 % 4	// 1
        ```

      - 任何值做 - * / 运算时都会自动转换为 Number，我们可以利用这一点做隐式的类型转换，通过为一个值 -0， *1， /1 来将其转换为 Number，原理和 Number() 函数一样，使用起来更加简单。

        

16. JS 基础 - 一元运算符

    - 只需要一个操作数

    - 正号，不会对数字产生影响

      - 可以对一个其他的数据类型使用 ```+```，来将其转换为 Number，原理和 Number() 一样

        ```javascript
        let res = 1 + +'2' +3	// 6
        ```

    - 负号，对数字取反

      - 对于非 Number 值，先转换为 Number，再取反

      - ```javascript
        let a = true
        a = -a
        console.log(a)	// -1
        ```

        

17. JS 基础 - 自增和自减

    - 自增：

      - 自增可以使变量在原值的基础上自增1

      - 自增使用 ```++```

      - 自增可以使用 前++（++a）后++(a++)

      - 无论是++a 还是 a++都会立即使原变量自增1，不同的是 ++a 和 a++ 的值是不同的，

        - ```++a``` 的值是变量的新值（**自增后的值**）
        - ```a++``` 的值是变量的原值（**自增前的值**）

      - ```javascript
        let a = 1
        console.log(a++)	// 1
        consloe.log(a)	// 2
        ```

      - ```javascript
        let a = 1
        console.log(++a)	// 2
        consloe.log(a)	// 2
        ```

      - ```javascript
        let c = 10
        c++	
        consloe.log(c++)	// 11
        ```

      - ```javascript
        let d = 20
        let res = d++ + ++d + d
        console.log(res)	// 20 + 22 + 22 = 64
        ```

      - ```javascript
        let d = 20
        d = d++	// 先赋值，再自增
        console.log(d)	// 20
        ```

        

    - 自减	

      - 自减可以使变量在原值的基础上自减1

      - 自减使用 ``` --```

      - 自减可以使用 前--（--a）后--(a--)

      - 无论是--a 还是 a--都会立即使原变量自减1，不同的是 --a 和 a-- 的值是不同的，

        - ```--a``` 的值是变量的新值（**自减后的值**）
        - ```a--``` 的值是变量的原值（**自减前的值**）

      - ```javascript
        let a = 10
        console.log(a--)	// 10
        console.log(a)	// 9
        ```

    - 自增练习
      - ```javascript
        let n1 = 10
        let n2 = 20
        let n = n1++
        console.log(n)	// 10
        console.log(n1)	// 11
        
        n = ++n1
        console.log(n)	// 12
        console.log(n1)	// 12
        
        n = n2--
        console.log(n)	// 20
        console.log(n2)	// 19
        
        n = --n2
        console.log(n)	// 18
        console.log(n2)	// 18
        ```

18. JS 基础 - 逻辑运算符
  - ```!```

    - 非运算可以对一个布尔值进行取反，true 变 false false 变 true

    - 当对非布尔值使用 ! 时，会先将其转换为布尔值然后再取反

    - 可以利用 ```！!``` 来将其他的数据类型转换为布尔值，原理和 Boolean() 函数一样

      ```javascript
      let b = 10
      b = !!b
      console.log(b)	// true
      console.log(typeof b)	// boolean
      ```

      

  - ```&&```（爱情）

    - && 可以对符号**两侧**的值进行与运算

    - 只有两端的值都为 true 时，才会返回 true。只要有一个 false 就会返回 false

    - 与是一个短路的与，如果第一个值是false，则不再检查第二个值

    - 对于非布尔值，它会将其转换为布尔值然后做运算，并**返回原值**

    - 规则：

      - 如果第一个值为 false，则返回第一个值，不会检查第二个值（短路与）
      - 如果第一个值为 true，则返回第二个值

    - ```javascript
      true && alert('会弹出来')
      false && alert('不会弹出来')
      ```

  - ```||```（亲情）

    - || 可以对符号两侧的值进行或运算

    - 只有两端都是 false 时，才会返回 false。只要有一个 true，就会返回 true

    - 或是一个短路的或，如果第一个值是 true，则不再检查第二个值

    - 对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值

    - 规则：

      - 如果第一个值为 true，则返回第一个值，不会检查第二个值（短路或）
      - 如果第一个值为 false，则返回第二个值

      ```javascript
      false || alert('会弹出来')
      true || alert('不会弹出来')
      ```

    

19. JS 基础 - 非布尔值的与或运算
  - 对于非布尔值，它会将其转换为布尔值然后做运算，并返回原值

  ```javascript
  let res = 2 && 1
  console.log(res)	// 1

  // 返回靠前的 false
  res = 0 && 2
  console.log(res)	// 0

  res = NaN && 0
  console.log(res)	// NaN
  ```

  ```javascript
  let res = 1 || 2
  console.log(res)	// 1

  res = 2 || NaN
  console.log(res)	// 2

  // 如果第一个值为 false，则直接返回第二个值
  res = NaN || 2
  console.log(res)	// 2

  res = "" || "hello"
  console.log(res)	// "hello"

  res = -1 || "hello"
  console.log(res)	// -1
  ```

20. JS 基础 - 赋值运算符
  - ```=``` ：可以将符号右侧的值赋值给左侧变量

  - ```+=```：a += 5 相当于 a = a+5	

    ```javascript
    var str = "hello";  
    str += "world";
    ```

  - ```-=```：a -= 5  相当于 a = a-5

  - ```*=```：a *= 5 相当于 a = a * 5

  - ```/=```：a /= 5 相当于 a = a/5	

  - ```%=```：a %= 5 相当于 a = a%5	


21. JS 基础 - 关系运算符
  - 关系运算符：用来比较两个值之间的大小关系的

  - ```>```

  - ```>=```

  - ```<```

  - ```<=```

  - 关系运算符的规则和数学中一致，用来比较两个值之间的关系，如果关系成立则返回true，关系不成立则返回false。

  - 如果比较的两个值是非数值，会将其转换为Number然后再比较

    ```javascript
    console.log(1 >= true)	// true, true:1
    console.log(1 > '0')	// true
    console.log(1 > null)	// true,	null:0
    
    // 任何值和 NaN 做任何比较都是 false
    console.log(1 > 'hello')	// false, 'hello':NaN
    
    console.log(true > false)	// true
    ```

  - 如果比较的两个值都是字符串，此时会比较字符串的Unicode编码，而不会转换为Number，比较中文没有意义

    ```javascript
    console.log('1' < '5')	// true
    console.log('11' < '5')	// true, '1'<'5'
    
    // 如果两位一样，则比较下一位
    console.log('bbc' < 'b')	// false
    
    // 注意：在比较两个字符串类型的数字时，一定要转型
    console.log('111' < +'5')	// false
    ```

22. JS 基础 - Unicode 编码表
  - ```\u``` 表示 Unicode 转义编码

    ```javascript
    console.log("\u2620")
    ```

  - 网页中使用 Unicode 编码，```&#``` 编码，这里的编码是 10 进制

    ```html
    <h1 style="font-size:200px;">&#8760</h1>
    ```

23. JS 基础 - 相等运算符
  - ```==```

    - 相等，判断左右两个值是否相等，如果相等返回 true，如果不等返回 false

    - 相等会自动对两个值进行类型转换，如果对不同的类型进行比较，会将其转换为相同的类型然后再比较，转换后相等它也会返回 true

      ```javascript
      console.log('1' == 1)	// true
      console.log(true == '1')	// true
      
      console.log(null == 0)	// false, 没有转成number
      console.log(null == undefined)	// true, undefined 衍生自 null
      
      // NaN 不和任何值相等，包括其本身
      console.log(1 == NaN)	// false
      console.log(NaN == NaN)	// false
      
      // 可以通过 isNaN() 函数判断是否为 NaN
      let b = NaN
      console.log(b)	// true
      ```

  - ```!=```

    - 不等，判断左右两个值是否不等，如果不等则返回 true，如果相等则返回 false

    - 不等也会做自动的类型转换

      ```javascript
      console.log(1 != '1')	// false, 会转换
      ```

  - ```===```

    - 全等，判断左右两个值是否全等，它和相等类似，只不过它不会进行自动的类型转换

    - 如果两个值的类型不同，则直接返回 false

      ```javascript
      console.log(1 === '1')	// false
      console.log(null === undefined)	// false
      ```

  - ```!==```

    - 不全等，和不等类似，但是它不会进行自动的类型转换，如果两个值的类型不同，它会直接返回 true

      ```javascript
      console.log(1 !== '1')	// true
      ```

24. JS 基础 - 条件运算符
  - 也叫三元运算符

  - ```?:```

  - 语法：```条件表达式 ? 语句1 : 语句2;```

  - 执行流程：

    - 先对条件表达式求值判断
    - 如果判断结果为 true，则执行语句1，并返回执行结果
    - 如果判断结果为 false，则执行语句2，并返回执行结果

    ```javascript
    let a = 20
    let b = 30
    let c = 50
    
    let max = a > b ? a :b
    console.log(max)	// 30
    
    // 不推荐，不方便阅读
    max = a > b ? (a > c ? a : c) : (b > c ? b : c)
    ```

  - 如果条件表达式的值结果是一个非布尔值，则会将其转换为布尔值再运算

    ```javascript
    'hello' ? alert('lokit') : alert('yico')	// lokit
    ```

25. JS 基础 - 运算符优先级
  - ```,``` 运算符，可以分割多个语句，一般可以在声明多个变量时使用

    ```javascript
    let a = 1, b = 2, c = 3
    console.log(a)	// 1
    ```

  - 和数学中一样，JS中的运算符也是具有优先级的，具体的优先级可以参考优先级的表格，在表格中越靠上的优先级越高，优先级越高的越优先计算，优先级相同的，从左往右计算

    ```javascript
    let res = 1 || 2 && 3
    console.log(res)	// 1, && 运算优先级更高
    ```

  - 优先级不需要记忆，如果越到拿不准的，使用()来改变优先级

  - 优先级表格：

    • ```.```、```[]```、``` new```

    • ```()```

    • ```++```、``` --```

    • ```!```、```~```、```+```(单目)、```-```(单目)、```typeof```、```void```、```delete```

    • ```%```、```*```、```/``` 

    • ```+```(双目)、```-```(双目) 

    • ```<<``` 、``` >>```、 ```>>>```

    • ```<```、```<=```、```>```、```>=```

    • ```==```、```!==```、```===```

    • ```&``` 

    • ```^ ```

    • ```| ```

    • ```&&```

    • ```||```

    • ```?:```

    • ```=```、```+=```、```-=```、```*=```、```/=```、```%=```、```<<=```、```>>=```、```>>>=```、```&=```、```^=```、```|=```

    • ```,```

26. JS 基础 - 代码块
  - 语句都是按照自上而下顺序执行的
  - js 中使用 ```{}``` 来为语句进行分组，即代码块
  - 代码块只有分组的作用

27. JS 基础 - if 语句
  - 程序都是自上向下的顺序执行的，通过**流程控制语句**可以改变程序执行的顺序，或者反复的执行某一段的程序

  - 分类：

    - 条件判断语句
    - 条件分支语句
    - 循环语句

  - 条件判断语句：

    - 条件判断语句也称为```if```语句

    - 语法一:

      ```
      if (条件表达式) {
        语句...
      }
      ```

      - 执行流程：if 语句执行时，会先对条件表达式进行求值判断，如果值为 true，则执行 if 后的语句，如果值为 false，则不执行

    - 语法二：

      ```
      if (条件表达式) {
        语句...
      } else {
        语句...
      }
      ```

      - 执行流程：if...else语句执行时，会对条件表达式进行求值判断，如果值为 true，则执行 if 后的语句，如果值为 false，则执行 else 后的语句

    - 语法三：

      ```
      if (条件表达式) {
        语句...
      } else if (条件表达式) {
        语句...
      } else if (条件表达式) {
        语句...
      } else if (条件表达式) {
        语句...
      } else {
        语句...
      }	
      ```

      - 执行流程：if...else if...else 语句执行时，会自上至下依次对条件表达式进行求值判断，如果判断结果为 true，则执行当前 if 后的语句，执行完成后语句结束。如果判断结果为 false，则继续向下判断，直到找到为 true 的为止。如果所有的条件表达式都是 false，则执行 else 后的语句


28. JS 基础 - 练习
  - 练习一：

    ```javascript
    /*
    * 	从键盘输入小明的期末成绩:
    *	当成绩为100时，'奖励一辆BMW'
    *	当成绩为[80-99]时，'奖励一台iphone15s'
    *	当成绩为[60-80]时，'奖励一本参考书'
    *	其他时，什么奖励也没有
    */
    
    // prompt() 可以弹出一个提示框，用户可以在文本框输入一段内容作为参数
    let score = prompt("请输入小明的期末成绩：")
    
    if (score > 100 || score < 0 || isNaN(score)) {
        return
    }
    
    if (score === 100) {
      alert('宝马')
    } else if (score >= 80) {
      alert('手机')        
      } else if (score >= 60) {
          alert('参考书')
        } else {
          alert('没有')
        }
    ```

  - 练习二：

    ```javascript
    /*
    * 	大家都知道，男大当婚，女大当嫁。那么女方家长要嫁女儿，当然要提出一定的条件： 
    *	高：180cm以上; 富:1000万以上; 帅:500以上;
    *	如果这三个条件同时满足，则:'我一定要嫁给他'
    *	如果三个条件有为真的情况，则:'嫁吧，比上不足，比下有余。' 
    *	如果三个条件都不满足，则:'不嫁！' 
    */
    
    let height = prompt('请输入身高')
    let money = prompt('财富')
    let face = prompt('颜值')
    
    if (height > 180 && money > 1000 && face >500) {
        alert('一定嫁')
    } else if () {
        alert('勉强嫁')     
      } else {
        alert('不嫁')
      }
    ```

  - 练习三：

    ```javascript
    /*
    * 	编写程序，由键盘输入三个整数分别存入变量num1、num2、num3，
    * 	对他们进行排序，并且从小到大输出。
    */
    
    // prompt() 返回的是 String 类型
    let num1 = +prompt('num1:')
    let num2 = +prompt('num2:')
    let num3 = +prompt('num3:')
    
    if (num1<num2 && num1<num3) {
      if (num2<num3) {
        // num1,num2,num3
      } else {
        // num1,num3,num2
      }
    } else if (num2<num1 && num2<num3) {
          // .....         
      }
    ```

29. JS 基础 - 条件分支语句
  - ```switch```语句

  - 语法：

    ```
    switch(条件表达式){
      case 表达式:
        语句...
        break;
      case 表达式:
        语句...
        break;
      case 表达式:
        语句...
        break;
      default:
        语句...
        break;
      }
    ```

  - 执行流程：

    - switch...case...语句在执行时，会**依次**将case后的表达式的值和switch后的表达式的值进行全等比较

    - 如果比较结果为false，则继续向下比较。如果比较结果为true，则从当前case处开始向下执行代码，需要和 break 跳出结合使用

    - 如果所有的case判断结果都为false，则从default处开始执行代码

30. JS 基础 - switch 练习
  题目：大于60为合格，否则不合格

  ```javascript
  let score = 99
  switch (parseInt(score/10)) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
      console.log('合格')
      break
    default:
      console.log('不合格')
      break
  }
  ```

31. JS 基础 - while 循环
  - 通过循环语句可以反复执行某些语句多次

  - ```while``` 循环

    - 语法：

      - ```
        while (条件表达式) {
          语句...
        }
        ```

    - 条件：①初始化表达式 ; ②条件表达式 ; ④更新表达式

      ```javascript
      let n = 20
      while (n > 0) {
        console.log(n)
        n--
      }
      ```

    - 执行流程：

      - while语句在执行时，会先对条件表达式进行求值判断，
      - 如果判断结果为false，则终止循环
      - 如果判断结果为true，则执行循环体
      - 循环体执行完毕，继续对条件表达式进行求值判断，依此类推

  - ```do...while```循环

    - 语法:

      - ```
        do {
          语句...
        } while (条件表达式)
        ```

    - 执行流程：

      - do...while 在执行时，会先执行 do 后的循环体，然后在对条件表达式进行判断，
      - 如果判断判断结果为 false，则终止循环。
      - 如果判断结果为 true，则继续执行循环体，依此类推

    - 和while的区别：

      - while：先判断后执行
      - do...while: 先执行后判断
      - do...while 可以确保循环体**至少执行一次**

  - while 练习：

    - 题目：假如投资的年利率为5%，求从1000到5000需要多少年？

      ```javascript
      let money = 1000
      let count = 0
      
      while (money < 5000) {
        money *= 1.05
        count++
      }
      console.log(count)	// 33
      ```

32. JS 基础 - for 循环
  - 语法：

    ```
    for (①初始化表达式 ; ②条件表达式 ; ④更新表达式) {
      ③语句...
    }
    ```

  - 执行流程：

    - 首先执行①初始化表达式，初始化一个变量，（只会执行一次）

    - 然后对②条件表达式进行求值判断，如果为 false 则终止循环

    - 如果判断结果为 true，则执行③循环体

    - 循环体执行完毕，执行④更新表达式，对变量进行更新。

    - 更新表达式执行完毕重复②

    - ```javascript
      for (let i=0; i<10; i++) {
        alert(i)
      }
      ```

  - 死循环

    ```
    while(true){
    }
    
    for(;;){
    }
    ```

  - 练习一：打印1-100之间所有7的倍数的个数及总和

    ```javascript
    let sum = 0
    let count = 0
    for (let i=1; i<=100; i++) {
      if (i % 7 === 0) {
        //console.log(i)
        sum += i
        count++
      }
    }
    console.log(sum)
    console.log(count)
    ```

  - 练习二：水仙花数指一个3位数，它的每个位上的数字的3次幂之和等于它本身。

    ```javascript
    // 如：1^3 + 5^3 + 3^3 = 153
    for (var i=100; i<1000; i++) {
      var hun = parseInt(i/100)
      var ten = parseInt((i-hun*100)/10)
      var digit = i%10
      
      if ((Math.pow(hun,3) + Math.pow(ten,3) + Math.pow(digit,3)) === i) {
      console.log(i)
      }
    }
    ```

33. JS 基础 - 质数练习
  - 接收一个输入，判断其是否为质数

  ```javascript
  let isPrime = function (num) {
    let flag = true

    if (num <= 1) return

    for (let i=2; i<num; i++) {
      if (num % i === 0) {
        flag = false
      }
    }

    if (flag) console.log(num + '是质数')
    else console.log(num + '不是质数')
  }

  isPrime(10)
  ```

34. JS 基础 - 嵌套的 for 循环
  - ```javascript
    //*
    //**
    //***
    //****
    //*****
    for (let i=0; i<5; i++) {
      for (let j=0; j<i+1; j++) {
        document.write('*')
      }
      document.write('<br />')
    }
    ```

  - 乘法表

    ```javascript
    for (let i=1; i<=9; i++) {
      for (let j=1; j<=i; j++) {
        document.write(j + '*' + i + '=' + j*i)
      }
      document.write('<br />')
    }
    ```

35. JS 基础 - break 和 continue
  - ```break``` 关键字用来退出 switch 或循环语句，不能用在 if 中

    ```javascript
    let i = 1
    if (i == 1) break
    // 报错
    ```

  - break 会立即终止离他最近的循环语句

    ```javascript
    for (let i=1; i<=5; i++) {
      console.log('外层循环'  = i)
      for (let j=1; j<=5; j++) {	// 被终止
        break
        console.log('内层循环' + j)
      }
    }
    // 外层循环：1 2 3 4 5
    ```

  - ```label``` 循环语句，可以在 break 后跟着一个 label，结束指定的循环

    ```javascript
    outer:
    for (let i=1; i<=5; i++) {
      console.log('外层循环'  = i)
      for (let j=1; j<=5; j++) {	// 被终止
        break outer
        console.log('内层循环' + j)
      }
    }
    // 外层循环：1
    ```

  - ```continue``` 关键字跳过**当次**循环，对最近的循环起作用

    ```javascript
    for (let i=0; i<5; i++) {
      if (i === 2)  continue
      console.log(i)
    }
    // 0 1 3 4
    
    for (let i=0; i<5; i++) {
      if (i === 2)  break
      console.log(i)
    }
    // 0 1
    ```

  - 质数练习答案改进

    ```javascript
    let isPrime = function (num) {
      console.time('test')
      if (num <= 1) return
      for (let i=2; i<=num; i++) {
        var flag = true // 此处必须为 var 不能是 let 块级作用域
        for (let j=2; j<i; j++) {
          if (num % i === 0) {
            flag = false
            break
          }
        }
      }
      if (flag) console.log(num + '是质数')
      else console.log(num + '不是质数')
      console.timeEnd('test')
    }
    isPrime(10000)
    // 10000不是质数
    // test: 42.134ms
    
    // ---------------------------------------
    
    // 增加  j<Math.sqrt(i)
    let isPrime = function (num) {
      console.time('test')
      if (num <= 1) return
      for (let i=2; i<=num; i++) {
        var flag = true // 此处必须为 var 不能是 let 块级作用域
        for (let j=2; j<Math.sqrt(i); j++) {
          if (num % i === 0) {
            flag = false
            break
          }
        }
      }
      if (flag) console.log(num + '是质数')
      else console.log(num + '不是质数')
      console.timeEnd('test')
    }
    
    isPrime(10000)
    // 10000不是质数
    // test: 13.484ms
    ```

36. JS 基础 - 对象的简介
  - 对象是JS中的引用数据类型

  - 如果属于基本类型的数据，我们所创建的变量都是独立的，不能成为一个整体。对象属于一种复合的数据类型，在对象中可以保存多个不同类型的属性

  - 对象的分类：

    - 内建对象：ES标准中定义，任何ES的实现中都可使用，如：```Math,String,Number,Boolean,Function,Object```

    - 宿主对象：js运行环境提供的对象，主要指浏览器提供的对象，如：```BOM,DOM```

      ```javascript
      console.log()
      document.write()
      ```

    - 自定义对象：开发人员自己创建的对象

37. JS 基础 - 对象的基本操作
  - 创建对象：

  - 方式一：```new``` 关键字，构造函数 ```constructor``` 创建

  ```javascript
  // 使用 typeof 检查一个对象 obj 时，会返回object
  var obj = new Object();

  // 向对象中添加属性,语法：对象.属性名 = 属性值;
  obj.name = 'lokit'

  // 读取属性
  console.log(obj.name)

  // 修改属性值
  obj.name = 'yico'

  // 删除属性
  delete obj.name
  ```

  - 方式二：

    ```javascript
    var obj = {};
    ```

38. JS 基础 - 属性名和属性值
  - 快捷键：注释块：```alt + shift + a```

  - 对象的**属性名**没有任何要求，不需要遵守标识符的规范，但是在开发中，尽量按照标识符的要求去写。但是特殊的属性名不能采用```.```的方式操作。

    - ```. [] new```三个操作符的优先级最高，比（）还高
    - 使用```[]```形式更加灵活

    ```javascript
    // 对象["属性名"]
    const obj = new Object()
    
    obj['123'] = 'lokit'
    console.log(obj['123'])
    
    let n = '123'
    console.log(obj[n])	// lokit
    ```

  - **属性值**也可以任意的数据类型，甚至可以是一个对象

  - 使用```in```检查对象中是否含有指定属性

    - 语法：```"属性名" in 对象```

    - 如果在对象中含有该属性，则返回 true，如果没有则返回 false

      ```javascript
      console.log('name' in obj)
      ```


39. JS 基础 - 基本数据类型和引用数据类型
  - 引例：

    ```javascript
    // 基本数据类型每个变量对应一个单独的存储单元，互不干扰
    let a = 1
    let b = a
    a++
    console.log(a)	// 2
    console.log(b)	// 1
    
    // 引用数据类型数指针类型，指向同一个地址变量，相互影响
    let obj1 = new Object()
    obj1.name = 'lokit'
    let obj2 = obj1
    obj1.name = 'yico'
    console.log(obj1.name)	// yico
    console.log(obj2.name)	// yico
    
    // 改变一个引用类型的指向并不会影响到另一个变量的指向
    obj2 = null
    console.log(obj1)	// [object Object]
    console.log(obj2)	// null
    ```

  - 基本数据类型的数据，变量是直接保存的它的值。变量与变量之间是互相独立的，修改一个变量不会影响其他的变量。

  - 引用数据类型的数据，变量是保存的对象的引用（内存地址）。如果多个变量指向的是同一个对象，此时修改一个变量的属性，会影响其他的变量。

  - 比较两个变量时，对于基本数据类型，比较的就是**值**。对于引用数据类型比较的是**地址**，地址相同才相同。


40. JS 基础 - 对象字面量
  - 语法：```var obj = {};```

  - 使用对象字面量，在创建对象时直接向对象中添加属性

    - 语法：

      ```javascript
      // 属性名可以加引号，也可以不加，但是特殊名字必须加
      var obj = {
                    属性名:属性值,
                    属性名:属性值,
                    属性名:属性值,
                    属性名:属性值
                }
      
      var obj = {
        name: 'lokit',
        '123': 32,
        test: {}
      }
      ```

41. JS 基础 - 函数的简介
  - 函数也是一个对象，也具有普通对象的功能

  - 函数中可以**封装**一些代码，在需要的时候可以去**调用**函数来执行这些代码

    ```javascript
    // 封装
    let f = function () {
      console.log('lokit')
    }
    // 调用
    f()
    
    // 创建一个函数对象,可以将要封装的代码以字符串的形式传递给构造函数（不推荐）
    var fun = new Function("console.log('lokit')")
    ```

  - 使用 ```typeof``` 检查一个函数时会返回 ```function```

  - 创建函数方式：

    - 函数声明式

      ```javascript
      // 参数可选
      function 函数名([形参1,形参2...形参N]){
              语句...
            }
      ```

    - 函数表达式

      ```javascript
      var 函数名 = function([形参1,形参2...形参N]){
              语句...
            };
      ```

42. JS 基础 - 函数的参数
  - 形参：形式参数

    - 定义函数时，可以在```()```中定义一个或多个形参，形参之间使用 ```,``` 隔开，**定义**形参就相当于在函数内声明了对应的变量但是并不赋值，形参会在**调用**时才赋值

  - 实参：实际参数

    - 调用函数时，可以在()传递实参，传递的实参会赋值给对应的形参,

  - 调用函数时不会检查实参的**类型**，函数的实参可以是任意类型

  - 调用函数时不会检查实参的**个数**：多了忽略，少了赋值为 undefined


43. JS 基础 - 函数的返回值
  - 返回值，就是函数执行的结果

  - 使用 return 来设置函数的返回值。

  - 语法：```return``` 值;

  - 该值就会成为函数的返回值，可以通过一个变量来接收返回

  - return 后边的代码都不会执行，一旦执行到 return 语句时，函数将会立刻退出。

  - return 后可以跟任意类型的值，可以是基本数据类型，也可以是一个对象

  - 如果 return 后不跟值，或者是不写 return 则函数默认返回 undefined。

    ```javascript
    // alert() 没有返回值
    let res = alert('lokit')	// 能弹出来
    console.log(res)	// undefined
    ```

44. JS 基础 - 实参可以是任何值
  - 练习：定义一个函数，判断一个数是否为偶数

    ```javascript
    let isEven = function (num) {
      return num % 2 === 0
    }
    isEven(11)	// false
    ```

  - 参数，函数的实参也可以是任意的数据类型。当需要的参数过多，可以将参数封装为一个对象

    ```javascript
    let sayHello = function (p) {
      console.log(p.name + p.height)
    }
    const person = {
      name: 'lokit',
      age: 25,
      height: 185
    }
    sayHello(person)
    ```

  - 实参也可以是一个函数

    ```javascript
    function fun (f) {
      f(obj)
    }
    // sayHello - 函数对象，相当于直接使用 函数对象
    fun(syaHello)	// lokit185
    
    // sayHello() - 调用函数，相当于使用函数的 返回值
    fun(sayHello())
    
    fun(function(){
      alert('hello')
    })
    ```

45. JS 基础 - 返回值的类型
  - break、continue和return

    - break - 退出循环
    - continue - 跳过当次循环
    - return - 退出函数

  - 函数返回类型为函数时：

    ```javascript
    function f3 () {
      function f4 () {
        console.log('lokit')
      }
      return f4
    }
    f3()()	// 调用f4，输出 lokit
    ```

46. JS 基础 - 立即执行函数
  - ```javascript
    // 函数定义完，立即被调用，立即执行函数只会执行一次
    (function (a, b) {
      console.log(a+b)
    })(3,2)	// 5
    ```

47. JS 基础 - 方法
  - 对象的**属性值**可以是任意数据类型，如函数

    ```javascript
    var obj = new Object()
    obj.name = 'lokit'
    obj.sayName = function () {
      console.log(obj.name)
    }
    ```

  - 当一个对象的**属性**是一个函数时，我们称这个函数是该对象的**方法** method

  - 方法和函数区别：

    - ```对象.方法名()```
    - ```函数名()```

  - 枚举对象中的属性：```for in```

    ```javascript
    const person = {
      name: 'lokit',
      age: 27
    }
    // 每次执行时，都会将对对象中的属性名字赋值给变量
    for (let p in person) {
      console.log(p)	// name,age(属性名)
      console.log(person[p]) // lokit,29(属性值)
      console.log(person.p)	// 不合法，person 里面没有 p 这个属性名，undefined
    }
    ```

48. JS 基础 - 全局作用域
  - 作用域简单来说就是一个变量的作用范围。

    ```javascript
    function f () {
      var a = 1
    }
    f()
    console.log(a)	// 报错，a is not defined
    ```

  - 在 JS 中作用域分成两种：

    - 全局作用域

      - 直接在 script 标签中编写的代码都运行在全局作用域中

      - 全局作用域在打开页面时创建，在页面关闭时销毁

      - 全局作用域中有一个全局对象 window，window 对象由浏览器提供，可以在页面中直接使用，它代表的是整个的浏览器的窗口。

      - 在全局作用域中创建的变量都会作为 window 对象的**属性**保存，在全局作用域中创建的函数都会作为 window 对象的**方法**保存

        ```javascript
        var a = 3
        console.log(window.a)	// 3
        
        function f () {
          console.log('i am f')
        }
        window.f()	// i am f
        
        window.alert('lokit')	// lokit
        ```

      - 在全局作用域中创建的变量和函数可以在页面的任意位置访问，在函数作用域中也可以访问到全局作用域的变量。

      - 尽量不要在全局中创建变量	

        ```javascript
        var a = 10
        console.log(a)	// 10
        
        b = 10
        console.log(b)	// 10, window.b
        
        console.log(c)	// undefined, 变量声明提升，但是不会赋值
        var c = 10
        
        console.log(d)	// 报错，d is not defined, 无变量声明提升
        d = 10
        ```

        

    - 函数声明提前创建

      ```javascript
      f1()	// f1, 声明提前创建
      f2()	// 报错，f2 is not a function, 为 undefined 
      
      // 函数声明式
      function f1 () {
        console.log('f1')
      }
      // 函数表达式
      var f2 = function () {
        console.log('f2')
      }
      ```

49. JS 基础 - 函数作用域
  - 函数作用域是函数执行时创建的作用域，每次调用函数都会创建一个新的函数作用域

  - 函数作用域在函数执行时创建，在函数执行结束时销毁

  - 在函数作用域中创建的变量，不能在全局中访问，私有变量。全局无法到函数

    ```javascript
    function f () {
      var b = 10
    }
    console.log(b)	// b is not defined
    ```

    

  - 当在函数作用域中使用一个变量时，它会先在自身作用域中寻找，如果找到了则直接使用，如果没有找到则到上一级作用域中寻找，如果找到了则使用，找不到则继续向上找。函数可以到全局

    ```javascript
    var a = 10
    function f1 () {
      var a = 'f1中的a'
      function f2 () {
        console.log(a)	// f1中的a
        console.log(window.a)	// 10
      }
      f2()	
      console.log(a)	// f1中的a
    }
    console.log(a)	// 10
    ```

    ```javascript
    // 变量提升也适用于函数作用域
    function f () {
      console.log(a)
      var a = 10
    }
    f()	// undefined
    ```

  - 函数作用域中，不用 var 的变量是全局作用域的变量

    ```javascript
    var b = 20
    function f1 () {
      console.log(b)	// 20，作用域链
      b = 10
    }
    f1()
    console.log(b)	// 10
    ```

  - 定义形参就相当于在函数中声明了变量

    ```javascript
    var c = 10
    function f1 (c) {
      // 相当于加了 var c
      console.log(c)
    }
    f1()	// undefined

    var a = 123
    function f (a) {
      console.log(a)	// undefined
      a = 456	// 修改形参值
    }
    f()
    console.log(a)	// 123
    ```

50. JS 基础 - debug
  - 谷歌浏览器：

  source -> 点击断点 -> 刷新

51. JS 基础 - this
  - 上下文对象

  - 我们每次调用函数时，解析器都会将一个上下文对象作为隐含的参数传递进函数，使用 this 来引用上下文对象

    - this 的不同的情况:
      - 以**函数**的形式调用时，this 是 window
      - 以**方法**的形式调用时，this 就是调用方法的对象
      - 以**构造函数**的形式调用时，this 就是新创建的对象

    ```javascript
    // this 指向的是一个对象，这个对象我们称为函数执行的上下文对象
    function f () {
      console.log(this)	// [object Window]
    }
    f()	// 即 Window.f()
    
    // 根据函数的 调用 形式不同，this 的值也不同
    var obj = {
      name: 'lokit',
      sayName: f
    }
    console.log(obj.sayName == f)	// true
    obj.sayName()	// [object Object],即 obj
    
    
    // 实例
    var name = '全局name'
    function f () {
      console.log(this.name)
    }
    obj1 = {
      name: 'lokit',
      sayName: f
    }
    obj2 = {
      name: 'yico',
      sayName: f
    }
    f()	// 全局name
    obj1.sayName()	// lokit
    obj2.sayName()	// yico
    ```


52. JS 基础 - 使用工厂方法创建对象
  - 批量创建对象

  ```javascript
  function creatPerson (name, gender, age) {
    var obj = new Object()
    obj.name = name
    obj.gender = gender
    obj.age = age
    obj.sayName = function () {
      console.log(this.name)
    }
    return obj
  }
  var obj1 = creatPerson('lokit', 'man', 27)
  var obj2 = creatPerson('yico', 'felman', 25)
  obj1.sayName()	// lokit
  ```

53. JS 基础 - 构造函数
  -  构造函数是专门用来创建对象的函数

  - 构造函数和普通函数的区别就是调用方式的不同：

    - 普通函数是直接调用
    - 构造函数需要使用 new 关键字来调用

  - 构造函数的执行流程：

      1. 创建一个新的对象
      2. 将新的对象作为函数的上下文对象 this，在构造函数中可以使用 this 来引用新建的对象
      3. 执行函数中的代码
      4. 将新建的对象返回

  - 一个构造函数我们也可以称为一个 **类**

    - 通过一个构造函数创建的对象，我们称该对象时这个构造函数的**实例**

    - ```instanceof``` 用来检查一个对象是否是一个类的实例

      ```javascript
      function Person (name, age) {
        this.name = name
        this.age = age
        this.sayName = function () {
          console.log(this.name)
        }
      }
      var p1 = new Person('lokit',28)
      var p2 = new Person('yico',25)
      console.log(p1)	// Person{name:'lokit',age:28}
      console.log(p1 instanceof Person)	// true
      // Object 是所有对象的祖先，所以任何对象和Object做instanceof都会返回true
      console.log(p1 instanceof Object)	// true
      
      function Dog (name, age) {
        this.name = name
        this.age = age
      }
      var d1 = new Dog('mantou',3)
      console.log(d1)	// Dog{name:mantou,age:3}
      ```

    - 改进：构造函数每执行一次就会创建一个唯一的 sayName 方法，浪费空间。改进方法：创建全局方法

      ```javascript
      function Person (name, age) {
        this.name = name
        this.age = age
        this.sayName = f
      }
      // 缺点：污染了全局作用域的命名空间，也不安全，不适合多人开发，改进：原型
      function f () {
        console.log(this.name)
      }
      ```


54. JS 基础 - 原型对象
  - 创建一个函数以后，解析器都会默认在函数中添加一个属性 ```prototype```

    - prototype 属性指向的是一个对象，这个对象我们称为**原型对象**。

  - 当函数作为构造函数使用，它所创建的对象中都会有一个隐含的属性执行该原型对象

    - 这个隐含的属性可以通过 ```对象.__proto__``` 来访问。

  - 原型对象就相当于一个**公共的区域**，凡是通过同一个构造函数创建的对象他们通常都可以访问到相同的原型对象。

    - 我们可以将对象中共有的属性和方法统一添加到原型对象中，

    - 这样我们只需要添加一次，就可以使所有的对象都可以使用。

      ```javascript
      function Person (name, age) {
        this.name = name
        this.age = age
      }
      // 公共区域，所有同个类的实例都可以访问到这个原型对象中的共有内容
      Person.prototype.sayName = function () {
        console.log(this.name)
      }
      var p1 = new Person('lokit',27)
      console.log(p1.__proto__ == Person.prototype)	// true
      p1.sayName()	// lokit
      ```

      

  - 当我们去访问对象的一个属性或调用对象的一个方法时，它会先自身中寻找，

    - 如果在自身中找到了，则直接使用。
    - 如果没有找到，则去原型对象中寻找，如果找到了则使用，
    - 如果没有找到，则去原型的原型中寻找，依此类推。直到找到Object的原型为止，Object的原型的原型为 null，
    - 如果依然没有找到则返回 undefined 

  - 检查对象中是否有某个属性方法：

    - ```in``` 检查方法，对象中没有，原型中有，也会返回 true

    - ```hasOwnProperty``` 检查对象 **自身** 中是否含有某个属性

      ```javascript
      console.log(p1.hasOwnProperty('name'))	// true
      console.log(p1.hasOwnProperty('hasOwnProperty'))	// false，在原型的原型Object对象的属性
      console.log(p1.__proto__.__proto__.hasOwnProperty('hasOwnProperty'))	// true
      console.log(p1.__proto__.__proto__.__proto__)	// null
      ```

55. JS 基础 - toString()
  - 当我们直接在页面中打印一个对象时，事件上是输出的对象的 ```toString()``` 方法的返回值

  ```javascript
  console.log(p1)	// [object Object]
  console.log(p1.__proto__.__proto__.hasOwnProperty('toString'))	// true

  // 更改
  Person.prototype.toString = function () {
    return `Person[name=${this.name},age=${this.age}]`
  }
  console.log(p1)	//Person[name='lokit',age=27]
  ```



56. JS 基础 - 垃圾回收
- GC

- 垃圾过多影响程序运行速度

- 当一个对象没有任何变量或属性引用它时，将无法操作该对象，即垃圾

- js 有自动的垃圾回收机制

- 我们需要做的只是将不用的对象 null

  ```javascript
  var p1 = new Person()
  p1 = null
  ```

  

57. JS 基础 - 数组简介
- 内建对象，宿主对象，自定义对象

- 数组也是一个对象，是一个用来存储数据的对象

  - 和 Object 类似，但是它的存储效率比普通对象要高
  - 数组中保存的内容我们称为**元素**
  - 数组使用**索引**（index）来操作元素
  - 索引指由**0**开始的整数
  - 索引类似于对象的属性概念

- 数组的操作：

  - 创建数组

    ```javascript
    var arr = new Array();
    var arr = [];
    console.log(typeof arr)	// object
    ```

  - 向数组中添加元素

    ```javascript
    // 数组对象[索引] = 值;
    arr[0] = 123;
    arr[1] = "hello";
    ```

  - 读元素

    ```javascript
    console.log(arr[0])	// 123
    console.log(arr[3])	// undefined
    ```

  - 创建数组时直接添加元素

    ```javascript
    var arr = [123,"hello",true,null];
    ```

  - 获取和修改数组的长度

    - 使用 ```length``` **属性**来操作数组的长度
    - 对于**连续**的数组，length获取到的就是数组中元素的个数
    - length 获取到的是数组的最大索引 +1，适用于非连续数组
    - 如果修改后的 length 大于原长度，则多出的部分会空出来
    - 如果修改后的 length 小于原长度，则原数组中多出的元素会被删除

    ```javascript
    // 获取
    var arr = new Array()
    arr[10] = 1
    console.log(arr.length)	// 11
    
    // 修改
    arr.length = 3
    console.log(arr)	// [,,]
    ```

  - 向数组的最后添加元素

    ```javascript
    // 数组[数组.length] = 值;
    arr[arr.length] = 20
    ```

    

58. JS 基础 - 数组字面量
- 字面量创建数组

  ```javascript
  var arr = []
  ```

- 创建时指定数组元素

  ```javascript
  var arr = [123,"hello",true,null];
  ```

- 构造函数创建

  ```javascript
  var arr = new Array(1,2,3,6)
  
  // 区别
  arr = [10]	// 元素10
  arr = new Array(10)	// 长度为10
  ```

- 数组的元素可以是任意类型

  

59. JS 基础 - 数组的四个方法

60. JS 基础 - 数组的遍历

61. JS 基础 - 数组练习

62. JS 基础 - forEach

63. JS 基础 - slice 和 splice

64. JS 基础 - 数组去重

65. JS 基础 - 数组的剩余方法

66. JS 基础 - call 和 apply

67. JS 基础 - arguments

68. JS 基础 - Date 对象

69. JS 基础 - Math

70. JS 基础 - 包装类

71. JS 基础 - 字符串的方法

72. JS 基础 - 正则表达式的简介

73. JS 基础 - 正则语法

74. JS 基础 - 字符串和正则相关的方法

75. JS 基础 - 正则表达式语法

76. JS 基础 - 邮件的正则