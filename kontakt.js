function provera(){
    let cheker = confirm("Da li ste sigurni da zelite\nda se vratite na pocetnu stranicu?");

    if(cheker == false){
        event.preventDefault();
    }
}