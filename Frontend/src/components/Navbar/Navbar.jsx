import React from "react";

function Navbar(){
    
    const navStyle={height:50,marginBottom:30}
    return(
        <>
            <nav>
                <div className='logo' style={navStyle}>
                    <img src={process.env.PUBLIC_URL+'/asterdio-light.png'} alt="" className='logo_image' style={{maxHeight:'100%'}} />
                </div>
                
            </nav>
        </>
    )
}

export default Navbar