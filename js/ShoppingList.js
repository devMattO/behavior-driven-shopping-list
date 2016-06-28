'use strict';

function ShoppingList( items ) {
  this.items = [];
  this.addItem = function( items ){
      if(items instanceof ShoppingListItem){
        this.items.push(items);
      } else {
        throw new Error('ERROR');
      }
  };
  this.removeItem = function( items ){
    if (!items && this.items.length > 0) {
      this.items.pop();
      return;
    }
    var index = this.items.indexOf(items);
    if (index === -1) {
      throw new Error('Not in here BRUUUH!');
    } else {
      this.items.splice(index, 1);
    }
  };

  this.render = function(){
    var concatItems = '';

    for (var i = 0; i < this.items.length; i++) {
      concatItems += this.items[i].render();
    }
    var returnItem = (
`'<ul>
  ${concatItems}
</ul>'`);

    return returnItem;
  };

}
