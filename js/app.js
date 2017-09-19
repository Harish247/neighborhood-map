function initMap(){
    map = new google.maps.Map(document.getElementById('map'),{
        center : {lat: 37.398213, lng: -121.954562},
        zoom: 8
    });
}

function viewModal(){
    let self = this;
    self.searchString = ko.observable('');
    self.showHideMenu = function(){
        let menu = document.getElementById('menu-bar');
        if(menu.style.display === 'none'){
            menu.style.display = 'block';
        }else{
            menu.style.display = 'none';
        }
    };
    self.filteredStations = ko.computed(function(){
        let fStations=[];
        let sString = self.searchString().trim().toLowerCase();
        stations.forEach(function(element) {
            if(sString.length == 0){
             fStations.push(element.name);   
            }else if(element.name.toLowerCase().includes(sString)){
                fStations.push(element.name);
            }
        });
        return fStations;
    });
}
ko.applyBindings(viewModal());