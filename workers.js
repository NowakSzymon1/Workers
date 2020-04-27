let workersManage = new Vue({
    el: "#workers",
    data: {
        users: [
            {firstName: "Szymon", lastName: "Koniec", age: 33},
            {firstName: "Damian", lastName: "Początek", age: 22},
            {firstName: "Daniel", lastName: "Oleksy", age: 37},
            {firstName: "Wojtek", lastName: "Kowalski", age: 39}
        ],
        user: {firstName:"", lastName:"", age:null},
        searchWorker: ""
        
    },
    computed: {
        filteredWorkers: function(){
            return this.users.filter(iLookFor => iLookFor.lastName.toLowerCase().includes(this.searchWorker));
        }
    },
    methods: {
        removeWorker: function(index){
            this.users.splice(index, 1);
        },
        addNewUser(){
             this.users.push({ firstName: this.user.firstName, lastName: this.user.lastName, age: this.user.age });
        }
    }
});