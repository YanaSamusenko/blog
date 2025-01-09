import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {MenuListModal} from '../pages/ModalWindow.jsx';
import {SearchBtn} from './SearchBtn';
import {Menu} from './Menu';
import {User} from './User';
import {setLang} from '../redux/lang-slice';

import '../styles/header.scss';

export function Header() {
  const lang = useSelector((state) => state.lang.value);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuListRef = useRef(null);


  const handleLangClick = (event) => {
    switch (event.target.value) {
      case 'ru':
        return dispatch(setLang('ru'));
      case 'en':
        return dispatch(setLang('en'));
      
    }
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClickOutside = ({target}) => {
    if (menuRef.current && !menuRef.current.contains(target) && !menuListRef.current.contains(target)) {
      setIsMenuOpen(false);
    }
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <nav className="navbar bg-primary">
        <div className='container-fluid'>
          <div className='header__menu'>
            <Menu onToggleMenu={handleToggleMenu} active={isMenuOpen} ref={menuRef} />
          </div>
          <MenuListModal isShown={isMenuOpen} onClose={() => setIsMenuOpen(false)} >
            <div className={`header__menu-list ${isMenuOpen ? 'header__menu-list_active' : ''}`} ref={menuListRef}>
            <ul className='navbar-nav d-flex flex-row'>
              <li className='nav-item me-6'>
            <NavLink to="/" className="navbar-brand me-5" onClick={handleLinkClick}>Blog</NavLink>
              </li>
              <li className='nav-item me-4'>
                <NavLink to="/posts" className="nav-link" onClick={handleLinkClick}>Posts</NavLink>
              </li>
              <li className='nav-item me-4'>
                <NavLink to="auth/signin" className="nav-link" onClick={handleLinkClick}>Sign in</NavLink>
              </li>
              <li className='nav-item me-4'>
                <NavLink to="auth/signup" className="nav-link" onClick={handleLinkClick}>Sign up</NavLink>
              </li>
            </ul>
            </div>
          </MenuListModal>
          </div>
        <SearchBtn />
        <User userName={'Yana Samusenko'} />
        <select className="lang" value={lang} onChange={handleLangClick}>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </nav>
    </header>
  );
}



