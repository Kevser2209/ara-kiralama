function Storage(){
    Storage.prototype.addCarToStorage=function(newCar){

        let cars=this.getCarsFromStorage();
        carspush(newCar);
        localStorage.setItem("cars",JSON.stringify(cars));
    }
  Storage.prototype.getCarsFromStorage=function(){
      let cars;
    if (localStorage.getItem("cars")=== null){
        cars=[];
    }else{
        cars.JSON.parse(localStorage.getItem("cars"));

    }
    return cars;

}
Storage.prototype.deleteCarFromStorge=function(carTitle){
    let cars = this.getCarsFromStorage();
    cars.forEach(function(car,index){
cars.splice(index,1);
localStorage.setItem("cars",JSON.stringify(cras))
    });
}
}