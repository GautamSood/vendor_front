import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorRegisteration from "./Components/VendorRegisteration";
import axios from "axios";
import { ToastContainer } from "react-toastify";


function App() {
  axios.defaults.baseURL="https://vendor-management-server.vercel.app/api/v1";
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/" element={<VendorRegisteration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
