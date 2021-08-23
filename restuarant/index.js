function saveData(){
var title = document.getElementById("title");
var price= document.getElementById("price");
var detail= document.getElementById("detail");



var card ={
    title : title.value,
    price : price.value,
    detail : detail.value,
    
    
}
firebase.database().ref("CARD/data").set(card)
console.log(card)
firebase.database().ref("CARD/data").once('value').then(function(snapshot){
    var title=(snapshot.val() && snapshot.val().title);
    var price=(snapshot.val() && snapshot.val().price);
    var detail=(snapshot.val() && snapshot.val().detail);
    
       
  
    document.getElementById('price1').innerHTML=price;
    document.getElementById('title1').innerHTML=title;
    document.getElementById('detail1').innerHTML=detail;
    
    
   });

}

function getData(){
    firebase.database().ref("CARD").on("child_added",function(data){
        console.log(data.val())
    })
}
getData();


function signOut(){

firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location = "login.html"
  }).catch((error) => {
    // An error happened.
  });
}
