import {MAX_WIDHT} from 'src/constants';

const {Text, Container} = require('@chakra-ui/react');

const Footer = () => (
  <Container maxW={MAX_WIDHT} py="4">
    <Text textAlign="justify" my="5">
      {process.env.NEXT_PUBLIC_TERMS}
    </Text>
  </Container>
);
export default Footer;
