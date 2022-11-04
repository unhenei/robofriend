import React from 'react';
import './NavBar.css';

const NavBar = () => {
	return(
		<div id='navContainer' className = 'pa2 flex justify-end'>
			<div className = 'dib ma3 v-mid f3'>Residents</div>
			<div className = 'dib ma3 v-mid f3'>New Friends</div>
			<div id = 'profileIcon' className = 'dib ma3 v-mid'></div>
		</div>
	)
}

export default NavBar;