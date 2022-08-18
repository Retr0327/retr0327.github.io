import LinkItem from "./LinkItem";
import { LinksTypes } from "../types";
import NestedItems from "./NestedItems";

function NavItems({ links }: LinksTypes) {
  return (
    <>
      {links.map((link) => {
        if (link.links) {
          return <NestedItems key={link.label} link={link} />;
        }
        return <LinkItem key={link.label} link={link} />;
      })}
    </>
  );
}

export default NavItems;
