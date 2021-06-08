import {
  Container,
  GridItem,
  Heading,
  Image,
  Grid,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import {MAX_WIDHT} from 'src/constants';
import Navigation from 'src/nav';
import {formatPhotos} from './lib';
import TextDetails from 'src/components/TextDetails';

const ModelDetails = ({
  name,
  photos = [],
  age,
  agency,
  zone,
  description,
  height,
  schedule,
  principalPhotoURL,
  hairColor,
  bodyMeasurements,
  category = [],
  phone,
}) => {
  const formatedPhotos = formatPhotos(photos);

  return (
    <div>
      <Navigation />
      <Container maxW={MAX_WIDHT} py="4">
        <Heading mb="4">{`Modelo`}</Heading>
        <Grid
          gridTemplateColumns="repeat(6, 1fr)"
          gridTemplateRows={{base: '1fr 1fr', md: '1fr'}}>
          <GridItem colSpan={{base: 6, md: 4}} maxWidth="600px" marginX="auto">
            <Grid
              gridTemplateColumns="repeat(2, 1fr)"
              gridTemplateRows="1fr"
              gap={4}>
              {formatedPhotos.map((item, index) => (
                <GridItem key={index} colSpan={item.isVertical ? 1 : 2}>
                  <Image
                    src={item.photoURL}
                    alt={item.name}
                    width="100%"
                    objectFit="contain"
                    loading="lazy"
                    // width="90"
                  />
                </GridItem>
              ))}
            </Grid>
          </GridItem>
          <GridItem
            colSpan={{base: 6, md: 2}}
            as={Flex}
            px="2"
            pb="2"
            flexDirection="column"
            alignItems="center">
            <Heading textAlign="center">
              {name} <br /> {`${age} años`}{' '}
            </Heading>
            <Image
              noOfLines={1}
              src={principalPhotoURL}
              maxWidth="300px"
              alt={`Model - ${name}`}
              align="center"
              my="4"
            />
            <Text textAlign="center" fontSize="lg">
              {description}
            </Text>
            <Box justifyItems="flex-start" width="100%" mt="8">
              <TextDetails label="Agencia" value={agency.name} />
              <TextDetails label="Zona" value={zone.name} />
              <TextDetails label="Altura" value={`${height}cm`} />
              <TextDetails label="Horario" value={`${schedule}`} />
              <TextDetails label="Color de cabello" value={`${hairColor}`} />
              <TextDetails label="Medidas" value={`${bodyMeasurements}`} />
              <TextDetails label="Intereses" value={`${category.join(', ')}`} />
              <TextDetails label="Phone" value={`${phone}`} />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default ModelDetails;
