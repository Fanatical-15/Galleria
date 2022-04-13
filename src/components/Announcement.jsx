import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: rgb(4, 5, 58);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>WEAR WHAT YOU LOVE !</Container>;
};

export default Announcement;
