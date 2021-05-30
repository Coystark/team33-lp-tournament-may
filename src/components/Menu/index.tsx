import React, { useEffect, useState } from 'react';
import { Button } from '@/components/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import {
  Root,
  Logo,
  LinkContainer,
  LinkItem,
  ToggleMenu,
  Left,
  Overlay,
} from './styles';

const links = [
  {
    name: 'Overview',
    href: '/#overview',
  },
  {
    name: 'Scoring & Rules',
    href: '/#scoring-rules',
  },
  {
    name: 'Prizing',
    href: '/#prizing',
  },
  {
    name: 'FAQs',
    href: '/#faqs',
  },
  {
    name: 'Discord',
    href: '/#discord',
  },
];

function popupWindow(url: string, windowName: string, win: any, w: number, h: number) {
  const y = win.top.outerHeight / 2 + win.top.screenY - (h / 2);
  const x = win.top.outerWidth / 2 + win.top.screenX - (w / 2);
  return win.open(url, windowName, `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h}, top=${y}, left=${x}`);
}

const Menu: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
    <>
      <Root scrolled={scrolled}>
        <Left>
          <Logo src="/images/team33-logo.png" />
          <ToggleMenu onClick={() => setShowMenu((value) => !value)}>
            <FontAwesomeIcon icon={faBars} />
          </ToggleMenu>

        </Left>

        <LinkContainer scrolled={scrolled} show={showMenu}>
          {links.map((item) => (
            <LinkItem href={item.href} key={item.name} onClick={() => setShowMenu(false)}>
              {item.name}
            </LinkItem>
          ))}
        </LinkContainer>

        <Button onClick={() => {
          popupWindow('/form2.html', '', window, 600, 900);
        }}
        >
          Register now
        </Button>

      </Root>

      <Overlay show={showMenu} onClick={() => setShowMenu((value) => !value)} />

    </>
  );
};

export default Menu;
