import React, { Component } from "react";
import LocationCard from "./LocationCard";

// in class based components you HAVE to have a render function that returns some jsx
// we can pass STATE from parent to child
const places = [
  {
    picture:
      "https://a0.muscache.com/im/pictures/e1e1044d-a4d9-4c58-959b-d6958deb5ec9.jpg?im_w=720",
    location: "Ellensburg, Wa",
    description: "Cool Cabin",
  },
  {
    picture:
      "https://a0.muscache.com/im/pictures/fedfd719-db8e-4c1c-aef6-f89ae0703cbb.jpg?im_w=720",
    location: "SunCadia, Cle Elum, Wa",
    description: "tree house of your deams",
  },
  {
    picture:
      "https://a0.muscache.com/im/pictures/72d5f93a-5b4a-46b6-953e-aa500c5e14cd.jpg?im_w=1200",
    location: "Snoqualmie, Wa",
    description: "Wooded Retreat",
  },
];
// .map returns a new array based on the data from the original array

export default class App extends Component {
  // return has to have 1 child or it gets mad
  render() {
    return (
      <div>
        {places.map((place) => (
          <LocationCard
            picture={place.picture}
            location={place.location}
            description={place.description}
          />
        ))}
      </div>
    );
  }
}
