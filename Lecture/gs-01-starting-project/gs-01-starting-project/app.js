// Rebuil with Vue 

var vm = new Vue({
  el: '#app',
  data(){
    return{
      goals: [], 
      enteredValue: ''
    };
  }, 
  methods:{
    addGoals: function(){
      this.goals.push(this.enteredValue);
    }
  }
});
// Chọn button 
// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(){
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue; 
//   listEl.append(listItemEl);
// } 

// buttonEl.addEventListener('click', addGoal);


