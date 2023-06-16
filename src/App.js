import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import MyPage from "./pages/MyPage";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  // console.log("App 랜더링");
  // 추후에 Redux/Recoil state로 관리필요
  const [fbName, setFBName] = useState("");
  const [fbEmail, setFBEmail] = useState("");
  const [fbUid, setFBUid] = useState("");

  return (
    <div className="w-screen h-screen bg-lime-500  overflow-x-hidden">
      <Header
        fbName={fbName}
        fbEmail={fbEmail}
        fbUid={fbUid}
        setFBName={setFBName}
        setFBEmail={setFBEmail}
        setFBUid={setFBUid}
      />
      <div className="container mx-auto h-full">
        <Routes>
          {/* Navigate를 이용한 강제 이동 */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              <Login
                fbName={fbName}
                fbEmail={fbEmail}
                fbUid={fbUid}
                setFBName={setFBName}
                setFBEmail={setFBEmail}
                setFBUid={setFBUid}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/todo"
            element={<Todo fbName={fbName} fbEmail={fbEmail} fbUid={fbUid} />}
          />
          <Route
            path="*"
            element={
              <MyPage
                fbName={fbName}
                fbEmail={fbEmail}
                fbUid={fbUid}
                setFBName={setFBName}
                setFBEmail={setFBEmail}
                setFBUid={setFBUid}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
