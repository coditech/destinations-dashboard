import React, { useState, useEffect } from "react";
import DestinationsContext from "./DestinationsContext";

export default function DestinationsProvider({ children }) {
  const [data, setValue] = useState({ destinations: [], continents: [] });

  function updateValue(nextValue) {
    let value =
      typeof nextValue === "function"
        ? nextValue
        : (prevValue) => ({ ...prevValue, ...nextValue });
    setValue(value);
  }

  // all the function that we will implement later
  //component did mount, to fetch the data at the beginning
  useEffect(() => {
    async function initializeData() {
      const response = await fetch(`http://localhost:8000/api/continents`);
      const data = await response.json();
      console.log("x", data.data);
      const continents = data.data;
      updateValue({ continents });
    }
    initializeData();
  }, []);
  useEffect(() => {
    async function initializeData() {
      const response = await fetch(`http://localhost:8000/api/destinations`);
      const data = await response.json();
      console.log("x", data.data);
      const destinations = data.data;
      updateValue({ destinations });
    }
    initializeData();
  }, []);

  async function createD(title, image, description, price, continent_id) {
    const body = new FormData();
    body.append("title", title);
    body.append("image", image);
    body.append("description", description);
    body.append("price", price);
    body.append("continent_id", continent_id);
    const response = await fetch("http://localhost:8000/api/destinations", {
      method: "post",
      body,
    });
    const result = await response.json();
    console.log(result);
    const destinations = [...data.destinations, result.data];
    updateValue({ destinations });
  }

  async function deleteD(id) {
    console.log(id);
    const response = await fetch(
      `http://localhost:8000/api/destinations/${id}`,
      {
        method: "delete",
        headers: {
          Accept: "application/json",
        },
      }
    );
    const result = await response.json();
    console.log(result);
    const destinations = data.destinations.filter(function (value) {
      return value.id != id;
    });
    updateValue({ destinations });
  }
  const context = { data, actions: { createD, deleteD } };
  return (
    <DestinationsContext.Provider value={context}>
      {children}
    </DestinationsContext.Provider>
  );
}
