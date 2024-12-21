

document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/Navbar/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            const script = document.createElement('script')
            script.src = '../../components/Navbar/navbar.js';
            document.body.appendChild(script)
        })
        .catch(error => console.error('Error loading navbar:', error));
})

document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/slider/slider.html')
        .then(response => response.text())

        .then(data => {
            document.getElementById('slider-container').innerHTML = data;
            const script = document.createElement('script')
            script.src = '../../components/slider/slider.js';
            document.body.appendChild(script)
        })
        .catch(error => console.error('Error loading navbar:', error));

})

document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/main/main.html')
        .then(response => response.text())

        .then(data => {
            document.getElementById('main-container').innerHTML = data;

            const script = document.createElement('script')
            script.src = '../../components/main/main.js';
            document.body.appendChild(script)

        })
        .catch(error => console.error('Error loading navbar:', error));


})
document.addEventListener("DOMContentLoaded", function () {
    fetch('../../components/footer/footer.html')
        .then(response => response.text())

        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
            // console.log(data)
        })
        .catch(error => console.error('Error loading navbar:', error));

})