
var shoesArr = [{id:1,name: 'Lacoste', price: 10, img: 'img/shoe1.jfif'}, 
                {id:2,name: 'Nike', price: 20, img: 'img/shoe2.png'},
                {id:3,name: 'Adidas', price: 15, img: 'img/shoe3.jpg'},
                {id:4,name: 'Vans', price: 30, img: 'img/vans.jpg'},
                {id:5,name: 'Sport', price: 35, immg: 'img/sport2.jpg'}
              ]

function submit(shoeId, price){
    var numberOfShoes = document.getElementById("input"+shoeId).value;
    var totalPrice = price * numberOfShoes
    return document.getElementById(shoeId).innerHTML = totalPrice+'$';
}

function showShoes(data){
    var shoes = document.getElementById("shoes")

    for(var i = 0; i < data.length; i++){

        var shoe = data[i]

        var output = `<div id="shoe">
                        <div class="item1">
                           <img src=${shoe.img}  alt=${shoe.name} class="img">
                        </div>
                        <div class="item2">
                           <p class="title">${shoe.name}</p>
                           <input type="number" id="input${shoe.id}" value="1"><br>
                           <input type="submit" value="Submit" class="submit" onclick="submit(${shoe.id}, ${shoe.price})"><br>
                           <button class="output" id=${shoe.id}>${shoe.price}</button>
                        </div>
                      </div>`
                      console.log(data[i]);
        shoes.innerHTML += output
    }
}

window.onload = (function(){showShoes(shoesArr)});


