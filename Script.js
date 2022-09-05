function Verificar() {
    var fano = document.querySelector('input#txtano')//NÃO USAR VALUE
    var data = new Date()  //cria uma variavel data
    var ano = data.getFullYear() //coleta o ano do usuario
    var res = document.querySelector('div#res') //funciona
    if (fano.value.length == 0 || Number (fano.value) <= 1910 || Number(fano.value > ano)){ //
        window.alert('[ERROR] Verify all information and try again.')
    } else{
        var idade = (ano - Number (fano.value)) //.value para utilizar apenas o valor do input
        var sex = document.querySelectorAll('[name="radsexo"]')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (sex[0].checked) {
            (genero) = 'man'
            if(idade>=0 && idade<=12){
                img.setAttribute('src', 'crianca-mas.jpg' )
            } else if(idade< 18){
                img.setAttribute('src', 'adolescente-m.jpg')
            } else if(idade<= 23){
                img.setAttribute('src', 'jovem-m.jpg')
            } else if(idade <=50){
                img.setAttribute('src', 'adulto.jpg')
            } else{
                img.setAttribute('src','idoso.jpg')
            }
            }else if(sex[1].checked) {
                (genero) = 'woman'
                if(idade>=0 && idade<=12){
                    img.setAttribute('src', 'Crianca-fem.jpg' )
                } else if(idade< 18){
                    img.setAttribute('src', 'adolescente-f.jpg')
                } else if(idade<= 23){
                    img.setAttribute('src', 'jovem-f.jpg')
                } else if(idade <=50){
                    img.setAttribute('src', 'Adulta.jpg')
                } else{
                    img.setAttribute('src','idosa.jpg')
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `We detected a ${genero} with ${idade} years old <br> ` //br para descolar a imagem do texto !importante
            img.style.height = "200px";
            img.style.borderRadius = "100px"; //deixar a imagem arredondada, css não funciona
            img.style.width = "200px";
            res.appendChild(img)//mostrar o child/img 
    }
}