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
			        <div className="f5 ma2 pa2 lh-copy tc">
			        	Customize your own robot! Fill in the form and click <span style={{fontWeight:'bold', color:'brown'}}>Submit</span> to preview your robot.<br/>
			        	Run out of ideas? Try the <span style={{fontWeight:'bold', color:'brown'}}>Random</span> button!<br/>
			        	If you like the robot, click <span style={{fontWeight:'bold', color:'brown'}}>Add To List</span> to add the robot in the friend list!
			        </div>
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
