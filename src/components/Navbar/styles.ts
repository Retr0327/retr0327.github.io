import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
    WebkitBoxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
  },
  inner: {
    height: 56,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "row-reverse",
    },
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
