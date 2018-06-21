/*function getMovies(){

    var i= fetch('https://api.themoviedb.org/3/movie/157336',{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzc4ZDI2MGEyZjQ2NDE1NTE2NjZmYTk2ZTcwZTNjZSIsInN1YiI6IjViMjAzN2Y1YzNhMzY4MTQ5YzAwNWRhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MhUo0XeeQtUC15sct2ws5CtRcD-GH8cni6zy62SEXEc'
        },
    }).then((res) => console.log(res))
 /!*   .then(function(response) {
        return response.json();
    })*!/
    console.log(i);
}*/

/*$(document).ready(function () {
    $('#get').on('click', function () {


    $.getJSON('https://api.themoviedb.org/3/movie/550?api_key=a778d260a2f4641551666fa96e70e3ce\n',
        function (data) {
        console.log(data);
        })


})
});*/

$(document).ready(function() {
    var url = 'https://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=a778d260a2f4641551666fa96e70e3ce';

    $('button').click(function() {
        var input = $('#movie').val(),
            movieName = encodeURI(input);
        $.ajax({
            type: 'GET',
            url: url + mode + input + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.dir(json);
            },
            error: function(e) {
                console.log(e.message);
            }
        });
    });
});