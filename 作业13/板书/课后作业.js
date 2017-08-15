// 2016/10/14
//
// ============
// 作业 13
//
//
// 本次作业如果做不出来, 可以大家一起讨论一下
// ============
//
let log = console.log.bind(console);

// 作业 1
//
// 实现一个 GuaAlert 函数, 如下
/*
title 是 string
message 是 string

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题 和 message 作为信息
还包含一个 OK 按钮
点击 OK 按钮关闭弹窗
*/
var GuaAlert = function(title, message) {
    $('head').append(`
        <style>
            body {
                margin: 0;
            }
            #modal {
                position: fixed;
                z-index: 11;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;

                display: flex;
                justify-content: center;
                align-items: center;
            }
            #modal .box {
                z-index: 2;
                width: 400px;
                height: 200px;
                border: 2px solid black;
                background-color: white;
            }
            #modal .tittle {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                font-size: 150%;
                border-bottom: 2px solid black;
            }
            #modal .message {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100px;
            }
            #modal .button {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 auto;
                border-radius: 10px;
                width: 50%;
                height: 50px;
                background-color: #08c;
            }
        </style>
        `)
    $('body').append(`
        <div id="modal">
            <div class="box">
                <div class="tittle">
                    大校
                </div>
                <div class="message">
                    人猛
                </div>
                <div class="button">
                    OK
                </div>
            </div>
        </div>`)
    $('#modal .button').on('click', function() {
        $('#modal').remove()
    })
}
    $('body').append(
        `
        <div class="modal-alert">
            <div class="modal-title">
                弹窗
            </div>
            <div class="modal-message">
                信息
            </div>
            <button class="modal-button" name="button">ok</button>
        </div>
        `
    )
    $('head').append(
        `
        .modal-title {
            background: white
        }
        .modal-message {
            background: white
        }
        `
    )
    $('.modal-button').on('click', function() {
        $('.modal-alert').remove()
    })

// 作业 2
//
/*
title 是 string
message 是 string
callback 是一个接受一个 bool 类型参数的函数

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题 和 message 作为信息
还包含一个 OK 按钮 和一个 Cancel 按钮
点击 OK 按钮关闭弹窗, 调用 callback(true)
点击 Cancel 按钮关闭弹窗, 调用 callback(false)
*/
let callback = function(n) {
    if (n === true) {
        log('确认')
        // $('#modal').remove()
    } else if (n === false) {
        log('取消')
        // $('#modal').remove()
    }
}
var GuaAlert2 = function(title, message, callback) {
    $('style').append(
        `
        body {
            margin: 0;
        }
        #modal {
            position: fixed;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
        }
        #modal .box {
            z-index: 2;
            width: 400px;
            height: 300px;
            border: 2px solid black;
            background-color: white;
        }
        #modal .tittle {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            font-size: 150%;
            border-bottom: 2px solid black;
        }
        #modal .message {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
        }
        #modal .button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            border-radius: 10px;
            width: 50%;
            height: 10px;
        }
        #modal .button2 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px auto;
            border-radius: 10px;
            width: 50%;
            height: 15px;
        }
        `)
    $('body').append(
        `
        <div id="modal">
            <div class="box">
                <div class="tittle">
                    大校
                </div>
                <div class="message">
                    人猛
                </div>
                <div class="button">
                    OK
                </div>
                <div class="button2">
                    Cancel
                </div>
            </div>
        </div>
        `
    )
    $('#modal .button').on('click', function() {
        callback(true)
    })
    $('#modal .button2').on('click', function() {
        callback(false)
    })
}
GuaAlert2(0, 0, callback)


// 作业 3
//
/*
title 是 string
callback 是一个如下的函数
function(clickOk, input) {
    // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
    // input 是 string
}

这个函数生成一个上课所说的弹窗插入页面
弹窗包含 title 作为标题
包含一个 input 让用户输入信息
还包含一个 OK 按钮 和一个 Cancel 按钮
点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
点击 Cancel 按钮关闭弹窗, 调用 callback(false)
*/
let input = $('#id-input').val()
let callback = function(clickOk, input) {
    if (clickOk === true) {
        $('#modal').remove()
    } else if (clickOk === false) {
        $('#modal').remove()
    }
}
var GuaPrompt = function(title, callback) {
    $('body').append(
        `
        <div id="modal">
            <div class="box">
                <div class="tittle">
                    大校
                </div>
                <input id="id-input" name="" value="">
                <div class="button">
                    OK
                </div>
                <div class="button2">
                    Cancel
                </div>
            </div>
        </div>
        `
    )
    $('style').append(
        `
        #modal {
            position: fixed;
            width: 100%;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
        }
        #modal .box {
            z-index: 2;
            width: 400px;
            height: 300px;
            border: 2px solid black;
            background-color: white;
        }
        #modal .tittle {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 40px;
            font-size: 150%;
            border-bottom: 2px solid black;
        }
        #modal .message {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
        }
        #modal .button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
            border-radius: 10px;
            width: 50%;
            height: 10px;
        }
        #modal .button2 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px auto;
            border-radius: 10px;
            width: 50%;
            height: 15px;
        }
        `
    )
    $('#modal .button').on('click', function() {
        callback(true, input)
    })
    $('#modal . button2').on('click', function() {
        callback(false, input)
    })
}


// 作业 4
//
/*
title 是 string
actions 是一个包含 string 的数组
callback 是一个如下的函数
function(index) {
    // index 是下标, 具体如下
    // index 如果是 -1 表明用户点击了 cancel
}

这个函数生成一个弹窗页面
弹窗包含 title 作为标题
actions 里面的 string 作为标题生成按钮
弹窗还包含一个 Cancel 按钮
点击按钮的时候, 调用 callback(index)
*/
var GuaActions = function(title, actions, callback) {

}
