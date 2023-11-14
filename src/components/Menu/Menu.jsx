// Menu.jsx
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../../actions/recipes';

import './style.scss';

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes.list);

  const navigate = useNavigate();

  const handleNavigate = (recipeSlug) => {
    navigate(`/recipe/${recipeSlug}`);
  };

  return (
    <nav className="menu">
      <Link className="menu-link menu-link--active" to="/">
        Accueil
      </Link>
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          className="menu-link"
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
