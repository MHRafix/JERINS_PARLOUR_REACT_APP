import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Css/GlobalCss.css';
import AddAdmins from './Pages/Admin_Pannel&&021/Pages/AddAdmins/AddAdmins';
import AddService from './Pages/Admin_Pannel&&021/Pages/AddService/AddService';
import AllBookings from './Pages/Admin_Pannel&&021/Pages/AllBookings/AllBookings';
import AllServices from './Pages/Admin_Pannel&&021/Pages/AllServices/AllServices';
import Pannel021 from './Pages/Admin_Pannel&&021/Pannel021';
import Booking from './Pages/BookingPage/Booking';
import Home from './Pages/HomePage/Home';
import Services from './Pages/ServicesPage/Services';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';
import Account from './Pages/Accounts/Account';
import MyServices from './Pages/UserDashboard/MyServices/MyServices';
import Payment from './Pages/UserDashboard/Payment/Payment';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import AboutUs from './Pages/AboutUsPage/AboutUs';

function App() {

  // Take a state for displaying initial spinner
  const [ initialLoader, setInitialLoader ] = useState(true);
  
  // Declare a timeOut function
  const timeOut = () => {
    setInitialLoader(false);
  }
  // Initialize timeOut function here
  setTimeout(timeOut, 2000);

  return (
    <div className="App">
      { initialLoader ? <div className="text-center" style={{width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}><Spinner animation="border" variant="danger" /> 
    </div> : <AuthProvider>
      <BrowserRouter>
       <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route exact path="/home">
           <Home />
         </Route>
         <Route exact path="/services">
           <Services />
         </Route>
         <PrivateRoute exact path="/bookingService/:serviceId">
           <Booking />
         </PrivateRoute>
         <Route exact path="/Admin_Pannel&&021/Pannel&&021">
           <Pannel021 />
         </Route>
         <Route exact path="/Admin_Pannel&&021/Pannel&&021/addService">
           <AddService />
         </Route>
         <Route exact path="/Admin_Pannel&&021/Pannel&&021/addAdmin">
           <AddAdmins />
         </Route>
         <Route exact path="/Admin_Pannel&&021/Pannel&&021/allBookings">
           <AllBookings />
         </Route>
         <Route exact path="/Admin_Pannel&&021/Pannel&&021/allServices">
           <AllServices />
         </Route>
         <Route exact path="/about">
           <AboutUs />
         </Route>
         <PrivateRoute exact path="/MyBookedServices">
           <MyServices />
         </PrivateRoute>
         <PrivateRoute exact path="/payment">
           <Payment />
         </PrivateRoute>
         <Route exact path="/login">
           <Account />
         </Route>
       </Switch>
      </BrowserRouter>
      </AuthProvider>}
    </div>
  );
}

export default App;
