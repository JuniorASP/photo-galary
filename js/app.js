const lightbox = document.getElementById('lightbox') 
const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const text = document.createElement('div')
    const img = document.createElement('img')
    const alt = image.getAttribute('alt')
    img.src = image.src
    text.insertAdjacentText('beforeend', alt)

    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    lightbox.appendChild(text)
  })
})
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })

  let search= document.getElementById("mi-search"),
  container= document.querySelectorAll(".container");


search.oninput = () =>{
let value = search.value;
images.forEach(image => image.style.display ='none');
images.forEach(image =>{
let titel= image.getAttribute(`id`);
if(value == titel){
image.style.display ='block';

}else if(value == ''){
  image.style.display ='block';

}


})


}