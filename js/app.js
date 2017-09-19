function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center : {lat: 37.398213, lng: -121.954562},
        zoom: 8
    });
}

let viewModal = {
    showHideMenu : function(){
        let menu = document.getElementById('menu-bar');
        if(menu.style.display === 'none'){
            menu.style.display = 'block';
        }else{
            menu.style.display = 'none';
        }
    }
}
ko.applyBindings(viewModal);