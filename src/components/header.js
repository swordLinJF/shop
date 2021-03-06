import React from 'react'
import { Link } from 'gatsby'
import './Header.css'

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hasScrolled: false
    }
  }
  componentDidMount(){
    window.addEventListener('scroll',this.hasScroll)
  }

  hasScroll = (event)=>{
    const scrollTop = window.pageYOffset;
    if(scrollTop>50){
        this.setState({hasScrolled: true});
    }else{
      this.setState({hasScrolled: false});
    }
  }

  render(){
    return (
      <div className={this.state.hasScrolled ? 'header headerScrolled' : 'header'}>
        <div className="headerGroup">
          {/* <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"/></Link> */}
          <Link to="">商品</Link>
          <Link to="">下载</Link>
          <Link to="">资源</Link>
          <Link to=""><button>购买</button></Link>
        </div>
      </div>

    )
  }
}


export default Header 
