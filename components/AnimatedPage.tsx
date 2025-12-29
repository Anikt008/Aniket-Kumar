import React from 'react';

interface AnimatedPageProps {
  children: React.ReactNode;
}

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default AnimatedPage;