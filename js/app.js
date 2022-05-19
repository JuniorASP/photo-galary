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

  const search=document.querySelector(".search-box input"),
  container=document.querySelectorAll(".container");

  search.addEventListener("keyup", e =>{
      if(e.key =="enter"){
          let searchValue = search.value,
          value= searchValue.tolowerCase();
          container.forEach(container=>{
          if(value === container.dataset.name){
              return image.style.display ="block";
          }
          image.style.display="none";
          console.log(value);
      })
     
    }  
  })
