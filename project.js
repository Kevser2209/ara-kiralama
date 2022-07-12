const form =document.getElementById("car-form");
const titleElement=document.querySelector("#title");
const priceElement=document.querySelector("#price");
const urlElement=document.querySelector("#url");
const carbody=document.queryCommandValue(".card-body")[1];


// UI Objesi Başlatma

const ui=new UIEvent();
const storage = new Storage();

//Tüm Eventleri Yüklme
EventListener();
form.addEventListener("submit",addCar);
document.addEventListener("DOMContentLoaded",function(){
    let cars =storage.getCarsFromStorage();
    ui.loadAllCars(cars);
    carbody.addEventListener("click",deleteCar);
    clearInterval.addEventListener("click",clearAllCars);
});

function addCar(e){
    const title =titleElement.value;
    const price =priceElement.value;
    const url =urlElement.value;
    if  (title === ""|| price ==="" || url==="" ){
        ui.displayMessages("Tüm alanları doldurunuz...","danger");
    }

else {
    const newCar=new Car(title,price, url);
    ui.addCarToUI(newCar);
    storage.addCarToStorage(newCar);
    ui.displayMessages("Araç Ekleme Başarılı...","success");
}
ui.clearInputs(titleElement,urlElement,priceElement);
e.prevent.Default();
function deleteCar(e){
    if(e.target.id==="delete-car"){
        ui.deleteCarFromUI(e.target);
    }
    storage.deleteCarFromStorge(e.target.parentElement.previousElementSilding.previousElementSilding.textContent);
    
    ui.displayMessages("Silme işlemi başarılı...","success");

    const clear =document.getElementById("clear-cars");
}
function clearAllCars(){
    if(confirm("Tüm araçalr silinecek. Emin misiniz?")){
    ui.clearAllCarsFromUI();
    storage.clearAllCarsFromStorage();
}
}
}