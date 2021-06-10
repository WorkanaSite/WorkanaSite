import ModelCard from './ModelCard';
const Models = ({models, ...props}) => {
  return models.slice(0, 8).map((item, index) => (
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
      minHeight={100}
      _first={{
        ml: 0,
      }}
      _last={{
        mr: 0,
      }}
      height="100%"
      {...props}
    />
  ));
};

export default Models;
