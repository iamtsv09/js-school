function names(arr) {
    let result = arr.reduce(function (r, a) {
        r[a.name] = r[a.name] || [];
        r[a.name].push(a.surname);
        return r;
    }, {});

    console.log(result);
}
names([
    { name: 'Dima', surname: 'Bahdanau' },
    { name: 'Alesya', surname: 'Tsvirbut' },
    { name: 'Dima', surname: 'Test1' },
    { name: 'Dima', surname: 'Test2' },
    { name: 'Alesya', surname: 'Test1' },
]);

// { Dima: ["Bahdanau", "Test1"], Alesya: "Svirbut" }
//
