import React from 'react'

export default function main() {
    var count=1;
    var click = () =>{
      
        if (count===1) {
            count=2;
            document.getElementById('firstdiv').innerText="welcom to my first react app";
        } 
        else {
            document.getElementById('firstdiv').innerText="";
            count=1;
        }
        
    }
    return (
        <>
        <div className="container text-center">
             <div className="my-5" id="firstdiv"></div>
            <button className="btn btn-sm btn-success" onClick={click}>Click here</button>
        </div>
        </>
    )
}
