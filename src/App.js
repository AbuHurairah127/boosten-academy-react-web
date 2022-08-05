import "./App.css";
import "@fontsource/work-sans";
import React, { useEffect, useState } from "react";
import Routing from "./routing/Routing";
import { useDispatch } from "react-redux";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader";

import { fetchUser } from "./store/actions/authActions";
function App() {
  const dispatch = useDispatch();
  const [preLoader, setPreLoader] = useState(false);
  useEffect(() => {
    dispatch(fetchUser(setPreLoader));
  }, [dispatch]);

  return (
    <div>
      {preLoader ? (
        <div className="flex flex-column justify-center items-center">
          <FullScreenLoader />
        </div>
      ) : (
        <>
          <Routing />
        </>
      )}
    </div>
  );
}

export default App;
