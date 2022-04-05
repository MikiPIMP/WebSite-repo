function prikazi(){                                               // Funkcija za prikazivanje pop up-a, kad se klikne dugme 'save'
    let popup_1 = document.getElementById('popup_id');

    let lozInput = document.getElementById('lozinka');
    let emailInput = document.getElementById('email');
    let prezimeInput = document.getElementById('prezime');
    let imeInput = document.getElementById('ime');

    if(!(imeInput.value.length < 3) && !(prezimeInput.value.length < 3) && (lozInput.value.length > 3) && ((emailInput.value.match(['@gmail.com']) || emailInput.value.match(['@gmail.rs']) || emailInput.value.match(['@hotmail.com']) || emailInput.value.match(['@hotmail.rs'])) && !(emailInput.value.match(/[A-Z]/)))){
        popup_1.classList.add('visible');
    }
}

function ponisti(){                                               // Funkcija za ponistavanje pop up-a, kad se klikne na dugme-'X'
    let popup_2 = document.getElementById('popup_id');

    let lozInput = document.getElementById('lozinka');
    let emailInput = document.getElementById('email');
    let prezimeInput = document.getElementById('prezime');
    let imeInput = document.getElementById('ime');

    popup_2.classList.remove('visible');                       // Ovo je bitno, ne dirati!

    lozInput.style.color = 'white';
    emailInput.style.color = 'white';
    prezimeInput.style.color = 'white';
    imeInput.style.color = 'white';
}

function provera(){   // na dugme save
    let cheker = confirm("Da li ste sigurni da zelite\nda se vratite na pocetnu stranicu?");

    if(cheker == false){
        event.preventDefault();
    }
}

function lozinkaCheker(){      // na dugme save
    let lozInput = document.getElementById('lozinka');

    if(lozInput.value.length < 4){
        alert("Vasa lozinka je previse kratka!\nRazmisljajte vise o vasoj sajber bezbednosti!\nUnesite lozinku duzu od 3 karaktera!");
        lozInput.style.color = 'red';
    } else{
        lozInput.style.color = 'green';
    }
}

function emailCheker(){    // na dugme save
    let emailInput = document.getElementById('email');

    if((emailInput.value.match(['@gmail.com']) || emailInput.value.match(['@gmail.rs']) || emailInput.value.match(['@hotmail.com']) || emailInput.value.match(['@hotmail.rs'])) && !(emailInput.value.match(/[A-Z]/))){
        // Sve okej status: true
        emailInput.style.color = 'green';
    } else{
        alert("Format Email adrese nije ispravan!\nPokusajte ponovo!");
        emailInput.style.color = 'red';
    }
}

function proveriIme(){    // na dugme save
    let imeInput = document.getElementById('ime');
 
    if(imeInput.value.length < 3){
        alert("Vase Ime je previse kratko!\nPokusajte ponovo");
        imeInput.style.color = 'red';
    } else{
        imeInput.style.color = 'green';
    }
}

function proveriPrez(){     // na dugme save
    let prezimeInput = document.getElementById('prezime');
 
    if(prezimeInput.value.length < 3){
        alert("Vase prezime je previse kratko!\nPokusajte ponovo");
        prezimeInput.style.color = 'red';
    } else{
        prezimeInput.style.color = 'green';
    }
}


let brisiObj = document.getElementById('btn_3');                 //konekcija sa tasterom-X
let unosObj = document.querySelectorAll('input');                //selekcija svih input tagova

brisiObj.addEventListener('click', () => {                       //funk za ponistavanje unosa (posle save dugmeta), klikom na dugme-X
    unosObj.forEach(input => input.value = '');
});

