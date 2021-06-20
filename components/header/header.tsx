import { Heading } from "@chakra-ui/react";
import classes from "./header.module.css";

type Props = {
  title: string;
};

function Header({ title }: Props) {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <Heading as="h1" size="2xl" isTruncated>
          {title}
        </Heading>
      </div>
    </div>
  );
}

export default Header;
