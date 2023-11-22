const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.numberOfRestaurants = function(){
    return this.restaurants.length;
};

module.exports = ScranAdvisor;