import React, { FC } from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-grid-system";

import { ThemeSwitch } from "components";
import { Button } from "UI";

export const Navigation: FC = (): JSX.Element => {
  return (
    <div className="relative h-16 w-screen gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver">
      <div className="fixed z-50 h-16 w-screen border-b border-white/5 gradient-downriver-to-jelly-bean dark:gradient-firefly-to-downriver backdrop-blur-sm">
        <Container lg>
          <Row>
            <Col>
              <div className="">
                <Link href="/">LOGO</Link>
                <Button>button</Button>
              </div>
            </Col>
            <Col>
              <div className="flex items-center">
                <ThemeSwitch />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
