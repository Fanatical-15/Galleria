import {
 
  MailOutline,
  Phone,
  Room,

} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
   background-color:rgb(4, 5, 58);
   font-size:14px;

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color:#F7F7F7;
`;

const Logo = styled.h1`
color:#F7F7F7;

`;

const Desc = styled.p`
  margin: 20px 0px;
  color:#F7F7F7;
`;

const SocialContainer = styled.div`
  display: flex;
  color:white;
  text-decoration:none;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color:#F7F7F7;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  color:#F7F7F7;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  color:#F7F7F7;
  
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
  color:#F7F7F7;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>GALLERIA</Logo>
        <Desc>
      We provides a platform to all local vendors and malls to sell their product online through our website.
        </Desc>

        <SocialContainer>

        <a href="https://docs.google.com/forms/d/1f-XBjlhSIld5jiEmeatotro9Ky_fmZx3AveC4OkbUfM/edit">Need Help?</a>
        
        </SocialContainer>

      </Left>
      <Center>
        <Title>USEFUL LINKS</Title>
        <List>
         <ListItem><a href="/"><ListItem>Home</ListItem></a></ListItem>
         <ListItem><a href="/Cart"><ListItem>Cart</ListItem></a></ListItem>
          <a href="/ProductList"><ListItem>Man Fashion</ListItem></a>
          <a href="/ProductList"><ListItem>Woman Fashion</ListItem></a>
          <a href="/ProductList"><ListItem>Kids Fashion</ListItem></a>
        
        </List>
      </Center>
      <Right>
        <Title>CONTACTS</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>Banasthali Vidyapith, Jaipur.
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/>6892352234
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@banasthali.org
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
