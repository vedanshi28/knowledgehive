import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text_black};
  font-size: 14px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.8s ease-in-out;
`;
const Card = styled.div`
  width: 380px;
  height: 320px;
  cursor: pointer;
  border: 1px solid indigo;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
  &:hover ${Button} {
    display: block;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Desc = styled.div`
  font-size: 15px;
  font-weight: 100;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000b9;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow: hidden;
  transition: all 0.5s ease;
`;

const Image = styled.img`
  width: 100%;
`;

const FeaturesCard = ({ feature }) => {
  return (
    <>
      <Card>
        <Details>
          <Title>{feature.title}</Title>
          <Desc className="text-gray-300">{feature.text}</Desc>
        </Details>
        <div>
          <img
            src={feature.img}
            alt=""
            className="flex items-center mt-3"
            height={28}
            width={28}
          />
        </div>
      </Card>
    </>
  );
};
export default FeaturesCard;
