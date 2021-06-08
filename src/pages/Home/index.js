import Navigation from 'src/nav';
import Top from './sections/Top';
import AllModels from './sections/AllModels';
import Filter from './sections/Filter';
const Home = ({
  zones,
  agencies,
  models,
  top: topModels,
  advertisements = {},
}) => {
  const {top, medium, last} = advertisements;
  const agenciesOptions = agencies.map(item => ({
    value: item.id,
    label: item.name,
  }));
  const zoneOptions = zones.map(item => ({
    value: item.id,
    label: item.name,
  }));
  return (
    <>
      <Top models={topModels} />
      <Navigation />
      <Filter zoneOptions={zoneOptions} agenciesOptions={agenciesOptions} />
      <AllModels models={models} top={top} medium={medium} last={last} />
      {/* <Container maxW="1440px" height="100vh">
        <Text>Home</Text>
      </Container>
      <Container maxW="1440px" height="100vh">
        <Text>Home</Text>
      </Container> */}
    </>
  );
};

export default Home;
