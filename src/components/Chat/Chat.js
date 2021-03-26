import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = ({ location }) => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);
	const ENDPOINT = useRef(process.env.REACT_APP_ENDPOINT);

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	useEffect(() => {
		const { name, room } = queryString.parse(location.search);
		setName(name);
		setRoom(room);

		socket = io(ENDPOINT.current);
		socket.emit('join', { name, room }, () => {});

		return () => {
			socket.emit('disconnectFromChat');
			socket.off();
		};
	}, [ENDPOINT, location.search]);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages((oldMessages) => [...oldMessages, message]);
		});
	}, []);

	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
				/>
			</div>
		</div>
	);
};

export default Chat;
