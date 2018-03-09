// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $(".change-sleep").on("click", function(event) {
  $("#devour").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("newState");

    var newCraveState = {
      crave: newState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newCraveState
    }).then(
      function() {
        console.log("changed state to", newState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#add-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim()
      // sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
