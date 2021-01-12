# 目录

1. JS 基础 - DOM 简介
2. JS 基础 - 事件的简介
3. JS 基础 - 文档的加载
4. JS 基础 - DOM 查询
5. JS 基础 - 图片切换的练习
6. JS 基础 - DOM 查询
7. JS 基础 - 全选练习
8. JS 基础 - DOM 查询的剩余方法
9. JS 基础 - DOM 增删改
10. JS 基础 - 添加删除修改
11. JS 基础 - a 的索引问题
12. JS 基础 - 操作内联样式
13. JS 基础 - 获取元素的样式
14. JS 基础 - getStyle() 方法
15. JS 基础 - 其他样式相关的属性
16. JS 基础 - 事件对象
17. JS 基础 - div 跟随鼠标移动
18. JS 基础 - 事件的冒泡
19. JS 基础 - 事件的委派
20. JS 基础 - 事件的绑定
21. JS 基础 - 完成 bind 函数
22. JS 基础 - 事件的传播
23. JS 基础 - 拖拽
24. JS 基础 - 滚轮的事件
25. JS 基础 - 键盘事件
26. JS 基础 - 键盘移动 div



# 目录

1. JS 基础 - DOM 简介
  - Document Object Model

  - 文档对象模型，通过DOM可以来任意来修改HTML网页中各个内容

  - 文档

    - 文档指的是网页，一个网页就是一个文档

  - 对象

    - 对象指将网页中的每一个**节点**都转换为对象
    - 转换完对象以后，就可以以一种纯面向对象的形式来操作网页了

  - 模型

    - 模型用来表示节点和节点之间的**关系**，方便操作页面

  - 节点（Node）

    - 节点是构成网页的最基本的单元，网页中的每一个部分都可以称为是一个节点

    - 虽然都是节点，但是节点的类型却是不同的

    - 常用的节点：

      - **文档**节点 （Document），代表整个网页
      - **元素**节点（Element），代表网页中的标签
      - **属性**节点（Attribute），代表标签中的属性
      - **文本**节点（Text），代表网页中的文本内容

    - DOM操作

      - DOM查询

      - 在网页中浏览器已经为我们提供了document对象，

        - 它代表的是整个网页，它是window对象的属性，可以在页面中直接使用。

          ```javascript
          console.log(document)	// [object HTMLDocument]
          ```

          

      - document查询方法：

        - 根据元素的 id 属性查询一个元素节点对象：```document.getElementById("id属性值");```

          ```html
          <body>
            <button id="btn">按钮</button>
            <script>
              var btn = document.getElementById('btn')
              console.log(btn)
              btn.innerHTML = 'button'	// 按钮 -> 修改为英文 button
            </script>
          </body>
          ```

          

        - 根据元素的 name 属性值查询一组元素节点对象:```document.getElementsByName("name属性值");```

        - 根据 标签名 来查询一组元素节点对象：```document.getElementsByTagName("标签名");```

      - 元素的属性：

        - 读取元素的属性：

          - 语法：元素.属性名

            ```javascript
            ele.name
            ele.id  
            ele.value 
            ele.className
            ```

            

        - 修改元素的属性：

          - 语法：元素.属性名 = 属性值

        - innerHTML

          - 使用该属性可以获取或设置元素内部的HTML代码

          
2. JS 基础 - 事件的简介
  - 事件指的是用户和浏览器之间的交互行为。比如：点击按钮、关闭窗口、鼠标移动...

  - 我们可以为事件来绑定**回调函数**来响应事件

  - 绑定事件的方式：

    - 可以在标签的事件**属性**中设置相应的JS代码

      ```html
      <button onclick="js代码。。。">按钮</button>
      ```

      

    - 可以通过为对象的指定事件属性设置**回调函数**的形式来处理事件

      ```html
      <button id="btn">按钮</button>
      <script>
        var btn = document.getElementById("btn");
        btn.onclick = function(){
      
        };
      </script>
      ```

    
