import AsyncStorage from '@react-native-async-storage/async-storage';

export default function storage() {
   
    const addStorage = async () => {

        try {
            await AsyncStorage.setItem(key, value);
            return true;
        } catch (err) {
            console.log('storage store err', err);
            return false;
        }
    }

    const getStorage = async (key) => {
        
        try {
            return await AsyncStorage.getItem(key);
        } catch (err) {
            console.log('storage ger err', err);
            throw Error(err);
        }
    } 

    const multiGet = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys);
        } catch (err) {
            console.log('storage multiGet err', err);
            throw Error(err);
        }
    }

    getAllkeys = async () => {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (err) {
            console.log('storage getallkeys err',err);
            throw Error(err);
        }
    }

    const removeStorage = async () => {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (err) {
            console.log('storage remove err', err)
            return false;
        }
    }
}

