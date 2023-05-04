import Link from "next/link";
import { Box } from "@chakra-ui/react";

const NavLink = ({ title, to, isMobile, onClick }) => {
  return (
    <Link
      href={to}
      style={{
        fontSize: isMobile ? "24px" : "inherit",
        color: "#fff",
      }}
      onClick={() => onClick?.()}
    >
      <Box transition="all .3s" _hover={{ opacity: 0.8 }}>
        {title}
      </Box>
    </Link>
  );
};

export default NavLink;
