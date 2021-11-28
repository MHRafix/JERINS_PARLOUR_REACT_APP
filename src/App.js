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


function App() {
  return (
    <div className="App">
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
         <Route exact path="/bookingService/:serviceId">
           <Booking />
         </Route>
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
       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
