import Vue from 'vue'
import Vuex from 'vuex'
import testData from './testData.json';

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    docList:[...testData],
  },
  mutations: {
    addDoc(state,item){
      let maxid =  state.docList.length ? Math.max(...state.docList.map(i => parseInt(i.id))) : 0;
      item.id =  ++maxid; //increment;
      state.docList.push(item);
    },
    removeDoc(state,index){
      state.docList = state.docList.filter( i => parseInt(i.id) !== parseInt(index));
    },
    updateDoc(state,item){
      state.docList = state.docList.map(i => {
        if(parseInt(i.id) === parseInt(item.id)){
           i =item;
        }
        return i;
      });
    }
  },
  getters:{
    getDocById: state => id => {
      return state.docList.find(doc => parseInt(doc.id) === parseInt(id));
    }
  },
  actions: {
  },
  modules: {
  }
})
