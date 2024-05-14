import React,{useState} from "react";

export default function Text(){
    var [num,setnum] = useState(0)
    const [input,setInput]=useState("")
    function increment(){
       setnum(num+1)
    }
    function decrement(){
        setnum(num-1)
    }

    function addifeven(){
        

        if (parseInt(input) % 2 === 0) {
            setnum(num + parseInt(input));
        }
    }
    return(
        <>
            
            <h3>num = {num}</h3>
            <input type="number" value={input}  onChange={(e) =>setInput(e.target.value)}></input>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Add</button>
            <button onClick={addifeven}>Add if even</button>
        </>
    )
}




// import React, { useState,useEffect } from 'react'

// export default function Text() {
//     const [opt, opts] = useState("")
//     const [input,setInput]=useState("")
//     const service= () => {
        
//         setInput(sessionStorage.getItem('opts'));
//         setInput((input) => input ++);


    
    
//       }

//     // function handler(){

//     // }

//     // useEffect(() => {
        
         
        
//     //   });


//     return (
//         <>
//             <div className="man">
//             <label for='dd'>show input</label>

//                <input type='number'  id="dd" value={input}  placeholder='input here'></input>

                
//                 <div className="vll" onClick={service}><button type='submit'>click for add</button>
//                 <div className="vll"><button type='submit'>Dec the value</button>
//                 </div>
//                 </div>


//                 {/* <div className="show" >{setInput}</div> */}

//                 <input type='number'  >{setInput(e.target.value)}</input>





//             </div>

//         </>
//     )
// }
