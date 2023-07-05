import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import Messenger from './components/Messenger';
import Notifications from './components/Notifications';
import './App.css';

function App() {
  const user = null; // Set the user object to null for login state, replace with your user authentication logic

  return (
    <Router> {/* Add the Router component */}
      <div className="app">
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/messenger" component={Messenger} />
                <Route path="/notifications" component={Notifications} />
                <Route path="/" component={Feed} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
