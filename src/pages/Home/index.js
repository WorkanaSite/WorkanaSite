import Navigation from 'src/nav';
import Top from './sections/Top';
import AllModels from './sections/AllModels';
import Filter from './sections/Filter';
import {useEffect, useState} from 'react';
const Home = ({
  zones,
  agencies,
  models = [],
  top: topModels,
  advertisements = {},
}) => {
  const [{gender, zone, agency}, setFilter] = useState({
    gender: '',
    zone: '',
    agency: '',
  });
  const [filteredModels, setFilterModels] = useState([]);
  const {top, medium, last} = advertisements;
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
      models.filter(item => item.agencyId == agency || item.zoneId == zone),
    );
  }, [zone, agency]);

  const onSelectGender = label => setFilter(prev => ({...prev, gender: label}));
  const onSelectZone = id => setFilter(prev => ({...prev, zone: id}));
  const onSelectAgency = id => setFilter(prev => ({...prev, agency: id}));

  const isSearch = gender || zone || agency;
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
      <AllModels
        filteredModels={filteredModels}
        models={models}
        top={top}
        medium={medium}
        last={last}
        isSearch={isSearch}
      />
    </>
  );
};

export default Home;
