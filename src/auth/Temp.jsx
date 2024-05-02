import React, { useState } from "react";

function Temp() {
  const [previewImages, setPreviewImages] = useState([]);

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // const response = await fetch(`http://localhost:8080/upload`, {
    const response = await fetch(`http://localhost:5000/api/file/upload`, {
      method: "POST",
      body: formData,
    });

    console.log(response);
    // if (response.ok) {
    //   const json = await response.json();
    //   if (json.success) {
    //    console.log(json);
    //   } else {
    //     alert("Enter Valid Email and Password");
    //   }
    // } else {
    //   console.error("Failed to fetch data:", response.statusText);
    // }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-8 mt-3">
          <h4>Node.js upload images - knowledge-hive.com</h4>

          <form
            className="mt-4"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <input
                type="file"
                name="file"
                id="input-files"
                className="form-control-file border"
                onChange={handleImageChange}
                multiple
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-12">
          <div className="preview-images max-w-[300px] max-h-[300px]">
            {previewImages.map((image, index) => (
              <img key={index} src={image} alt={`Preview ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temp;
