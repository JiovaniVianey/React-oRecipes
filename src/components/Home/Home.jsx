import { useSelector } from 'react-redux';

import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';
import Content from '../Content/Content';
import { generateWelcomeMessage } from '../../utils/welcomeMessage';

const Home = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const welcomeMessage = generateWelcomeMessage(recipes.length);
  return (
    <Page>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text={welcomeMessage}
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
