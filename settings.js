


const ubah = ()=>{
    const input = document.querySelector(".input");
    const nilai = document.querySelector(".hasil")
        if (input.value %3 == 0 && input.value % 5 == 0){
            return nilai.innerHTML = "FizzBuzz"
        }else if (input.value % 5 === 0){
            return nilai.innerHTML = "Buzz"
        }else if(input.value %3 ===0){
            return nilai.innerHTML = "Fizz" 
        }else {
            return nilai.innerHTML = input.value
        }
    };