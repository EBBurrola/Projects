// Problem: Menu looks bad in smaller browser width and small devices
// Solution: To hide the text links and swap them out with a more appropriate navigation

// Create a select and append #menu
var $select = $("<select></select>");
$("#menu").append($select);

// cycle over menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  
  // create an option
  var $option = $("<option></option>");
  
  // Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  
  
  // option's value is the href
  $option.val($anchor.attr("href"));

  // option's text is the text of link
  $option.text($anchor.text());

  // append option to select
  $select.append($option);

});  
  

// Bind change listener to the select
$select.change(function() {





  // go to select location
  window.location = $select.val();
  
});




























