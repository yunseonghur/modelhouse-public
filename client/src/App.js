import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar0 from './components/navbar.component';
import Home from './components/home.component';
import Sub1_1 from './components/sub1_1.js';
import Sub1_2 from './components/sub1_2.js';
import Sub1_3 from './components/sub1_3.js';
import Sub1_4 from './components/sub1_4.js';
import Sub2_2 from './components/sub2_2.js';
import Sub2_3 from './components/sub2_3.js';
import Sub2_4 from './components/sub2_4.js';
import Sub2_5 from './components/sub2_5.js';
import Sub3_1 from './components/sub3_1.js';
import Sub3_2 from './components/sub3_2.js';
import Sub3_3 from './components/sub3_3.js';
import Sub3_4 from './components/sub3_4.js';
import Sub3_5 from './components/sub3_5.js';
import Sub4_1 from './components/sub4_1.js';
import Sub4_2 from './components/sub4_2.js';
// import UserList from './components/users-list.component';
import CreateUser from './components/create-user.component';
import Footer from './components/footer.component';


function App() {
  return (
    <Router>
      <Navbar0 />
      <Route path="/" exact component={Home} />
      <Route path="/sub1_1" component={Sub1_1} />
      <Route path="/sub1_2" component={Sub1_2} />
      <Route path="/sub1_3" component={Sub1_3} />
      <Route path="/sub1_4" component={Sub1_4} />
      <Route path="/sub2_2" component={Sub2_2} />
      <Route path="/sub2_3" component={Sub2_3} />
      <Route path="/sub2_4" component={Sub2_4} />
      <Route path="/sub2_5" component={Sub2_5} />
      <Route path="/sub3_1" component={Sub3_1} />
      <Route path="/sub3_2" component={Sub3_2} />
      <Route path="/sub3_3" component={Sub3_3} />
      <Route path="/sub3_4" component={Sub3_4} />
      <Route path="/sub3_5" component={Sub3_5} />
      <Route path="/sub4_1" component={Sub4_1} />
      <Route path="/sub4_2" component={Sub4_2} />
      <Route path="/user" component={CreateUser} />
      {/* <Route path="/admin" exact component={UserList} /> */}
      <Footer />
    </Router>
  );
}

export default App;
