$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").addClass("active");
  });

  $("#sidebarCollapseX").on("click", function () {
    $("#sidebar").removeClass("active");
  });

  $("#sidebarCollapse").on("click", function () {
    if ($("#sidebar").hasClass("active")) {
      $(".overlay").addClass("visible");
      console.log("it's working!");
    }
  });

  $("#sidebarCollapseX").on("click", function () {
    $(".overlay").removeClass("visible");
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("searchButton");
  const searchInput = document.getElementById("searchInput");

  searchButton.addEventListener("click", function() {
    const searchText = searchInput.value.trim();
    // Example: Perform search action based on searchText
    console.log("Performing search for:", searchText);
    // You can perform any search-related action here, such as fetching search results or filtering content.
  });

  // Optionally, you can also listen for Enter key press event in the input field to trigger search
  searchInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      searchButton.click(); // Simulate a click on the search button
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector('.btn-primary');

  button.addEventListener('click', function() {
    console.log('Button clicked');
    // Add your custom functionality here
  });
});
