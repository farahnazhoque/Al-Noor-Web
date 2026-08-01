'use client';

import React from 'react';
import './StarBorder.css';

const SPARKLE_COLOR = '#0a0a0a';

type StarBorderProps = {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
} & Record<string, unknown>;

export default function StarBorder({
  as: Component = 'button',
  className = '',
  color = SPARKLE_COLOR,
  speed = '4s',
  children,
  style,
  ...rest
}: StarBorderProps) {
  return (
    <Component
      className={`star-border-container ${className}`.trim()}
      style={style}
      {...rest}
    >
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
        aria-hidden="true"
      />
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
        aria-hidden="true"
      />
      <div className="inner-content">{children}</div>
    </Component>
  );
}
