const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img')
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
  })
})
lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })

  let search= document.querySelector(".search-box"),
  container= document.querySelectorAll(".container");


searchBox.oninput = () =>{
images.forEach(hide => hide.style.display ='none');
let value = searchBox.value;
images.forEach(filter =>{
let titel= filter.getAttribute('zoek');
if(value == titel){
filter.style.display='block';

}
if(searchBox.value==''){
  filter.style.display='block'  
}

})


}