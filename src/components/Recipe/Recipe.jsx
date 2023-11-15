import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findRecipe } from '../../selectors/recipes';

import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';
import Header from './Header/Header';
import Instructions from './Instructions/Instructions';
import Ingredients from './Ingredients/Ingredients';

import './style.scss';

function Recipe() {
  const { slug } = useParams();

  const key = `recipe-${slug}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  const recipe = useSelector((state) => findRecipe(state.recipes.list, slug));

  if (recipe) {
    return (
      <Page>
        <AppHeader />
        <div className="recipe">
          <Header
            name={recipe.title}
            thumbnail={recipe.thumbnail}
            author={recipe.author}
            difficulty={recipe.difficulty}
          />
          <Ingredients list={recipe.ingredients} />
          <Instructions steps={recipe.instructions} />
        </div>
      </Page>
    );
  }
}

export default Recipe;
