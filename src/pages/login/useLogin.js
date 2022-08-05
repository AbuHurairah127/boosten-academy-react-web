import { useState } from "react";
import { useDispatch } from "react-redux";
const useLogin = () => {
  const [buttonLoader, setButtonLoader] = useState(false);
  const dispatch = useDispatch();
  const [isPasswordAppear, setIsPasswordAppear] = useState(false);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const onLoginHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    if (loginData.userName === "" && loginData.password === "") {
      alert("Please fill all the input fields properly");
    }
  };
  return {
    buttonLoader,
    loginData,
    onChangeHandler,
    onLoginHandler,
    setIsPasswordAppear,
    isPasswordAppear,
  };
};

export default useLogin;
