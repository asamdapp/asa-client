import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";

export const Footer: FC = (): JSX.Element => {
  const { t, lang } = useTranslation("common");

  console.log(lang);
  return (
    <div className="bg-green-200">
      <Container>
        <Row>
          <Col>
            <Trans i18nKey={"common:title"} />
            <br />
            {t("common:title")}
          </Col>
          <Col>footer</Col>
        </Row>
      </Container>
    </div>
  );
};
