import { ModalPreviewImage } from '../components/ModalPreviewImage';
import { useTitle } from '../hooks/useTitle';
import { NavLink, Outlet } from 'react-router-dom';

export function Posts() {
  const {setTitle} = useTitle('Blog');
  
  return (
<div className="ms-auto">
    <ul className="nav nav-underline mb-5">
      <NavLink className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"} aria-current="page" to="/posts/all">
        All
      </NavLink>

      <NavLink className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"} to="/posts/favorite">
        My favorites
      </NavLink>

      <NavLink className={({ isActive }) => isActive ? "nav-link active-tab" : "nav-link"} to="/posts/popular">
        Popular
      </NavLink>
    </ul>

    <Outlet />
     <ModalPreviewImage />
    </div>
    );
}

