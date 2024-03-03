import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PasswordGenerator } from "./components/Home";

function App() {
  return (
    <div className=" dark:bg-gray-900 ">
      <main className=" min-h-screen transition duration-200  ml-40 mr-40 overflow-auto max-[1000px]:ml-8 max-[1000px]:mr-8 max-[455px]:ml-0 max-[455px]:mr-0">
        <PasswordGenerator />
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
