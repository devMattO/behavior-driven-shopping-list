'use strict';

function ShoppingListItem( name, description ) {
  this.name = name;
  this.description = description;
  this.is_done = false;
  this.check = function(){
    this.is_done = true;
    return true;
  };
  this.uncheck = function() {
    this.is_done = false;
    return false;
  };
  this.render = function() {
    var item = new ShoppingListItem('apple', 'red and delicious');
    var htmlString =`<li class="completed_${item.is_done}">
  <span>${name}</span>
  <span>${item.description}</span>
</li>`;
  return htmlString;
  };
}


