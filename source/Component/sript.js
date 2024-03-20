$(document).ready(function () {
  $(".page2nav div").click(function () {
    var className = $(this).attr("class").split(" ")[0]; // Get the first class name
    var contentToShow = $(".content." + className);

    // Remove "active" class from all navigation items
    $(".page2nav div").removeClass("active");
    // Add "active" class to the clicked navigation item
    $(this).addClass("active");

    // Hide all content
    $(".content").not(contentToShow).hide();

    // Toggle the visibility of the corresponding content
    contentToShow.toggle();
  });
});
