import React from 'react';
import styled from 'styled-components';
import ReactHowler from 'react-howler';

import jungle from './assets/jungle.jpeg';
import lo from './assets/lilblue.png';
import me from './assets/me.png';
import message from './assets/bdaytext.png';
import music from './assets/Jurassic Park - Main Theme.mp3';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${jungle});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
  }
`;

function App() {
  return (
    <Container>
      <Inner>
        <img className='message' src={message} />
        <img className='lo' src={lo} />
        <img className='trevor' src={me} />
      </Inner>
      <ReactHowler src={music} playing={true} loop={true} />
    </Container>
  );
}

export default App;
