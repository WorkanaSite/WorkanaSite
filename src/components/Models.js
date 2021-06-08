import ModelCard from './ModelCard';
const Models = ({models, ...props}) => {
  return models.map((item, index) => (
    <ModelCard
      id={item.id}
      key={index}
      src={item.principalPhotoURL}
      alt={item.name}
      position="absolute"
      objectFit="contain"
      loading="lazy"
      gender={item.gender}
      indepent={item.indepent}
      mx="4px"
      _first={{
        ml: 0,
      }}
      _last={{
        mr: 0,
      }}
      {...props}
    />
  ));
};

export default Models;
