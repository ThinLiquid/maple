import { useState, MouseEvent, CSSProperties, ReactNode } from 'react';

const MINIMUM_RIPPLE_SIZE: number = 100;

interface Ripple {
  key: number;
  style: CSSProperties;
}

type ShowRipple = (event: MouseEvent<HTMLElement>) => void;

type RipplesArray = ReactNode[];

export default function useRipple(style: CSSProperties): [ShowRipple, RipplesArray] {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const showRipple: ShowRipple = (event) => {
    const { left, top } = event.currentTarget.getBoundingClientRect();
    const x: number = event.clientX - left;
    const y: number = event.clientY - top;
    const rippleSize: number = Math.min(
      event.currentTarget.clientHeight,
      event.currentTarget.clientWidth,
      MINIMUM_RIPPLE_SIZE
    );

    const newRipple: Ripple = {
      key: event.timeStamp,
      style: {
        display: 'block',
        width: rippleSize,
        height: rippleSize,
        position: 'absolute',
        left: x - rippleSize / 2,
        top: y - rippleSize / 2,
        background: 'currentColor',
        borderRadius: '50%',
        opacity: 0.4,
        pointerEvents: 'none',
        animationName: 'useRippleAnimation',
        animationDuration: '0.7s',
        ...style,
      },
    };

    setRipples((state) => [...state, newRipple]);
  };

  const ripplesArray: RipplesArray = ripples.map((currentRipple) => {
    const handleAnimationEnd = () => {
      setRipples((state) => state.filter((previousRipple) => previousRipple.key !== currentRipple.key));
    };

    return <span {...currentRipple} onAnimationEnd={handleAnimationEnd} />;
  });

  return [showRipple, ripplesArray];
}