// 'use strict';

describe('ShoppingListItem', function(){

  var item;
  beforeEach( function() {
    item = new ShoppingListItem('Loco Moco', 'Dank eggs, rice, patty and GRAVYYY');
  });

  it('should be a class', function(){
    expect(item).to.be.an.instanceOf(ShoppingListItem);
  });

  /////////////

  it('should have a property named name', function(){
    expect(item).to.have.a.property('name');
  });

  it('should have a property named description', function(){
    expect(item).to.have.a.property('description');
  });

  it('should have a property named is_done', function(){
    expect(item).to.have.a.property('is_done');
    expect(item.is_done).to.equal(false);
  });

  //////////////////////

  it('should have a constructor method that accepts 2 arguments, name and description', function(){
    expect(item.name).to.equal('Loco Moco');
    expect(item.description).to.equal('Dank eggs, rice, patty and GRAVYYY');
  });

  it('should have a method named check', function() {
    expect(item.check).to.be.a('function');
  });

  it('calling the instances check method will set its is_done property to true', function() {
    item.check();
    expect(item.is_done).to.equal(true);
  });

  it('should have a method named uncheck', function() {
    expect(item.uncheck).to.be.a('function');
  });

  it('calling the instances uncheck method will set its is_done property to false', function() {
    item.uncheck();
    expect(item.is_done).to.equal(false);
  });

  it('should have a method named render', function() {
    expect(item.render).to.be.a('function');
  });

  it('should construct and return an html formatted string', function(){
    expect(item.render()).to.equal(
`<li class="completed_false">
  <span>Avocado</span>
  <span>Must be eaten immediately.</span>
</li>`);
  });


});

describe('ShoppingList', function(){

  var daList;
  beforeEach( function() {
    daList = new ShoppingList();
  });

  it('should be a class', function(){
    expect(daList).to.be.an.instanceOf(ShoppingList);
  });

  it('should have a property named items', function(){
    expect(daList).to.have.a.property('items');
  });

  it('should have a constructor method that initializes items as an empty Array', function(){
    expect(daList.itemsConstructor()).to.equal({});
  });



});