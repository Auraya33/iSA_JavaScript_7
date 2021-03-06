/* TODO:EXTRAS!. ZADANIE DODATKOWE W MIEDZY CZASIE! *Zadanie domowe*
- stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users. (mamy!)

A.
- Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
  ma wyświetlić w konsoli ID danego użytkownika
- Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
- rząd powinien zawierać klasę table-row
- komórka powinna zawierać klasę table-cell
- najechanie na rząd ma go podświetlić */

const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr class="tablerow">
            <td class="table-cell"><input name="checkboxID" class="cbox-id" type="checkbox" data-user='${user.id}'></td>
            <td class="table-cell userId">${user.id}</td>
            <td class="table-cell">${user.firstName}</td>
            <td class="table-cell">${user.lastName}</td>
            <td class="table-cell">${user.age}</td>
            <td class="table-cell">${user.city}</td>
            <td class="table-cell remove-icon fa fa-times" aria-hidden="true"> </td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());

// A.
// ma wyświetlić w konsoli ID danego użytkownika//

function getIdOnCheck() {
    $(this).prop('checked');
    console.log($(this).data('user'));
}

$table.on('click','.cbox-id', getIdOnCheck);


// - Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd

function removeRow() {
    $(this).closest('tr').remove()
}

$table.on('click', '.remove-icon', removeRow);


//- najechanie na rząd ma go podświetlić
// const $tableRow = $('.tablerow');

function addHiglightClass() {
    $(this).addClass('highlight')
}

function removeHighlightClass() {
    $(this).removeClass('highlight')
}

$table.on({ // sposób 2 - wiele eventów naraz
    mouseenter: addHiglightClass,
    mouseleave: removeHighlightClass
}, 'tr');

// B.
// - nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
// - formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych

const $userCity = $('#citiesSelect');
const $userAge = $('#input-age');
const $userFirstName = $('#input-first-name');
const $userLastName = $('#input-last-name');
const $submitButton = $('#sbm-btn');

$submitButton.on('click', function() {
   users.push({
        firstName: $userFirstName.val(),
        lastName: $userLastName.val(),
        age: $userAge.val(),
        city: $userCity.val(),
        id: users.length + 1
    });
        $table.html(getRowsWithUsers());
});


// - przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery
function requirementsToActivate() {
    const $minAgeRequired = 18;
    const $minFirstNameLengthRequired = 3;
    return $userAge.val() < $minAgeRequired ||
        $userFirstName.val().length < $minFirstNameLengthRequired;
}

function validateRequrements() {
    $submitButton.prop('disabled', requirementsToActivate)
}

$userAge.add($userFirstName).on('keyup', validateRequrements);