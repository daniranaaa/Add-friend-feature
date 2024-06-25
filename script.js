let a = document.querySelector("h5")
let b = document.querySelector("#add")
let check = 0

b.addEventListener("click", function(){
    if(check == 0){
    a.innerHTML = "Friends"
    a.style.color = 'green'
    b.innerHTML = "Remove Friend"
    check = 1
    }
    else{
 a.innerHTML = "Stranger"
    a.style.color = 'red'
    b.innerHTML = "Add Friend"

    check = 0
    }
})