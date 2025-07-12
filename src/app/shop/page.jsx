"use client";
import { useState, useEffect } from "react";
const Shipping = () => {
  const [apidata, setapidata] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const limit = 3;
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=${limit}`
        );
        const data = await response.json();
        setapidata(data);
      } catch (error) {
        console.log("something went wrong", error);
      }
    };
    fetchdata();
  }, []);
  console.log("apidata", apidata);
  const jewelerydata = apidata
    ? apidata.filter((cat) => cat.category == "jewelery")
    : null;
  console.log("jewelerydata", jewelerydata);
  return (
    <div className="flex justify-between flex-wrap p-10 mt-20 items-stretch w-full">
      {apidata && jewelerydata ? (
        jewelerydata.map((data) => {
          return (
            <div
              key={data.id}
              className="border p-2 border-red-500 max-w-[350px] mb-2 flex flex-col items-stretch  justify-between"
            >
              <p className="text-sm ">{data.category}</p>
              <img
                src={data.image}
                alt={data.category + "img"}
                className="max-w-[200px] w-full"
              />
              <p className="text-sm text-gray-800 p-2">{data.description}</p>
              <button className=" bg-red-400 text-black p-3 cursor-pointer">
                Shop Now
              </button>
            </div>
          );
        })
      ) : (
        <p className="text-center mt-10 w-full">Loading...</p>
      )}
    </div>
  );
};
export default Shipping;
