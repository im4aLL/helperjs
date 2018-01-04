class Helper {

    objectAdd(object, key, value) {
        object = Object.assign({}, object)
        object[key] = value;

        return object;
    }

    arrayCollapse(arrays) {
        return arrays.reduce((a, b) => a.concat(b), []);
    }
}

window.Helper = Helper;

export default Helper;
