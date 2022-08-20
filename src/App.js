import "./App.css";
import "@fontsource/work-sans";
import React, { useEffect, useState } from "react";
import Routing from "./routing/Routing";
import { useDispatch, useSelector } from "react-redux";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader";
import Modal from "./components/modal/Modal";
import { fetchCurrentUser, fetchNews } from "./store/actions/authActions";
function App() {
  const dispatch = useDispatch();
  const [preLoader, setPreLoader] = useState(true);
  useEffect(() => {
    dispatch(fetchCurrentUser(setPreLoader));
    dispatch(fetchNews(setPreLoader));
  }, [dispatch]);
  const news = useSelector((store) => store.authReducer.news);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (news.length > 0) {
      setModalOpen(true);
    }
  }, [news]);
  return (
    <div>
      {preLoader ? (
        <div className="flex flex-column justify-center items-center">
          <FullScreenLoader />
        </div>
      ) : (
        <>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
          <Routing modalOpen={modalOpen} />
        </>
      )}
    </div>
  );
}

export default App;
