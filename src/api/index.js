// 封装发送请求的函数
import axios from './axios.js';

// 请求登录
export const reqPer = (username, password) => axios.post('/per', { username, password });

