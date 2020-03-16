// 封装axios
import axios from 'axios';

import store from '../redux/store';
import NProgress from 'nprogress';

import { message } from 'antd-mobile';

import 'nprogress/nprogress.css';

// 创建axios实例
const instance = axios.create({
  baseURL:"http://localhost:3000/api",
  timeout:5000
})

// 设置请求拦截器
instance.interceptors.request.use(
  (config)=>{
    const { token } = store.getState().user;
    if(token){
      config.headers.authorization = `Bearer ${token}`;
    }
    NProgress.start();
    return config;
  }
)

// 设置相应拦截器
instance.interceptors.response.use(
  (response)=>{
    // 请求成功
    const result = response.data;
    NProgress.done();

    if(result.status === 0){
      // 功能成功
      return result.data;
    }else{
      // 功能失败
      message.error(result.msg);
      return Promise.reject(result.msg);
    }
  },

  (err)=>{
    NProgress.donce()
    // 请求失败
    console.log('axios请求失败：', error);
    message.error('未知错误，请联系管理员~');
    return Promise.reject('未知错误，请联系管理员~');
  }
);

export default instance;