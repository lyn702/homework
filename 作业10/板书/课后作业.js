// 2016/10/07
//
// ============
// 作业 10
//
//
// 注意, 提示在文件最末尾
// ============
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


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
        log('*** 测试失败:', message)
    }
}


// 作业 1
//
/*
n 是 int
判断 n 是否是素数(质数)
*/
var isPrime = function(n) {
    if (n === 1) {
        return false
    } else if (n === 2) {
        return true
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
isPrime(9)

// 作业 2
//
/*
返回 100 内的素数列表
*/
var isPrime = function(n) {
    if (n === 1) {
        return false
    } else if (n === 2) {
        return true
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
var primeNumbers = function() {
    let result = []
    for (var i = 1; i <= 100; i++) {
        if (isPrime(i) === true) {
            result.push(i)
        }
    }
    log(result)
    // let n = 100
    // let result = []
    // for (var i = 1; i <= n; i++) {
    //     let e = isPrime(100)
    //     result.push[e]
    // }
    // log(result)
}
primeNumbers()


// 作业 3
//
/*
给定一个英文句子 str（由空格隔开的单词组成的字符串）
返回「将句中所有单词变为有且只有首字母大写的形式」的 string
*/
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var find = function(s1, s2) {
    let result
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === s2) {
            result = i
        }
    }
    if (result === undefined) {
        result = -1
    }
    // log(result)
    return result
    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
}
let str = 'hello er su'
var capString = function(str) {
    let result = ''
    let arr = str.split(' ')
    for (var i = 0; i < arr.length; i++) {
        let n = arr[i]
        let index = find(lower, n[0])
        let daxie = upper[index]
        // log(daxie, n.slice(1))
        result = result + daxie + n.slice(1)
        result = result + ' '
        // log(result)
    }
    result = result.slice(0, -1)
    log(result)
}
capString(str)


// 作业 4
//
/*
给定一个只包含字母的字符串，返回单个字母出现的次数
考察字典的概念和使用
返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

// 可以使用 Object.keys 函数
var obj = {
  foo: 1,
  bar: 2,
}
Object.keys(obj)
["foo", "bar"]

参数 "hello"
返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
*/
let str = 'hello'
var letterCount = function(str) {
    let obj = {}
    for (let key of str) {
        if (obj[key] === undefined) {
            obj[key] = 1
        } else {
            obj[key] = obj[key] + 1
        }
    }
    let arr = Object.keys(obj)
    for (let key of arr) {
        log(key)
    }
}
letterCount(str)
let obj = {
    foo: 1,
    bar: 2,
}
Object.keys(obj)


// 作业 5
//
/*
param 是一个 object
例子如下
param 是 {
    'foo': 1,
    'bar': 'far',
}
返回如下 string, 顺序不做要求(foo bar 的顺序)
foo=1&bar=far

注意, 使用 Object.keys 函数
*/
var queryFromObject = function(param) {

}


// 作业 6
//
/*
queryString 是一个 string
例子如下
queryString 是 foo=1&bar=far
返回如下 object, 顺序不做要求(foo bar 的顺序)
{
    'foo': 1,
    'bar': 'far',
}
*/
var argsFromQuery = function(queryString) {

}


// 作业 7
//
var ajaxGet = function(url, callback) {
    /*
    利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
    url 是一个 URL
    callback 是一个函数, 在接受服务器响应后调用并传递参数给它
    本题不会就放弃
    */
}


// 作业 8
//
var ajax = function(request) {
    /*
    request 是一个 object, 有如下属性
    method, 请求的方法, string
    url, 请求的路径, string
    data, 请求发送的数据, 如果是 GET 方法则没这个值, string
    callback, 响应回调, function

    本题不会就放弃, 本题带了一个用法在下方
    */
}

var r = {
    method: 'POST',
    url: '/login',
    data: 'username=gua',
    callback: function(response) {
        console.log('响应', response)
    }
}
ajax(r)
