/*
* @Author: steven
* @Date:   2017-09-24 16:34:57
* @Last Modified by:   steven
* @Last Modified time: 2017-10-09 06:33:36
*/
'use strict';
var _mm = require('util/mm.js');

var _user = {
    // 检查登录状态
    checklogout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/get_user_info.do'),
            method  : "post",
            success : resolve,
            error   : reject
        })
    }
    // 登出
    logout : function(resolve, reject){
        _mm.request({
            url     : _mm.getServerUrl('/user/lohout.do'),
            method  : "post",
            success : resolve,
            error   : reject
        })
    }
}

module.exports = _user;