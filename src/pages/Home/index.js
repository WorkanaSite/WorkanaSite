import Navigation from 'src/nav';
import Top from './sections/Top';
import AllModels from './sections/AllModels';
import Filter from './sections/Filter';
import {useEffect, useState} from 'react';
import {filterByGenderZoneAndAgency} from './lib';
import {useRouter} from 'next/router';
import {Box} from '@chakra-ui/react';
const Home = ({
  zones,
  agencies,
  models = [],
  top: topModels,
  advertisements = [],
}) => {
  const router = useRouter();
  const {query = {}} = router;

  const [{gender, zone, agency}, setFilter] = useState({
    gender: query?.genero || 'Mujer',
    zone: query?.zona || '',
    agency: query?.agencia || '',
  });
  const [filteredModels, setFilterModels] = useState([]);
  const {
    top = [],
    medium = [],
    last = [],
    right = [],
  } = advertisements[gender] || {};
  const agenciesOptions = agencies.map(item => ({
    value: item.id,
    label: item.name,
  }));
  const zoneOptions = zones.map(item => ({
    value: item.id,
    label: item.name,
  }));

  useEffect(() => {
    setFilterModels(
      filterByGenderZoneAndAgency({zone, gender, agency, models}),
    );
    router.push(
      {
        path: '/',
        query: {
          genero: gender,
          zona: zone,
          agencia: agency,
        },
      },
      `/?genero=${gender}${zone && `&zona=${zone}`}${
        agency && `&agencia=${agency}`
      }`,
      {shallow: true},
    );
    if (process.browser) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [zone, agency, gender]);

  const onSelectGender = label =>
    setFilter(prev => ({zone: '', agency: '', gender: label}));
  const onSelectZone = id => setFilter(prev => ({...prev, zone: id}));
  const onSelectAgency = id => setFilter(prev => ({...prev, agency: id}));

  const isSearch = zone || agency;

  return (
    <Box bg="black">
      <Top models={topModels[gender]} />
      <Navigation
        top={150}
        gender={gender}
        handleSelectGender={onSelectGender}
      />
      <Filter
        top={{base: 251, lg: 221}}
        zoneOptions={zoneOptions}
        agenciesOptions={agenciesOptions}
        handleSelectZone={onSelectZone}
        handleSelectAgency={onSelectAgency}
        agency={agency}
        zone={zone}
      />
      <AllModels
        gender={gender}
        filteredModels={filteredModels}
        models={models}
        top={top}
        medium={medium}
        last={last}
        right={right}
        isSearch={isSearch}
      />
    </Box>
  );
};

export default Home;
