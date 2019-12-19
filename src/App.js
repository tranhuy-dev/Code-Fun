import React from 'react';
import './App.css';
import Header from './header/header';
import Home from './pages/home/home';
import Topics from './pages/topics/topics';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/topics" component={Topics} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
