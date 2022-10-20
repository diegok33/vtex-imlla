// Favicon
// const favicon = document.querySelector("link[rel='shortcut icon']");
// favicon.setAttribute('href', '/arquivos/iconjefferspet.png')

$(document).ready(function (){
    $('#client-document').keypress(function(tecla){
      if(tecla.charCode < 48 || tecla.charCode > 57)
        {
          return false;
        }
    });
  });