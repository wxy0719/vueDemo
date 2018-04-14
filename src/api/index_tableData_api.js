// 配置API接口地址
var root = 'https://cnodejs.org/api/v1'

//引用axios
var axios = require('axios')

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
    method: method,
    url: url,
    data: method === 'add' || method === 'edit' ? params : null,
    params: method === 'get' || method === 'delete' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  .then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
        return res.data
      }
    }else{
      if(failure){
        failure(res.data);
      }else{
        window.alert('error: '+JSON.stringify(res.data))
      }
    }
  })
  .catch(function(err){
    let res=err.response
    if(res){
      window.alert('errro: '+ res.status)
    }
  })
}

//定义vue中调用的接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('get',url, params, success, failure)
  },
  add: function (url, params, success, failure) {
    return apiAxios('add',url, params, success, failure)
  },
  edit: function (url, params, success, failure) {
    return apiAxios('edit',url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('delete',url, params, success, failure)
  },

}
