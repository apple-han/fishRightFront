/*
* @Author: steven
* @Date:   2017-10-10 23:39:58
* @Last Modified by:   steven
* @Last Modified time: 2017-10-21 09:25:53
*/

'use strict';

require('./ordinary_personal.css')

$('.personal_content_nav div').click(function(){
    $(this).addClass('item').siblings().removeClass('item')
})
