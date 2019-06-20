/**
 *  表单校验：
 *      1.用户名：单词字符，长度8-20位
 *      2.密码：单词字符，长度8-20位
 *      3.email：邮箱格式
 *      4.姓名：非空
 *      5.手机号：手机号格式
 *      6.出生日期：非空
 *      7.验证码：非空
 */

//图片点击事件，切换验证码
function changeCheckCode(img) {
    img.src = "checkCode?" + new Date().getTime();
}

//用户名
function checkUsername() {
    //1.获取username的值
    let username = $("#username").val();
    //2.定义正则
    let reg_username = /^\w{8,20}$/;
    //3.判断，给出提示信息
    let flag = reg_username.test(username);

    if (flag) {
        //用户名合法
        $("#username").css("border", "");
        return true;
    } else {
        //用户名不合法
        $("#username").css("border", "1px solid red");
        return false;
    }
}

//密码
function checkPassword() {
    //1.获取password的值
    let password = $("#password").val();
    //2.定义正则
    let reg_password = /^\w{8,20}$/;
    //3.判断，给出提示信息
    let flag = reg_password.test(password);

    if (flag) {
        //密码合法
        $("#password").css("border", "");
        return true;
    } else {
        //密码不合法
        $("#password").css("border", "1px solid red");
        return false;
    }
}

//邮箱
function checkEmail() {
    //1.获取email的值
    let email = $("#email").val();
    //2.定义正则
    let reg_email = /^\w+@\w+\.\w+$/;
    //3.判断，给出提示信息
    let flag = reg_email.test(email);

    if (flag) {
        //邮箱合法
        $("#email").css("border", "");
        return true;
    } else {
        //邮箱不合法
        $("#email").css("border", "1px solid red");
        return false;
    }
}

//姓名
function checkName() {
    //1.获取name的值
    let name = $("#name").val();
    //2.定义正则
    let reg_name = /\S/;
    //3.判断，给出提示信息
    let flag = reg_name.test(name);

    if (flag) {
        //姓名合法
        $("#name").css("border", "");
        return true;
    } else {
        //姓名不合法
        $("#name").css("border", "1px solid red");
        return false;
    }
}

//手机号
function checkPhone() {
    //1.获取telephone的值
    let telephone = $("#telephone").val();
    //2.定义正则
    let reg_telephone = /^1(3|4|5|6|7|8|9)\d{9}$/;
    //3.判断，给出提示信息
    let flag = reg_telephone.test(telephone);

    if (flag) {
        //手机号合法
        $("#telephone").css("border", "");
        return true;
    } else {
        //手机号不合法
        $("#telephone").css("border", "1px solid red");
        return false;
    }
}

//出生日期
function checkBirthday() {
    //1.获取birthday的值
    let birthday = $("#birthday").val();
    //2.定义正则
    let reg_birthday = /\S/;
    //3.判断，给出提示信息
    let flag = reg_birthday.test(birthday);

    if (flag) {
        //出生日期合法
        $("#birthday").css("border", "");
        return true;
    } else {
        //出生日期不合法
        $("#birthday").css("border", "1px solid red");
        return false;
    }
}

//验证码
function checkCode() {
    //1.获取check的值
    let check = $("#check").val();
    //2.定义正则
    let reg_check = /\S/;
    //3.判断，给出提示信息
    let flag = reg_check.test(check);

    if (flag) {
        //验证码合法
        $("#check").css("border", "");
        return true;
    } else {
        //验证码不合法
        $("#check").css("border", "1px solid red");
        return false;
    }
}

//当页面加载完执行
$(function () {
    $("#registerForm").submit(function () {
        //1.发送数据到服务器
        if (checkUsername() && checkPassword() && checkEmail() &&
            checkName() && checkPhone() && checkBirthday() && checkCode()) {
            //校验通过，发送ajax请求，提交表单数据

            $.post("registerServlet", $("#registerForm").serialize(), function (data) {

            });
        }

        //2.跳转页面
        return false;
    });

    //当某一个组件失去焦点时，调用对应的校验方法
    $("#username").blur(checkUsername);
    $("#password").blur(checkPassword);
    $("#email").blur(checkEmail);
    $("#name").blur(checkName);
    $("#telephone").blur(checkPhone);
    $("#birthday").blur(checkBirthday);
    $("#check").blur(checkCode);
});