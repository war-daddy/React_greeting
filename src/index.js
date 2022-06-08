import  React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
let currdate = new Date();
let message = "";
currdate = currdate.getHours();
const css = {};
if(currdate >=1 && currdate<12){
  message = "Good Morning";
  css.color = 'green';
}
else if(currdate >=12 && currdate<=18){
  message = "Good AfterNoon";
  css.color = 'Yellow';
}
else if(currdate>18 && currdate<=20){
  message = "Good Evening";
  css.color = 'Orange';
  
}
else if(currdate>20 && currdate<=23){
  message = "Good Night";
  css.color = "Red";
}


ReactDOM.render(
  <h1 className='h'>Hello Sir ,<span style={css}>{message}</span></h1>,
  document.getElementById("root")
);