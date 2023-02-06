import React, { FC } from "react";
import { Col, Row } from "react-grid-system";

import { CustomContainer } from "components";
import Image from "next/image";

import image from "assets/images/sync_files.svg";

export const HowToGetOnlineTranslation: FC = (): JSX.Element => {
  return (
    <CustomContainer>
      <Row>
        <Col>
          <Image
            src={image.src}
            height={image.height}
            width={image.width}
            alt="hero image"
          />
        </Col>
      </Row>
    </CustomContainer>
  );
};
