// import {LocalStorage, JSONStorage} from 'node-localstorage';

// global.localStorage = new LocalStorage('./scratch');
// const storage = new LocalStorage('./scratch');

let storage = global.localStorage;
class StorageService {
    getItem(key) {
        if(typeof storage.getItem !== 'function') {
            console.log('Storage should implement getItem method');
        };

        return storage.getItem(key);
    };

    removeItem(key)  {
        if(typeof storage.removeItem !== 'function') {
            console.log('Storage should implement removeItem method');
        };

        storage.removeItem(key);
    };

    setItem(key, value)  {
        if(typeof storage.setItem !== 'function') {
            console.log('Storage should implement setItem method');
        };

        storage.setItem(key, value);
    };
};

export default StorageService;