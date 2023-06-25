import { NextPage } from 'next';
import { SWRConfig } from 'swr';

import { Col, Row } from 'react-grid-system';

import { MainLayout } from 'layouts';
import { CustomContainer } from 'components';

import { getHowGetTranslation, getLanguages, getServices } from 'services';

const Jobs: NextPage = ({ fallback }: any) => {
  return (
    <SWRConfig value={{ fallback }}>
      <MainLayout>
        <CustomContainer>
          <Row>
            <Col>
              Distinctio eveniet necessitatibus nisi quis! Ad est necessitatibus
              neque nisi officia quasi quia reiciendis sequi voluptates. Aliquid
              architecto beatae consequatur error eum id, in ipsa labore laborum
              nihil nobis praesentium quis quod sapiente sed veniam voluptate.
              Ab dignissimos iure laboriosam non optio quaerat?
            </Col>
          </Row>
        </CustomContainer>
      </MainLayout>
    </SWRConfig>
  );
};
export default Jobs;

export async function getServerSideProps({ locale }: any) {
  const services = await getServices(locale);
  const languages = await getLanguages(locale);
  const howGetTranslation = await getHowGetTranslation(locale);

  return {
    props: {
      fallback: {
        ['services']: services,
        ['languages']: languages,
        ['how-get-translation']: howGetTranslation,
      },
    },
  };
}
