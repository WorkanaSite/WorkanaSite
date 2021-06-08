import Navigation from 'src/nav';
import {Container, Heading, Button, Icon} from '@chakra-ui/react';
import {MAX_WIDHT} from 'src/constants';
import {RiErrorWarningFill} from 'react-icons/ri';
import {useRouter} from 'next/router';

const Error = ({isError}) => {
  const {replace} = useRouter();
  const error = isError
    ? {
        message:
          'Lo sentimos ocurrio un error en la página. Reportelo al administrador.',
        href: process.env.NEXT_PUBLIC_ADVERTISEMENT_LINK,
        buttonText: 'Ponerse en contacto con el administrador',
      }
    : {
        message:
          'Oops! No encontramos lo que buscabas, pero puedes seguir buscando más modelos',
        href: '/',
        buttonText: 'Volver al inicio',
      };

  return (
    <>
      <Navigation />
      <Container
        minHeight="100vh"
        maxW={MAX_WIDHT}
        display="flex"
        flexDirection="column"
        py="4"
        justifyContent="center"
        alignItems="center">
        <Icon as={RiErrorWarningFill} color="red" fontSize="7xl" />
        <Heading textAlign="center" color="red.600">
          {error.message}
        </Heading>
        <Button
          size="lg"
          variant="solid"
          colorScheme="blue"
          my="4"
          onClick={() =>
            isError ? window.open(error.href, '_blank') : replace('/')
          }>
          {error.buttonText}
        </Button>
      </Container>
    </>
  );
};

export default Error;
