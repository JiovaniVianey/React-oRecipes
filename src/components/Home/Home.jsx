import { useSelector } from 'react-redux';

import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';
import Content from '../Content/Content';

const Home = () => {
  const recipes = useSelector((state) => state.recipes.list);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
