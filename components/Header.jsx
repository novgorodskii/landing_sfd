import { Flex } from '@chakra-ui/react'
import Logo from "./Logo"
import { NAV_LINKS } from "../constants/shared"
import NavLink from './NavLink';
import MobileMenu from './MobileMenu';
import { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';

const Header = () => {
  const [isDesktopHeader] = useMediaQuery('(min-width: 992px)');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex justify="space-between" alignItems="center" py={{ base: '24px', md: '32px', lg: '64px' }}>
      <Logo />
      {isDesktopHeader ? (
        <Flex
          gap="40px"
          alignItems="center"
          fontSize="16px"
          lineHeight="19px"
          fontWeight={400}
        >
          {NAV_LINKS.map((navLink) => (
            <NavLink
              key={navLink.id}
              title={navLink.title}
              to={navLink.to}
            />
          ))}
        </Flex>
      ) : (
        <MobileMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navigation={NAV_LINKS}
        />
      )}
    </Flex>
  );
};

export default Header;
