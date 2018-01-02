

    var offices = [
        { id: "GD", name: "Gdansk", headquarter: true },
        { id: "GL", name: "Gliwice" },
        { id: "KO", name: "Koszalin" }
    ];

var workers = [
    { id: 1,  name: "Bartek",     type: "P", office: "GD", salary: 300 },
    { id: 2,  name: "Wojtek",     type: "P", office: "GD", salary: 210 },
    { id: 3,  name: "Piotr",      type: "M", office: "GL", salary: 250 },
    { id: 4,  name: "Damian",     type: "P", office: "KO", salary: 290 },
    { id: 5,  name: "Jan",        type: "P", office: "GL", salary: 210 },
    { id: 6,  name: "Mateusz",    type: "P", office: "GD", salary: 290 },
    { id: 7,  name: "Weronika",   type: "M", office: "KO", salary: 240 },
    { id: 8,  name: "Gabriela",   type: "M", office: "GD", salary: 290 },
    { id: 9,  name: "Alina",      type: "M", office: "KO", salary: 290 },
    { id: 10, name: "Aleksander", type: "P", office: "GL", salary: 260 },
    { id: 11, name: "Tomek",      type: "P", office: "GD", salary: 200 },
    { id: 12, name: "Krzysztof",  type: "M", office: "KO", salary: 290 },
    { id: 13, name: "Marcin",     type: "P", office: "GD", salary: 280 },
    { id: 14, name: "Agata",      type: "P", office: "GD", salary: 230 },
    { id: 15, name: "Magda",      type: "P", office: "KO", salary: 220 }
];

// Firma X posiada trzy aktualnie biura zlokalizowane w Gdansku, Gliwicach i Koszalinie a w niedalekiej przyszlosci planuje otworzyc nowe biuro w Poznaniu.
//     Wymagania aplikacji: Na podstawie dostarczonych danych, prosze stworzyc obiekt Firma.
//
//     Firma powinna posiadac:
//     - liste Biur (tablice)
    const company = { };

// Natomiast Kazde biuro powinno posiadac liste Pracowników, id, name, oraz informacje czy jest glówna siedziba.
//     Kazdy pracownik ma propercje office, która pozwala nam rozpoznac, do którego biura nalezy (id w offices).
    company.offices = offices.map(office => {
        return {
            id: office.id,
            name: office.name,
            headquarter: office.headquarter || false,
            workers: workers.filter(workers => {
                return workers.office === office.id;
            })
        };
    });

// Do stworzenia struktury firmy uzyj przykladowych danych z zmiennych offices i workers.
//     Uzywajac obiektu „Firma” wykonaj nastepujace operacje (w kolejnosci):
// 1) Wyswietl, informacje o biurze w Gliwicach (lokalizacja, liczba przypisanych pracowników, srednia pensja),

    const officeInfo = office => company.offices.map(office => {
        return {
            location: office.name,
            workers: office.workers.length,
            averageSalary: (office.workers.reduce((acc, next) => acc + next.salary, 0) / office.workers.length)
        }
    })
        .find(city => city.location === office);

    console.log(officeInfo('Gliwice'));

// 2) Dodaj nowe biuro (w Poznaniu),
    company.offices.push({id: 'PO', name: 'Poznan', headquarter: false, workers:[]});

// 3) Dodaj nowego pracownika do biura w Poznaniu: { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 }
    const newWorker = { id: 16, name: "Olek", type: "M", office: "PO", salary: 500 };
    const addWorker = company.offices.find(({ id }) => id.includes('PO'));

    addWorker.workers.push(newWorker);

// 4) Wyswietl, informacje o biurze w Poznaniu
    console.log(officeInfo('Poznan'));

// 5) Wyswietl srednia pensje w calej firmie,

    const allWorkers = company.offices.reduce((acc, next)=>
        acc.concat(next.workers), []);

    const companyAverageSalary = (allWorkers.reduce((acc, next) =>
        acc + next.salary, 0) / allWorkers.length);

    console.log(companyAverageSalary);


    // 6) Wyswietl najlepiej oplacanego pracownika w poszczególnych biurach,
// 7) Wyswietl najlepiej oplacanego pracownika w calej firmie oraz nazwe jego biura.
//
//
// Uzyj konsoli do wyswietlenia danych. (wolaj w console.log funkcje, które zwracaja zadane wartosci, np. najlepiej oplacanego  pracowinika)
// Uzywaj skladni z ES6 lub ES5 (badz konsekwentny)
//
// Ocenie poddane zostana:
//     Organizacja kodu,
//     Nazewnictwo zmiennych i obiektów,
//     Latwosc ponownego uzycia / rozszerzalnosc kodu.