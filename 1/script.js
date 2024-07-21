

let inputText = document.querySelector("#inputText");
let button = document.querySelector(".btn");

let yapilacaklar = document.querySelector(".yapilacaklar")

const yapilacakEkle=()=>{
    let birOncekiYapilacaklar =localStorage.getItem('yapilacaklar') ? localStorage.getItem('yapilacaklar') : '[]';

    const yapilacaklarArray = [inputText.value,...JSON.parse(birOncekiYapilacaklar)]
    localStorage.setItem('yapilacaklar',JSON.stringify(yapilacaklarArray.reverse()))

    yapilacaklar.innerHTML+=`<div class="yapilacak">
        <p>${inputText.value}</p>
        <i class="fa-sharp fa-solid fa-xmark yapilacak-icon"></i>
    </div>`

  inputText.value=''
}

const yapilacaklarEkle=()=>{
    const oncekiYapilacaklar = localStorage.getItem('yapilacaklar') ? localStorage.getItem('yapilacaklar') : '[]';
    if(oncekiYapilacaklar){
    JSON.parse(oncekiYapilacaklar).forEach(element => {
        yapilacaklar.innerHTML+=`<div class="yapilacak">
        <p>${element}</p>
        <i class="fa-sharp fa-solid fa-xmark yapilacak-icon"></i>
      </div>`
    });
}

}


yapilacaklarEkle()
button.addEventListener("click", yapilacakEkle);

