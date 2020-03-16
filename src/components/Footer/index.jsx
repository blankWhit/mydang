import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <ul>
          <li className="footerNavA" style={{width:"20%"}}>
            <NavLink exact to="/">
              <img className="footerNavImg" src="http://img61.ddimg.cn/upload_img/00528/000/icon_03-1.png" alt="首页"/>
            </NavLink>
          </li>
          <li className="footerNavA" style={{width:"20%"}}>
            <NavLink exact to="/list">
              <img className="footerNavImg" src="http://img63.ddimg.cn/upload_img/00528/000/feilei-8-2.png" alt="分类"/>
            </NavLink>
          </li>
          <li className="footerNavA" style={{width:"20%"}}>
            <NavLink exact to="/shop">
              <img className="footerNavImg" src="http://img63.ddimg.cn/upload_img/00459/h5/ic_buy_normal2-1536892644.png" alt="值得买"/>
            </NavLink>
          </li>
          <li className="footerNavA" style={{width:"20%"}}>
            <NavLink exact to="/shopping">
              <img className="footerNavImg" src="http://img63.ddimg.cn/upload_img/00528/000/guowuche-8-2.png" alt="购物车"/>
            </NavLink>
          </li>
          <li className="footerNavA" style={{width:"20%"}}>
            <NavLink exact to="/pre">
              <img className="footerNavImg" src="http://img60.ddimg.cn/upload_img/00528/000/wodedangdang---4.png" alt="我的"/>
            </NavLink>
          </li>
        </ul>
      </section>
    )
  }
}


         


          

       
          

      
          

       

