import PropTypes from 'prop-types';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';
// import Recipe from '../Recipe/Recipe';
// import Error from '../Error/Error';

import Loading from './Loading/Loading';

import './style.scss';

function App(props) {
  const { loading } = props;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="app">
      <Menu />
      <Home />
      {/* <Recipe /> */}
      {/* <Error /> */}
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
