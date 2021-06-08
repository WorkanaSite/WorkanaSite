import Advertisements from './Advertisements';
import {
  Image,
  Grid,
  GridItem,
  SimpleGrid,
  Container,
  Text,
} from '@chakra-ui/react';
import {MAX_WIDHT} from 'src/constants';
import NextLink from 'src/components/NextLink';

const CustomGrid = ({models, advertisement}) => {
  return (
    <>
      <SimpleGrid columns={{base: 4, lg: 6}} spacing={4}>
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

const AllModels = ({models, top, medium, last}) => {
  return (
    <Container maxW={MAX_WIDHT}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}>
        <GridItem colSpan={{base: 5, lg: 4}}>
          <CustomGrid models={models.slice(0, 12)} advertisement={top} />
          <CustomGrid models={models.slice(13, 25)} advertisement={medium} />
          <CustomGrid models={models.slice(26)} advertisement={last} />
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
