import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';

import Header from '../Header';
import Footer from '../Footer';

import './index.less';

export default class Home extends Component {

  state = {
    data:["1","2","3","4","5"],
    imgHeight:110,
    hour: 0,
    min: 0,
    sec: 0
  }

  componentDidMount(){
    const end = Date.parse(new Date('2020-03-20 24:00'))
    this.countFun(end)
  }

  // 卸载组件取消倒计时
  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  countFun = (end) =>{

    let now_time = Date.parse(new Date());
    var remaining = end - now_time;

    this.timer = setInterval(() => {
        //防止出现负数
      if (remaining > 1000) {
        remaining -= 1000;

        let hours = Math.floor((remaining / 1000 / 3600) % 24);
        let minutes = Math.floor((remaining / 1000 / 60) % 60);
        let seconds = Math.floor(remaining / 1000 % 60);

        this.setState({
            hour:hours < 10 ? "0" + hours : hours,
            min:minutes < 10 ? "0" + minutes : minutes,
            sec:seconds < 10 ? "0" + seconds : seconds
        })
      } else {
        clearInterval(this.timer);
        
      }
    }, 1000);
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
          <span className="homeSSCSedTime">{ this.state.hour }:{this.state.min}:{this.state.sec} </span>
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
          <section className="homeSecStudy">
            <a href="http://shop.m.dangdang.com/22206.html?t=1584612100">
              <img src="http://img51.ddimg.cn/222060123100431_y.jpg" alt=""/>
            </a>
          </section>
          
          {/* 图书城 */}
          <section className="homeSecBook">
            {/* 设置的是头部 */}
            <div className="homeSecBookHead">
              <div className="homeSecBookHeadTitle">
                <div className="homeSecBookHeadTitleTit">
                  <img src="http://img61.ddimg.cn/upload_img/00705/yhj/tslc-bt.jpg" alt=""/>
                </div>
                <ul className="homeSecBookHeadTitleSub">
                  <li>
                    <a href="http://z.dangdang.com/guan/index?page_id=793332">
                      当当书城
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://e.dangdang.com/mapp/1024xinshouye.html?">
                      电子书
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://e.dangdang.com/mapp/wwnp.html?#">
                      网络文学
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="homeSecBookHeadImg">
                <a href="https://h5.dangdang.com/mix_20200306_5pvc?">
                  <img src="http://img61.ddimg.cn/upload_img/00803/1/1242x332-1583739302.jpg" alt=""/>
                </a>
              </div>
            </div>
            {/* 图书城的内容区 */}
            <div className="homeSecBookCont">
              <ul className="homeSecBookContList">
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                <li className="homeSecBookContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          
          {/* 服装鞋包 */}
          <section className="homeSecClo">
            {/* 设置的是头部 */}
            <div className="homeSecCloHead">
              <div className="homeSecCloHeadTitle">
                <div className="homeSecCloHeadTitleTit">
                  <img src="http://img61.ddimg.cn/upload_img/00757/shuang11/biaoti-1540452487.jpg" alt=""/>
                </div>
                <ul className="homeSecCloHeadTitleSub">
                  <li>
                    <a href="http://touch.m.dangdang.com/bhshop.php?bang_type=fuzhuang">
                      服务品牌榜单
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://hb.dangdang.com/mdd/new_product.php?t=1584621482">
                      服装上新
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://touch.m.dangdang.com/topics.php?page_id=162371">
                      服装馆
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="homeSecCloHeadImg">
                <a href="http://touch.m.dangdang.com/topics.php?page_id=162371">
                  <img src="http://img62.ddimg.cn/upload_img/00757/LOGO/loucengbanner-1565921661.jpg" alt=""/>
                </a>
              </div>
            </div>
            {/* 服装箱包的内容区 */}
            <div className="homeSecCloCont">
              <div className="homeSecCloContTop">
                <div className="homeSecCloContTopLeft">
                  <a href="##">
                    <span className="left">
                      <span className="title">
                        <b>茵曼女装</b>
                        <i style={{color:"#c72898"}}>低至1折起</i>
                      </span>
                      <span className="img">
                        <img src="http://img52.ddimg.cn/53840049727492_y.jpg" alt=""/>
                      </span>
                    </span>
                    <span className="right">
                      <div className="rightTop">
                        <a href="##">
                          <span className="textWrap">
                            <span className="title">
                              <b>迪士尼童鞋</b>
                              <i style={{color:"#c72898"}}>限时99元2双</i>
                            </span>
                          </span>
                          <span className="img">
                            <img src="http://img51.ddimg.cn/107480065898271_y.jpg" alt=""/>
                          </span>                          
                        </a>
                      </div>
                      <div className="rightBottom"></div>
                    </span>
                  </a>
                </div>
                <div className="homeSecCloContTopRight"></div>
              </div>
              <div className="homeSecCloContCont"></div>
              <div className="homeSecCloContBot"></div>
            </div>
          </section>
          
          {/* 聚食惠 */}
          <section className="homeSecFood">
            {/* 设置的是头部 */}
            <div className="homeSecFoodHead">
              <div className="homeSecFoodHeadTitle">
                <div className="homeSecFoodHeadTitleTit">
                  <img src="http://img61.ddimg.cn/upload_img/00757/shuang11/biaoti-1540452487.jpg" alt=""/>
                </div>
                <ul className="homeSecFoodHeadTitleSub">
                  <li>
                    <a href="http://touch.m.dangdang.com/topics.php?page_id=160142">
                      食品馆
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://search.m.dangdang.com/category.php?cid=4005627">
                      休闲食品
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://search.m.dangdang.com/category.php?cid=4005629">
                      粮油调味
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                  <li>
                    <a href="http://search.m.dangdang.com/category.php?cid=4005625">
                      夏日茶饮
                      <i className="iconfont icon-gengduotianchong"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="homeSecFoodHeadImg">
                <a href="http://shop.m.dangdang.com/8411.html?t=1584624210">
                  <img src="http://img54.ddimg.cn/14540059153154_y.jpg" alt=""/>
                </a>
              </div>
            </div>
            {/* 聚食惠的内容区 */}
            <div className="homeSecFoodCont">
              <ul className="homeSecFoodContList">
                <li className="homeSecFoodContItem">
                  <a href="##">
                    <span className="title">
                      <b>文艺小青年</b>
                      <i style={{color:"#ef2933"}}>书中大情怀</i>
                    </span>
                    <span className="img">
                      <img src="http://img63.ddimg.cn/upload_img/00796/1/11.18-1575272441.png" alt=""/>
                    </span>
                  </a>
                </li>
                
              </ul>
            </div>
          </section>
        
        </div>
        <Footer />
      </div>
    )
  }
}
