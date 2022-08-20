import React from "react";
import "./Modal.css";
import Button from "../button/Button";
import { useSelector } from "react-redux/es/exports";
function Modal({ setOpenModal }) {
  const news = useSelector((store) => store.authReducer.news);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="flex flex-row-reverse justify-between items-center border-b-2">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              className="text-white"
            >
              X
            </button>
          </div>
          <div className="title">
            <h1 className=" text-white text-3xl">News</h1>
          </div>
        </div>
        <div className="body">
          <ul className="list-disc">
            {news.map((item, index) => {
              return (
                <li key={index} className="text-white">
                  {item.newsTitle}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer">
          <Button
            label="Close"
            event={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
