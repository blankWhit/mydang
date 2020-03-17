import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';

import './index.less';

const tarbarArr = [
  {
    img : 'icon-shouye2',
    text: '首页',
    path: '/'
  },
  {
    img : 'icon-fenlei',
    text: '分类',
    path: '/list',
  },
  {
    img : 'icon-xiexiangbao',
    text: '值得买',
    path: '/shop'
  },
  {
    img : 'icon-gouwuche',
    text: '购物车',
    path: '/shopping'
  },
  {
    img : 'icon-geren',
    text: '我的当当',
    path: '/pre'
  },
]

export default class Footer extends Component {

  constructor(props){
    super(props)
    this.state = {
      index: 0
    }
  }

  itemChange = (i)=>{
    this.setState({
      index: i
    })
  }

  render() {
    return (
      <section className="footer">
        <div className="footerContent" style={{height:"100%",display:"flex"}}>
          {
            tarbarArr.map((v,i)=>(
              <div 
                key={i} className={"tabbar-item"+(this.state.index===i?' active':'')} 
                onClick={()=>this.itemChange(i)} 
                style={{width:"100%",height:"100%"}}
              >
                <NavLink exact to={v.path}>
                  <div className="footerItem">
                    <div 
                      className={"iconfont "+v.img}
                      style={{width:"100%",height:"100%"}}
                    />
                    <div className="iconText">{v.text}</div>
                  </div>
                </NavLink>
              </div>
            ))
          }
          
        </div>
      </section>
    )
  }
}


         


          

       
          

      
          

       

