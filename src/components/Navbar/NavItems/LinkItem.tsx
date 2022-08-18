import Link from "next/link";
import { memo } from "react";
import useStyles from "./styles";
import { NavItemProps } from "../types";

function LinkItem({ link }: NavItemProps) {
  const { classes } = useStyles();

  return (
    <Link href={link.link}>
      <a className={classes.link}>{link.label}</a>
    </Link>
  );
}

export default memo(LinkItem);
