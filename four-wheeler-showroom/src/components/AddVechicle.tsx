import React, { useState } from "react";
import "../css/add.css";
import axios from "axios";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

export default function AddVechicle() {
  const [carName, setcarName] = useState("");
  const [price, setPrice] = useState("");
  const [model, setmodel] = useState("");
  const [imgUrl, setImgUrl] = useState("");
const AllBooKsNav=useNavigate();
  const saveIntoDB = async () => {
    if (!carName || !model || !price || !imgUrl) {
      alert("All fields are required!");
      return;
    }

    const vechicleDetails = { carName, price, model, imgUrl };
    try {
      const response = await axios.post("http://localhost:8080/add/vechicle", vechicleDetails);
      console.log("Vechicle Details Submitted:", vechicleDetails);
      alert("Vechicle details successfully submitted!");
      // Optionally, reset form fields
      setcarName("");
      setPrice("");
      setmodel("");
      setImgUrl("");
   AllBooKsNav("/home")
    } catch (error) {
      console.error("Error submitting vechicle details:", error);
      alert("Failed to submit Vechicle details. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mt-5 mb-5 d-flex justify-content-center">
        <div className="card px-1 py-4">
          <div className="card-body">
            <h1>Vechicle Details</h1>
            <h6 className="information mt-4">
              Please provide the following information about the Vechicle.
            </h6>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    value={carName}
                    onChange={(e) => setcarName(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder=" Vechicle Nme"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    value={model}
                    onChange={(e) => setmodel(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="model"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Price"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Image URL"
                  />
                </div>
              </div>
            </div>
            <br></br>
            <button
              onClick={saveIntoDB}
              className="btn btn-primary btn-block confirm-button"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
