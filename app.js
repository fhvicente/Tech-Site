// RESPONSIVIDADE
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})
// 

// SLIDER
let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage();
}, 5000)

function nextImage(){
    count++
    if(count>4){
        count =1;
    }

    document.getElementById ("radio"+count).checked = true;
}


//NAVBAR
const dropdowns =document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret.rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

// AJAX

function carregarTextoNoHTML(nomeDoArquivo, elementoHTML) {
    // Faz uma chamada AJAX para buscar o arquivo de texto
    $.ajax({
      url: nomeDoArquivo,
      dataType: 'text',
      success: function(data) {
        // Adiciona o conteúdo do ficheiro de texto ao elemento HTML quando o rato é passado sobre ele
        $(elementoHTML).on('mouseover', function() {
          $(this).text(data);
        });
      },
    });
}
  


// COOKIES

function setCookie(cookieName, cookieValue, expirationDays) {
	var date = new Date();
	date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + date.toUTCString();
	document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cookieName) {
	var name = cookieName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var cookies = decodedCookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return "";
}

function checkVisits() {
	var visits = getCookie("visits");
	if (visits == "") {
		setCookie("visits", "1", 30);
		alert("Bem-vindo! Esta é a tua primeira visita.");
	} else {
		visits = parseInt(visits) + 1;
		setCookie("visits", visits, 30);
		alert("Já visitaste este site " + visits + " vezes. Obrigado!");
		if (visits >= 5) {
			alert("Obrigado pela visita! Aqui está um cupom 10% de desconso na tua próxima compra: #COOKIES");
		}
	}
}

function addVisit() {
	var visits = getCookie("visits");
	visits = parseInt(visits) + 1;
	setCookie("visits", visits, 30);
	if (visits >= 5) {
		alert("Obrigado pela visita! Aqui está um cupom 10% de desconso na tua próxima compra: #COOKIES");
	}
}


// COOKIES PHP

// Define o nome e valor do cookie
var cookieName = "usuario";
var cookieValue = "joao123";

// Define a data de expiração do cookie (opcional)
var expirationDate = new Date();
expirationDate.setFullYear(expirationDate.getFullYear() + 1); // Define a expiração para daqui a 1 ano

// Define o cookie no navegador
document.cookie = cookieName + "=" + cookieValue + "; expires=" + expirationDate.toUTCString();


// Faz uma requisição para o servidor, enviando o cookie armazenado no navegador
var xhr = new XMLHttpRequest();
xhr.open("GET", "pagina.php", true);
xhr.setRequestHeader("Cookie", document.cookie);
xhr.send();



// INTERAÇÕES DO SITE
var xmlhttp = new XMLHttpRequest();
var url = "registar-interacao.php";
var data = "funcionalidade=busca&ui=barra-de-busca";

xmlhttp.open("POST", url, true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText);
    }
}

xmlhttp.send(data);
