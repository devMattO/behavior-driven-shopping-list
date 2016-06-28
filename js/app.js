var shoppingList = new ShoppingList();
var contentDiv;

function add_to_shopping_list(){
  var title = document.getElementById('titleForm');
  var description = document.getElementById('descForm');
  var userItem = new ShoppingListItem(title.value, description.value);
  shoppingList.addItem(userItem);
  var htmlString = shoppingList.render();
  contentDiv = document.getElementById('content');
  contentDiv.innerHTML = htmlString;
}



