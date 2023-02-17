function a(b) {
    return b == 1 ? 1 : b * a(b - 1);
}

console.log(a(4));
