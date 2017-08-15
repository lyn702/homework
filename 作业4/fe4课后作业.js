// 16/09/22
// 作业 4
//
// 注意, 自行去定义 log 函数(抄)
// 注意, 本次作业会慢慢更新
// 更新 4.11
let log = console.log.bind(console)


// 资料 1
// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存 和
    var s = 0
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  	return s
}

var a = [1, 2, 3, 4]
log('sum', sum(a))



// 作业 1
// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
let log = console.log.bind(console)
let a = [1, 2, 3, 4]
let product = function(array) {
    let s = 1
    for (let i = 0; i < array.length; i++) {
        let n = a[i]
        s = s * n
    }
    return s
}
log(product(a))


// 作业 2
// 返回一个数的绝对值
// 函数定义是
let log = console.log.bind(console)
let abs = function(n) {
    if (n < 0) {
        n = - n
    }
    return n
}
log(abs(-1))

// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
let log = console.log.bind(console)
let a = [1, 2, 3, 4, 5]
let average = function(array) {
    let s = 0
    for (var i = 0; i < array.length; i++) {
        let n = a[i]
        s = s + n
    }
    s = s / array.length
    return s
}
log(average(a))

// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
let log = console.log.bind(console)
//let min = function(array) {
let a = [3, 9, 2, 7, 8]
let min = a[0]
for (var i = 0; i < a.length; i++) {
    let n = a[i]
    if (n < min) {
        min = n
    }
}
log(min)

// 作业 5
/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/

// let n = 10
// let result = 0
// for (let i = 1; i < n + 1; i++) {
//     if (i % 2 === 0) {
//         result = result - i
//     }else {
//         result = result + i
//     }
// }
// log(result)


let log = console.log.bind(console)
let result = 0
let sum1 = function(n) {
    for (let i = 1; i < n + 1; i++) {
        if (i % 2 === 0) {
            result = result - i
        }else {
            result = result + i
        }
    }
    return result
}
log(sum1(10))

// 作业 6
/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
// let n = 5
// let result = 0
// for (let i = 2; i < n + 1; i++) {
//     if (i % 2 === 0) {
//         result =  result + i
//     }else {
//         result =  result - i
//     }
// }

let log = console.log.bind(console)
let result = 0
let sum2 = function(n) {
    let result = 0
    for (let i = 2; i < n + 1; i++) {
        if (i % 2 === 0) {
            result =  result + i
        }else {
            result =  result - i
        }
    }
    result = result + 1
    return result
}
log(sum2(3))


// 作业 7
/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/
// let n = 5
// let result = 1
// for (var i = 1; i < n + 1; i++) {
//     result = result * i
// }

let log = console.log.bind(console)
let result = 1
let fac = function(n) {
    for (let i = 1; i < n + 1; i++) {
        result = result * i
    }
    return result
}
log(fac(3))

/*
注意 下面几题中的参数 op 是 operator(操作符) 的缩写

作业 8
实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
let log = console.log.bind(console)
let op = "+-*/"
let apply = function(op, a, b) {

    let result
    let suiji = parseInt(Math.random() * (4 - 0) + 0)
    let suanfa = op[suiji]
    if (suanfa === '+') {
        result = a + b
    }else if (suanfa === '-') {
        result = a - b
    }else if (suanfa === '*') {
        result = a * b
    }else if (suanfa === '/') {
        result = a / b
    }
    return result
}
log(apply(op, 1, 3))

/*
作业 9
实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
oprands 是一个只包含数字的 list
根据 op 对 oprands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 4, 用第一个数字减去所有的数字
*/
let oprands = [3, 4, 2, 1]
let op = "+-*/"
let result
let suiji = parseInt(Math.random() * (4 - 0) + 0)
let suanfa = op[suiji]
log(suanfa)
if (suanfa === '-') {
    result = 3 - 4 - 2 - 1
}else if (suanfa === '+') {
    result = 3 + 4 + 2 + 1
}else if (suanfa === '*') {
    result = 3 * 4 * 2 * 1
}else if (suanfa === '/') {
    result = 3 / 4 / 2 / 1
}
log(result)


// let log = console.log.bind(console)
// let applyList = function(op, oprands) {
// }


/*
作业 10
实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
// let op = ['>', '<', '==']
// let expression = (op, a, b)
// let result
// let suiji = parseInt(Math.random() * (3 - 0) + 0)
// let suanfa = op[suiji]
//
// if (a < b) {
//     result = true
// }else {
//     result = false
// }
// log(result)

let log = console.log.bind(console)
let op = ['>', '<', '==']
// let expression = ()
let applyCompare = function(op, a, b) {
    let result
    let suiji = parseInt(Math.random() * (3 - 0) + 0)
    let suanfa = op[suiji]
    if (a < b) {
        result = true
    } else {
        result = false
    }
    return result
}
applyCompare(op, 1, 2)

let a = 'ak47asfdg454saasgg'
let result = 0
for (let i = 0; i < a.length; i++) {
    let n = a[i]
    let nan = isNaN(Number(n))
    if (nan) {

    } else {
        result = result + 1
    }
}
log(result)

/*
注意
下面这题做不出来没关系


作业 11
实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
let log = console.log.bind(console)
var applyOps = function(expression) {

}



// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念
