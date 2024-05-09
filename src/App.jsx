import "./App.css";
import { LandingPage } from "./pages/landingPage";
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <LandingPage />
      <ToastContainer />
    </>
  );
}

export default App;
