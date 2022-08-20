import Menu from "./Menu";
import { links } from "./links";
import useStyles from "./styles";
import NavItems from "./NavItems";
import { ColorSchemeToggle } from "@components/UI";
import { Header, Group, Container } from "@mantine/core";

function Navbar() {
  const { classes } = useStyles();

  return (
    <Header height={56} mb={120} className={classes.header}>
      <Container className={classes.inner}>
        Lixing Yang
        <Menu />
        <Group spacing={30} className={classes.links}>
          <NavItems links={links} />
          <ColorSchemeToggle />
        </Group>
      </Container>
    </Header>
  );
}

export default Navbar;
