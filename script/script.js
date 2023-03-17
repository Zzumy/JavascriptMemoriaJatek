const kepLista = ["../css/kepek/kep1.jpg", "./css/kepek/kep2.jpg", "./css/kepek/kep3.jpg", "./css/kepek/kep4.jpg", "./css/kepek/kep5.jpg", "./css/kepek/kep6.jpg", "./css/kepek/kep7.jpg", "./css/kepek/kep8.jpg", "./css/kepek/kep9.jpg", "./css/kepek/kep10.jpg", "./css/kepek/kep11.jpg", "./css/kepek/kep12.jpg", "./css/kepek/kep13.jpg", "./css/kepek/kep14.jpg", "./css/kepek/kep15.jpg", "./css/kepek/kep16.jpg", "./css/kepek/kep17.jpg", "./css/kepek/kep18.jpg", "./css/kepek/kep19.jpg", "./css/kepek/kep20.jpg", "../css/kepek/kep21.jpg", "./css/kepek/kep22.jpg", "./css/kepek/kep23.jpg", "./css/kepek/kep24.jpg", "./css/kepek/kep25.jpg", "./css/kepek/kep26.jpg", "./css/kepek/kep27.jpg", "./css/kepek/kep28.jpg", "./css/kepek/kep29.jpg", "./css/kepek/kep30.jpg", "./css/kepek/kep31.jpg", "./css/kepek/kep32.jpg", "./css/kepek/kep33.jpg", "./css/kepek/kep34.jpg", "./css/kepek/kep35.jpg", "./css/kepek/kep36.jpg", "./css/kepek/kep37.jpg", "./css/kepek/kep38.jpg", "./css/kepek/kep39.jpg", "./css/kepek/kep40.jpg"];

$(function(){
    kepekArticlebe();
    stilusKepekre();
});

function kepekArticlebe() {
    const articleElem = $(`article`);

    let kepek = "";
    for (let index = 0; index < kepLista.length; index++) {
        kepek += `<div id="kartya${index}"><img src="${kepLista[index]}" alt"szorny"></div>`;
    }
    console.log(kepek);
    
    articleElem.append(kepek);
}

function stilusKepekre() {
    let szornyek = "";
    for (let index = 0; index < kepLista.length; index++) {
        szornyek = $(`#kartya${index}`);
        szornyek.css(`grid-area`, `kep${index}`);
    }
    console.log(szornyek);
}