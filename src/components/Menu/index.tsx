import React, { useEffect, useState } from 'react';
import { Button } from '@/components/index';

import { Root, Logo } from './styles';

const Menu: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  const listenToScroll = () => {
    const top = document.body.scrollTop || document.documentElement.scrollTop;
    if (top === 0) {
      setScrolled(false);
    } else {
      setScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
  }, []);

  return (
    <Root scrolled={scrolled}>
      <Logo src="/images/team33-logo.png" />
      <a href="#">
        <Button>
          Register now
        </Button>
      </a>
    </Root>
  );
};

export default Menu;
