var menudata = [];

$(document).ready(function () {
  //Get data from file
  $.get("https://davids-restaurant.herokuapp.com/menu_items.json", function (data) {
    menudata = data.menu_items;
    menudata.forEach((item, index) => {
      $("#menu").append(`<option value=${index}>${item.name}</option>`);
    })
  });

  //Listner for selecting a menu item
  $("#menu").change((e) => {
    const selected = menudata[e.target.value];
    $('#showdata').html(
      `<p> ID - ${selected.id} </p>
      <p> Short Name - ${selected.short_name} </p>
      <p> Name - ${selected.name} </p>
      <p> Description - ${selected.description} </p>
      <p> Price small - ${selected.price_small} </p>
      <p> Price Large - ${selected.price_large} </p>
      <p> Small Portion Name - ${selected.small_portion_name} </p>
      <p> Large Portion_Name - ${selected.large_portion_name} </p>
      `
    )
  })
});
