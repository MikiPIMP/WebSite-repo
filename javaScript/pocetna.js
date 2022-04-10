function provera(){
    let cheker = confirm("Da li ste sigurni da zelite da odete na tu stranicu?");

    if(cheker == false){
        event.preventDefault();
    }
}