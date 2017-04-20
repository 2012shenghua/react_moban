/**
 * Created by Nordri on 2017/4/5.
 */
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// // ReactDOM.render(<h1>!!!!</h1>,document.getElementById('example'));
// ReactDOM.render(
//     <h1>majo</h1>,
//     document.getElementById('example')
// );


import React from 'react';
import ReactDOM from 'react-dom';
export default class Idex extends React.Component{
    componentWillMount(){
        console.log("Idex-componentWillMount")
    }

    componentDidMount(){
        console.log("Idex-componentDidMount")
    }



    render(){
        return(
            <div></div>
        );
    }
}

// ReactDOM.render(
//     <div>
//         <h1>组件</h1>
//         <Footer/>
//         <Componentbody/>
//         <Idex/>
//         <Temp speed="130km/h" username={123}/>
//     </div>
//     ,document.getElementById('example'));