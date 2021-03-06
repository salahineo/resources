/* ------------------------------------- Check Local Storage ------------------------------------ */

// Check Toggle All Value
localStorage.getItem("bookmarksToggleAll") !== null && localStorage.getItem("bookmarksToggleAll") === "on" ? toggleAllOn() : toggleAllOff();

/* ----------------------------------------- List Toggle ---------------------------------------- */

// Get Toggle Icon
let toggleList = document.querySelectorAll(".toggle");

// Add Event Listener To All Togglers
toggleList.forEach((element) => {
  element.addEventListener("click", toggleLinks);
});

// Toggle Function
function toggleLinks(e) {
  // Get Body Of The List [Related With Clicked Toggler]
  let relatedBody = e.target.parentElement.parentElement.nextElementSibling;

  // Check For Height
  if (relatedBody.style.maxHeight) {
    // Add CSS Properties And Change HTML Content
    relatedBody.style.maxHeight = null;
    relatedBody.style.padding = "0 20px";
    e.target.parentElement.innerHTML = "<i class=\"fas fa-plus\"></i>";
  } else {
    // Add CSS Properties And Change HTML Content
    relatedBody.style.maxHeight = relatedBody.scrollHeight + 20 + "px";
    relatedBody.style.padding = "20px";
    e.target.parentElement.innerHTML = "<i class=\"fas fa-minus\"></i>";
  }
}

/* --------------------------------- Collapse / Expand All Icon --------------------------------- */

// Get Color Mode Toggle Icon
let colorModeIcon = document.getElementById("toggleColorMode");
// On Click Trigger Function
colorModeIcon.addEventListener("click", changeColorMode);

// Change Color Mode Function
function changeColorMode() {
  // Check Current Mode, Then Switch Colors
  if ("dark" === document.documentElement.getAttribute("data-theme")) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("BookmarksManagerColorMode", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("BookmarksManagerColorMode", "dark");
  }
}

/* --------------------------------- Collapse / Expand All Icon --------------------------------- */

// Get Collapse All Nav Icon
let collapseAll = document.getElementById("collapseAll");

// Get All Lists Body
let listsBody = document.querySelectorAll(".bookmark .body");

// Default Local Storage Var
let collapseLocal;

// On Click Trigger Function
collapseAll.addEventListener("click", toggleAllLists);

function toggleAllLists() {
  // Check Button Class
  if (collapseAll.getAttribute("class") === "option collapsed") {
    // Loop Through All Lists Body
    listsBody.forEach((element) => {
      // Add CSS Properties And Change HTML Content
      element.style.maxHeight = element.scrollHeight + 20 + "px";
      element.style.padding = "20px";
      collapseAll.innerHTML = "<i class=\"fas fa-minus-square\"></i>";
      // Change List Toggler
      element.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.innerHTML =
        "<i class=\"fas fa-minus\"></i>";
    });
    // Change Button Class
    collapseAll.setAttribute("class", "option expanded");
    // Set Local Storage Value
    collapseLocal = localStorage.setItem("bookmarksToggleAll", "on");
  } else {
    // Loop Through All Lists Body
    listsBody.forEach((element) => {
      // Add CSS Properties And Change HTML Content
      element.style.maxHeight = null;
      element.style.padding = "0 20px";
      collapseAll.innerHTML = "<i class=\"fas fa-plus-square\"></i>";
      // Change List Toggler
      element.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.innerHTML =
        "<i class=\"fas fa-plus\"></i>";
    });
    // Change Button Class
    collapseAll.setAttribute("class", "option collapsed");
    // Set Local Storage Value
    collapseLocal = localStorage.setItem("bookmarksToggleAll", "off");
  }
}

// Toggle All On Function For Local Storage
function toggleAllOn() {
  // Get Collapse All Nav Icon
  let collapseAll = document.getElementById("collapseAll");

  // Get All Lists Body
  let listsBody = document.querySelectorAll(".bookmark .body");

  // Loop Through All Lists Body
  listsBody.forEach((element) => {
    // Add CSS Properties And Change HTML Content
    element.style.maxHeight = element.scrollHeight + 20 + "px";
    element.style.padding = "20px";
    collapseAll.innerHTML = "<i class=\"fas fa-minus-square\"></i>";
    // Change List Toggler
    element.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.innerHTML =
      "<i class=\"fas fa-minus\"></i>";
  });
  // Change Button Class
  collapseAll.setAttribute("class", "option expanded");
}

// Toggle All Off Function For Local Storage
function toggleAllOff() {
  // Get Collapse All Nav Icon
  let collapseAll = document.getElementById("collapseAll");

  // Get All Lists Body
  let listsBody = document.querySelectorAll(".bookmark .body");

  // Loop Through All Lists Body
  listsBody.forEach((element) => {
    // Add CSS Properties And Change HTML Content
    element.style.maxHeight = null;
    element.style.padding = "0 20px";
    collapseAll.innerHTML = "<i class=\"fas fa-plus-square\"></i>";
    // Change List Toggler
    element.previousElementSibling.firstChild.nextElementSibling.nextElementSibling.innerHTML =
      "<i class=\"fas fa-plus\"></i>";
  });
  // Change Button Class
  collapseAll.setAttribute("class", "option collapsed");
}

/* -------------------------------------- Trigger Datatable ------------------------------------- */

$(function () {
  // Call Datatable Plugin
  $(".dataTable").DataTable({
    "order": [],
    lengthMenu: [[5, 10, 25, 50, 75, -1], [5, 10, 25, 50, 75, "All"]]
  });
  // Define Pagination Numbers Limit
  $.fn.DataTable.ext.pager.numbers_length = 8;
});

/* -------------------------------------- Copyright Year ------------------------------------- */

// New date Object
let currentDate = new Date();
// Get Copyright Year Span
document.getElementById("footer-copyright-year").innerHTML = String(currentDate.getFullYear());

