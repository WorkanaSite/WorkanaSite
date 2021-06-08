import {Container, Image} from '@chakra-ui/react';
import {MAX_WIDHT} from 'src/constants';
import Navigation from 'src/nav';

const Contact = () => {
  return (
    <div>
      <Navigation />
      <Container maxW={MAX_WIDHT} py="4">
        <Image
          loading="lazy"
          src={process.env.NEXT_PUBLIC_CONTACT_IMAGE_URL}
          alt="Site contacto"
          width="100%"
        />
      </Container>
    </div>
  );
};

export default Contact;
