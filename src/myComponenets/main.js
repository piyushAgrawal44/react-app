import React from 'react'

export default function main() {
    var click = () =>{
        document.getElementById('firstdiv').innerText="welcom to my first react app";
        
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
