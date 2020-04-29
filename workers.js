let Event= new Vue({
    methods: {
        remove: function(id){
            this.$emit("remove", id);
        }
    }
})

Vue.component("workers",{
    template:`
    <transition name="view" mode="out-in" appear>
        <table v-if="users.length">
            <thead>
                <tr>
                    <th>Nr.</th>
                    <th>Imię</th>
                    <th>Edytuj</th>
                    <th>Nazwisko</th>
                    <th>Wiek</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <available-workers v-for="(worker, index) in users" 
                :worker="worker" 
                :index="index"
                :key="worker.id"
                ></available-workers>
            </tbody>
        </table>
        
        <no-available-workers v-else></no-available-workers>
    </transition>
    `,
    props: ["users"]
})

Vue.component("available-workers",{
    template:`
        <tr>
            <td>{{ index + 1 }}.</td>
            <template v-if="editNameMode">
                <div>
                    <input type="text" v-model.lazy="worker.firstName">
                </div>
            </template>
            <template v-else>
                <td>{{ worker.firstName }} 
                </td>
            </template>
            <td>
                <button type="button" class="btn btn-default btn-sm" @click="editNameMode = !editNameMode">
                    <span class="glyphicon" :class="{'glyphicon-edit': !editNameMode, 'glyphicon-check': editNameMode}"></span> 
                </button>
            </td>
            <td>{{ worker.lastName }}</td>
            <td>{{ worker.age }}</td>
            <td>
                <button type="button" class="btn btn-default btn-sm" @click="remove(worker.id)">
                    <span class="glyphicon glyphicon-trash"></span> 
                </button>
            </td>
        </tr>  
    `,
    data: function(){
        return{
            editNameMode: false
        }
    },
    props: ["worker", "index"],
    methods: {
        remove: function(id){
            Event.remove(id);
        }
    }
});


Vue.component("no-available-workers",{
    template:`
        <form>
            <h2>Brak pracowników</h2>
            <p>Dodaj pracownika:</p>
            <input type="text" placeholder="Imię">
            <input type="text" placeholder="Nazwisko">
            <input type="text" placeholder="wiek">
            <button type="submit">Dodaj</button>
        </form>
    `
});

let workersManage = new Vue({
    el: "#workers",
    data: {
        users: [
            {id: 1, firstName: "Szymon", lastName: "Koniec", age: 33},
            {id: 2, firstName: "Damian", lastName: "Początek", age: 22},
            {id: 3, firstName: "Daniel", lastName: "Oleksy", age: 37},
            {id: 4, firstName: "Wojtek", lastName: "Kowalski", age: 39}
        ],
    },
    methods: {
        removeWorker: function(id){
            let index = _.findIndex(this.users, ["id", id]);
            this.users.splice(index, 1);
        }
    },
    created: function(){
        Event.$on("remove", this.removeWorker);
    }
});