/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function allPossibleDomains() {
  let pronouns = ["the", "our", "last"];
  let adjs = ["great", "big", "of"];
  let nouns = ["jogger", "racoon", "us"];
  let extensions = [".com", ".net", ".us", ".io", ".eo", ".eu", ".es"];
  let domains = [];

  for (let i = 0; i < pronouns.length; i++) {
    let pronoun = pronouns[i];
    for (let x = 0; x < adjs.length; x++) {
      let adj = adjs[x];
      for (let y = 0; y < nouns.length; y++) {
        let noun = nouns[y];
        for (let z = 0; z < extensions.length; z++) {
          let extension = extensions[z];
          if (extension.includes(noun)) {
            //console.log(pronoun + adj + extension);
            domains.push(pronoun + adj + extension);
          } else {
            //console.log(pronoun + adj + noun + extension);
            domains.push(pronoun + adj + extension);
          }
        }
      }
    }
  }

  return domains;
}

function addLiListToDomains(arr) {
  let elements = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    elements += `<option value=${arr[i]} >` + arr[i] + "</option>";
  }
  return elements;
}

window.onload = function() {
  let selectElement = document.querySelector("#inputGroupSelectdomain");
  document.getElementById(
    "inputGroupSelectdomain"
  ).innerHTML = addLiListToDomains(allPossibleDomains());

  selectElement.addEventListener("change", event => {
    let result = document.querySelector("#domainSelected");
    result.textContent = `You selected domain: ${event.target.value}`;

    let buyDomain = document.querySelector("#buyDomain");
    buyDomain.classList.remove("d-none");
  });
};
