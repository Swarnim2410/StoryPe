import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Toaster />
      <div className="">
        <Header />
        <main className="bg-black min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
