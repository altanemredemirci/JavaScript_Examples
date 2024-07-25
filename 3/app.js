const yuklenir = document.querySelector('.yuklenir')
const yuklenmeBitti = document.querySelector('.yuklenme-bitti')

const sayfa=()=>{

    const marsFotograflarinGetir=()=>{
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=pvLcLW72INBVU8afS1R30T6JvMGMwyLFt257peae')
        .then((res)=>res.json())
        .then((data)=>ekranaFotograflariGoster(data))
    }
  
    const ekranaFotograflariGoster=(data)=>{
        yuklenir.style.display='none'
        yuklenmeBitti.style.display='flex'

        const fotograflar=data.photos.map(item=> item.img_src)

        for(const fotograf of fotograflar){
            yuklenmeBitti.innerHTML+=`<img class="mars-foto" src="${fotograf}">`
        }
       
    }

    marsFotograflarinGetir()
}



document.addEventListener('DOMContentLoaded',sayfa)