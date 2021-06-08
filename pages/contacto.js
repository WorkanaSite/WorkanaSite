import Contact from 'src/pages/Contact';
const Page = props => <Contact {...props} />;

export const getServerSideProps = () => {
  return {
    props: {
      seo: {
        title: 'Contacto',
      },
    },
  };
};
export default Page;
