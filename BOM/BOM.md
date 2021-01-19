# 目录

1. JS 基础 - Navigator
2. JS 基础 - History
3. JS 基础 - Location
4. JS 基础 - 定时器简介
5. JS 基础 - 切换图片练习
6. JS 基础 - 修改 div 移动练习
7. JS 基础 - 延时调用
8. JS 基础 - 定时器的应用
9. JS 基础 - 完成轮播图界面
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
  - 如果直接打印 ```location``` ，则可以获取到地址栏的信息（当前页面的完整路径）

  - 如果直接将 ```location``` 属性修改为一个完整的路径，或相对路径，则页面会自动跳转到该路径，并生成相应的历史记录

    ```javascript
    location = 'http://www.baidu.com'
    location = '01.BOM.html'
    ```

  - 其他属性：

    - ```hash``` #开始的
    - ```host``` 主机名和端口号
    - ```hostname``` 当前 URL 主机名
    - ```href  ```返回完整的 URL
    - ```pathname``` URL 路径部分
    - ```port``` URL 端口号

  - 方法：

    - ```assign()``` 跳转到其他页面，功能同直接修改 location 值

      ```javascript
      location.assign('http://www.baidu.com')
      ```

    - ```reload()``` 用于重新加载当前页面，作用和刷新按钮一样

      ```javascript
      location.reload(true)	// true 表示强制清空缓存，作用同 ctrl+F5
      ```

    - ```replace()``` 用于一个新的页面替换当前页面，

      - 调用完毕也会跳转页面，
      - 但是不会生产历史记录，不能回退

      ```javascript
      location.replace('http://www.baidu.com')
      ```

      

4. JS 基础 - 定时器简介
  - ```setInterval()``` 定时调用，可以将一个函数，每隔一段时间执行一次

    - 返回值：
      - 返回一个 Number 类型的数据
      - 这个数字用来作为定时器的**唯一标识**

    - 参数：

      - 1.回调函数，该函数会每隔一段时间被调用一次
      - 2.每次调用间隔的时间，单位是毫秒

      ```javascript
      var num = 1
      var timer = setInterval(function () {
        num++
        if (num === 32) {
          clearInterval(timer)
        }
      },1000)
      
      ```

  - ```clearInterval()``` 可以用来关闭一个定时器，

    - 方法中需要一个**定时器的标识符**作为参数，这样将关闭标识对应的定时器

    

5. JS 基础 - 切换图片练习
```01.changeImg.html```

6. JS 基础 - 修改 div 移动练习
  - 解决第一次到第二次之间的卡顿问题

  ```DOM/17.divMoveKeyEvent.html```

7. JS 基础 - 延时调用
  - 延时调用一个函数不立即执行，而是隔一段时间以后再执行，而且只执行一次

    ```javascript
    var num = 1
    var timer = setTimeout(function () {
      console.log(num++)
    },200)
    // 使用 clearTimeout() 来关闭一个延时调用
    clearTimeout(timer)
    ```

  - 延时调用和定时调用区别：

    - 定时调用会多次执行
    - 延时调用只执行一次

  - 延时调用和定时调用实际上是可以相互替代的，根据需求用

  - 因为 `setInterval` 在一些情况下，会导致前后两次定时器代码的执行间隔产生不可预料的变化，甚至会**跳过某次定时器代码的执行**，所以可用 `setTimeout` 实现 `setInterval` 的功能。

    ```javascript
    const repeat = (func, ms) => {
      setTimeout(() => {
        func()
        repeat(func, ms)	// 递归
      }, ms)
    }
    ```

  

8. JS 基础 - 定时器的应用
```02.setInterval.html```



9. JS 基础 - 完成轮播图界面

10. JS 基础 - 完成点击按钮切换图片

11. JS 基础 - 类的操作

12. JS 基础 - 二级菜单 - 完成基本功能

13. JS 基础 - 二级菜单 - 过渡效果

14. JS 基础 - JSON