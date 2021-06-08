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
import {RiWhatsappFill, RiHomeHeartFill, RiServiceFill} from 'react-icons/ri';
import InfoModel from './components/InfoModel';

const ModelDetails = ({
  model: {
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
  },
}) => {
  const formatedPhotos = formatPhotos(photos);
  const redirectToWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_LINK.replace(
    '{number}',
    phone,
  );

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
              <InfoModel
                title="Detalles"
                value={name}
                Icon={RiServiceFill}
                color="blue.700"
                details={[
                  `Altura: ${height}cm`,
                  `Color de cabello: ${hairColor}`,
                  `Medidas: ${bodyMeasurements}`,
                  `Interéses: ${category.join(', ')}`,
                ]}
              />
              <InfoModel
                title="Contactáme"
                value={phone}
                color="whatsapp.600"
                href={redirectToWhatsApp}
                Icon={RiWhatsappFill}
                details={[`Horario: ${schedule}`]}
              />
              <InfoModel
                color="pink.700"
                title="Mi agencia"
                value={agency.name}
                Icon={RiHomeHeartFill}
                details={[`Zona: ${zone.name}`]}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default ModelDetails;
