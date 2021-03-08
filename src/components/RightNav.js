import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  li {
    padding: 0 0.5rem;
  }
  @media (max-width: 767px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/communityhouse">
          <p>
            Közösségi
            <br />
            Ház
          </p>
        </Link>
      </li>
      <li>
        <Link to="/history">
          <p>
            Görögkatolikusok
            <br />
            Magyarországon
          </p>
        </Link>
      </li>
      <li>
        <Link to="/news">
          <p>Hírek</p>
        </Link>
      </li>
      <li>
        <Link to="/bible">
          <p>Online<br />Biblia</p>
        </Link>
      </li>
      <li>
        <Link to="/calendar">
          <p>Naptár</p>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <p>Rólunk</p>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <p>Kapcsolat</p>
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;
