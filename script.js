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

    let count = $('table tr').length;

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


    // For loop za da ni gi prikazi site sostojki vo tabelata.
    let foodItems = function (foodItemsArr) {
        if (foodItemsArr.length > 2) {
            return foodItemsArr[0].name + ',' + ' ' + foodItemsArr[1].name + ',' + ' ' + foodItemsArr[2].name + ',' + '...';
        }
        let items = [];
        foodItemsArr.forEach((element, index) => {
            items.push(element.name);
        })
        return items;
    };

    // So klik ni gi prikazuva receptite vo tabela.
    btnSocuvajRecept.on('click', (() => {
        let name = imeNaRecept.val();
        let source = izvorNaReceptot.val();
        let time = vremeNaPodgotovka.val();
        let howIsMade = nacinNaPodgotovka.val();
        let result = `<tr>
            <td>${count}</td>
            <td>${name}</td>
            <td>${source}</td>
            <td>${foodItemsArr.length}</td>
            <td>${foodItems(foodItemsArr)}</td>  
            <td>${howIsMade}</td> 
            <td>${time} Минути </td>
            <td>
                <button type="button" class="btn btn-secondary">Прикажи</button>
                <button type="button" class="btn btn-danger">Избриши</button>
            </td>      
        </tr>`;
        $('table tbody').append(result);
        
        // Tuka gi vrakame site vrednosti na nula.
        foodItemsArr = [];
        $("#dropDown option").show();
        $("#dropDown option").val('');
        imeNaRecept.val('');
        izvorNaReceptot.val('');
        vremeNaPodgotovka.val('');
        nacinNaPodgotovka.val('');

    }))
});

// Briseme redica od tabelata.
$(document).on('click', '.btn-danger', function () {
    let items = $(this).closest('tr');
    let choice = confirm('Do you really wanna delete this one?');
    if (choice === true) {
        return items.hide();
    }
    return false;

});

// Prikazuvame recepti.
$(document).on("click", ".btn-secondary", function (e) {
    let x = 'Име на рацептот: ' + ' ' + $(this).closest('tr').find('td:nth-child(2)').text();
    let x2 = 'Извор на рецептот: ' + ' ' + $(this).closest('tr').find('td:nth-child(3)').text();
    let x3 = 'Број на состојки: ' + ' ' + $(this).closest('tr').find('td:nth-child(4)').text();
    let x4 = 'Име на состојки: ' + ' ' + $(this).closest('tr').find('td:nth-child(5)').text(); //Ova treba da se trgne, da ne zima od tablea
    let x5 = 'Начин на подготовка: ' + ' ' + $(this).closest('tr').find('td:nth-child(6)').text();
    let x6 = 'Време на подготовка: ' + ' ' + $(this).closest('tr').find('td:nth-child(7)').text();
    bootbox.alert(`${x} <br /> ${x2} <br />${x3} <br /> ${x4} <br /> ${x5} <br /> ${x6} `, function () {});
});
