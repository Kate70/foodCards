import { getDownloadURL, uploadBytesResumable, ref } from 'firebase/storage';
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion";

import {
    MdFastfood,
    MdCloudUpload,
    MdDelete,
    MdFoodBank,
    MdAttachMoney,
  } from "react-icons/md";
 import { categories } from '../data'
import { storage } from '../firebase/init-firebase';
import Loader from './Loader';
import { saveItem } from '../utils/fireBaseGetData';


const CreateContainer = () => {
const [title, setTitle] = useState("")
const [price, setPrice] = useState("")
const [category, setCategory] = useState(null)
const [fields, setFields] = useState(true)
const [isLoading, setIsLoading] = useState(false);
const [alertStatus, setAlertStatus]=useState("danger")
const [imageAsset, setImageAsset] = useState(false)
const [msg, setMsg] = useState(null);

const uploadImage=(e)=>{
setIsLoading(true)
const imageFile = e.target.files[0];
console.log(imageFile);
const storageRef = ref(storage, `Images/${Date.now()}-${imageFile}`)
const uploadTask = uploadBytesResumable(storageRef, imageFile);
uploadTask.on('state_changed', (snapshot) =>{
    const uploadProgress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
}, (error) => {
    console.log(error)
}, ()=>{
   getDownloadURL(uploadTask.snapshot.ref).then(downloadURL =>{
    setImageAsset(downloadURL);
    setIsLoading(false);
    setFields(true)
   }) ;
})
}

const deleteImg = () =>{

}

const saveDetails = () => {
    setIsLoading(true);
    try {
      if ((!title &&  !price && !imageAsset, !category)) {
        setFields(true);
        setMsg("Required fields can't be empty");
        setAlertStatus("danger");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
       
          qty: 1,
          price: price,
        };

        saveItem(data);

        setIsLoading(false);
        setFields(true);
        setMsg("Data uploaded successfully ????");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000);

        clearData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const clearData = () => {
    setTitle("");
    setImageAsset(null);
    
    setPrice("");
  
  };

  return (

<AnimatePresence>
<div className="flex flex-col items-center justify-center">
  <div className="w-[80%] flex flex-col items-center justify-center p-2 border gap-4 border-gray-300 rounded-lg">
    {fields && (
      <motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className={`w-full p-2 rounded-lg text-center ${
          alertStatus === "danger"
            ? "bg-red-400 text-red-800"
            : "bg-emerald-400 text-emerald-800"
        }`}
      >
        {msg}
      </motion.p>
    )}

    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
      <MdFastfood className="text-gray-700 text-xl" />
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Give me a title..."
        className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
      />
    </div>

    <div className="w-full">
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
      >
        <option value="other" className="bg-white">
          Select Category
        </option>
        {categories.map((category) => (
          <option
            key={category.id}
            className="text-base border-0 outline-none capitalize bg-white text-black"
            value={category.urlParamName}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>

    <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-300 cursor-pointer">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!imageAsset ? (
            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <MdCloudUpload className="text-gray-500 group-hover:text-gray-700 text-3xl" />
                <p className="text-gray-500 group-hover:text-gray-700">
                  Click here to upload
                </p>
              </div>
              <input
                type="file"
                name="upload-image"
                accept="image/*"
                onChange={uploadImage}
                className="w-0 h-0"
              />
            </label>
          ) : (
            <div className="relative h-full">
              <img
                src={imageAsset}
                alt=""
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl
            cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                onClick={deleteImg}
              >
                <MdDelete className="text-white" />
              </button>
            </div>
          )}
        </>
      )}
    </div>

    <div className="w-full flex flex-col md:flex-row items-center gap-3">
     

      <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
        <MdAttachMoney className="text-gray-700 text-2xl" />
        <input
          type="text"
          required
          placeholder="Add the price..."
          className="w-full h-full text-lg  bg-transparent outline-none order-none placeholder:text-gray-500"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
    </div>

    <div className="flex items-center w-full">
      <button
        type="button"
        className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
        onClick={saveDetails}
      >
        Save
      </button>
    </div>
  </div>
</div>
</AnimatePresence>
);




}


export default CreateContainer

