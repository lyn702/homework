// 2016/10/12
//
// ============
// 作业 12
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
char 是一个长度为 1 的 string
这个函数返回这个字符的 ASCII 码

这个答案用到了 s.charCodeAt(index) 函数, 例子如下
'A'.charCodeAt(0) 返回 65
'a'.charCodeAt(0) 返回 97

字符在电脑中的存储是以数字的方式
每个字符其实是用一个数字代表的, 这个方式叫做编码
ASCII 码是一个通用的编码, 包含英文字符数字和常见符号

这个作业答案我给了, 理解一下这件事就好, 不懂搜一下
*/
var ascii = function(char) {
    return char.charCodeAt(0)
}


// 作业 2
//
/*
code 是一个 int
返回 code 所表示的字符

这个答案用到了 String.fromCharCode(code) 函数, 例子如下
String.fromCharCode(97) 返回 'a'
String.fromCharCode(65) 返回 'A'
*/
var charFromAscii = function(code) {
    return String.fromCharCode(code)
}


// 作业 3
//
/*
n 是一个不大于 255 的 int
返回 n 的 8 位二进制形式的字符串
例如 binary(7) 返回 '00000111'
7 / 2 = 3.5 yu 1
3 / 2 = 1.5 yu 1
1 / 2 = 0.5 yu 1
0 / 2 = 0   yu 0
进制转换自行搜索或者论坛提问大家讨论吧
*/
var zfill = function(n, width) {
    let str = String(n)
    let sum = width - str.length
    if (sum > 0) {
        let zero = ''
        for (var i = 0; i < sum; i++) {
            zero = zero + '0'
        }
        return zero + str
    } else {
        return str
    }
}
var binary = function(n) {
    let a = n
    let result = a.toString(2)
    let jieguo = zfill(result, 8)
    return jieguo
}
binary(7)


// 作业 4
//
/*
bin 是一个 8 位二进制形式的字符串
返回 bin 代表的数字
例如 int('00000111') 返回 7

进制转换自行搜索或者论坛提问大家讨论吧
*/
var int = function(bin) {
    return parseInt(bin, 2)
}
int('00000111')

// 作业 5
//
/*
s 是一个 string
返回 s 的二进制字符串
 77 97 110
例如 binaryStream('Man') 返回
'010011010110000101101110'

使用上面的函数
*/
var ascii = function(char) {
    return char.charCodeAt(0)
}
var zfill = function(n, width) {
    let str = String(n)
    let sum = width - str.length
    if (sum > 0) {
        let zero = ''
        for (var i = 0; i < sum; i++) {
            zero = zero + '0'
        }
        return zero + str
    } else {
        return str
    }
}
var binary = function(n) {
    let a = n
    let result = a.toString(2)
    let jieguo = zfill(result, 8)
    return jieguo
}
var binaryStream = function(s) {
    let result = ''
    for (var i = 0; i < s.length; i++) {
        let n = s[i]
        let bianma = ascii(n)
        let bianma2 = binary(bianma)
        result = result + bianma2
    }
    log(result)
}
binaryStream('Man')


// 作业 6
//
/*
bins 是一个二进制形式的字符串
返回 bins 代表的原始字符串
例如 stringFromBinary('010011010110000101101110') 返回 'Man'
                      010011010110000101101110
使用上面的函数
*/
var int = function(bin) {
    return parseInt(bin, 2)
}
var charFromAscii = function(code) {
    return String.fromCharCode(code)
}
var stringFromBinary = function(bins) {
    let result = ''
    let arr = []
    let qp1 = bins.slice(0, 8)
    let qp2 = bins.slice(8, 16)
    let qp3 = bins.slice(16, 24)
    arr.push(qp1, qp2, qp3)
    for (var i = 0; i < arr.length; i++) {
        let n = arr[i]
        let jiema = int(n)
        let jiema2 = charFromAscii(jiema)
        result = result + jiema2
    }
    log(result)
}
stringFromBinary('010011010110000101101110')


// 作业 7
//
/*
s 是一个 string
返回 s 的 base64 编码

Base64是一种基于 64 个可打印字符来表示数据的方法
它用每6个比特为一个单元，对应某个可打印字符
ASCII 码一个字符是 8 比特, 也就是一字节
3 个字节就有 24 个比特, 对应了 4 个 base64 单元

如下所示
原始信息        M        a        n
ASCII         77       7        110
二进制         01001101 01100001 01101110
4 个单元       010011 010110 000101 101110
每个单元转换后  19  22  5  46

转换后每个 base64 单元都是一个 0-63 的数字
因为 6 比特表示的范围就是这么大
然后数字到字符串的转换是下面这段字符串取下标所得
'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

那么 Base64 编码结果就是    T   W   F  u

所以 base64Encode('Man') 返回 'TWFu'


既然 3 个字节转换为 4 个 base64 单元
那么 1 个字节怎么办呢?
答案是用 0 补出 3 字节, 如下所示
原始信息    M
ASCII     77       0        0
二进制     01001101 00000000 00000000
4 个单元   010011 010000 000000 000000
单元转换后  19 16 0 0
因为末尾是强行补上的, 所以给他用 '=' 凑出字符(这是一个例外)
所以 base64Encode('M') 返回 'TQ=='
*/
var ascii = function(char) {
    return char.charCodeAt(0)
}
var zfill = function(n, width) {
    let str = String(n)
    let sum = width - str.length
    if (sum > 0) {
        let zero = ''
        for (var i = 0; i < sum; i++) {
            zero = zero + '0'
        }
        return zero + str
    } else {
        return str
    }
}
var binary = function(n) {
    let a = n
    let result = a.toString(2)
    let jieguo = zfill(result, 8)
    return jieguo
}
let jihe = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
var base64Encode = function(s) {
    for (var i = 0; i < s.length; i++) {
        let n = s[i]
        let bianma1 = ascii(n)
        let bianma2 = binary(bianma1)
        log(bianma2)
    }
}
base64Encode('Man')

// 作业 8
//
/*
s 是一个 base64 编码后的字符串
解码 s 并返回
例如 base64Decode('TWFu') 返回 'Man'
*/
var base64Decode = function(s) {

}










/*













*/
