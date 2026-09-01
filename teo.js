$(document).ready(function(){

    let post = "https://jsonplaceholder.typicode.com/posts"

    $('#obtener').click(function(){
        $.ajax({
            type: "GET",
            url: post,
            success: function(valor){
                console.log(valor)
            }
        })
    })

    $('#postear').click(function(){
        $.ajax({
            type: "POST",
            url: post,
            data: JSON.stringify({
                title: 'prueba dato enviado',
                body: 'prueba body enviado',
                userId: 1
            }),
            success: function(resultado){
                console.log(resultado)
            }
        })
    })

})