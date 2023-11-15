// Menu.jsx
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.scss';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = (recipeSlug) => {
    navigate(`/recipe/${recipeSlug}`);
  };

  const recipes = useSelector((state) => state.recipes.list);

  return (
    <nav className="menu">
      <Link
        className={`menu-link ${
          location.pathname === '/' ? 'menu-link--active' : ''
        }`}
        to="/"
      >
        Accueil
      </Link>
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          className={`menu-link ${
            location.pathname === `/recipe/${recipe.slug}`
              ? 'menu-link--active'
              : ''
          }`}
          to={`/recipe/${recipe.slug}`}
          onClick={() => handleNavigate(recipe.slug)}
        >
          {recipe.title}
        </Link>
      ))}
    </nav>
  );
};

export default Menu;
