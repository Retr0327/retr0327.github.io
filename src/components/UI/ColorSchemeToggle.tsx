import { useMemo } from "react";
import { IconSunHigh, IconMoon } from "@tabler/icons";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const color = useMemo(() => (dark ? "yellow" : "blue"), [colorScheme]);
  const icon = useMemo(
    () =>
      dark ? (
        <IconSunHigh style={{ width: 18, height: 18 }} />
      ) : (
        <IconMoon style={{ width: 18, height: 18 }} />
      ),
    [colorScheme]
  );

  return (
    <ActionIcon
      variant="outline"
      color={color}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {icon}
    </ActionIcon>
  );
}

export default ColorSchemeToggle;
