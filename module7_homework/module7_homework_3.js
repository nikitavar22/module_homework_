function createObj() {
    const obj = Object.create(null);
    return obj
}

console.log(Object.getPrototypeOf(createObj()));