import React, { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contex/UserContex";
import axiosAPI from "../api/axios";


const CreateNews = () => {
  let {name} = useContext(UserContext);

  let { id } = useParams();
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [author, setAuthor] = useState("");
  let [type, setType] = useState("");
  let [errors, setErrors] = useState({});

  useEffect(() => {
    let updateNews = async () => {
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
    updateNews();
  }, [id]);

  let submitNew =async (e) => {
    try{
        e.preventDefault();     // Prevents the default form submission (page reload)
        let news = { title, description, author, type };
        let res;

        if(id){
            res =await axiosAPI.patch('/api/news/'+id, news)
        }else{
            res =await axiosAPI.post('/api/news/' , news)
        }
        
        if(res.status == 200){
            navigation.navigate("/");
        }
        
    }catch(e){      
        setErrors(e.response.data.errors);
    }
    
  }

//   let createNew = (e) => {
//     e.preventDefault();

//     let news = { title, description, author, type };
//     axios
//       .post("http://localhost:5000/api/news", news)
//       .then((res) => {
//         navigation.navigate("/");
//         console.log(res);
//       })
//       .catch((e) => {
//         setErrors(Object.keys(e.response.data.errors));
//       });
//   };

  return (
    <div>
      <div className="flex items-center justify-center mx-auto p-5">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-2xl">
          <h1 className="text-gray-800 font-bold text-2xl mb-6">
            {id ? "Edit" : "Create"} News
          </h1>

          <form onSubmit={submitNew}>
            <div className="mt-5">
              <label className="text-sm text-gray-700 block font-medium">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter title ..."
              />
              {!!(errors && errors.title) && <p className='text-sm text-red-600'>{errors.title.msg}</p> }
            </div>

            <div className="mt-5">
              <label className="text-sm text-gray-700 block font-medium">
                Description
              </label>
              <textarea
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter description ..."
              />
              {!!(errors && errors.description) && <p className='text-sm text-red-600'>{errors.description.msg}</p> }
            </div>

            <div className="mt-5">
              <label className="text-sm text-gray-700 block font-medium">
                Author
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter author ..."
              />
              {!!(errors && errors.author) && <p className='text-sm text-red-600'>{errors.author.msg}</p> }
            </div>

            <div className="mt-5">
              <label className="text-sm text-gray-700 block font-medium">
                Type
              </label>
              <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Enter type ..."
                />
                {!!(errors && errors.type) && <p className='text-sm text-red-600'>{errors.type.msg}</p> }
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-full bg-green-600 text-white rounded-md hover:bg-green-700 mt-1 py-2 px-4 transition"
              >
                {id ? "Update" : "Create"} News
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNews;
