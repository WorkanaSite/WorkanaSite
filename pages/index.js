import {getDataFromServer} from 'services';
import Home from 'src/pages/Home';
const Page = props => <Home {...props} />;

export const getServerSideProps = async ({res}) => {
  const data = await getDataFromServer({path: 'data-site', res});

  return {
    props: {
      ...data,
    },
  };
};

export default Page;
