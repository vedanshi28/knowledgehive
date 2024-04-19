import React from "react";
import FileUploader from "../../shared/FileUploader";
import { useNavigate } from "react-router-dom";
import usePreviewImg from "../../hooks/usePreviewImg";
import { useState, useRef } from "react";
import { Button } from "@mui/material";
import fileupload from "../../assets/icons/file-upload.svg";
import toast,{Toaster} from 'react-hot-toast';
import axios from "axios";

export default function PostForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", desc);
      formData.append("link", link);
      formData.append("file", selectedFile);
      console.log(title);
      console.log(desc);
      console.log(link);
      console.log(selectedFile);

       const response = axios.post('http://localhost:5000/api/post/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file uploads
      },
      });

      console.log('Upload successful:', response.data);
      toast('Post Uploaded Successfully!');

    } catch (error) {
      console.error(" Upload failed:", error);
    } finally {
      
      setTitle('');
      setDesc('');
      setLink('');
      setSelectedFile(null);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDesc('');
    setLink('');
    setSelectedFile(null);
  };

  return (
    <form
      className="flex flex-col gap-9 w-full max-w-5xl"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-8">
              <label className="shad-form_label">Post Title</label>
              <div className="mt-2">
                <textarea
                  className="custom-scrollbar shad-form_message w-full h-10 pt-2 pl-2 bg-dark-3 rounded-xl border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                  type="text"
                  name="title"
                  id="tile"
                  autoComplete="title"
                  placeholder="Write your post title here"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-8">
              <label className="shad-form_label">Post Link</label>
              <div className="mt-2">
                <textarea
                  className="custom-scrollbar shad-form_message w-full h-10 pt-2 pl-2 bg-dark-3 rounded-xl border-none focus-visible:ring-1 focus-visible:ring-offset-1 ring-offset-light-3"
                  type="text"
                  name="link"
                  id="link"
                  autoComplete="link"
                  placeholder="Post your link here"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-8">
              <label className="shad-form_label">Post Description</label>
              <div className="mt-2">
                <textarea
                  className="shad-textarea custom-scrollbar shad-form_message w-full pt-2 pl-2"
                  type="text"
                  name="description"
                  id="description"
                  autoComplete="description"
                  placeholder="Write your post description here"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>

            <div className="sm:col-span-8">
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
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-white"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
      <Toaster/>
    </form>
  );
}
