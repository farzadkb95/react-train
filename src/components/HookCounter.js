import { useState } from "react";

 


const HookCounter = () => {
   
   
   const [count,setcount] = useState(0);
const addoneHandler =() =>{ 
setcount(count+1 )
}
const addtwoHandler =() =>{ 
    setcount(count+2 )
    }
    const addthreeHandler =() =>{ 
        // setcount(count+3 )
for(let i=0;i<10;i++)
setcount((prevcount)=>prevcount+1);
        }


    return (  

<h2>
<div>
<h2>
    count - {count}
</h2>
<button onClick={addoneHandler}>add+</button>
<button onClick={addtwoHandler}>add2</button>
<button onClick={addthreeHandler}>add3</button>

</div>

</h2>


    );
}
 
export default HookCounter;