import React from 'react';
import Popup from 'reactjs-popup';
import NewCard from '../NewCard/NewCard'
import './NavBar.css';


const NavBar = ({loadRobot}) => {
	return(
		<div id='navContainer' className = 'pa2 flex justify-end'>
			<Popup
			    trigger={<div id='triggerBtn' className="dib ma3 v-mid f3 pointer white"> {'NEW'} </div>}
			    modal
			  >
			    {close => (
			      <div className="modal bg-moon-gray br3 w6 h-auto pa3 ba b--gray shadow-2">
			        <div className="header f3 ma2"> {'Find A New Friend'} </div>
			        <div className="content ma2">
			          {<NewCard loadRobot={loadRobot} />}
			        </div>
			      </div>
			    )}
			  </Popup>

		</div>
	)
}

export default NavBar;
