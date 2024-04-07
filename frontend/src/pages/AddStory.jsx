import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const [newimg, setNewimg] = useState(null);
  const [data, setData] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //display image in container
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewimg(file);

    const reader = new FileReader();
    reader.onload = () => {
      setData((prev) => ({
        ...prev,
        image: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  // console.log(data);

  //sending post request to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", newimg);

      const res = await fetch(
        `${import.meta.env.VITE_APP_DOMAIN}/api/addstory`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await res.json();
      toast(responseData.message);

      if (responseData.redirect) {
        setData({
          title: "",
          description: "",
          image: "",
        });
        setNewimg(null);
      }
    } catch (error) {
      console.error("Error in adding product:", error.message);
      toast.error("Error adding product");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-black flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600 pb-2">
            Add a new story here
          </h2>
          <div className="bg-slate-500 rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Story Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="md:col-span-5">
                    <label htmlFor="title">Title of the Story</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      onChange={handleOnChange}
                      value={data.title}
                      className="h-10 border mt-1 rounded px-4 w-full bg-black text-white"
                    />
                  </div>

                  <p className="pt-2 pb-1">Insert the image</p>

                  <div className="md:col-span-5">
                    <label
                      htmlFor="image"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-800 hover:bg-gray-900 dark:border-gray-800 dark:hover:border-gray-900"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        {data.image ? (
                          <img
                            src={data.image}
                            alt="Selected Image"
                            className="mb-4 rounded-lg max-w-full h-auto max-h-40"
                          />
                        ) : (
                          <>
                            <div className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400 text-4xl">
                              <IoCloudUploadSharp />
                            </div>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              the image
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              SVG, PNG, or JPG
                            </p>
                          </>
                        )}
                      </div>

                      <input
                        id="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        name="image"
                        onChange={handleFileChange}
                      />
                    </label>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="description">Description</label>
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      onChange={handleOnChange}
                      value={data.description}
                      className="h-20 border mt-1 rounded px-4 w-full bg-black text-white"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
