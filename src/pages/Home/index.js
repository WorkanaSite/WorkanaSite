import Navigation from 'src/nav';
import Top from './sections/Top';
import AllModels from './sections/AllModels';
import Filter from './sections/Filter';
import {useState} from 'react';
const Home = ({
  zones,
  agencies,
  models,
  top: topModels,
  advertisements = {},
}) => {
  const [{gender, zone, agency}, setFilter] = useState({
    gender: '',
    zone: '',
    agency: '',
  });
  const {top, medium, last} = advertisements;
  const agenciesOptions = agencies.map(item => ({
    value: item.id,
    label: item.name,
  }));
  const zoneOptions = zones.map(item => ({
    value: item.id,
    label: item.name,
  }));

  const onSelectGender = label => setFilter(prev => ({...prev, gender: label}));
  const onSelectZone = id => setFilter(prev => ({...prev, zone: id}));
  const onSelectAgency = id => setFilter(prev => ({...prev, agency: id}));

  return (
    <>
      <Top models={topModels} />
      <Navigation />
      <Filter
        zoneOptions={zoneOptions}
        agenciesOptions={agenciesOptions}
        handleSelectGender={onSelectGender}
        handleSelectZone={onSelectZone}
        handleSelectAgency={onSelectAgency}
        agency={agency}
        zone={zone}
        gender={gender}
      />
      <AllModels models={models} top={top} medium={medium} last={last} />
    </>
  );
};

export default Home;
