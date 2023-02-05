import React, { FC, ReactNode } from "react";
import { Container, ContainerProps } from "react-grid-system";

interface IProps extends ContainerProps {
  children: ReactNode;
}

export const CustomContainer: FC<IProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    // @ts-ignore
    <Container xs sm md className="padding-container" {...props}>
      {children}
    </Container>
  );
};
