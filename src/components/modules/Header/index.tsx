import * as React from "react";
import {Link} from "react-static";
import styled from "styled-components";
import THEME from "src/theme";

const Header = styled.div`
  padding: ${THEME.spacer.x3}px;
  display: flex;
`;

const HeaderLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HeaderLink = styled.li`
  float: left;
  a {
    position: relative;
    color: ${THEME.colors.gray100};
    text-transform: uppercase;
    text-decoration: none;

    &:visited {
      color: ${THEME.colors.gray100};
    }
    padding: ${THEME.spacer.x1}px ${THEME.spacer.x2}px;
    border-radius: ${THEME.borderRadius}px;

    &.active {
      color: white;
      background-color: ${THEME.colors.gray200};
    }
  }
`;

export default () => {
  return (
    <Header>
      <HeaderLinks>
        <HeaderLink>
          <Link exact to={"/"}>
            {"Play"}
          </Link>
        </HeaderLink>
        <HeaderLink>
          <Link to={"/about"}>{"About"}</Link>
        </HeaderLink>
      </HeaderLinks>
    </Header>
  );
};
