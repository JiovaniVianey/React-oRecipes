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
        text="Hollup, LET THEM COOK !!"
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
