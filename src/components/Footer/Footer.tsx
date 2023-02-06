import React, { FC } from "react";
import { Col, Row } from "react-grid-system";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";

import { CustomContainer } from "components";

export const Footer: FC = (): JSX.Element => {
  const { t, lang } = useTranslation("common");
  return (
    <div className="bg-green-200">
      <CustomContainer>
        <Row>
          <Col>
            <Trans i18nKey={"common:title"} />
            <br />
            {t("common:title")}
          </Col>
          <Col>footer</Col>
        </Row>
      </CustomContainer>
    </div>
  );
};
