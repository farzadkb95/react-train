import React, {Component,useState} from "react";
import HookCounter from "./components/HookCounter";
// import Product from "./components/Product"; 
import CounterClass from "./components/ClassCounter";  
 import HookObject from "./components/HookObject";
 import HooksArray from "./components/HookObject";

 
 
 
   

// class App extends  Component{
// state={
// //object js
// product:[
//   {title: "react.js", price: "99$"},
//   {title: "vue.js", price: "150$"},

//   {title: "angular.js", price: "162$"} ,

// ]

// };
// clickHandler= () =>{
// //console.log("clicked");
// this.setState({

//    product:[
//     {title: "react.js", price: "555599$"},
//     {title: "vue.js", price: "33333$"},
  
//     {title: "angular.js", price: "332233232$"} ,
  


//    ]
// })
// }


//   render(){
// return ( 
// <div className='container' id='root' ><h1>this is head one </h1>  
// {this.state.product.map(product=>{
//   return <Product name={product.title} price={product.price}
//   /> 
// })} 
// <button onClick={this.clickHandler}> change price </button>
//   </div>
//   );
 


// }
// } 

const App = () => {


  const [ product,setproduct]=useState( [

         {title: "react.js", price: "99$"},
        {title: "vue.js", price: "150$"},
      
        {title: "angular.js", price: "162$"} ,
      

  ]);
 
const clickHandler =() =>{

setproduct([

  {title: "react.js", price: "123213123$"},
 {title: "vue.js", price: "123132$"},

 {title: "angular.js", price: "123123$"} ,


]);
};

  return ( 
    
    <div className='container' id='title' >
      {/* <HookCounter/>
      <CounterClass/> */}
      <HookObject/>

      <HooksArray/>

      <h1>this is head one </h1>  
    {product.map((product)=>{
      return <product name={product.title} price={product.price}
      /> 
    })} 
    <button onClick={clickHandler}> change price </button>
      </div>
      );
     
    
    };
   
 
 

    export default App;


