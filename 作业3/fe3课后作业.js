// 16/09/20
// 作业 3
//
// 作业开始
// 注意, 作业中提到的颜色我们不关心

// 1
// 实现一个矩形函数
// x y 是矩形左上角坐标
// w h 是宽高
// rect(x, y, w, h)
let rect = function(x, y, w, h) {
    jump(x, y)
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}
rect(0, 0, 30, 20)

// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
let center_rect = function(x, y, w, h) {
    jump(x - (w / 2), y - (h / 2))
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
    jump(x, y)
}
center_rect(0, 0, 30, 20)


// 3
// 实现一个圆形函数
// x y 是圆心坐标
// r 是半径
// circle(x, y, r)
let circle = function(x, y, r) {
    let PI = 3.14
    // 周长
    let c = 2 * PI * r
    let n = 36
    // 边长
    let l = c / n
    let angle = 360 / n
    jump(x, y - r)
    let i = 0
    while (i < n) {
        forward(l)
        right(angle)
        i++
    }
    jump(x, y)
}
circle(0, 0, 50)
#
// 提示, 我们以正 36 边形为圆

// 4
// 实现一个五角星函数
// x y 是五角星横边左边坐标
// length 是一条线的长度
// wujcxy(x, y, length)
let wujcxy = function(x, y, length) {
    jump(x, y)
    let i = 0
    while (i < 5) {
        forward(length)
        left(72)
        forward(length)
        right(144)
        i++
    }
}
wujcxy(0, 0, 50)


// 5
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
let circle = function(x, y) {
    let PI = 3.14
    let r = 20
    // 周长
    let c = 2 * PI * r
    let n = 36
    // 边长
    let l = c / n
    let angle = 360 / n
    jump(x, y - r)
    let i = 0
    while (i < n) {
        forward(l)
        right(angle)
        i++
    }
}
let japan = function(x, y, w, h) {
    jump(x - (w / 2), y - (h / 2))
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
    jump(x, y)
    circle(x, y)
    jump(x, y)
}
japan(0, 0, 100, 70)
#
// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理

// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要5个五角星即可）
// china()
let china = function(x, y, w, h) {
    jump(x, y)
    let i = 0
    setPenColor("red")
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
    jump(x + 12, y + 24)
    let k1 = 0
    while (k1 < 5) {
        forward(9)
        left(72)
        forward(9)
        right(144)
        k1++
    }
    jump(x + 54, y + 12)
    let k2 = 0
    while (k2 < 5) {
        forward(3)
        left(72)
        forward(3)
        right(144)
        k2++
    }
    jump(x + 66, y + 24)
    let k3 = 0
    while (k3 < 5) {
        forward(3)
        left(72)
        forward(3)
        right(144)
        k3++
    }
    jump(x + 66, y + 42)
    let k4 = 0
    while (k4 < 5) {
        forward(3)
        left(72)
        forward(3)
        right(144)
        k4++
    }
    jump(x + 54, y + 54)
    let k5 = 0
    while (k5 < 5) {
        forward(3)
        left(72)
        forward(3)
        right(144)
        k5++
    }
}
china(0, 0, 180, 120)

// 7
// 实现一个函数画法国国旗
// france()
let rect = function(x, y, w, h) {
    jump(x, y)
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}
let france = function(x, y, w, h) {
    rect(x, y, w, h)
    jump(x + (w / 3), y)
    right(90)
    forward(h)
    jump(x + (2 * w) / 3, y)
    forward(h)
    jump(x, y)
}
france(0, 0, 60, 40)

// 8
// 画德国国旗
// germany()
let rect = function(x, y, w, h) {
    jump(x, y)
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}
let germany = function(x, y, w, h) {
    rect(x, y, w, h)
    jump(x, y + (h / 3))
    forward(w)
    jump(x, y + ((2 * h) / 3))
    forward(w)
    jump(x, y)
}
germany(0, 0, 100, 60)

// 9
// 画 冈比亚国旗
// gambia()
let rect = function(x, y, w, h) {
    jump(x, y)
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}
let gambia = function(x, y, w, h) {
    rect(x, y, w, h)
    jump(x, y + (h / 3))
    forward(w)
    jump(x, y + (h / 3) + (h / 15))
    forward(w)
    jump(x, (y + h) - (h / 3))
    forward(w)
    jump(x, (y + h) - ((h / 3) + (h / 15)))
    forward(w)
    jump(x, y)
}
gambia(0, 0, 150, 100)
// 10
// 画 瑞士国旗
// switzerland()
let center_rect = function(x, y) {
    let l = 110
    jump(x - (l / 2), y - (l / 2))
    let i = 0
    while (i < 4) {
        forward(l)
        right(90)
        i++
    }
    jump(x, y)
}
let switzerland = function(x, y, w, h) {
    jump(x - (w / 2), y - (h / 2))
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
    jump(x - (h / 2), y - (w / 2))
    let k = 0
    while (k < 2) {
        forward(h)
        right(90)
        forward(w)
        right(90)
        k++
    }
    center_rect(x, y)
}
switzerland(0, 0, 80, 24)
// 11
// 画朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()
let rect = function(x, y, w, h) {
    jump(x, y)
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}
let circle = function(x, y, r) {
    let PI = 3.14
    // 周长
    let c = 2 * PI * r
    let n = 36
    // 边长
    let l = c / n
    let angle = 360 / n
    jump(x, y - r)
    let i = 0
    while (i < n) {
        forward(l)
        right(angle)
        i++
    }
    jump(x, y)
}
let wujcxy = function(x, y, length) {
    jump(x, y)
    let i = 0
    while (i < 5) {
        forward(length)
        left(72)
        forward(length)
        right(144)
        i++
    }
}
let northkorea = function(x, y, w, h) {
    rect(x, y, 200, 100)
    jump(x + 30, y + 40)
    wujcxy(x + 30, y + 40, 15)
    circle(x + 48, y + 48, 23)
    jump(x, y + (h / 6))
    forward(w)
    jump(x, y + (h / 6) + (h / 30))
    forward(w)
    jump(x, (y + h) - (h / 6))
    forward(w)
    jump(x, (y + h) - ((h / 6) + (h / 30)))
    forward(w)
    jump(x, y)
}
northkorea(0, 0, 200, 100)

// 皮
let rect = function(x, y, w, h) {
    jump(x, y)
    let i = 0
    while (i < 2) {
        forward(w)
        right(90)
        forward(h)
        right(90)
        i++
    }
}
let circle = function(x, y, r) {
    let PI = 3.14
    // 周长
    let c = 2 * PI * r
    let n = 36
    // 边长
    let l = c / n
    let angle = 360 / n
    jump(x, y - r)
    let i = 0
    while (i < n) {
        forward(l)
        right(angle)
        i++
    }
    jump(x, y)
}
let wujcxy = function(x, y, length) {
    jump(x, y)
    let i = 0
    while (i < 5) {
        forward(length)
        left(72)
        forward(length)
        right(144)
        i++
    }
}
let northkorea = function(x, y, w, h) {
    rect(x, y, 200, 100)
    jump(x + 30, y + 40)
    wujcxy(x + 30, y + 43, 15)
    circle(x + 48, y + 50, 23)
    jump(x, y + (h / 6))
    forward(w)
    jump(x, y + (h / 6) + (h / 30))
    forward(w)
    jump(x, (y + h) - (h / 6))
    forward(w)
    jump(x, (y + h) - ((h / 6) + (h / 30)))
    forward(w)
    jump(x, y)
}
northkorea(-100, -100, 200, 100)
