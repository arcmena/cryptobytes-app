import React from 'react';
import { Header, Footer } from '../../components';
import './About.css'

export default props => {
    return (
        <div className="main_container">
            <Header /> 
            <div className="wrapper">
                <div id="about">
                    <p>CryptoBytes is a live cryptocurrency capitalization APP that uses our CrytoBytes-API to consult data from CoinMarketCap and give you only the relevant data.<br></br><br></br>How to use?<br></br><br></br>In Home page you have a searchbox and the ten most valued coins by value. If you want to search one just type the id and click in the icon. Example of id: dogecoin. Thats it!<br></br><br></br> If you have any doubt or suggestion contact the developer at <a href="https://github.com/arcmena" rel="noopener noreferrer" target="_blank">GitHub</a>. Thank You!</p>
                </div>
                <Footer/>
            </div>
        </div>
    );
}