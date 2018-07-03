import React from "react";
import s from "./Header.css";
import { NavLink } from "react-router-dom";
import cn from "classnames";

const menuItems = [
  {
    name: "Peliculas",
    path: "movies"
  },
  {
    name: "Series",
    path: "shows"
  },
  {
    name: "Videos",
    path: "videos"
  },
  {
    name: "Libros",
    path: "books"
  },
  {
    name: "Musica",
    path: "music"
  },
  {
    name: "Sitios",
    path: "sites"
  },
  {
    name: "Otros",
    path: "other"
  },
  {
    name: "Sobre",
    path: "about"
  }
];

class Header extends React.Component {
  state = { showMenu: false };
  toggleMenu = () => {
    this.setState(({ showMenu }) => ({ showMenu: !showMenu }));
  };
  closeMenu = () => {
    this.setState(({ showMenu }) => ({ showMenu: false }));
  };
  render() {
    const { showMenu } = this.state;
    return (
      <header className={s.header}>
        <h1 className={s.logo}>
          <svg
            width="33px"
            height="32px"
            viewBox="219 50 33 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Logo"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              transform="translate(220.000000, 50.000000)"
            >
              <g id="Group-2" transform="translate(5.000000, 0.000000)">
                <g id="LOGO">
                  <rect
                    id="Rectangle"
                    fill="#61C482"
                    x="0"
                    y="16"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#EB7835"
                    x="0"
                    y="5.33333333"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#F5C15F"
                    x="0"
                    y="10.6666667"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#49B1DE"
                    x="0"
                    y="21.3333333"
                    width="9"
                    height="5.33333333"
                  />
                  <path
                    d="M0,26.6666667 L9,26.6666667 L9,29.3333333 C9,30.8060927 7.80486949,32 6.32407071,32 L2.67592929,32 C1.19805435,32 0,30.8030959 0,29.3333333 L0,26.6666667 Z"
                    id="Rectangle"
                    fill="#CB4AB0"
                  />
                  <path
                    d="M0,2.66666667 C0,1.19390733 1.19513051,0 2.67592929,0 L6.32407071,0 C7.80194565,0 9,1.1969041 9,2.66666667 L9,5.33333333 L0,5.33333333 L0,2.66666667 Z"
                    id="Rectangle"
                    fill="#EB5242"
                  />
                </g>
                <g id="LOGO" transform="translate(13.000000, 0.000000)">
                  <rect
                    id="Rectangle"
                    fill="#61C482"
                    x="0"
                    y="16"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#EB7835"
                    x="0"
                    y="5.33333333"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#F5C15F"
                    x="0"
                    y="10.6666667"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#49B1DE"
                    x="0"
                    y="21.3333333"
                    width="9"
                    height="5.33333333"
                  />
                  <path
                    d="M0,26.6666667 L9,26.6666667 L9,29.3333333 C9,30.8060927 7.80486949,32 6.32407071,32 L2.67592929,32 C1.19805435,32 0,30.8030959 0,29.3333333 L0,26.6666667 Z"
                    id="Rectangle"
                    fill="#CB4AB0"
                  />
                  <path
                    d="M0,2.66666667 C0,1.19390733 1.19513051,0 2.67592929,0 L6.32407071,0 C7.80194565,0 9,1.1969041 9,2.66666667 L9,5.33333333 L0,5.33333333 L0,2.66666667 Z"
                    id="Rectangle"
                    fill="#EB5242"
                  />
                </g>
              </g>
              <g
                id="Group-2"
                transform="translate(16.000000, 16.000000) rotate(-270.000000) translate(-16.000000, -16.000000) translate(5.000000, 0.000000)"
              >
                <g id="LOGO">
                  <rect
                    id="Rectangle"
                    fill="#61C482"
                    x="0"
                    y="16"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#EB7835"
                    x="0"
                    y="5.33333333"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#F5C15F"
                    x="0"
                    y="10.6666667"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#49B1DE"
                    x="0"
                    y="21.3333333"
                    width="9"
                    height="5.33333333"
                  />
                  <path
                    d="M0,26.6666667 L9,26.6666667 L9,29.3333333 C9,30.8060927 7.80486949,32 6.32407071,32 L2.67592929,32 C1.19805435,32 0,30.8030959 0,29.3333333 L0,26.6666667 Z"
                    id="Rectangle"
                    fill="#CB4AB0"
                  />
                  <path
                    d="M0,2.66666667 C0,1.19390733 1.19513051,0 2.67592929,0 L6.32407071,0 C7.80194565,0 9,1.1969041 9,2.66666667 L9,5.33333333 L0,5.33333333 L0,2.66666667 Z"
                    id="Rectangle"
                    fill="#EB5242"
                  />
                </g>
                <g id="LOGO" transform="translate(13.000000, 0.000000)">
                  <rect
                    id="Rectangle"
                    fill="#61C482"
                    x="0"
                    y="16"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#EB7835"
                    x="0"
                    y="5.33333333"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#F5C15F"
                    x="0"
                    y="10.6666667"
                    width="9"
                    height="5.33333333"
                  />
                  <rect
                    id="Rectangle"
                    fill="#49B1DE"
                    x="0"
                    y="21.3333333"
                    width="9"
                    height="5.33333333"
                  />
                  <path
                    d="M0,26.6666667 L9,26.6666667 L9,29.3333333 C9,30.8060927 7.80486949,32 6.32407071,32 L2.67592929,32 C1.19805435,32 0,30.8030959 0,29.3333333 L0,26.6666667 Z"
                    id="Rectangle"
                    fill="#CB4AB0"
                  />
                  <path
                    d="M0,2.66666667 C0,1.19390733 1.19513051,0 2.67592929,0 L6.32407071,0 C7.80194565,0 9,1.1969041 9,2.66666667 L9,5.33333333 L0,5.33333333 L0,2.66666667 Z"
                    id="Rectangle"
                    fill="#EB5242"
                  />
                </g>
              </g>
            </g>
          </svg>
        </h1>
        <nav className={s.menu}>
          <span className={s.menuIcon} onClick={this.toggleMenu}>
            <img
              className={s.icon}
              src="/icons/ic_menu_black_24px.svg"
              alt="Menu Icon"
            />
          </span>
          <ul className={cn(s.menuList, { [s.showMenu]: showMenu })}>
            {menuItems.map((item, i) => (
              <li key={i} className={s.menuItem} onClick={this.closeMenu}>
                <NavLink
                  to={`/${item.path}`}
                  className={s.menuItemLink}
                  activeClassName={s.selected}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="https://goo.gl/forms/6F4qyjasOvVXoqzd2"
            target="_blank"
            rel="noopener noreferrer"
            className={s.add}
          >
            Agregá tu recurso
          </a>
          <a className={s.add}>Comunidad DM</a>
          <NavLink to={`/slack`}>Slack</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
