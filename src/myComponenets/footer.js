import React from 'react'

export default function footer() {
    var footerStyle = {
      "backgroundColor": "black",
      "color": "white",
      "padding": "10px"
    }
    return (
        <>
        <div className="text-center fixed-bottom" style={footerStyle}>
            This is the footer. @copyright myApp2021
        </div>
        </>
    )
}
