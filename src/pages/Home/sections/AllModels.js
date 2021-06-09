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
import {formatModels} from '../lib';

const CustomGrid = ({models, advertisement}) => {
  return (
    <>
      <SimpleGrid
        position="relative"
        columns={6}
        spacing={{base: 1, lg: 3}}
        mb="2">
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
            heigth="auto"
            minH="auto"
          />
        ))}
      </SimpleGrid>
      <Advertisements data={advertisement} />
    </>
  );
};

const AllModels = ({
  models = [],
  top,
  medium,
  last,
  filteredModels,
  isSearch,
  right,
  gender,
}) => {
  const steps = 12;
  const existFilteredData = filteredModels.length;
  const data = existFilteredData
    ? filteredModels
    : models.filter(item => item.gender === gender);

  const _formatModels = formatModels({
    data,
    steps,
    advertisements: {
      1: top,
      2: medium,
      3: last,
    },
  });

  return (
    <Container maxW={MAX_WIDHT}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={{base: 1, lg: 4}}>
        <GridItem colSpan={{base: 4}}>
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
          {_formatModels.map(({models, advertisement}) => (
            <CustomGrid models={models} advertisement={advertisement} />
          ))}
        </GridItem>
        <GridItem colSpan={{base: 1}}>
          <VerticaAdvertisements data={right} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default AllModels;
