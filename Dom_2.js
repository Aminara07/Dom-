let article = document.querySelectorAll('.article');
let add = document.querySelectorAll(".btnPlus");
let sous = document.querySelectorAll(".btn-primary");
let valeur = document.querySelectorAll(".quantite");
let sup = document.querySelectorAll(".btn-outline-danger");
let price = document.querySelectorAll(".product-price");
let sum = document.querySelectorAll(".total");
let like = document.querySelectorAll(".far");
for(let i = 0; i < add.length; i++){
//---------------INCREMENTATION DE LA QUANTITEE---------------
    add[i].addEventListener('click' , function(){
        valeur[i].value ++ ;
        //------------FAIRE LA SOMME DES PRIX-------------------
        sum[i].value = parseInt(price[i].innerText) * valeur[i].value;   
    })
    //-------------DECREMENTATION DE LA QUANTITEE--------------
    sous[i].addEventListener('click' , function(){
        if(valeur[i].value > 0)
        {
            valeur[i].value --;
            //SOUSTRACTION DU PRIX--------------------------
            sum[i].value = parseInt(price[i].innerText) * valeur[i].value;
        }
    })
    //------------------BOUTON LIKE----------------------------
    like[i].addEventListener('click' , function(e){
        if(e.target.classList.contains('far'))
        {
            e.target.classList.replace('far', 'fas');
        }
        else
        {
            e.target.classList.replace('fas', 'far');
        }
    })
//Remove element

}
console.log(sum);

var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons);
for(var i = 0; i < removeCartItemButtons.length; i++){
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
  })
}