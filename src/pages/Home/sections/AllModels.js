import Advertisements from './Advertisements';
import {
  Image,
  Grid,
  GridItem,
  SimpleGrid,
  Container,
  Text,
  Alert,
} from '@chakra-ui/react';
import {MAX_WIDHT} from 'src/constants';
import NextLink from 'src/components/NextLink';
import {WarningIcon} from '@chakra-ui/icons';

const CustomGrid = ({models, advertisement}) => {
  return (
    <>
      <SimpleGrid columns={{base: 2, sm: 3, md: 4, lg: 6}} spacing={4}>
        {models.map(item => (
          <NextLink key={item.id} href={`/modelos/${item.id}`}>
            <Image
              src={item.principalPhotoURL}
              alt={item.name}
              objectFit="contain"
              loading="lazy"
              width="90"
            />
          </NextLink>
        ))}
      </SimpleGrid>
      <Advertisements data={advertisement} />
    </>
  );
};

const AllModels = ({models, top, medium, last, filteredModels, isSearch}) => {
  const steps = 12;
  const existFilteredData = filteredModels.length;
  const data = existFilteredData ? filteredModels : models;

  return (
    <Container maxW={MAX_WIDHT}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}>
        <GridItem colSpan={{base: 5, lg: 4}}>
          {isSearch && (
            <Alert
              status={existFilteredData ? 'success' : 'error'}
              my="4"
              color={existFilteredData ? 'green' : 'blackAlpha.800'}>
              <WarningIcon color="inherit" />
              <Text ml="2" color="inherit">{`${
                existFilteredData
                  ? 'Modelos de tu preferencia'
                  : 'Lo sentimos, no encontramos modelos pero puedes seguir buscando'
              }`}</Text>
            </Alert>
          )}
          <CustomGrid models={data.slice(0, steps)} advertisement={top} />
          <CustomGrid
            models={data.slice(steps + 1, steps * 2 + 1)}
            advertisement={medium}
          />
          <CustomGrid models={data.slice(steps * 2 + 2)} advertisement={last} />
        </GridItem>
        <GridItem colSpan={{base: 0, lg: 1}} bg="tomato" />
      </Grid>
      <Text textAlign="justify" my="5">
        {process.env.NEXT_PUBLIC_TERMS}
      </Text>
    </Container>
  );
};
export default AllModels;
