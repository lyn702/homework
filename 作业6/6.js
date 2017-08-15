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
    let result = ''
    for (var i = 0; i < s1.length; i++) {

    }
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
var uppercase = function(s) {

}

let test_uppercase = function() {
    ensure(('abcd') === 'ABCD', 'uppercase测试1')
    ensure(('asdfg') === 'ASDFG', 'uppercase测试2')
}
