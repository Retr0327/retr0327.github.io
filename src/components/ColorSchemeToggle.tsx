import { useMemo } from "react";
import { IconSunHigh, IconMoon } from "@tabler/icons";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const color = isDark ? "yellow" : "blue";

  const icon = useMemo(
    () =>
      isDark ? (
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
    >
      {icon}
    </ActionIcon>
  );
}

export default ColorSchemeToggle;
