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
    var htmlString =`<li class="completed_false">
  <span>Avocado</span>
  <span>Must be eaten immediately.</span>
</li>`;

  return htmlString;

  };
}

function ShoppingList( items ) {
  this.items = null;

}

ShoppingList.prototype.itemsConstructor = function(){
  this.items = {};
  return this.items;
};

