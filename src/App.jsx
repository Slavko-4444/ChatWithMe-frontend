import Footer from "./componetnts/Footer";
import Login from "./componetnts/Login";
import Messenger from "./componetnts/Messenger";
import Register from "./componetnts/Register";
import "simplebar/dist/simplebar.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./css/App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";

function App() {
  const notify = () => toast.success("Wow so easy !");

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Messenger />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </>
    )
  );

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={true}
        pauseOnHover={false}
        transition={Bounce} // Ensure transition is correctly used here
        limit={3}
      />
      <div className="md:h-screen content">
        <RouterProvider router={router} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
