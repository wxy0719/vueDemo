// 配置API接口地址
//var root = 'https://cnodejs.org/api/v1'
var root = "http://localhost:8080/esteban_server"

//引用axios
var axios = require('axios')

import md5 from 'js-md5';

let Base64 = require('js-base64').Base64;

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  if (o === null) {
    return o
  }
  if (toType(o) === 'string') {
    return o;
  }
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

//接口处理函数
function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: 'post',
    url: url+"?"+Math.random(),
    data: method === 'add' || method === 'edit' ? params : null,
    params: method === 'get' || method === 'delete' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  .then(function (res) {
    if (res.data.code == 200) {
      if(res.data.data.status == 200){
        success(res.data.data)
        return res.data.data
      }else{
        failure(res.data.data);
      }
    }else{
      console.log(JSON.stringify(res.data.message))
    }
  })
  .catch(function(err){
    let res=err.response
    if(res){
      console.log('errro: '+ res.data.code)
    }
  })
}

function formatData(params,adapterNo,token){
  params = Base64.encode(JSON.stringify(params))
  let timeMills=(new Date(Date.now())).getTime();
  let ticket = md5.hex(timeMills+params)
  let data
  if(token!=null&&token!=""){
    data = {
      'adapterNo':adapterNo,
      'ticket': ticket,
      'data':params,
      'time':timeMills,
      'token':token
    }
  }else{
     data = {
      'adapterNo':adapterNo,
      'ticket': ticket,
      'data':params,
      'time':timeMills
    }
  }
  return data
}

//定义vue中调用的接口
export default {
  get: function (url, params, adapterNo, token, success, failure) {
    var data = formatData(params,adapterNo,token)
    return apiAxios('get',url, data, success, failure)
  },
  add: function (url, params, adapterNo, token, success, failure) {
    var data = formatData(params,adapterNo,token)
    return apiAxios('add',url, data, success, failure)
  },
  edit: function (url, params, adapterNo, token, success, failure) {
    var data = formatData(params,adapterNo,token)
    return apiAxios('edit',url, data, success, failure)
  },
  delete: function (url, params, adapterNo, token, success, failure) {
    var data = formatData(params,adapterNo,token)
    return apiAxios('delete',url, data, success, failure)
  },

}
