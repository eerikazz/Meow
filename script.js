$(document).ready(function(){

    fetchImg();

    $('#next').click(function(){
        fetchImg();
    });

    function fetchImg() {
        $.get('https://api.thecatapi.com/v1/images/search', function(data) {
            $('img').attr('src', data[0].url);
        });
    }

});