import React from 'react'
import svg from '../components/svg.css'
import {init} from '../components/main.js'
class Love extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      content: "呐，给你一颗小❤️❤️",
      love: "",
    }
    
  }
  componentDidMount(){
   
      this.hasScroll();
  }

  hasScroll = (event)=>{
    var i =0;

    this.interval =  setInterval(() => {
      
    //console.log(this.state.love+i);
    if(i<=this.state.content.length){
      //this.hasScroll(i);
      this.setState({love: this.state.content.substring(0,i+1)+'_'})
      i++
    }else{
      clearInterval(this.interval);
    }
    }, 600);
    
  }


  render(){
    return(
     <div className="t">
      <h3  className="t">
        {this.state.love}
      </h3>
      <div >
      <canvas id="canvas"></canvas>
        <svg className="heart-loader"   xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 90 90" version="1.1">
          <g className="heart-loader__group">
            <path className="heart-loader__square" strokeWidth="1" fill="none" d="M0,30 0,90 60,90 60,30z"/>
            <path className="heart-loader__circle m--left" strokeWidth="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
            <path className="heart-loader__circle m--right" strokeWidth="1" fill="none" d="M60,60 a30,30 0 0,1 -60,0 a30,30 0 0,1 60,0"/>
            <path className="heart-loader__heartPath" strokeWidth="2" d="M60,30 a30,30 0 0,1 0,60 L0,90 0,30 a30,30 0 0,1 60,0" />
          </g>
        </svg>
      </div>
      <h4 className="other__link">by <span>😶</span></h4>
    </div>  
    )
  }
}

export default Love