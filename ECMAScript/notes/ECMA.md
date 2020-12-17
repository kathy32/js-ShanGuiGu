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