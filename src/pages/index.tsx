import StudHome from 'src/components/custom/Home';

export const getServerSideProps = async ({ query = {}, params = {} }) => ({
  props: {
    query,
    params,
  },
});

export default StudHome;
