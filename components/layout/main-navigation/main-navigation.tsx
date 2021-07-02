import Link from "next/link";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Menu, Button, useColorMode } from "@chakra-ui/react";
import styles from "./main-navigation.module.css";

type NavigationProps = {};

function Navigation({}: NavigationProps) {
  const { toggleColorMode } = useColorMode();

  return (
    <div className={styles.container}>
      <Menu>
        <Link href="/" passHref>
          <div className={styles.logo}>
            {/* <SunIcon color="#f1d44b" boxSize={9}></SunIcon> */}
            <Image
              src="/images/testats_logo.png"
              width={60}
              height={60}
              alt="Picture of the author"
            />
            Testats
          </div>
        </Link>
        <Link href="/" passHref>
          <Button>Build history</Button>
        </Link>
        <Link href="/" passHref>
          <Button>Code reviews</Button>
        </Link>
        <Button onClick={toggleColorMode}>
          <MoonIcon />
        </Button>
      </Menu>
    </div>
  );
}

export default Navigation;
