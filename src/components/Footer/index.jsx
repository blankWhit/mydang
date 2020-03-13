import React, { Component } from 'react';

import './index.less';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <a href="##" style={{width:"20%"}} className="footerNavA">
          <img className="footerNavImg" src="http://img61.ddimg.cn/upload_img/00528/000/icon_03-1.png" alt="首页"/>
        </a>
        <a href="##" style={{width:"20%"}} className="footerNavA">
          <img className="footerNavImg" src="http://img63.ddimg.cn/upload_img/00528/000/feilei-8-2.png" alt="分类"/>
        </a>
        <a href="##" style={{width:"20%"}} className="footerNavA">
          <img className="footerNavImg" src="http://img63.ddimg.cn/upload_img/00459/h5/ic_buy_normal2-1536892644.png" alt="值得买"/>
        </a>
        <a href="##" style={{width:"20%"}} className="footerNavA">
          <img className="footerNavImg" src="http://img63.ddimg.cn/upload_img/00528/000/guowuche-8-2.png" alt="购物车"/>
        </a>
        <a href="##" style={{width:"20%"}} className="footerNavA">
          <img className="footerNavImg" src="http://img60.ddimg.cn/upload_img/00528/000/wodedangdang---4.png" alt="我的"/>
        </a>
      </section>
    )
  }
}
