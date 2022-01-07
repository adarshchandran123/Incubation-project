import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage";
import { BrowserRouter,Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import MyNotes from "./screens/mybooking/MyBooking";
import CreateBooking from "./screens/CreateBooking/CreateBooking";
import AdminLogin from "./Admin/AdminLogin/AdminLogin";
import AdminHome from "./Admin/AdminHome/AdminHome";
import ApplicationDetails from "./Admin/ApplicationDetails/ApplicationDetails";
import BookSlot from "./Admin/BookSlot/BookSlot";
import RecordList from "./Admin/RecordList/RecordList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>



    <Route path="/login" component={Login} />

   



 
    <Route path="/" exact component={LandingPage} />

    <Route path="/signup"  component={Signup} />

    <Route path="/mybooking"  component={MyNotes} />

    <Route path="/createBooking"  component={CreateBooking} />
    

    <Route path="/Admin" component={AdminHome} />

    <Route path="/Admin_Login" component={AdminLogin} />

    <Route path="/applicationDetails" component={ApplicationDetails} />

    <Route path="/bookSlot" component={BookSlot} />

    <Route path="/recordList" component={RecordList} />

    


      </BrowserRouter>
    </div>
  );
}

export default App;
