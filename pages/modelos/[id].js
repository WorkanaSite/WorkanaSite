import {getDataFromServer} from 'services';
import ModelDetails from 'src/pages/ModelDetails';
const Page = props => <ModelDetails {...props} />;

export const getServerSideProps = async ({res, query}) => {
  const {id} = query;

  const data = await getDataFromServer({path: `models/${id}`, res});
  return {
    props: {
      ...data,
    },
  };
};

export default Page;
