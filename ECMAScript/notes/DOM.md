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