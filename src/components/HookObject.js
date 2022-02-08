import  {useState } from 'react';
const HookObject = () => {
   const [userData,setuserData] = useState({firstname:"",LASTNAME:""})
    const changehandler = (e)=>{
// console.log(e.target.value);
// firstname:e.target.value
setuserData({...userData,firstname:e. target.value});
    }

    const changehandler2 = (e)=>{
        // console.log(e.target.value);
        // firstname:e.target.value
        setuserData({...userData,LASTNAME:e. target.value});
            }


    return ( 
<form>
<input type="text" value={userData.firstname} onChange={changehandler}></input>
<input type="text" value={userData.LASTNAME} onChange={changehandler2}></input>

<h2>my name is -{userData.firstname}</h2>
<h2>my name is -{userData.LASTNAME}</h2>
<div> {JSON.stringify(userData)}  </div>
</form>


     );
}
 
export default HookObject;