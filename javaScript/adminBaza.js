const isOutput = document.getElementById('isOutput');

for(let x = 0; x < localStorage.length; x++){

    const kljuc = localStorage.key(x);
    const vrednost = localStorage.getItem(kljuc);

    isOutput.innerHTML += `${kljuc}: <br> ------------------------------------------------------- <br> ${vrednost} <br> ------------------------------------------------------- <br>`;
}