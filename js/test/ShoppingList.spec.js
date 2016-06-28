// 'use strict';

describe('Shopping List Item', function(){

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

  describe('Check Method', function(){

    it('should have a method named check', function() {
      expect(item.check).to.be.a('function');
    });

    it('calling the instances check method will set its is_done property to true', function() {
      item.check();
      expect(item.is_done).to.equal(true);
    });

  });

  describe('Uncheck Method', function(){

    it('should have a method named uncheck', function() {
      expect(item.uncheck).to.be.a('function');
    });

    it('calling the instances uncheck method will set its is_done property to false', function() {
      item.uncheck();
      expect(item.is_done).to.equal(false);
    });

  });

  describe('Render Method', function(){

    it('should have a method named render', function() {
      expect(item.render).to.be.a('function');
    });

    it('should construct and return an html formatted string', function(){
      expect(item.render()).to.equal(
`<li class="completed_${item.is_done}">
    <span>${item.name}</span>
    <span>${item.description}</span>
  </li>`);
    });

  });

});

describe('Shopping List', function(){

  var daList;
  var poke;
  var eggo;
  var bacon;
  var ShoppingList2;
  var ShoppingList3;
  beforeEach( function() {
    daList = new ShoppingList();
    ShoppingList2 = new ShoppingList();
    ShoppingList3 = new ShoppingList();
    locoMoco = new ShoppingListItem('Loco Moco', 'Dank eggs, rice, patty and GRAVYYY');
    poke = new ShoppingListItem('poke', 'Fish and stuff');
    eggo = new ShoppingListItem('waffle', 'Yummy fast breaky');
    bacon = new ShoppingListItem('bacon', 'Comes from pigs');

  });

  it('should be a class', function(){
    expect(daList).to.be.an.instanceOf(ShoppingList);
  });

  it('should have a property named items', function(){
    expect(daList).to.have.a.property('items');
  });

  it('should have a constructor method that initializes items as an empty Array', function(){
    expect(daList.items).to.be.empty;
  });

  describe('Add Item Method', function(){

    it('should have a method named addItem that accepts a single ShoppingListItem argument', function(){
      expect(daList.addItem).to.be.a('function');
    });

    it('invoking the addItem method by passing in a ShoppingListItem object should add that object to the items array', function(){
      daList.addItem(locoMoco);
      expect(daList.items).to.contain(locoMoco);
    });

    it('invoking the addItem method by passing in anything else that is not a ShoppingListItem object should immediately throw an error', function(){
      expect(daList.addItem.bind(daList, Number)).to.throw(Error);
      expect(daList.addItem.bind(daList, String)).to.throw(Error);
      expect(daList.addItem.bind(daList, Boolean)).to.throw(Error);
      expect(daList.addItem.bind(daList, Array)).to.throw(Error);
      expect(daList.addItem.bind(daList, Function)).to.throw(Error);
    });

  });

  describe('Remove Item Method', function(){

    it('should have a method named removeItem', function(){
      expect(daList.removeItem).to.be.a('function');
    });

    it('should remove that object from the items array',function(){

      ShoppingList2.addItem(poke);
      expect(ShoppingList2.items).to.include(poke);
      ShoppingList2.removeItem(poke);
      expect(ShoppingList2.items).to.not.include(poke);
    });

    it('should remove the last item from the items array',function(){

      ShoppingList3.addItem(eggo);
      ShoppingList3.addItem(bacon);
      ShoppingList3.removeItem();
      expect(ShoppingList3.items).to.not.include(bacon);

    });

    it('should have a method named render', function(){
      expect(daList.render).to.exist;
    });


    it('should return an HTML formatted string', function(){
//       var salad = new ShoppingListItem('Salad', 'Not a real meal');
//       ShoppingList3.addItem(salad);
//       expect(ShoppingList3.render(salad.render())).to.equal(
// `<ul><li class="completed_false"><span>Salad</span><span>Not a real meal</span></li></ul>`);
      var burger = new ShoppingListItem('Burger', 'Best food in the entire world');
      ShoppingList3.addItem(burger);
      expect(ShoppingList3.render(burger.render())).to.equal(
`'<ul>
  <li class=\"completed_false\">
    <span>Burger</span>
    <span>Best food in the entire world</span>
  </li>
</ul>'`);
    });

  });


});