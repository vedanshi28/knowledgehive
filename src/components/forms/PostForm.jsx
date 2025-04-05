import React, { useContext } from "react";
import FileUploader from "../../shared/FileUploader";
import { useNavigate } from "react-router-dom";
//import usePreviewImg from "../../hooks/usePreviewImg";
import { useState, useRef } from "react";
import { Button } from "@mui/material";
//import fileupload from "../../assets/icons/file-upload.svg";
import toast, { Toaster } from "react-hot-toast";
import { AppContext } from "../../context/AppContext";

export default function PostForm() {
  const navigate = useNavigate();
  const [previewImages, setPreviewImages] = useState([]);
  const [url, setUrl] = useState("");
  const { user, selectedCategory, setSelectedCategory, loading, setLoading } =
    useContext(AppContext);
  const imageRef = useRef(null);
  // const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const [formData, setFormData] = useState({
    postTitle: "",
    postDesc: "",
    category: "",
  });

  const baseURL = process.env.REACT_APP_BASE_URL;

  const options = [
    { id: "1", value: "all", label: "all" },
    { id: "2", value: "cse", label: "cse" },
    { id: "3", value: "it", label: "it" },
    { id: "4", value: "ai", label: "ai" },
  ];

  const handleTagClick = (option) => {
    setSelectedCategory([option.value]);
  };

  const removeTag = (index) => {
    const newTags = [...selectedCategory];
    newTags.splice(index, 1);
    setSelectedCategory(newTags);
  };
  //console.log(selectedCategory)

  const handleImageChange = (e) => {
    const files = e.target.files;
    const images = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        images.push(event.target.result);
        if (images.length === files.length) {
          setPreviewImages(images);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    //console.log(formData);

    try {
      const response = await fetch(`${baseURL}/api/post/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          username: user.username,
          postTitle: formData.postTitle,
          postDesc: formData.postDesc,
          category: selectedCategory,
          postUrl: url,
        }),
      });
      //console.log(response)

      if (response.ok) {
        const json = await response.json();
        //console.log(json);
        if (json.success) {
          toast.success("Post Added Successfully!");
        } else {
          toast.error("Error occured!");
        }
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setFormData({
        postTitle: "",
        postDesc: "",
        category: "",
        postUrl: "",
      });
      setSelectedCategory(null);
    }
  };

  const handleCancel = () => {
    setFormData({
      postImg: "",
      postTitle: "",
      postDesc: "",
      category: "",
      postUrl: "",
    });
    //setSelectedFile(null)
  };

  const handleChange = (e) => {
    setSelectedCategory(e.value);
  };
  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      const response = await fetch(`${baseURL}/api/file/upload`, {
        method: "POST",
        body: formData,
      });

      console.log(response);
      if (response) setLoading(false);
      const json = await response.json();
      console.log(json.url);
      setUrl(json.url);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Image upload failed");
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col gap-9 w-full max-w-5xl">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-8">
              <label className="shad-form_label">Post Title</label>
              <div className="mt-2">
                <textarea
                  className="custom-scrollbar shad-form_message w-full h-10 pt-2 pl-2 bg-dark-3 rounded-xl border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                  type="text"
                  name="postTitle"
                  id="title"
                  autoComplete="title"
                  placeholder="Write your post title here"
                  value={formData.postTitle}
                  required
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="sm:col-span-8">
              <label className="shad-form_label">Post Description</label>
              <div className="mt-2">
                <textarea
                  className="shad-textarea custom-scrollbar shad-form_message w-full pt-2 pl-2"
                  type="text"
                  name="postDesc"
                  id="description"
                  autoComplete="description"
                  placeholder="Write your post description here"
                  value={formData.postDesc}
                  required
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="sm:col-span-8">
              <label className="shad-form_label">Add Photos</label>
              <form className="mt-2" onSubmit={handleImageSubmit}>
                <div className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
                  <input
                    type="file"
                    name="post"
                    id="input-files"
                    className="cursor-pointer pt-4 pl-2"
                    onChange={handleImageChange}
                    multiple
                  />

                  {previewImages.map((image, index) => (
                    <img key={index} src={image} alt={`Preview ${index + 1}`} />
                  ))}
                  {!loading ? (
                    <>
                      <button
                        type="submit"
                        className="rounded-md bg-dark-4 px-3 py-2 my-4 text-sm font-semibold text-white shadow-sm hover:bg-dark-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-2"
                      >
                        Submit
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        label="Loading..."
                        className="rounded-md bg-dark-4 px-3 py-2 my-4 text-sm font-semibold text-white shadow-sm hover:bg-dark-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-2"
                      >
                        Loading...
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>

            {/* <div className="sm:col-span-8">
              <label className="shad-form_label">Add Photos</label>
              <div className="mt-2">
                <div className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
                  <input
                    className="cursor-pointer pt-2 pl-2"
                    type="file"
                    hidden
                    ref={imageRef}
                    onChange={handleImageChange}
                  />

                  {selectedFile ? (
                    <>
                      <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
                        <img
                          src={selectedFile}
                          alt="image"
                          className="file_uploader-img"
                          onClick={() => setSelectedFile(null)}
                        />
                      </div>
                    </>
                  ) : (
                    <div className="file_uploader-box">
                      <img
                        src={fileupload}
                        width={96}
                        height={77}
                        alt="file upload"
                      />

                      <h3 className="base-medium text-light-2 mb-2 mt-6">
                        Drag photo here
                      </h3>
                      <p className="text-light-4 small-regular mb-6">
                        SVG, PNG, JPG
                      </p>

                      <Button
                        type="button"
                        className="shad-button_dark_4"
                        onClick={() => imageRef.current.click()}
                      >
                        Select from computer
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div> */}

            {/*Category */}
            <div className="sm:col-span-8">
              <label className="shad-form_label">Category</label>
              <div className="mt-2">
                <div className="rounded-tag-dropdown">
                  <p>Choose a category</p>

                  <ul>
                    {options?.map((option) => (
                      <li
                        key={option.value}
                        className="rounded-tag"
                        onClick={() => handleTagClick(option)}
                      >
                        {option.label}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <>
                      {selectedCategory?.map((tag, index) => (
                        <>
                          <span
                            key={tag}
                            className="rounded-tag selected"
                            onChange={handleChange}
                            value={selectedCategory}
                          >
                            {tag}
                            <button
                              onClick={() => removeTag(index)}
                              className="ml-2"
                            >
                              x
                            </button>
                          </span>
                        </>
                      ))}
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white"
          onClick={() => handleCancel()}
        >
          Cancel
        </button>
        <button
          onClick={() => handleSubmit()}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
      <Toaster />
    </div>
  );
}
