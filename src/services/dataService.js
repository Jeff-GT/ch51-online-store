

const catalog=[

{
   "title":"Peach",
   "image":"https://blog.sakura.co/wp-content/uploads/2022/03/shutterstock_675217411-1.png",
   "price":"12.99",
   "category":"East",
   "_id":"121231",
},

{
   "title":"Banana",
   "image":"https://www.foodandwine.com/thmb/4fzQW9u60XlhTk52CIuM1BlLhcc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/amazonfreebananas-em-86304874-2000-5a276309cf1944349fb55818c98c7b1b.jpg",
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
   "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Solanum_melongena_24_08_2012_%281%29.JPG/1200px-Solanum_melongena_24_08_2012_%281%29.JPG",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"121234",
},

{
   "title":"Mango",
   "image":"https://www.cleanjuice.com/wp-content/uploads/2023/06/clean_juice_mango_benefits_hero-3-scaled-1.jpeg",
   "price":"22.99",
   "category":"Fruit",
   "_id":"121235",
},

{
   "title":"Jack Fruit",
   "image":"https://rolandfoods.com/assets/news/GettyImages-823672534.jpg",
   "price":"12.99",
   "category":"Fruit",
   "_id":"121236",
},

{
   "title":"Durian",
   "image":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/18/whole-and-halved-durian-fruit-high-angle-on-wooden-boards.jpg.rend.hgtvcom.1280.960.suffix/1702934646286.jpeg",
   "price":"32.99",
   "category":"Fruit",
   "_id":"121237",
},

{
   "title":"Coconut",
   "image":"https://parachutekalpavriksha.org/cdn/shop/articles/Sure_ways_to_keep_the_coconut_tree_healthy.jpg?v=1711267599&width=2048",
   "price":"12.99",
   "category":"Fruit",
   "_id":"121238",
},

{
   "title":"Bitte Gourd",
   "image":"https://m.media-amazon.com/images/I/71ttogP-O3L._AC_UF894,1000_QL80_.jpg",
   "price":"12.99",
   "category":"Vegetable",
   "_id":"121239",
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