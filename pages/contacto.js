import {getDataFromServer} from 'services';
import Contact from 'src/pages/Contact';
const Page = props => <Contact />;

// export const getServerSideProps = async ({res}) => {
//   const data = await getDataFromServer({path: 'data-site', res});

//   return {
//     props: {
//       ...data,
//     },
//   };
// };

export default Page;
