import React, { useContext, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

import Spinner from '../../globalElements/Spinner';
import UserContext from '../../context/user/UserContext';

const LeaderBoard = () => {
	const { allPlayers, serverMsg, getAllPlayers } = useContext(UserContext);
	let showSpinner = true;
	let results;

	useEffect(
		() => {
			getAllPlayers();
		},
		// eslint-disable-next-line
		[ serverMsg ]
	);
	// turning off spinner once we get response from the server
	allPlayers.length > 0 && (showSpinner = false);

	// creating JSX
	if (showSpinner) {
		results = <Spinner />;
	} else {
		// display players once spinner is off
		results = (
			<ListGroup>
				{allPlayers.map((player) => {
					return (
						<ListGroup.Item key={player._id}>
							<div className="userItem">
								<p>{player.name}</p>
								<div>
									<p>{player.time}sec</p>
									<p>{player.date}</p>
								</div>
							</div>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		);
	}

	return (
		<div className="LeaderBoard">
			<h1>LEADER BOARD</h1>

			{results}

			<Card bg="info" style={serverMsg ? { opacity: '1' } : { opacity: '0' }}>
				<Card.Body text="light">{serverMsg}</Card.Body>
			</Card>
		</div>
	);
};

export default LeaderBoard;