3. JS 基础 - 文档的加载
  - 浏览器在加载一个页面时，是按照**自上向下**的顺序加载的，加载一行执行一行。

  - 如果将js代码编写到页面的上边，当代码执行时，页面中的DOM对象还没有加载，

    - 此时将会无法正常获取到DOM对象，导致DOM操作失败。
    - 阻塞页面渲染

  - 解决方式一：

    - 可以将js代码编写到body的下边

      ```html
      <body>
        <button id="btn">按钮</button>
        <script>
            var btn = document.getElementById("btn");
            btn.onclick = function(){
      
            };
        </script>
      </body>
      ```

      

  - 解决方式二：

    - 将js代码编写到```window.onload = function(){}```中

    - window.onload 对应的回调函数会在**整个页面加载完毕以后**才执行

    - 所以可以确保代码执行时，DOM对象已经加载完毕了

      ```html
      <script>
        window.onload = function(){
          var btn = document.getElementById("btn");
          btn.onclick = function(){
      
          };
        };
      </script>
      <button id="btn">按钮</button>
      ```

    
4. JS 基础 - DOM 查询
  - document查询方法：

  - 根据元素的 id 属性查询**一个**元素节点对象：```document.getElementById("id属性值");```

    ```html
    <body>
      <button id="btn">按钮</button>
      <script>
        var btn = document.getElementById('btn')
        console.log(btn)
        btn.innerHTML = 'button'	// 按钮 -> 修改为英文 button
      </script>
    </body>
    ```

    

  - 根据元素的 name 属性值查询**一组**元素节点对象:```document.getElementsByName("name属性值");```

  - 根据 标签名 来查询**一组**元素节点对象：```document.getElementsByTagName("标签名");```

  - ```01.getDom.html``` 部分代码

    ```javascript
    var myClick = function (btn, fun) {
      var btn = document.getElementById(btn)
      btn.onclick = fun
    }
    
    window.onload = function () {
      // 1. 查找#bj节点
      myClick('btn01', function () {
        var bj = document.getElementById('bj')
        alert(bj) // [object HTMLLIElement]
        alert(bj.innerHTML) // 北京
      })
    
      // 2. 查找所有li节点
      myClick('btn02', function () {
        var liList = document.getElementsByTagName('li')
        // 类数组对象，即使一个元素也是类数组返回
        alert(liList) // [object HTMLCollection]
        alert(liList.length)  // 11
      })
    
      // 3. 查找name=gender的所有节点
      myClick('btn03', function () {
        var gender = document.getElementsByName('gender')
        alert(gender) // [object NodeList]
        alert(gender.length)  // 2
        for (var i=0; i<gender.length; i++) {
          // innerHTML 用于获取元素内部的 HTML 代码
          // 对于自结束标签，这个属性没有意义
          // alert(gender[i].innerHTML)  // 空白
    
          // 如果需要读取原属属性，直接 . 运算读取
          // 注意：读取 HTML 中 class，在 js 中是 className
          alert(gender[i].value)
        }
      })
    }
    ```

  
5. JS 基础 - 图片切换的练习


  ```javascript
  var prev = document.getElementById('prev')
  var next = document.getElementById('next')
  var img = document.getElementsByTagName('img')[0]
  var info = document.getElementById('info')

  var imgArr = ['./img/1.png','./img/2.png','./img/3.png','./img/4.png']
  var index = 0

  info.innerHTML = `一共${imgArr.length}张，当前第${index+1}张`

  prev.onclick = function () {
    index--
    if (index < 0) {
      index = imgArr.length-1
    }
    img.src = imgArr[index]
    info.innerHTML = `一共${imgArr.length}张，当前第${index+1}张`
  }

  next.onclick = function () {
    index++
    if (index > imgArr.length - 1) {
      index = 0
    }
    img.src = imgArr[index]
    info.innerHTML = `一共${imgArr.length}张，当前第${index+1}张`
  }
  ```


