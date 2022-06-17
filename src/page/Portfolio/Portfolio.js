import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Portfolio.css';
import { useWallet } from '../../helper/WalletContext';
import portfolioBG from '../../components/assets/Portfolio-page-bg.png';
import {
  Box,
  Container,
  Text,
  Center,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Image,
  Button,
  Select,
  bgImage,
} from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgImage={portfolioBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
    >
      <Button color={'black'}>Connect Wallet</Button>
    </Container>
  );
};

export default Portfolio;
