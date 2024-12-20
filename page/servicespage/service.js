document.addEventListener( "DOMContentLoaded", function () {
    fetch('../../components/footer/footer.html')
    .then(response => response.text())

    .then( data => { 
        document.getElementById('footer-container').innerHTML = data;
        // console.log(data)
    })
    .catch(error => console.error('Error loading navbar:', error));

})

function hii (){ 
     alert('thanks your booking')

}