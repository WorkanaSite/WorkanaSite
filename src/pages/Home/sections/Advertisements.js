const {SimpleGrid, Image} = require('@chakra-ui/react');

const Advertisements = ({data = []}) => (
  <SimpleGrid columns={2} spacing={4}>
    {data.map((item, index) => (
      <Image
        key={index}
        loading="lazy"
        src={item.imageURL}
        alt="promocion"
        flex={0.9}
        width="100%"
        my="4"
      />
    ))}
  </SimpleGrid>
);
export default Advertisements;
