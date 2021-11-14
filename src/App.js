import './app.css'
import Home from './home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './components/reducer/useSlice';
import Profile from './components/ProFile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, []);
  return (
    <Router>
      {!user ? (<Login />) :
        (<Switch>
          <Route path='/profile' exact >
            <Profile />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>)
      }

    </Router>


  );
}

export default App;
