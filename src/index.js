import React from "react";
import ReactDOM from "react-dom";

let name = "";
function randomName() {
  let n = Math.floor(Math.random() * 10 + 1);
  switch (n) {
    case 1:
      name = "Manuela";
      break;
    case 2:
      name = "Alejandra";
      break;
    case 3:
      name = "Pepa";
      break;
    case 4:
      name = "Emilia";
      break;
    case 5:
      name = "Carla";
      break;
    case 6:
      name = "Angela";
      break;
    case 7:
      name = "Francisca";
      break;
    case 8:
      name = "Sergia";
      break;
    case 9:
      name = "Ignacia";
      break;
    case 10:
      name = "Rafaela";
      break;
    default:
  }
  return n;
}
randomName();
ReactDOM.render(
  <div>
    <div className="title">
      <div>
        <h1>Who is the the fairest maiden in this land?</h1>
      </div>
      <h2>And the winner is: {name}!</h2>
    </div>
    <p className="footer">
      Developed with{" "}
      <span role="img" aria-label="heart">
        💜
      </span>{" "}
      by Ignacio
    </p>
  </div>,
  document.getElementById("root")
);
