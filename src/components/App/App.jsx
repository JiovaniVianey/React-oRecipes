import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchRecipes } from '../../actions/recipes';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Recipe from '../Recipe/Recipe';
import Error from '../Error/Error';

import Loading from './Loading/Loading';

import './style.scss';

/*

(bonus) utiliser les recettes préférées. 

  - sur la page d'accueil, mettre en valeur les recettes préférées (icône étoile)

Détails : il faudrait qu'on mette en place un affichage spécial pour Card, et quand on
affiche une recette avec Card il faut pouvoir déterminer si cette recette fait partie des
préférées.
Pour ça, on pourrait extraire les id des recettes préférées (map) : [12345, 58]
Et on utiliserait contains sur ce tableau avec l'id de la recette

*/

function App() {
  const isRecipesLoaded = useSelector((state) => state.recipes.isRecipesLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = fetchRecipes();
    dispatch(action);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isRecipesLoaded) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="app">
        <Menu />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/recipe/:slug" element={<Recipe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
