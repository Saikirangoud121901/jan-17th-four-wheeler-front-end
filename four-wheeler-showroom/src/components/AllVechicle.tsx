import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

interface Vehicle {
  carName: string;
  price: string;
  model: string;
  imgUrl: string;
}

export default function AllVehicle() {
  const [vehicleDetails, setVehicleDetails] = useState<Vehicle[]>([]);

  useEffect(() => {
    axios
      .get<Vehicle[]>("http://localhost:8080/get/all/vehicle")
      .then((res) => {
        console.log("Response:", res.data);
        setVehicleDetails(res.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicle details:", error);
        alert("Failed to fetch vehicle details.");
      });
  }, []);

  return (
    <div>
      <NavBar />
     
        <div className="row row-cols-2 row-cols-md-3 g-2 mt-3 ">
          {vehicleDetails.map((eachvehicle) => (
            <div className="col" >
              <div  className="card h-100">
              <div title={` ${eachvehicle.carName}`}>
                <img
                  height="300px"
                  width="350px"
                 
                  src={eachvehicle.imgUrl}
                  className="card-img-top"
                  alt={eachvehicle.carName}
                />
                </div>
                <div className="card-body">
                
                  <h5 className="card-title">{eachvehicle.carName}</h5>
                  <p className="card-text" >Model: {eachvehicle.model}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Price: ₹{eachvehicle.price}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
  );
}
