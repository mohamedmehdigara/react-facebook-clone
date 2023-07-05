import React from 'react';
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
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Messenger />
            <Notifications />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
