"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image"
import Link from "next/link";

const Logo = () => {
  const [logoSrc, setLogoSrc] = useState('/images/logo.svg');
  const [isMobile] = useMediaQuery('(max-width: 619px)');
  useEffect(() => {
    if (isMobile) {
      setLogoSrc('/images/simple-logo.svg')
    } else {
      setLogoSrc('/images/logo.svg')
    }
  }, [isMobile])

  return (
    <Link href="/" style={{ cursor: 'pointer' }}>
      <Image
        src={logoSrc}
        alt="logo"
        width={isMobile ? 43 : 213}
        height={isMobile ? 50 : 60}
      />
    </Link>
  );
};

export default Logo;
