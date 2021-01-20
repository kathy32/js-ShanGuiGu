// 1. 获取样式
function getStyle (obj, name) {
  if (window.getComputedStyle) {  // IE8，getComputedStyle 是 window 一个属性
    return getComputedStyle(obj, null)[name]
  } else {
    return obj.getComputedStyle[name]
  }
}


// 2. 封装一个动画函数
/*
 * 参数：
 *  obj：要执行动画的对象
 *  attr: 要执行动画的样式，如: left,top,width,height
 *  target: 执行动画目标位置
 *  speed: 移动速度（正右，负左）
 *  callback: 回调函数，动画执行完之后回调
 */
// var timer
function move (obj, attr, target, speed, callback) {

  clearInterval(obj.timer)

  var current = parseInt(getStyle(obj, attr))
  if (current > target) {
    speed = -speed  // 向左移动需要的速度
  }

  // 向执行动画的对象中添加一个 timer 属性，用来保存它 自己的 定时器标识
  obj.timer = timer = setInterval(function () {
    var oldVal = parseInt(getStyle(obj, attr))
    var newVal = oldVal + speed 
    // 向左移动，判断是否小于 target
    // 向右移动，判断是否大于 target
    if ((speed<0 && newVal<target) || (speed>0 && newVal>target)) {
      newVal = target
    }
    obj.style[attr] = newVal + 'px'

    // 停止
    // 注意：clearInterval() 写在 setInterval() 里面！！！
    if (newVal === target) {
      clearInterval(obj.timer)
      callback && callback()
    }
  },30)
}


// 3. 定义一个函数，用来向一个元素中添加指定的 class 属性值
/*
  * 参数：
  *   obj 要添加 class 属性的元素
  *   cn  要添加的 class 值
  */
function addClass (obj, cn) {
  if (!hasClass(obj, cn)) {
    obj.className += ' ' + cn
  }
}

// 4. 判断一个元素中有没有指定的 class 属性值
function hasClass (obj, cn) {
  var reg = new RegExp('\\b' + cn + '\\b')
  return reg.test(obj.className)
}

// 5. 删除一个指定的 class
function removeClass (obj, cn) {
  var reg = new RegExp('\\b' + cn + '\\b')
  obj.className = obj.className.replace(reg, '')
}

// 6. 切换类，有删，无加
function toggleClass (obj, cn) {
  if (!hasClass(obj, cn)) {
    addClass(obj, cn)
  } else {
    removeClass(obj, cn)
  }
}