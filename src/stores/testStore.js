import {observable, action, computed} from 'mobx';

class testStore {
 @observable tests = [];

 @action addTest = (test) => {
    this.tests.push(test);
 }
}

const store = new testStore ();
export default store;