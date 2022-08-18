import { memo } from "react";
import Link from "next/link";
import useStyles from "./styles";
import { NavItemProps } from "../types";
import { Menu, Center } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";

function NestedItems({ link }: NavItemProps) {
  const { classes } = useStyles();

  const menuItems = link.links?.map((value) => (
    <Menu.Item key={value.link}>
      <Link href={value.link}>
        <a className={classes.link}>{value.label}</a>
      </Link>
    </Menu.Item>
  ));

  return (
    <Menu key={link.label} trigger="hover" exitTransitionDuration={0}>
      <Menu.Target>
        <a
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <Center>
            <span className={classes.linkLabel}>{link.label}</span>
            <IconChevronDown size={12} />
          </Center>
        </a>
      </Menu.Target>
      <Menu.Dropdown>{menuItems}</Menu.Dropdown>
    </Menu>
  );
}

export default memo(NestedItems);
