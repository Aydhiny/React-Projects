import React, { useState, useEffect } from 'react';

const WelcomeText = () => {
  const [text, setText] = useState('WELCOME TO MY WORLD');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) => {
        if (prevText.endsWith('...')) {
          return 'WELCOME TO MY WORLD';
        } else {
          return prevText + '.';
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1 className='wrldText'>{text}</h1>;
};

export default WelcomeText;
