function ar(a) {
    let c = [];
    for (let b of a) {
        if (b > 0) {
            c.push(b);
        }
    }
    console.log(c);
}
ar([5, 8, -5, -8, -10, 7, -78, -42, 83]);
