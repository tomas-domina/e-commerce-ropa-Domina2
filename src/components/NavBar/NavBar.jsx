import React from "react";
import CartWidget from "../NavBar/CartWidget";


function NavBar() {
    
    return (
        
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <div className="container-fluid">
                    
                    <img src="https://lh3.googleusercontent.com/9PnSUFJsherN1Hjm18Mf5F8TmA9B5xLnh3nsd_g-1qg9-QwOkxYfuLw3a9XnVGOuzXd5=s85" alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Hombre</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Mujer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Niños</a>
                        </li>
                    </ul>

                    
                    </div>
                    
                </div>
                <CartWidget/>  
            </nav>
           
            
        </div>
        
    )
}

export default NavBar