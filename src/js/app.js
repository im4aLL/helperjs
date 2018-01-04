class Helper {

    objectAdd(obj, key, value) {
        obj = Object.assign({}, obj)
        obj[key] = value;

        return obj;
    }

    arrayCollapse(arrays) {
        return arrays.reduce((a, b) => a.concat(b), []);
    }

    objectDevide(obj) {
        return [
            this.objectKeys(obj),
            this.objectValues(obj)
        ];
    }

    objectKeys(obj) {
        return Object.keys(obj);
    }

    objectValues(obj) {
        return Object.values(obj);
    }

    objectDot(obj) {
        let newObj = {};
        let vm = this;

        for(let key in obj) {
            newObj[buildKey(obj[key])] = fetchValue(obj[key]);
        }

        function buildKey(key) {
            return 1;
        }

        function fetchValue(key) {
            if(vm.isObject(key)) {
                // fetchValue()
            }
        }

        return newObj;
    }

    isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }
}

window.Helper = Helper;

export default Helper;