6. JS 基础 - DOM 查询
  - 通过具体的**元素节点**来查询

  - ```元素.getElementsByTagName()```

    - 通过标签名查询当前元素的指定**后代元素**

  - ```元素.childNodes```

    - 获取当前元素的所有**子节点**
    - 会获取到空白的文本子节点

  - ```元素.children```

    - 获取当前元素的所有**子元素**

  - ```元素.firstChild```

    - 获取当前元素的第一个子节点

  - ```元素.firstElementChild```

    - 获取当前元素的第一个子元素
    - 兼容性差，IE8 以下不兼容

  - ```元素.lastChild```

    - 获取当前元素的最后一个子节点

  - ```元素.parentNode```

    - 获取当前元素的父**元素**

  - ```元素.previousSibling```

    - 获取当前元素的前一个兄弟**节点**

  - ```元素.previousElementSibling```

    - 获取当前元素的前一个兄弟**元素**
    - 兼容性差

  - ```元素.nextSibling```

    - 获取当前元素的后一个兄弟节点

  - 具体例子看 ```01.getDom.html```

  
7. JS 基础 - 全选练习
```03.checkBox.html```


8. JS 基础 - DOM 查询的剩余方法
  - ```document.all```

    - 获取页面中的所有元素，相当于```document.getElementsByTagName("*");```

      ```html
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <script>
          window.onload = function () {
            var all = document.all
            alert(all.length) // 9
            for (let i=0; i<all.length; i++) {
              /*
              * [object HTMLHtmlElement]
              * [object HTMLHeadElement]
              * [object HTMLMetaElement]
              * [object HTMLMetaElement]
              * [object HTMLTitleElement]
              * [object HTMLBodyElement]
              * [object HTMLScriptElement]
              * [object HTMLDivElement]
              * [object HTMLDivElement]
              */
              alert(all[i]) 
            }
            }
        </script>
      
        <div id="contaner">
          <div></div>
        </div>
      </body>
      </html>
      ```

      

  - ```document.documentElement```

    - 获取页面中```html```根元素

      ```html
      <body>
        <script>
          window.onload = function () {
            var html = document.documentElement
            alert(html) // [object HTMLHtmlElement]
          }
        </script>
      
        <div id="contaner">
          <div></div>
        </div>
      </body>
      ```

      

  - ```document.body```

    - 获取页面中的```body```元素

      ```html
      <body>
        <script>
          window.onload = function () {
            var body = document.body
            alert(body) // [object HTMLBodyElement]
          }
        </script>
      </body>
      ```

      

  - ```document.getElementsByClassName()```

    - 根据元素的class属性值查询一组元素节点对象
    - 这个方法不支持IE8及以下的浏览器

  - ```document.querySelector()```

    - 根据**CSS选择器**去页面中查询一个元素
    - 如果匹配到的元素有多个，则它会返回查询到的**第一个元素**

  - ```document.querySelectorAll()```

    - 根据CSS选择器去页面中查询一组元素
    - 会将匹配到所有元素封装到一个**数组**中返回，即使只匹配到一个

    ```html
    <body>
      <script>
        window.onload = function () {
          // 方式一
          var items1 = document.getElementsByClassName('items')
          alert(items1.length) // 3
    
          // 方式二
          var items2 = document.querySelector('#contaner div')
          alert(items2) // [object HTMLDivElement],返回第一个匹配的元素
    
          // 方式三
          var items3 = document.querySelectorAll('#contaner div')
          alert(items3.length)  // 3，返回类数组
        }
      </script>
    
      <div id="contaner">
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
      </div>
    </body>
    ```

    
9. JS 基础 - DOM 增删改
  - ```document.createElement()``` 可以根据标签名**创建**一个**元素**节点对象
  - ```document.createTextNode()``` 可以根据文本内容**创建**一个**文本**节点对象
  - ```父节点.appendChild(子节点)``` 向父节点中**添加**指定的子节点
  - ```父节点.insertBefore(新节点,旧节点)``` 将一个新的节点**插入**到旧节点的前边
  - ```父节点.replaceChild(新节点,旧节点)``` 使用一个新的节点去**替换**旧节点
  - ```父节点.removeChild(子节点)``` **删除**指定的子节点
    - 推荐方式：```子节点.parentNode.removeChild(子节点)```

  - ```04.DomMethod.html```

    
