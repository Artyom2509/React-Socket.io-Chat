import React from 'react';
import { Link } from 'react-router-dom';
import './InfoBar.css';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

const InfoBar = ({ room }) => {
	return (
		<div className="infoBar">
			<div className="leftInnerContainer">
				<img src={onlineIcon} alt="onlineIcon" className="onlineIcon" />
				<h3>{room}</h3>
			</div>
			<div className="rightInnerContainer">
				<Link to="/">
					<img src={closeIcon} alt="closeIcon" className="closeIcon" />
				</Link>
			</div>
		</div>
	);
};

export default InfoBar;
