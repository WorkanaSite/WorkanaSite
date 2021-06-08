const {Container, Spinner, Text} = require('@chakra-ui/react');

const Loading = () => (
  <Container
    maxW="100vw"
    py="4"
    height="100vh"
    position="absolute"
    top="0"
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    bg="l_bg"
    zIndex="modal">
    <Text color="blue.600" fontSize="3xl" mb="4">
      Cargando...
    </Text>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  </Container>
);
export default Loading;
