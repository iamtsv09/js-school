function names(a) {
    let b = a.map((c) => c.name);
    console.log(b);
}
names([
    { name: 'Иван', suname: 'Иванов' },
    { name: 'Пётр', suname: 'Петров' },
]);
