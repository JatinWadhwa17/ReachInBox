"use client";
import { getAllMailsApi } from "@/redux/loginSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const ViewAll = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data, "data");
  useEffect(() => {
    dispatch(getAllMailsApi());
  }, []);
  return (
    <>
      <h1>hello</h1>
    </>
  );
};
export default ViewAll;
