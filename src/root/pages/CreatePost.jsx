import React from "react";
import createpost from "../../assets/icons/gallery-add.svg";
import PostForm from "../../components/forms/PostForm";

const CreatePost = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img src={createpost} width={36} height={36} alt="add" />
          <h3 className="h3-bold md:h3-bold text-left w-full">Create Post</h3>
        </div>

        <PostForm action="Create" />
      </div>
    </div>
  );
};

export default CreatePost;
