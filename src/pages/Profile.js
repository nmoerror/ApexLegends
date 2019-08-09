import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const ThisSection = styled.div`
  height: 100vh;

  img {
    margin: 4rem 0rem 4rem 9rem;
    height: 8rem;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 12rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.6rem;
  border: 3px solid #aaa;
  color: white;
  padding: 1rem 2rem 8rem 2rem;
  transition: 1s ease-out;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Profile = props => {
  return (
    <ThisSection>
      {console.log(props.location.state.profile)}
      <img src={Logo} />
      <Shadow>
        dsad
        <Link to='/'> Back</Link>
      </Shadow>
    </ThisSection>
  );
};

export default Profile;
