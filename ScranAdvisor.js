const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
//Count the number of restaurants that were stored
ScranAdvisor.prototype.numberOfRestaurants = function(){
    return this.restaurants.length;
};

//Find a restaurant by its name(full name)
ScranAdvisor.prototype.findByName = function (name){
    return this.restaurants.find(restaurant => restaurant.name === name );
};


//Return an array containing each restaurant's name 
ScranAdvisor.prototype.getEachName = function (){
    return this.restaurants.map(restaurant => restaurant.name);
};


//Find all the restaurants from given city(pass in the city name, e.g. "Glasgow" should return 4 restaurants)
ScranAdvisor.prototype.findByCity = function (city){
    return this.restaurants.filter(restaurant => restaurant.location.town === city);
};


module.exports = ScranAdvisor;