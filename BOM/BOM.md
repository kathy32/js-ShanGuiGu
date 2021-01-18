# 目录

1. JS 基础 - Navigator
2. JS 基础 - History
3. JS 基础 - Location
4. JS 基础 - 定时器简介
5. JS 基础 - 切换图片练习
6. JS 基础 - 修改 div 移动练习
7. JS 基础 - 延时调用
8. JS 基础 - 定时器的应用
9. JS 基础 - 完成轮播图洁面
10. JS 基础 - 完成点击按钮切换图片
11. JS 基础 - 类的操作
12. JS 基础 - 二级菜单 - 完成基本功能
13. JS 基础 - 二级菜单 - 过渡效果
14. JS 基础 - JSON

# 目录

1. JS 基础 - Navigator

   - BOM 浏览器对象模型

   - BOM 可以使我们通过 js 来操作浏览器，在 BOM 中为我们提供了一组对象，用来完成浏览器的操作

   - BOM 对象：

     - ```Window``` 代表的是**整个浏览器窗口**，同时 window 也是网页中的全局对象
     - ```Navigator``` 代表的**当前浏览器的信息**，通过该对象可以识别不同的浏览器
     - ```Location``` 代表**当前浏览器的地址信息**，通过 Location 可以获取地址栏信息，或者操作浏览器跳转页面
     - ```History``` 代表浏览器的**历史记录**，可以通过该对象来操作浏览器的历史记录，
       - 由于隐私原因，该对象不能获取到具体的历史记录，
       - 只能操作浏览器向前或向后翻页，
       - 而且该操作只在当次访问时有效
     - ```Screen``` 代表用户的**屏幕信息**，通过该对象可以获取到用户的显示器相关信息

   - 这些 BOM 对象在浏览器中都是作为 window 对象的**属性**保存的，可以通过 window 对象来使用，也可以直接使用

   - 由于历史原因 ```navigator.appName``` 已经不能用于识别浏览器了

     - 一般使用 ```userAgent``` 来判断浏览器的信息

     -  ```userAgent``` 是一个字符串，包含用来描述浏览器信息的内容

       ```javascript
       console.log(navigator.userAgent)
       // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36
       ```

     - IE11 中将微软和 IE 相关标识去除了，不能使用 ```userAgent``` 识别

       ```javascript
       var ua = navigator.userAgent
       if (/firefox/i.test(ua)) {
         console.log('火狐')
       } else if (/chrome/i.test(ua)) {
         console.log('谷歌')
       } else if (/msie/i.test(ua)) {
         console.log('IE')
       } else if ('ActiveXObject' in window) {
         console.log('IE11')
       }
       ```

       

2. JS 基础 - History
  - 可以用来操作浏览器向前向后翻页

  - ```history.length``` 属性获取当次访问链接数量

  - ```history.back()``` 方法用来回退到上一个页面

  - ```history.forward()``` 方法用来前进到下一个页面

  - ```history.go()```  跳转到指定页面

    - 1:表示向前跳转一个页面

    - 2:向前跳转两个页面

    - -1:向后跳转一个页面

    - -2:向后跳转两个页面

    

3. JS 基础 - Location

4. JS 基础 - 定时器简介

5. JS 基础 - 切换图片练习

6. JS 基础 - 修改 div 移动练习

7. JS 基础 - 延时调用

8. JS 基础 - 定时器的应用

9. JS 基础 - 完成轮播图洁面

10. JS 基础 - 完成点击按钮切换图片

11. JS 基础 - 类的操作

12. JS 基础 - 二级菜单 - 完成基本功能

13. JS 基础 - 二级菜单 - 过渡效果

14. JS 基础 - JSON