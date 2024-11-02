

const catalog=[

{
   "title":"Peach",
   "image": "img/peach-img.jpg",
   "price":"12.99",
   "category":"East",
   "_id":"121231",
},

{
   "title":"Banana",
   "image": "img/banana-img.jpg",
   "price":"15.99",
   "category":"Fruit",
   "_id":"121232",
},

{
   "title":"Kiwi",
   "image":"https://i.ndtvimg.com/i/2015-10/kiwi-fruit_625x350_81445871711.jpg",
   "price":"22.99",
   "category":"Fruit",
   "_id":"121233",
},


{
   "title":"Egg Plant",
   "image": "img/eggplant.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"121234",
},

{
   "title":"Mango",
   "image":"img/mango.jpg",
   "price":"22.99",
   "category":"Fruit",
   "_id":"121235",
},

{
   "title":"Jack Fruit",
   "image":"img/jackfruit.jpg",
   "price":"12.99",
   "category":"Fruit",
   "_id":"121236",
},

{
   "title":"Durian",
   "image":"img/durian.jpg",
   "price":"32.99",
   "category":"Fruit",
   "_id":"121237",
},

{
   "title":"Coconut",
   "image":"img/coconut.jpg",
   "price":"12.99",
   "category":"Fruit",
   "_id":"121238",
},

{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"121239",
},

{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"121240",
},

{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212410",
},
{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212420",
},
{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212430",
},
{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212440",
},
{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212450",
},
{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212460",
},
{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212470",
},
{
   "title":"Bitter Gourd",
   "image":"img/bitter-mel.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"1212480",
},
]

class DataService{
   getProducts(){
      return catalog;
   }

   getCategories(){
      return ['Fruit', 'Vegetable']
   }
}

export default DataService;