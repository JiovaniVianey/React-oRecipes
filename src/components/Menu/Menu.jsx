// Menu.jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '../../actions/recipes';

import './style.scss';

const Menu = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const recipes = useSelector((state) => state.recipes.list);

  return (
    <nav className="menu">
      <a className="menu-link menu-link--active" href="/">
        Accueil
      </a>
      {recipes.map((recipe) => (
        <a
          key={recipe.id}
          className="menu-link"
          href={`/recipe/${recipe.slug}`}
        >
          {recipe.title}
        </a>
      ))}
    </nav>
  );
};

export default Menu;
