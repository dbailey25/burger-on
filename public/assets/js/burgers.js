$(function() {
  $(".change-state").on("click", function(event) {
    var id = $(this).data("id");
    var newState = $(this).data("newstate");

    var newCraveState = {
      crave: newState
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newCraveState
    }).then(
      function() {
        console.log("changed state to", newCraveState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#add-burger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burger").val().trim()
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
