/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let selectElement = document.querySelector("#inputGroupSelectdomain");
  document.getElementById(
    "inputGroupSelectdomain"
  ).innerHTML = addLiListToDomains(
    getAllPossibleDomainsHTML(pronouns, adjs, nouns, extensions)
  );

  selectElement.addEventListener("change", event => {
    let result = document.querySelector("#domainSelected");
    result.textContent = `You selected domain: ${event.target.value}`;

    let buyDomain = document.querySelector("#buyDomain");
    buyDomain.classList.remove("d-none");
  });
};

let pronouns = ["the", "our"];
let adjs = ["great", "big", "lastof"];
let nouns = ["jogger", "racoon", "us", "testeo", "internet", "mastercoach"];
let extensions = [".com", ".net", ".us", ".io", ".eo", ".eu", ".es", ".coach"];

function getAllPossibleDomainsHTML(
  pronouns = ["the"],
  adjs = ["lastof"],
  nouns = ["us"],
  extensions = [".us"]
) {
  let domains = [];

  for (let i = 0; i < pronouns.length; i++) {
    let pronoun = pronouns[i];
    for (let x = 0; x < adjs.length; x++) {
      let adj = adjs[x];
      for (let y = 0; y < nouns.length; y++) {
        let noun = nouns[y];
        for (let z = 0; z < extensions.length; z++) {
          let extension = extensions[z];
          let extensionLength = extension.slice(1).length;
          if (extension.includes(noun.slice(-extensionLength))) {
            let nounWithOutExtension = noun.slice(0, -extensionLength);
            domains.push(pronoun + adj + nounWithOutExtension + extension);
          } else {
            domains.push(pronoun + adj + noun + extension);
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
