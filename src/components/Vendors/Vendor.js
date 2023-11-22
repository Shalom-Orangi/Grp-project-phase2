import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Vendor.css";
import { BiCamera } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Vendor = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const uploadImage = (files) => {
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "olc5gdaa");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dapnnry4b/image/upload",
      data
    ).then((res) => {
      console.log(res);
      setImage(res.data.url);
    });
  };
  const addProduct = () => {
    Axios.post("http://localhost:3000/products", {
      title: title,
      image: image,
      description: description,
      category: category,
      price: price,
      popular: false,
    }).then((res) => {
      setData([...data, res.data]);
    });
    setTitle("");
    setImage("");
    setDescription("");
    setCategory("");
    setPrice(0);
  };

  return (
    <div className="form">
      <div className="signup-container">
        <div className="left-container">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-container">
          <header>
            <h1>Add your product</h1>
            <div className="set">
              <div className="pets-name">
                <label htmlFor="events-name">Enter title of the product</label>
                <input
                  id="events-name"
                  type="text"
                  value={title}
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="pets-photo">
                <button id="pets-upload">
                  <BiCamera className="bicam" />
                  <input
                    type="file"
                    id="file-selector"
                    onChange={(e) => {
                      uploadImage(e.target.files[0]);
                    }}
                  />
                </button>
                <label htmlFor="pets-upload">Upload a photo</label>
              </div>
            </div>
            <div className="set">
              <div className="pets-breed">
                <label htmlFor="events-venue">category</label>

                <input
                  id="events-venue"
                  type="text"
                  value={category}
                  placeholder="Enter category"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="pets-birthday">
                <label htmlFor="pets-birthday">Product Price</label>
                <input
                  id="pets-birthday"
                  type="number"
                  value={price}
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="pets-weight">
              <label htmlFor="pet-weight-0-25">Description</label>
              <div className="radio-container">
                <input
                  type="text"
                  value={description}
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
          </header>
          <footer>
            <div className="set">
              <button
                id="back"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </button>
              <input id="next" type="submit" onClick={addProduct} />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Vendor;
