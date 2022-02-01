import React, { FC, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './transition.scss';

interface ContainerProps {
  state: boolean;
  timeout: number;
  children: React.ReactNode;
}

const TransitionContainer: FC<ContainerProps> = (props: ContainerProps) => {
  const animationDivRef = useRef(null);

  const { state, timeout, children } = props;

  return (
    <CSSTransition
      in={state}
      timeout={timeout}
      unmountOnExit
      classNames="slow-transition"
      nodeRef={animationDivRef}
    >
      <div ref={animationDivRef}>{children}</div>
    </CSSTransition>
  );
};

export default TransitionContainer;
