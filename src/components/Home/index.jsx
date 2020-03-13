import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import Header from '../Header';
import Footer from '../Footer';

import './index.less';

export default class Home extends Component {

  state = {
    data:["1","2","3","4","5"],
    imgHeight:110
  }


  render() {

    return (
      <div className="home">
        <Header />
        <div className="homePho">
        <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map( val => (
            <a
              key={ val }
              href="##"
              style={{ display: 'inline-block', width: '100%',height:"100%" }}
            >
              <img
                src={[require(`./images/${ val }.jpg`)]}
                alt=""
                style={{ width: '100%', verticalAlign: 'middle' }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
        </div>
        {/* 图标布局 */}
        <div className="homeCho">
          <div className="homeChoTop">
            <ul className="homeChoTopUl">
              <li className="homeChoTopItem">
                <a href="##">
                  <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt=""/>
                </a>
              </li>
              <li className="homeChoTopItem">
                <a href="##">
                  <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt=""/>
                </a>
              </li>
              <li className="homeChoTopItem">
                <a href="##">
                  <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt=""/>
                </a>
              </li>
              <li className="homeChoTopItem">
                <a href="##">
                  <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt=""/>
                </a>
              </li>
              <li className="homeChoTopItem">
                <a href="##">
                  <img src="http://img62.ddimg.cn/upload_img/00803/1/changxiao-1562827738.png" alt=""/>
                </a>
              </li>
            </ul>
          </div>
          <div className="homeChoBottom">
          <ul className="homeChoBottomUl">
              <li className="homeChoBottomItem">
                <a href="##">
                  <img src="http://img50.ddimg.cn/116550067538580_y.jpg" alt=""/>
                </a>
              </li>
              <li className="homeChoBottomItem">
                <a href="##">
                  <img src="http://img50.ddimg.cn/116550067538580_y.jpg" alt=""/>
                </a>
              </li>
              <li className="homeChoBottomItem">
                <a href="##">
                  <img src="http://img50.ddimg.cn/116550067538580_y.jpg" alt=""/>
                </a>
              </li>
              <li className="homeChoBottomItem">
                <a href="##">
                  <img src="http://img50.ddimg.cn/116550067538580_y.jpg" alt=""/>
                </a>
              </li>
              <li className="homeChoBottomItem">
                <a href="##">
                  <img src="http://img50.ddimg.cn/116550067538580_y.jpg" alt=""/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 其余的布局 */}
        <div className="homeSec">
          {/* 今日秒杀 */}
          <section className="homeSecSeck">
            <div className="homeSecSeckTitle">
              <a href="##">
                <img src="http://img62.ddimg.cn/upload_img/00707/mobile/mao_title.jpg" alt=""/>
              </a>
              {/*  eslint-disable-next-line */}
              <a 
                href="http://touch.m.dangdang.com/seckill.php?t=1584089192" 
                className="homeSecSeckTitleMore"
                ></a>
            </div>
            <div className="homeSecSeckCont">
              {/* 倒计时 */}
              <a href="##" className="homeSecSeckContSed">
                <span className="homeSSCSedTime">时间</span>
              </a>
              {/* 内容区 */}
              <div className="homeSSCSedCon">
                <ul className="homeSSCSedConUl">
                  <li className="homeSSCSedConItem">
                    <a href="##">
                      <p className="pic">
                        <img src="http://img3m3.ddimg.cn/55/12/1574831863-1_h_9.jpg" alt=""/>  
                      </p>
                      <p className="name">
                      0.8元秒杀 限量抢购 抢完即止
                      </p>
                      <p className="price">
                        <span className="rob">
                          <span className="num">￥0.8</span>
                          <span className="oldNum">
                            ￥199.00
                          </span>
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="homeSSCSedConItem">
                    <a href="##">
                      <p className="pic">
                        <img src="http://img3m3.ddimg.cn/55/12/1574831863-1_h_9.jpg" alt=""/>  
                      </p>
                      <p className="name">
                      0.8元秒杀 限量抢购 抢完即止
                      </p>
                      <p className="price">
                        <span className="rob">
                          <span className="num">￥0.8</span>
                          <span className="oldNum">
                            ￥199.00
                          </span>
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="homeSSCSedConItem">
                    <a href="##">
                      <p className="pic">
                        <img src="http://img3m3.ddimg.cn/55/12/1574831863-1_h_9.jpg" alt=""/>  
                      </p>
                      <p className="name">
                      0.8元秒杀 限量抢购 抢完即止
                      </p>
                      <p className="price">
                        <span className="rob">
                          <span className="num">￥0.8</span>
                          <span className="oldNum">
                            ￥199.00
                          </span>
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="homeSSCSedConItem">
                    <a href="##">
                      <p className="pic">
                        <img src="http://img3m3.ddimg.cn/55/12/1574831863-1_h_9.jpg" alt=""/>  
                      </p>
                      <p className="name">
                      0.8元秒杀 限量抢购 抢完即止
                      </p>
                      <p className="price">
                        <span className="rob">
                          <span className="num">￥0.8</span>
                          <span className="oldNum">
                            ￥199.00
                          </span>
                        </span>
                      </p>
                    </a>
                  </li>
                  <li className="homeSSCSedConItem">
                    <a href="##">
                      <p className="pic">
                        <img src="http://img3m3.ddimg.cn/55/12/1574831863-1_h_9.jpg" alt=""/>  
                      </p>
                      <p className="name">
                      0.8元秒杀 限量抢购 抢完即止
                      </p>
                      <p className="price">
                        <span className="rob">
                          <span className="num">￥0.8</span>
                          <span className="oldNum">
                            ￥199.00
                          </span>
                        </span>
                      </p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* 学习专场 */}
          <section className="homeSecStudy"></section>
          {/* 图书城 */}
          <section className="homeSecBook"></section>
          {/* 服装鞋包 */}
          <section className="homeSecClo"></section>
          {/* 聚食惠 */}
          <section className="homeSecFood"></section>
        </div>
        <Footer />
      </div>
    )
  }
}
