import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Menu from '../Menu/Menu';
import Home from '../Home/Home';
import Recipe from '../Recipe/Recipe';
import Error from '../Error/Error';

import Loading from './Loading/Loading';

import './style.scss';

function App(props) {
  const { loading } = props;

  if (loading) {
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

App.propTypes = {
  loading: PropTypes.bool,
};

App.defaultProps = {
  loading: false,
};

export default App;