10. JS 基础 - 添加删除修改


  ```javascript
  window.onload = function () {
    var aTags = document.getElementsByTagName('a')

    for (let i=0; i<aTags.length; i++) {

      aTags[i].onclick = function () {
        var tr = this.parentNode.parentNode // 重难点！
        var name = tr.getElementsByTagName('td')[0].innerHTML

        var flag = confirm(`确定删除${name}吗？`)
        if (flag) {
          tr.parentNode.removeChild(tr)
        }

        return false
      }
    }
  }
  ```



11. JS 基础 - a 的索引问题
  ```javascript
  var allA = document.getElementsByTagName('a')
  for (var i=0; i<allA.length; i++) {
      allA[i].onclick = function () {
        // 此处的 this 不能为 allA[i]
        // for 循环是同步执行
        // onclick 回调函数是异步执行
        // 二者 i 不统一
        // 回调函数中的 i 一直为 3（长度）
        var tr = this.parentNode.parentNode // 重难点！
        var name = tr.getElementsByTagName('td')[0].innerHTML

        var flag = confirm(`确定删除${name}吗？`)
        if (flag) {
          tr.parentNode.removeChild(tr)
        }

        return false
      }
  }
  ```


12. JS 基础 - 操作内联样式
  - 使用 style 属性来操作元素的内联样式

  - 读取内联样式
    - 语法：```元素.style.样式名```
    - 注意：如果样式名中带有```-```，则需要将样式名修改为驼峰命名法, 将```-```去掉，然后```-```后的字母改大写。如： ```background-color --> backgroundColor```
  - 修改内联样式：
    - 语法：```元素.style.样式名 = 样式值```
    - 通过style修改的样式都是内联样式，由于**内联样式的优先级比较高**，
    - 所以我们通过JS来修改的样式，往往会立即生效，
    - 但是如果样式中设置了!important，则内联样式将不会生效。

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      #box {
        width: 200px;
        height: 200px;
        background-color: red;
      }
    </style>
  </head>
  <body>
    <script>
      window.onload = function () {
        var box = document.getElementById('box')
        var btn01 = document.getElementById('btn01')
        var btn02 = document.getElementById('btn02')

        btn01.onclick = function () {
          box.style.width = '300px'
          box.style.height = '300px'
          box.style.backgroundColor = 'blue'
        }

        btn02.onclick = function () {
          // 只能读取内联样式
          alert(box.style.width)
        }
      }
    </script>

    <div id="contaner">
      <button id="btn01">按钮1</button>
      <button id="btn02">按钮2</button>
      <div id="box"></div>
    </div>
  </body>
  </html>
  ```


13. JS 基础 - 获取元素的样式
  - 读取元素的当前样式

  - 正常浏览器

    - 使用```getComputedStyle()```

    - 这个方法是 window 对象的方法，可以返回一个对象，这个对象中保存着当前元素生效样式

    - 参数：

      - 要获取样式的元素
      - 可以传递一个伪元素，一般传 null

    - 例子：

      ```javascript
      // 获取元素的宽度
      getComputedStyle(box , null)["width"];
      ```

    - 通过该方法读取到样式都是**只读**的不能修改

  - IE8

    - 使用 ```currentStyle```

    - 语法: ```元素.currentStyle.样式名```

    - 例子：

      ```javascript
      box.currentStyle["width"]
      ```

    - 通过这个属性读取到的样式是只读的不能修改

    
14. JS 基础 - getStyle() 方法
  ```javascript
  btn03.onclick = function () {
    var w = getStyle(box, 'width')
    alert(w)  // 200px
  }

  function getStyle (obj, name) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj,null)[name]
    } else {
      return obj.getComputedStyle[name]
    }
  }
  ```


15. JS 基础 - 其他样式相关的属性
16. JS 基础 - 事件对象
17. JS 基础 - div 跟随鼠标移动
18. JS 基础 - 事件的冒泡
19. JS 基础 - 事件的委派
20. JS 基础 - 事件的绑定
21. JS 基础 - 完成 bind 函数
22. JS 基础 - 事件的传播
23. JS 基础 - 拖拽
24. JS 基础 - 滚轮的事件
25. JS 基础 - 键盘事件
26. JS 基础 - 键盘移动 div