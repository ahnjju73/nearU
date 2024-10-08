import Faq from 'src/components/custom/Faq';

export const getServerSideProps = async ({ query = {}, params = {} }) => ({
  props: {
    query,
    params,
  },
});

export default Faq;
