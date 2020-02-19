import React, { Component } from 'react'
import homeimg from '../../images/home_img.jpg'
//import Maapform from './RangeCircleform'
export default class Home extends Component {
    render() {
        return (
            <div>
               <div className="row">
                   <div style={{background:"blue",width:"100%"}} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h2>E-Learning</h2>
                   </div>
               </div>
               <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <img src={homeimg} style={{height:"70%",width:"90%"}}></img>
            </div>
            </div>
            {/* <div>
            <button type="submit" onClick={Maapform} >Submit </button></div> */}
           
          </div>
        )
    }
}
