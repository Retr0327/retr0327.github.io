import Link from "next/link";
import { links } from "./links";
import useStyles from "./styles";
import { useState, memo } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Group, Menu as MantineMenu, Burger } from "@mantine/core";

function Menu() {
  const { classes } = useStyles();
  const { toggle } = useDisclosure(false)[1];
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <MantineMenu
      shadow="md"
      position="bottom"
      width="100%"
      offset={10}
      onOpen={() => setUserMenuOpened(true)}
      onClose={() => setUserMenuOpened(false)}
      classNames={classes}
    >
      <MantineMenu.Target>
        <Group spacing={7}>
          <Burger
            opened={userMenuOpened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Group>
      </MantineMenu.Target>
      <MantineMenu.Dropdown>
        {links.map((value) => (
          <MantineMenu.Item key={value.label} icon={value.icon}>
            <Link href={value.link}>
              <a>{value.label}</a>
            </Link>
          </MantineMenu.Item>
        ))}
      </MantineMenu.Dropdown>
    </MantineMenu>
  );
}

export default memo(Menu);
