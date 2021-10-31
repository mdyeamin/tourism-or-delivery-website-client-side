
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/User/User';
import UpdateUser from './components/UpdateUser/UpdateUser';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer'
import Signin from './components/Signin/Signin';
import AuthProvider from './contexts/AuthProvider';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/privateRoute/PrivateRoute'
import AddService from './components/AddService/AddService';
import MyOrders from './components/MyOrders/MyOrders';
import AllOrders from './components/AllOrders/AllOrders';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Header></Header>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Header></Header>
              <Booking></Booking>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/user">
              <Header></Header>
              <User></User>
              <Footer></Footer>
            </Route>
            <Route path="/addUser">
              <Header></Header>
              <AddUser></AddUser>
              <Footer></Footer>
            </Route>
            <Route path="/update">
              <Header></Header>
              <UpdateUser> </UpdateUser>
              <Footer></Footer>
            </Route>
            <Route path="/addService">
              <Header></Header>
              <AddService></AddService>
              <Footer></Footer>
            </Route>
            <Route path="/myOrders">
              <Header></Header>
              <MyOrders></MyOrders>
              <Footer></Footer>
            </Route>
            <Route path="/AllOrders">
              <Header></Header>
              <AllOrders></AllOrders>
              <Footer></Footer>
            </Route>
            <Route path="/signin">
              <Header></Header>
              <Signin></Signin>
              <Footer></Footer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
