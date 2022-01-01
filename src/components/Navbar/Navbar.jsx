import { NavLink } from "react-router-dom";
import BlockFriends from "./BlockFriends/BlockFriends";
import style from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <div>
          <NavLink
            to='/profile'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/dialogs'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Message
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/news'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            News
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/music'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Music
          </NavLink>
        </div>
        <div>
          <NavLink
            to='/settings'
            className={(navData) =>
              navData.isActive ? style.active : style.item
            }
          >
            Settings
          </NavLink>
        </div>
      </div>
      <BlockFriends state={props.state.friends} />
    </nav>
  );
};
export default Navbar;
