import React from 'react'
import FONTS from './styles'


export function HeroFont01({ children, style, ...props }) {
  return (
    <h1 style={{ ...FONTS.heading01, ...style }} {...props}>
      {children}
    </h1>
  );
}
export function Title02({ children, style, ...props }) {
    return (
      <h1 style={{ ...FONTS.title02, ...style }} {...props}>
        {children}
      </h1>
    );
  }
  
  export function Title01({ children, style, ...props }) {
    return (
      <h1 style={{ ...FONTS.title01, ...style }} {...props}>
        {children}
      </h1>
    );
  }
  
  export function Heading01({ children, style, ...props }) {
    return (
      <h1 style={{ ...FONTS.heading01, ...style }} {...props}>
        {children}
      </h1>
    );
  }
  
  export function Heading02({ children, style, ...props }) {
    return (
      <h2 style={{ ...FONTS.heading02, ...style }} {...props}>
        {children}
      </h2>
    );
  }
  
  export function Subhead01({ children, style, ...props }) {
    return (
      <h3 style={{ ...FONTS.subhead01, ...style }} {...props}>
        {children}
      </h3>
    );
  }
  
  export function Subhead02({ children, style, ...props }) {
    return (
      <h4 style={{ ...FONTS.subhead02, ...style }} {...props}>
        {children}
      </h4>
    );
  }
  
  export function Label02({ children, style, ...props }) {
    return (
      <p style={{ ...FONTS.label02, ...style }} {...props}>
        {children}
      </p>
    );
  }
  
  export function SmallText02({ children, style, ...props }) {
    return (
      <p style={{ ...FONTS.smallText02, ...style }} {...props}>
        {children}
      </p>
    );
  }
  
  export function Label01({ children, style, ...props }) {
    return (
      <p style={{ ...FONTS.label01, ...style }} {...props}>
        {children}
      </p>
    );
  }
  
  export function SmallText01({ children, style, ...props }) {
    return (
      <small style={{ ...FONTS.smallText01, ...style }} {...props}>
        {children}
      </small>
    );
  }