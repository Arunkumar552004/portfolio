
var products = [{
	id : 4,
	title : 'Sada Idli',
	img : './img/1.jpg',
	price : 25
},
{
	id : 4,
	title : 'Fry Idli',
	img : './img/2.jpg',
	price : 40
},
{
	id : 4,
	title : 'Masala Idli',
	img : './img/3.jpg',
	price : 50
},
{
	id : 4,
	title : 'Chilly Idli',
	img : './img/4.jpg',
	price : 70
},{
	id : 4,
	title : 'Medu Vada',
	img : './img/5.jpg',
	price : 30
},{
	id : 4,
	title : 'Sambhar Vada',
	img : './img/6.jpg',
	price : 40
},{
	id : 4,
	title : 'Dal Vada',
	img : './img/7.jpg',
	price : 30
},
{
	id : 4,
	title : 'Plain Dosa/Sada Dosa',
	img : './img/8.jpg',
	price : 30
},
{
	id : 4,
	title : 'Masala Dosa',
	img : './img/9.jpg',
	price : 40
},
{
	id : 4,
	title : 'Butter Masala Dosa',
	img : './img/10.jpg',
	price : 50
},
{
	id : 4,
	title : 'Ghee Masala Dosa',
	img : './img/11.jpg',
	price : 70
},
{
	id : 4,
	title : 'Cone Dosa',
	img : './img/dhosa.jpg',
	price : 50
},
{
	id : 4,
	title : 'Sada Uttapa',
	img : './img/14.jpg',
	price : 30
},
{
	id : 4,
	title : 'Onion Uttapa',
	img : './img/26.jpg',
	price : 40
},
{
	id : 4,
	title : 'Masala Uttapa',
	img : './img/27.jpg',
	price : 50
},
{
	id : 4,
	title : 'Veg. Uttapa',
	img : './img/14.jpg',
	price : 50
},
{
	id : 4,
	title : 'Orange Chicken',
	img : './img/15.jpg',
	price : 250
},
{
	id : 4,
	title : 'Lemon Chicken',
	img : './img/16.jpg',
	price : 299
},
{
	id : 4,
	title : 'Chicken Teriyaki',
	img : './img/17.jpg',
	price : 349
},
{
	id : 4,
	title : 'Seafood Soup',
	img : './img/18.jpg',
	price : 250
},
{
	id : 4,
	title : 'Hot and sour soup',
	img : './img/19.jpg',
	price : 299
},
{
	id : 4,
	title : 'Wonton Soup',
	img : './img/20.jpg',
	price : 200
},
{
	id : 4,
	title : 'Coconut Soup',
	img : './img/21.jpg',
	price : 150
},
{
	id : 4,
	title : 'Ginger',
	img : './img/22.jpg',
	price : 349
},
{
	id : 4,
	title : 'Broccoli',
	img : './img/23.jpg',
	price : 349
},
{
	id : 4,
	title : 'Mixed Vegetables',
	img : './img/24.jpg',
	price : 349
},
{
	id : 4,
	title : 'Eggplants',
	img : './img/25.jpg',
	price : 349
}



];

function productsDisplay(products){

	$('.shop_foreach').html('');

	products.forEach(function(product){

		$('.shop_foreach').append('<div class="box " >'+
          '<img src="'+product.img+'">'+
          '<h3>'+product.title+'</h3>'+
          '<p>RS.'+product.price+'</p>'+
          '<input type="number" name="quantity">'+
          '<input type="button" name="add_to_cart" value="Add to cart"></div>');
	});

}

$( document ).ready(function() {
	
   productsDisplay(products);

   $('.login_btn').on('click',function(e){
   		e.preventDefault();
   		if($('.username').val() == "admin" && $('.passwd').val() == "1234"){
   			window.location.href = "home.html"
   		}else{
   			alert("Username or Password is wrong");
   		}
   		
   });

   productsDisplay(products);
 
	$('.sign_btn').on('click',function(e){
			e.preventDefault();
			if($('.username').val() === "admin" && $('.passwd').val() === "1234" && $('.confirmpass').val() === $('.passwd').val()){
				window.location.href = "home.html";
			}else{
				alert("Username or Password is wrong");
			}
			
	});



   $('.search_btn').on('click',function(e){
   	e.preventDefault();
   	let str = $('.search_inp').val();
   	if(str != ''){
   	let searchProducts = products.filter(function(product) {
        return product.title.includes(str);
     });
   	    productsDisplay(searchProducts);
   	}else{
   		productsDisplay(products);	
   	}

   });

});

$(document). ready(function(){
	$("add_to_cart").click( function(){
		$("fa fa-shopping-cart").append
	});
});



	