import React from 'react' ;
import Tilt from 'react-tilt';
import newlogo from './newlogo.png';
import './logo.css';


const Logo = () => {
	return (
		<div className = 'ma3 mt4 center'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 35 }} style={{ height: 90, width: 90 }} >
			 <div className="Tilt-inner"> <img style = {{paddingTop : '0.5em'}} src ={newlogo} alt='logo' /> </div>
			</Tilt>
		</div>
		)
}
export default Logo