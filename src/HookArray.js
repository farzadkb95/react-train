import   { useState } from 'react';
const HooksArray = () => {
const [item,setItem] = useState([]);
const additemhandler = () =>{
// setItem =>array ?
setItem([...item,{id:item.length ,Number:Math.floor(math.random)*100}]);

};
    return  <div>
<button onclick = {additemhandler}>add item </button>
{item.map(item=>{
    return <li key={item.id}>{item.number}</li>
    
 })}
    </div>;
};

export default HooksArray ;