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