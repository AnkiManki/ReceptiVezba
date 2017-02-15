$(() => {
    let imeNaRecept = $('#basic-url');
    let izvorNaReceptot = $('#izvorNaRecpetot');

    let dropDownMenu = $('#dropDown');
    let kolicina = $('#kolicina');
    let vremeNaPodgotovka = $('#basic-url2');
    let nacinNaPodgotovka = $('#exampleTextarea');

    let btnDodajSostojka = $('#addRecipes');
    let btnSocuvajRecept = $('#keepRecipes');

    let foodItemsArr = [];
    let counter = 0;

    // Ova ni ja zima vrednosta od dropdownlistata.
    btnDodajSostojka.on('click', (() => {
        let sostojkiKolicina = kolicina.val();
        let sostojki = $("#dropDown option:selected").text();
        $("#dropDown option:selected").hide();
        let food = {};
        food.name = sostojki;
        food.qty = sostojkiKolicina;
        foodItemsArr.push(food);
        alert(`Внесовте ${sostojkiKolicina} ${sostojki}`);        
    }))


    // So klik ni gi prikazuva receotite vo tabela
    btnSocuvajRecept.on('click', (()=> {
        counter++
        let name = imeNaRecept.val();
        let source = izvorNaReceptot.val();
        let time = vremeNaPodgotovka.val();
        let howIsMade = nacinNaPodgotovka.val();
        let result = `<tr>
            <td>${counter}</td>
            <td>${name}</td>
            <td>${source}</td>
            <td>${foodItemsArr.length}</td>  
            <td>${foodItemsArr[0].name}, ${foodItemsArr[1].name}, ${foodItemsArr[2].name}</td>
            <td>${howIsMade}</td> 
            <td>${time} Минути </td>
            <td>
                <button type="button" class="btn btn-secondary">Прикажи</button>
                <button type="button" class="btn btn-danger">Избриши</button>
            </td>      
        </tr>`;
        $('table tbody').append(result);
        foodItemsArr = [];
        $("#dropDown option").show();
        $("#dropDown option").val('');
        imeNaRecept.val('');
        izvorNaReceptot.val('');
        vremeNaPodgotovka.val('');
        honacinNaPodgotovka.val('');

    }))

});

// Briseme redica od tabelata
$(document).on('click', '.btn-danger', function(){
        let items = $(this).closest('tr');
        items.hide();
});
