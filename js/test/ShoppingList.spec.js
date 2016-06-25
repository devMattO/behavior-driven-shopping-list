'use strict';

describe('ShoppingListItem', function(){

  it('should be a class', function(){
    expect(ShoppingListItem).to.exist;
  });

  it('should have a property named name', function(){
    expect(ShoppingListItem).to.have.a.property('name');
  });

});