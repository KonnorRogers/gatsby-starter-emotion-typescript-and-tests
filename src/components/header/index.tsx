import { Link } from "gatsby";
import React from "react";

import * as styles from "./styles";

interface Props {
  siteTitle?: string;
}

const Header: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  siteTitle,
  ...attrs
}) => (
  <header css={styles.header} {...attrs}>
    <div css={styles.div}>
      <h1 css={styles.h1}>
        <Link to="/" css={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
