import React from 'react';
import styled from 'styled-components';
import ReactHowler from 'react-howler';
import useWindowScrollPosition from '@rehooks/window-scroll-position';

import jungle from './assets/jungle.jpeg';
import lo from './assets/lilblue.png';
import me from './assets/me.png';
import message from './assets/bdaytext.png';
import jp from './assets/Jurassic Park - Main Theme.mp3';

import bieber from './assets/bieber.png';
import stage from './assets/bg.jpeg';
import lauren from './assets/bday_lauren.png';
import wdym from './assets/wutdoyumean.mp3';

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background-image: url(${jungle});
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const WhatHaveIDone = styled.div`
	height: 150vh;
	width: 100vw;
	background-image: url(${stage});
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const BieberBox = styled.div`
	display: flex;

	.bieber {
		position: absolute;
		width: 50%;
		height: auto;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.satan {
		position: absolute;
		top: 30rem;
		width: 35%;
		height: 55%;
	}

	p {
		color: white;
		position: absolute;
		font-size: 2.5rem;
		top: 60rem;
		left: 3rem;
	}
`;

const Inner = styled.div`
	display: flex;

	.trevor {
		width: 75%;
		height: 75%;
		position: absolute;
		right: 2rem;
		bottom: 0;
	}

	.lo {
		position: absolute;
		left: 4rem;
		bottom: 0;
	}

	.message {
		position: relative;
		top: -40rem;
		width: 100%;
	}
`;

function App() {
	//*this sets the increment
	let options = {
		throttle: 500
	};

	let position = useWindowScrollPosition(options);
	console.log(position);

	return (
		<>
			<Container>
				<Inner>
					<img className="message" src={message} />
					<img className="lo" src={lo} />
					<img className="trevor" src={me} />
				</Inner>
				<ReactHowler src={position.y > 700 ? wdym : jp} playing={true} loop={true} />
			</Container>
			<WhatHaveIDone>
				<BieberBox>
					<p>Birthday Girl --></p>
					<img src={bieber} alt="biebz" className="bieber" />
					<img src={lauren} alt="bday lo" className="satan" />
				</BieberBox>
			</WhatHaveIDone>
		</>
	);
}

export default App;
