import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const number =[7,8,9,4,5,6,1,2,3,0];
const operations=['/','+','-','*','='];

class App extends React.Component{
state ={
  lastPressed : undefined,
  operation:undefined,
  calculation:'0'
}


  handleClick=(e)=>{
    const { calculation , lastPressed} = this.state;
    const {innerText} =e.target;

     switch(innerText){
           case 'AC':{
             this.setState({
              calculation:'0'
             });
           break;
           }
           case '=':{
             const evaluated =eval(calculation);
            this.setState({
              calculation :evaluated,
            });
            break;
           }
          default:{
            let e=undefined;
            if(operations.includes(lastPressed) && operations.includes(innerText)){
              e=calculation.slice(0,-1) + innerText;
            }else{
               e= calculation ==='0'?innerText :(calculation+innerText);
            }
            this.setState({
              calculation:e,
              lastPressed:innerText
           });
          }
  }
}

  render(){

   
    const {calculation} =this.state;

    return(
<div className="body">
   <div className="calculator">
{/* <p style={{position:'absolute' ,top:0}}>{JSON.stringify(this.state, null ,2)}</p>  */}
     <div id="display" className="display">
      {calculation}
     </div>
        <div className="number-container">
          <button className="button light-grey long-btn" onClick={this.handleClick}>AC</button>
             {number.map( num => (
                 <button className={`button dark-grey ${num===0 && `big-h`}`} key={num} onClick={this.handleClick}>{num} </button>
               ))}
          <button className="button light-grey short-btn "onClick={this.handleClick} >.</button>
        </div>

        <div className="operations-container">
          {operations.map( op => (
            <button className="button orange" key={op} onClick={this.handleClick} >{op} </button>
          ))}
       </div>
  
  </div>
  <a href="https://abmincodecreations.github.io/">
    <div className="copy-right mt-1">&copy;  Designed and Developed by Abhishek Mishra</  div>
  </a>
</div> 
    );
  }
};



ReactDOM.render(<App/> , document.getElementById('root'));
