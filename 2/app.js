const sayfa = () => {
  const datalariGetir = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => datalariEkranaYazdir(data));
  };

  const datalariEkranaYazdir = (data) => {
    const alan = document.querySelector(".alan")
    for (const yapilacak of data) {
        let yapilacakClass="yapilacak"

        if(yapilacak.completed) yapilacakClass+=" tamamlandi"
        else yapilacakClass+=' tamamlanmadi'

      const html = ` 
      <div class="${yapilacakClass}">
      <p class="baslik">
        ${yapilacak.title}
      </p>
      <a href="" class="kullaniciAdi">
        Altan Emre
      </a>
    </div>`;
            alan.innerHTML+=html
    }
  };

  datalariGetir()
};

document.addEventListener("DOMContentLoaded", sayfa);
