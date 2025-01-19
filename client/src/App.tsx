import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router";
import { SidebarProvider, SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar";
import CreateToken from "./pages/Create";
import Market from "./pages/Market";
import Tokens from "./pages/Tokens";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          <Routes>
            <Route path="/" element={<Market />} />
            <Route path="/create" element={<CreateToken />} />
            <Route path="/tokens" element={<Tokens />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
