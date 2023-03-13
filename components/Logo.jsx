import { useMediaQuery } from "@chakra-ui/react";
import Image from "next/image"
import Link from "next/link";

const Logo = () => {
  const [isMobile] = useMediaQuery('(max-width: 619px)');
  return (
    <Link href="/" style={{ cursor: 'pointer' }}>
      <Image
        src={isMobile ? '/images/simple-logo.svg' : '/images/logo.svg'}
        alt="logo"
        width={isMobile ? 43 : 213}
        height={isMobile ? 50 : 60}
      />
    </Link>
  );
};

export default Logo;
