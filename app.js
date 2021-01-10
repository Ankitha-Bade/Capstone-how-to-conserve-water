const home = document.getElementById("home")

home.onclick = () => {
    location.href = ""
}

let Option1 = document.getElementById("Option1");
let Option2 = document.getElementById("Option2");
let Option3 = document.getElementById("Option3");

Option1.onclick =  () =>{
    if (Option1.checked) 
        print("Wrong Plese try again");
    else
    print("")
}