import axiosAPI from "../api/axios";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Link, Navigate, useParams } from "react-router-dom";

const DetailNews = () => {
  let { id } = useParams();
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [author, setAuthor] = useState("");
  let [type, setType] = useState("");

  useEffect(() => {
    let detailNews = async () => {
      if (id) {
        let res = await axiosAPI.get("/api/news/" + id);
        if (res.status == 200) {
          setTitle(res.data.title);
          setDescription(res.data.description);
          setAuthor(res.data.author);
          setType(res.data.type);
        }
      }
    };
    detailNews();
  },[id]);

  return (
    <div>
      <div className="flex items-center justify-center mx-auto p-5">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
          <Link to={'/'} className="text-gray-800 font-semibold mb-2">← Back</Link>          
          <h1 className="text-gray-800 font-bold text-2xl mb-6 mt-3">
            {id ? "Detail" : "Create"} News
          </h1>

          <form>
            <div className="mt-5">
              <h2 className="text-sm text-gray-700 block font-medium">
                Title
              </h2>
              <p className="mt-3  w-full border border-gray-300 rounded-md shadow-sm p-3">{title}</p>
            </div>

            <div className="mt-5">
              <label className="text-sm text-gray-700 block font-medium">
                Description
              </label>
              <p className="mt-3  w-full border border-gray-300 rounded-md shadow-sm p-3">{description}</p>
            </div>

            <div className="mt-5">
              <label className="text-sm text-gray-700 block font-medium">
                Author
              </label>
              <p className="mt-3  w-full border border-gray-300 rounded-md shadow-sm p-3">{author}</p>
            </div>

            <div className="mt-5">
              <label className="text-sm text-gray-700 block font-medium">
                Type
              </label>
              <p className="mt-3  w-full border border-gray-300 rounded-md shadow-sm p-3">{type}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailNews;
