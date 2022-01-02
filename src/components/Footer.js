import React from 'react'

function Footer() {
    const myStyle = {
        position : "fixed",
        bottom: "0",
        left: "0",
        // backgroundColor: "red",
        height: "10vh",
        width: "100%",
        textAlign: "center",
        fontSize: "1rem",
        fontWeight: "bold"
        
    }
    return (
        <>
         <div className='footer' style={myStyle}>
            Made with ❤️ by <a href="https://www.instagram.com/be.like.ab/">Arpit Babbar</a>
            <div><a>Github</a> <a>Twitter</a> <a>Youtube</a></div>
        </div>   
        </>
    )
}

export default Footer
