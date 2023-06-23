// Dark Mode
let darkModu = () => {       // => Arrow function() 
    document.body.classList.toggle("dark_mode");
}

//input search  // Jquery'den yararlandik...
$(document).ready(function(){
const searchApi = ["Ankara","Izmir","Istanbul","Antalya","Bursa","Balikesir","Aydin","Kutahya"];   
$("#tags").autocomplete({
    source:searchApi
})
}); //end



// footer
let newDate = () => {
    // JS DOM
    document.getElementById("date_id").innerHTML = new Date().getFullYear();

    // Jquery DOM
    // $("#date_id").html(new Date().getFullYear());
}
newDate();