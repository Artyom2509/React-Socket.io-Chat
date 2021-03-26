import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	const clickLinkHandler = (e) =>
		!name.trim() || !room.trim() ? e.preventDefault() : null;

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">React Chat</h1>
				<div>
					<input
						type="text"
						placeholder="Name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="joinInput"
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="Room"
						value={room}
						onChange={(e) => setRoom(e.target.value)}
						className="joinInput mt-20"
					/>
				</div>
				<Link onClick={clickLinkHandler} to={`/chat?name=${name}&room=${room}`}>
					<button type="submit" className="button mt-20">
						Sign in
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
