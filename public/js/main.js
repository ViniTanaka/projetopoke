function escolhe(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let lat = parseInt(position.coords.latitude);
            let lon = parseInt(position.coords.longitude);
            mostraPokemon(lat,lon);
        },
        function errorCallback(error){
            if(error.code == 1) alert("Não foi possível obter a informação sobre geolocalização por que a página não possuía permissão para fazê-lo.");
            if(error.code == 2) alert("A obtenção da geolocalização falhou por que pelo menos uma fonte interna de posicionamento retornou um erro interno.");
            if(error.code == 3) alert("O tempo máximo permitido para obter a geolocalização foi atingido antes de se obter a informação.");
            
        });
    } else{
        alert('o navegador não possui suporte para geolocalização, por favor troque de navegador!');
    }
}

function mostraPokemon(lat, lon){
    // console.log(lat, lon)
    let localiza = {'lat':lat,'lon':lon};
    let dados = JSON.stringify(localiza);
    $.ajax({
        url:'controller.php',
        type:'POST',
        data:{data:dados},
        success:function(result){
            console.log(result);
        },
        error:function(jqXHR, textStatus, errorThrown){
            console.log(errorThrown);
        }
    })
}