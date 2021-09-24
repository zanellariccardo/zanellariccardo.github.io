
document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( document.getElementsByClassName('.splide'), {
        type: 'loop',
        perPage: 3,
        width: '100px',
        heigth: '100px'
    } ).mount();
} );

