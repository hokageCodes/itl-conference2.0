"use client"
import React from 'react';
import styled from 'styled-components';
import { FaRegLightbulb, FaRegSmile, FaRegStar, FaRegHeart } from 'react-icons/fa';

const CardSectionContainer = styled.div`
  background-color: #FEFBF6; // Background color
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background-color: #FFF;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  svg {
    color: #3D3C42; // Icon color
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h3 {
    color: #7F5283; // Primary text color
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #000000; // Black text color for alternative use
    font-size: 1rem;
  }
`;

const WhyAttend = () => {
  return (
    <CardSectionContainer>
      <CardsContainer>
        <Card>
          <FaRegLightbulb />
          <h3>Innovative Ideas</h3>
          <p>Discover new and innovative ideas in the legal industry at our conference.</p>
        </Card>
        <Card>
          <FaRegSmile />
          <h3>Networking</h3>
          <p>Meet and network with legal professionals and stakeholders from across the globe.</p>
        </Card>
        <Card>
          <FaRegStar />
          <h3>Expert Speakers</h3>
          <p>Learn from industry experts and thought leaders through engaging sessions.</p>
        </Card>
        <Card>
          <FaRegHeart />
          <h3>Supportive Community</h3>
          <p>Join a community dedicated to supporting Internationally Trained Lawyers (ITLs).</p>
        </Card>
      </CardsContainer>
    </CardSectionContainer>
  );
};

export default WhyAttend;
