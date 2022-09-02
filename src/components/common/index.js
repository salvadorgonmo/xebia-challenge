import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Card = styled.div`
  padding: 20px;
  width: fit-content;
  min-width: 150px;
  border: 2px solid black;
  border-radius: 20px;
  margin: 10px;
  text-align: center;
  color: palevioletred;
`;

export const CardContent = styled.section`
  text-align: center;
  color: palevioletred;
`;

export const CardActions = styled.div`
  text-align: center;
  color: palevioletred;
`;

export const Button = styled.button`
  font-size 18px;
  text-align: center;
  color: palevioletred;
  background-color: white;
  border: unset;
  &:hover {
    cursor: pointer;
    color: blue;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const Subtitle = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Wrappers
export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em;
  margin: 20px;
`;

export const Loading = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  margin: 20px;
`;

export const HorizontalWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: row;
`;

export const CardWrapper = styled.div`
  padding: 4em;
`;

export const Input = styled.input`
  padding: 8px;
`;

export const Link = styled.link`
  width: fit-content;
`;
