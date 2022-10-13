/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Api(url = "") {
  const { token } = useSelector((state) => state.users);

  const [req, setReq] = useState({
    baseURL: process.env.REACT_APP_BASE_URL || url,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const SetConf = () => {
    setReq({
      ...req,
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    SetConf();
  }, []);

  return { req: axios.create(req) };
}

export default Api;
