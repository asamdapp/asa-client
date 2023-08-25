import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Col, Row } from 'react-grid-system';

interface IProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  withGradient?: boolean;
}

export const SectionTitle: FC<IProps> = ({
  children,
  className,
  withGradient,
  ...props
}): JSX.Element => {
  return (
    <Row>
      <Col lg={8} xl={6}>
        <h2
          {...props}
          className={clsx(
            "font-noto-serif lg:text-4xl md:text-3xl text-2xl mb-10 leading-tight",
            className,
            { "text-downriver dark:text-white": !withGradient },
            { "text-white": withGradient }
          )}
        >
          {children}
        </h2>
      </Col>
    </Row>
  );
};
