




const countriescontainer = document.querySelector('.watch-container')
fetch('../../components/data/data.json')

  .then((res) => {
    
    return res.json()
  })
  .then((data) => {
    data.forEach((watch) => {
      const watchs = document.createElement('a' )
       
      watchs.classList.add('watch-card');

      watchs.innerHTML = `<img src="${watch.img}" alt="">
            <div class="card-text">  
            <h3  class="card-title"> price: ${watch.price} </h3>
            <p>  <b> Company :</b> ${watch.company}</p>
            <p>  <b> Model</b> ${watch.model}</p>
</div>`
  

      countriescontainer.append(watchs)
    })
  })

 
  


 