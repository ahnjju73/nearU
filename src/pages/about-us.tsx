import AboutUs from 'src/components/custom/AboutUs';

export const getServerSideProps = async ({ query = {}, params = {} }) => ({
  props: {
    query,
    params,
  },
});

export default AboutUs;
