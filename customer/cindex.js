function saveData(){
    var title = document.getElementById("title");
    var price= document.getElementById("price");
    var detail= document.getElementById("detail");
    
    var key = firebase.database().ref("CARD").push().key;
    console.log(key);
    card ={
        title : title.value,
        price : price.value,
        detail : detail.value,
        key:key
    }
    firebase.database().ref("CARD/" + key).set(card)
    console.log(card)
    
    }
    
    function getData(){
        firebase.database().ref("CARD").on("child_added",function(data){
            console.log(data.val())
        })
    }
    getData();
    
    