import AnchorLink from "react-anchor-link-smooth-scroll-ts";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <div>
      <AnchorLink
        onClick={() => setSelectedPage(lowerCasePage)}
        href={`#${lowerCasePage}`}
        className={`${
          selectedPage === lowerCasePage ? "text-primary-500" : ""
        } transition duration-500 hover:text-primary-300`}
      >
        {page}
      </AnchorLink>
    </div>
  );
};

export default Link;
