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
    hairColor,
    bodyMeasurements,
    category = [],
    phone,
    gender,
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
        <Grid
          gridTemplateColumns="repeat(6, 1fr)"
          gridTemplateRows={{md: '1fr'}}>
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
            pt={{base: '4', lg: '0'}}
            bg="l_bg"
            flexDirection="column"
            alignItems="center">
            <Box
              justifyItems="flex-start"
              width="100%"
              mt="8"
              bg="l_bg"
              position={{base: 'initial', lg: 'sticky'}}
              top={'100px'}>
              <Heading textAlign="center" mb="4">
                {name} <br /> {`${age} años`}{' '}
              </Heading>
              <InfoModel
                title="Contactáme"
                value={phone}
                color="whatsapp.600"
                href={redirectToWhatsApp}
                Icon={RiWhatsappFill}
                details={[
                  {
                    label: 'Click aquí para llamar',
                    as: 'a',
                    href: `tel:${phone}`,
                    fontWeight: 'bold',
                  },
                  {label: `Horario: ${schedule}`},
                ]}
              />
              <InfoModel
                color="pink.700"
                title="Mi agencia"
                value={agency.name}
                Icon={RiHomeHeartFill}
                details={[{label: `Zona: ${zone.name}`}]}
              />
              <InfoModel
                title="Detalles"
                value={name}
                Icon={RiServiceFill}
                color="blue.700"
                details={[
                  {label: `Género: ${gender}`},
                  {label: `Altura: ${height}`},
                  {label: `Color de cabello: ${hairColor}`},
                  {label: `Medidas: ${bodyMeasurements}`},
                  {label: `Interéses: ${category.join(', ')}`},
                ]}
              />
              <Text textAlign="center" fontSize="lg" mt="4">
                {description}
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default ModelDetails;
