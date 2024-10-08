import PrivacyPolicy from 'src/components/custom/Privacy-Policy';

export const getServerSideProps = async ({ query = {}, params = {} }) => ({
  props: {
    query,
    params,
  },
});

export default PrivacyPolicy;
