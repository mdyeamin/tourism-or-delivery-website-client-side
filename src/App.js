
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



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:bookingId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/user">
              <User></User>
            </Route>
            <Route path="/addUser">
              <AddUser></AddUser>
            </Route>
            <Route path="/update">
              <UpdateUser>
              </UpdateUser>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route path="/AllOrders">
              <AllOrders></AllOrders>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
