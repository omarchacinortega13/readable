import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Category from './features/category';
import Main from './features/main';
import CreatePost from './features/createPost';
import PostDetail from './features/postDetail';
import CreateComment from './features/createComment';
import EditPost from './features/editPost';
import EditComment from './features/editComment';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route path={'/'} exact render={() => <Main />} />
        <Route
          path={'/category/:category'}
          render={props => <Category {...props} />}
        />
        <Route path={'/postDetail'} render={() => <PostDetail />} />
        <Route
          exact
          path={'/createPost/'}
          render={props => <CreatePost {...props} />}
        />
        <Route
          exact
          path={'/createPost/:category'}
          render={props => <CreatePost {...props} />}
        />
        <Route
          exact
          path={'/postDetail/:post'}
          render={props => <PostDetail {...props} />}
        />
        <Route
          exact
          path={'/createComment/'}
          render={props => <CreateComment {...props} />}
        />
        <Route
          exact
          path={'/editPost/'}
          render={props => <EditPost {...props} />}
        />
        <Route
          exact
          path={'/editComment/'}
          render={props => <EditComment {...props} />}
        />
      </div>
    );
  }
}

export default App;
