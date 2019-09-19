document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  const addPlace = event => {
    event.preventDefault();
    const li = document.createElement("li");
    const input = document.getElementsByClassName("favorite-input")[0];
    li.textContent = input.value;
    input.value = "";
    document.getElementById("sf-places").appendChild(li);
  };

  document
    .getElementsByClassName("list-container")[0]
    .querySelector("form")
    .addEventListener("submit", addPlace);


  // adding new photos

  const togglePhotoForm = event => {
    event.preventDefault();
    let formContainer = document.getElementsByClassName("photo-form-container")[0];
    if (formContainer.className.includes("hidden")) {
      formContainer.className = "photo-form-container";
    } else {
      formContainer.className = "photo-form-container hidden";
    }
  };

  document
    .getElementsByClassName("photo-show-button")[0]
    .addEventListener("click", togglePhotoForm);

  const addPhoto = event => {
    event.preventDefault();
    const input = document.getElementsByClassName("photo-url-input")[0]
    const imageUrl = input.value;
    input.value = "";
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute("src", imageUrl);
    li.appendChild(img);
    document.getElementsByClassName("dog-photos")[0].appendChild(li);
  };

  document
    .getElementsByClassName("photo-form-container")[0]
    .querySelector("form")
    .addEventListener("submit", addPhoto);

});
