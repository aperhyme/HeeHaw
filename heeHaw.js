function heeHaw() {
    let num = prompt("Enter any number!");
    if(isNaN(num)){
        document.write("Invalid input")
    }
    for(let i=1; i <=num; i++){

        if((i%3 === 0) && (i%5 === 0)){
            document.write("Hee Haw! <br>")
        }
        else if((i%3 === 0)){
            document.write("Hee! <br>")

        }
        else if(i%5 === 0){
            document.write("Haw! <br>")
        }
        else{
            document.write(i +"<br>")

        }
    }

}

heeHaw();