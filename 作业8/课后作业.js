// 2016/10/02
//
// ============
// 作业 8
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


// 定义我们的 log 函数
var log = console.log.bind(console)


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}

// 定义一个增强的 ensureEqual
var ensureEqual = function(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// 作业 1
// 实现函数
// 多看提示多讨论
/*
delimiter 是 string
array 是包含 string 的 array

把 array 中的元素用 delimiter 连接成一个字符串并返回
具体请看测试
*/
// JSON.stringify()
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var join = function(delimiter, array) {
    let result = ''
    for (var i = 0; i < array.length; i++) {
        let e = array[i]
        if (i + 1 === array.length) {
            result = result + e
        } else {
            result = result + e + delimiter
        }
    }
    log(JSON.stringify(result))
    return result
}
// join('\n', ['multi', 'line', 'string'])

var test_join = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}
// test_join()

// 作业 2
// 实现函数
/*
s 是 string
delimiter 是 string, 默认为空格 ' '

以 delimiter 为分隔符号, 返回一个 array
例如
split('1 2 3') 返回 ['1', '2', '3']
split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
注意, 测试 array 是否相等得自己写一个函数用循环来跑
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var split = function(s, delimiter=' ') {
    let result
    result = s.split(delimiter)
    return result
}
split('1 2 3', ' ')
split('a=b&c=d', '&')



// 作业 3
// 实现函数
/*
n 是 int
返回这样规律的字符串, 特殊情况不考虑
n       返回值
1       '1'
2       '121'
3       '12321'
*/
var str1 = function(n) {
    for (var i = 0; i < n; i++) {
        qian = i + 1
        log(qian)
        // hou = qian - 1
        // log(hou)
    }
}
str1(4)


// 作业 4
// 实现函数
var str2 = function(n) {
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       'A'
    2       'ABA'
    3       'ABCBA'
    */
}



// 作业 5
// 实现函数
/*
start end 都是 int

返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
[1, 2, 3, 4]
*/
var range1 = function(start, end) {
    let result = []
    for (var i = start; i < end; i++) {
        result.push(i)
    }
    log(result)
}
range1(1, 6)

// 作业 6
// 实现函数
/*
start end step 都是数字
step 是大于 0 的正整数

返回一个 array
假设 start=1, end=5, step=1 返回数据如下
[1, 2, 3, 4]
假设 start=0, end=6, step=2 返回数据如下
[0, 2, 4]
*/
var range2 = function(start, end, step=2) {
    let result = []
    for (var i = start; i < end; i = i + step) {
        result.push(i)
    }
    log(result)
}
range2(0, 6, 2)




// 作业 7
// 实现函数
/*
js 标准数学库有一个随机数函数
Math.random()
它返回 0 - 1 之间的小数

用它实现本函数, 返回 0 或 1
*/
var random01 = function() {
    let n = Math.random()
    if (n % 2 < 0.5) {
        return 0
    } else {
        return 1
    }
}
random01()

// 作业 8
// 实现函数
/*
返回一个只包含了 0 1 的随机 array, 长度为 n
假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
[0, 0, 1, 0, 1]
*/
var random01 = function() {
    let n = Math.random()
    if (n % 2 < 0.5) {
        return 0
    } else {
        return 1
    }
}
var randomLine01 = function(n) {
    let result = []
    for (var i = 0; i < n; i++) {
        let jieguo = random01()
        result.push(jieguo)
    }
    log(result)
}
randomLine01(6)

// 作业 9
/*
返回以下格式的数据
假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
注意, 这只是一个 array, 并不是它显示的样子
注意, 这是一个 array 不是 string
[
    [0, 0, 1],
    [1, 0, 1],
    [0, 0, 0],
]
返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
*/
var random01 = function() {
    let n = Math.random()
    if (n % 2 < 0.5) {
        return 0
    } else {
        return 1
    }
}
var randomLine01 = function(n) {
    let result = []
    for (var i = 0; i < n; i++) {
        let jieguo = random01()
        result.push(jieguo)
    }
    log(result)
    // return result
}
randomLine01(3)
var randomSquare01 = function(n) {
    let result1 = []
    for (var i = 0; i < n; i++) {
        let a = randomLine01(3)
        log(a)
        result1.push(a)
    }
    log(result1)
}

randomSquare01(3)

// 作业 10
/*
返回一个只包含了 0 9 的随机 array, 长度为 n
假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
[0, 0, 9, 0, 9]
*/
var random01 = function() {
    let n = Math.random()
    if (n % 2 < 0.5) {
        return 0
    } else {
        return 9
    }
}
var randomLine09 = function(n) {
    let result = []
    for (var i = 0; i < n; i++) {
        let jieguo = random01()
        result.push(jieguo)
    }
    log(result)
}
randomLine09(5)


// 作业 11
/*
array 是一个只包含了 0 9 的 array
返回一个标记过的 array
** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
复制数组用 array.slice(0) 实现

标记规则如下
对于下面这样的 array
[0, 0, 9, 0, 9]
标记后是这样
[0, 1, 9, 2, 9]

规则是, 0 会被设置为左右两边 9 的数量
*/
var markedLine = function(array) {

}


// 作业 12
var markedSquare = function(array) {
    /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
    */
}


// 作业 13
var randomSquare09 = function(n, limit=3) {
    /*
    返回以下格式的数据
    只包含 0 和 9
    limit 是 9 的个数
    假设 n 为 4, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 9」的 array』的 array, 9 的个数是 limit
    */
}


// 下面开始都是 DOM API 相关练习
// ====
//
// 作业 14
/*
实现一个登录页, 有 2 个标签分别是用户名输入框和登录按钮
给登录按钮绑定一个 click 事件
检查用户名是否符合如下规则
1，第一位是字母
2，只能包含字母、数字、下划线
3，只能字母或数字结尾
4，最小长度2
5，最大长度10

如果符合规则, log '检查合格'
如果不符合, 在登录按钮后插入一个红色 h1 标签
内容是 '用户名错误'

需要补全的代码自行解决
*/


// 作业 15
/*
给上课写的 todo 程序加一个功能
在编辑的时候输入框失去焦掉后保存 todo
失去焦点的事件名是 blur
*/


// 作业 16
/*
给上课写的 todo 加一个功能
增加一个 编辑 按钮
task 默认是不能编辑的
在你点了编辑按钮后它才能编辑(设置属性)
并且拥有焦点(element.focus() 实现)
编辑完成后(失去焦点后), 让 task 不可编辑

如果不懂, 看提示
*/

// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串



3, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


4, str2
同上



5, range1
使用 while 循环


6, range2
循环加判断


7, random01
用余数来实现


8, randomLine01
循环加 random01


9, randomSquare01
循环加 randomLine01


10, randomLine09
可以生成 01 之后把 1 替换为 9


11, markedLine
把 9 左右加一
注意判断 9 是否在两边


12, markedSquare
循环调用 markedLine


13, randomSquare09
把 randomSquare01 里的 1 替换成 9


14, 用户名检查
红色是 css 预先写好的


15, 保存 todo
给编辑框绑定一个 blur 事件就好
用事件委托


16, 动态编辑
用之前讲过的 DOM API 设置属性即可
*/
