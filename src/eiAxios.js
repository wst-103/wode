import axios from "axios"
// import Global from 'd:/vue/energy-i/src/global';
import { Message } from 'element-ui'

let eiAxios = axios.create({
    // baseURL: Global.SERVER_MAIN,
    timeout: 60000,
});

//appKey
const appKey = "1234JpoK56HweHUI"
//递归加密
function recursionEncrypt(data) {
    let _data = null
    if (data.constructor == Array) {
        _data = []
    } else {
        _data = {}
    }
    for (let key in data) {
        if (typeof (data[key]) != 'object') {
            _data[key] = window.Encrypt(data[key], appKey)
        } else {
            _data[key] = recursionEncrypt(data[key])
        }
    }
    return _data;
}
//添加请求拦截器
eiAxios.interceptors.request.use((config) => {
    //请求体
    if (config.method === 'post') {
        //headers封装
        config.headers.y = new Date().getTime()
        if (window.sessionStorage.getItem("JWT")) {
            config.headers.Authorization = window.sessionStorage.getItem("JWT")
        }
        //data封装
        // if (Global.ENCRYPT) {
        //     config.data = recursionEncrypt(config.data)
        // }
    }
    return config;
}, (error) => {
    Message({
        showClose: true,
        message: '网络错误，请稍后重试！',
        type: "warning"
    });
    return Promise.reject(error);
});

//添加响应拦截器
eiAxios.interceptors.response.use((res) => {
    //返回体
    let code = res.data.code
    if (code != 10000) {
        if (!res.data.message) {
            res.data.message = "错误码：" + code
        }
        Message({
            showClose: true,
            message: res.data.message,
            type: "error"
        });
        if (code == -9991 || code == -9993 || code == -9994) {
            setTimeout(function () {
                window.sessionStorage.removeItem("JWT");
                window.location.href = "/";
            }, 1500)
        }
    }
    return res.data;
}, (error) => {
    Message({
        showClose: true,
        message: '网络错误，请稍后重试！',
        type: "warning"
    });
    return Promise.reject(error);
});

export default eiAxios