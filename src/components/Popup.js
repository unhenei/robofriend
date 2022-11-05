import React from 'react'
import './Popup.css'

const Popup = (props) => {
	return (
		<div id='popup'>
			{props.children}
		</div>
	)
}

export default Popup;