// 2016/09/28
//
// ============
// 作业 6
//
// string 题目用到的知识还是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
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
// 10 分钟做不出就看提示
//
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
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


// 测试函数, 自行实现
var test_find = function() {
    ensure(find('asd','s') === 1, 'find测试1')
    ensure(find('qwer', 'e') === 2, 'find测试2')
    ensure(find('qwer', 'a') === -1, 'find测试3')
}
test_find()


/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/
// 这里是两个字符串, 包含了大写字母和小写字母

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
var lowercase = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(upper, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += lower[index]
    }
    return result
}
lowercase('ASD')

/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母

注意, 自行实现测试函数, 之后的题目都要求自行实现测试函数
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
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
var uppercase = function(s) {
    var result = ""
    for (var i = 0; i < s.length; i++) {
        var index = find(lower, s[i])
        result = result + upper[index]
    }
    // log(result)
    return result
}
let test_uppercase = function() {
    ensure(('abcd') === 'ABCD', 'uppercase测试1')
    ensure(('asdfg') === 'ASDFG', 'uppercase测试2')
}
test_uppercase()
/*
作业 3

实现 lowercase1
它能正确处理带 小写字母 的字符串
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
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
var lowercase1 = function(s) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(lower, s[i])
        if (s[i] === lower[index]) {
            result = result + upper[index]
        } else {
            result = result + s[i]
        }
    }
    // log(result)
    return result
}
let test_lowercase1 = function() {
    ensure( lowercase1('Aqwe') === 'AQWE', '测试1')
    ensure( lowercase1('ADsdg') === 'ADSDG', '测试2')
}
test_lowercase1()
/*
作业 4

实现 uppercase1
它能正确处理带 大写字母 的字符串
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
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
var lowercase1 = function(s) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(upper, s[i])
        if (s[i] === upper[index]) {
            result = result + lower[index]
        } else {
            result = result + s[i]
        }
    }
    return result
}
let test_lowercase1 = function() {
    ensure(lowercase1('AsDfG') === 'asdfg', '测试1')
    ensure(lowercase1('AQWe') === 'aqwe', '测试2')
}
test_lowercase1()
/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var lower = 'abcdefghijklmnopqrstuvwxyz'
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
var encode1 = function(s) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(lower, s[i])
        result = result + lower[index + 1]
    }
    // log(result)
    return result
}
let test_encode1 = function() {
    ensure(encode1('acef') === 'bdfg', '测试1')
    ensure(encode1('asdfg') === 'btegh', '测试2')
}
test_encode1()
/*
作业 6
实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var lower = 'abcdefghijklmnopqrstuvwxyz'
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
var decode1 = function(s) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(lower, s[i])
        result = result + lower[index - 1]
    }
    // log(result)
    return result
}
let test_decode1 = function() {
    ensure(encode1('bdfg') === 'acef', '测试1')
    ensure(encode1('btegh') === 'asdfg', '测试2')
}
test_decode1()
/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var lower = 'abcdefghijklmnopqrstuvwxyz'
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
var encode2 = function(s, shift) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(lower, s[i])
        result = result + lower[index + shift]
    }
    // log(result)
    return result
}
let test_encode2 = function() {
    ensure(encode2('dfh', 1) === 'egi', '测试1')
    ensure(encode2('dfh', 2) === 'fhj', '测试2')
}
test_encode2()
/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var lower = 'abcdefghijklmnopqrstuvwxyz'
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
var decode2 = function(s, shift) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(lower, s[i])
        result = result + lower[index - shift]
    }
    // log(result)
    return result
}
let test_decode2 = function() {
    ensure(decode2('dfh', 1) === 'ceg', '测试1')
    ensure(decode2('dfh', 2) === 'bdf', '测试2')
}
test_decode2()
/*
作业 9
实现 encode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var lower = 'abcdefghijklmnopqrstuvwxyz'
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
var encode3 = function(s, shift) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(lower, s[i])
        if (s[i] === lower[index]) {
            result = result + lower[index + shift]
        } else {
            result = result + s[i]
        }
    }
    // log(result)
    return result
}
let test_encode3 = function() {
    ensure(encode3('d f h', 1) === 'e g i', '测试1')
    ensure(encode3('d f h 1', 2) === 'f h j 1', '测试1')
}
test_encode3()
/*
作业 10
实现 decode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var lower = 'abcdefghijklmnopqrstuvwxyz'
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
var decode3 = function(s, shift) {
    let result = ''
    let index
    for (var i = 0; i < s.length; i++) {
        index = find(lower, s[i])
        if (s[i] === lower[index]) {
            result = result + lower[index - shift]
        } else {
            result = result + s[i]
        }
    }
    // log(result)
    return result
}
let test_decode3 = function () {
    ensure(decode3('f h j 1', 1) === 'e g i 1', '测试1')
    ensure(decode3('d f h 1', 2) === 'b d f 1', '测试1')
}
test_decode3()





// =======
// 提示
// =======
/*

1, find
循环比较, 如果发现就返回
注意处理不存在的情况


2, uppercase
参考例子实现, 这个简单, 最好 log 一下搞清程序执行的流程和逻辑


3, lowercase1
因为可能字符串中带小写字符, 那么就要判断一下才能处理


4, uppercase1
同作业 3 一样
