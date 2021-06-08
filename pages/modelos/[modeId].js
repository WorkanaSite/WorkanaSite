import {getDataFromServer} from 'services';
const Page = props => <h1>Hola model</h1>;

// export const getServerSideProps = async ({res}) => {
//   const data = await getDataFromServer({path: 'data-site', res});

//   return {
//     props: {
//       ...data,
//     },
//   };
// };

export default Page;
