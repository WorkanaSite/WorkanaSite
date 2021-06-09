import {useRouter} from 'next/router';

const {Image} = require('@chakra-ui/react');

const ModelCard = ({
  id,
  src,
  alt,
  position = 'relative',
  gender,
  indepent,
  ...props
}) => {
  const {push} = useRouter();

  return (
    <Image
      onClick={() => push(`/modelos/${id}`)}
      src={src}
      alt={alt}
      objectFit="cover"
      loading="lazy"
      minH="200px"
      maxH="250px"
      {...props}
    />
  );
};

export default ModelCard;
