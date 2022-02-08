import React, { Component } from 'react';
class CounterClass extends Component {
    state = { 
count:12

     } 
addonehandler =() =>{

this.setState({count:this.state.count +1});


};


    render() { 
        return ( 
            <div>

<h2>count-{ this.state.count+1}</h2>
<button onClick={this.addonehandler}>addone </button>
            </div>


        );
    }
}
 
export default CounterClass;
      