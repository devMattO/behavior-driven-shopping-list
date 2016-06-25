// 'use strict';

describe('ShoppingListItem', function(){

  var item;
  beforeEach( function() {
    item = new ShoppingListItem('Loco Moco', 'Dank eggs, rice, patty and GRAVYYY');
  });

  it('ShoppingListItem should be a class', function(){
    expect(item).to.be.an.instanceOf(ShoppingListItem);
  });

  /////////////

  it('should have a property named name', function(){
    expect(item).to.have.a.property('name');
    expect(item.name).to.equal('Loco Moco');
  });

  it('should have a property named description', function(){
    expect(ShoppingListItem).to.have.a.property('description');
  });

  it('should have a property named is_done', function(){
    expect(ShoppingListItem).to.have.a.property('is_done');
  });

  it('should have a constructor method that accepts 2 arguments, name and description', function(){
    ShoppingListItem.should.have.a.constructor;
  });

  it('should have a   ');

});