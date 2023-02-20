import React from 'react';
import { Link } from "react-router-dom";


const Sidebar=()=>{ 
    return(        
        <>
        <div className="bg-dark border border-danger fs-2" style={{width:"200px" ,height:"100vh"}} id="msb">
		<nav className="navbar navbar-default" role="navigation">
			<div className="navbar-header">
				<div className="brand-wrapper">
					<div className="container6">
						<h1 className="navbar-brand p-3 mb-2 bg-dark text-white">Neuralmind</h1>
					</div>
				</div>
			</div>
			<div class="side-menu-container mt-5">
				<div class="mx-5">
                <div className='button3'><Link to="/Admin" class="text-decoration-none small text-secondary button button-3">Admin</Link></div>
               <div className='button3'><Link to="/Chat" class="text-decoration-none small text-secondary button button-3">Chat</Link></div>
               <div className='button3'><Link to="/Train" class="text-decoration-none small text-secondary button button-3">Train</Link></div>
				</div>
			</div>
		</nav>  
    </div>
</>
    )
}
export default Sidebar;