import Advertisements from './Advertisements';
import {
  Grid,
  GridItem,
  SimpleGrid,
  Container,
  Text,
  Alert,
} from '@chakra-ui/react';
import {MAX_WIDHT} from 'src/constants';
import {WarningIcon} from '@chakra-ui/icons';
import ModelCard from 'src/components/ModelCard';
import VerticaAdvertisements from './VerticalAdvertisements';

const CustomGrid = ({models, advertisement}) => {
  return (
    <>
      <SimpleGrid
        position="relative"
        columns={{base: 2, sm: 3, md: 4, lg: 6}}
        spacing={4}>
        {models.map(item => (
          <ModelCard
            key={item.id}
            id={item.id}
            src={item.principalPhotoURL}
            alt={item.name}
            gender={item.gender}
            indepent={item.indepent}
            objectFit="contain"
            loading="lazy"
            width="100%"
            heigth="100%"
          />
        ))}
      </SimpleGrid>
      <Advertisements data={advertisement} />
    </>
  );
};

const AllModels = ({
  models,
  top,
  medium,
  last,
  filteredModels,
  isSearch,
  right,
}) => {
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
        <GridItem
          colSpan={{base: 0, lg: 1}}
          display={{base: 'none', lg: 'block'}}>
          <VerticaAdvertisements data={right} />
        </GridItem>
      </Grid>
    </Container>
  );
};
export default AllModels;
