var detailForm = document.getElementById(destination_detail_form);


detailForm.addEventListener('submit' , function (event) {
    event.preventDefault();

    var destName = event.target.elements['name'].value;
    var destlocation = event.target.elements['location'].value;
    var destpicture = event.target.elements['picture'].value;
    var destDiscription = event.target.elements['discription'].value;
})

for (let i = 0; i < detailForm.length ; i++) {
    detailForm.element[i].value = "";
}

var myWishListContainer = document.getElementById('destination_container');

if(myWishListContainer.child.length === 0){
    document.getElementById('title').innerHTML = 'My Wish List';
}