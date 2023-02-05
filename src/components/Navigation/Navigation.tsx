import React, { FC } from "react";
import { Col, Container, Row } from "react-grid-system";

import { Logo, OfferButton, ThemeSwitch } from "components";

export const Navigation: FC = (): JSX.Element => {
  return (
    <div className="relative h-14 w-screen gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver">
      <div className="fixed z-50 h-14 w-screen border-b border-white/5 gradient-downriver-to-jelly-bean-with-opacity dark:gradient-firefly-to-downriver-with-opacity backdrop-blur-md">
        <Container fluid className="padding-container xl:!px-5">
          <Row>
            <Col xxl={12}>
              <div className="flex items-center h-14">
                <Logo />
                <OfferButton size="small" />
                <ThemeSwitch />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
