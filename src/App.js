import React from 'react';
import './App.css';
import Header from './header/header';
import Home from './pages/home/home';
import Topics from './pages/topics/topics';
import Footer from './footer/footer';
import TopicDetail from './pages/topic-detail/topic-detail';
import CodeFun from './pages/code-fun/code-fun';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/topics/:id" component={TopicDetail} />
          <Route path="/topics" component={Topics} />
          <Route path="/codefun" component={CodeFun} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
