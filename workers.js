Vue.component("available-workers",{
    template:`
        <tr>
            <td>{{ index + 1 }}.</td>
            <td>{{ worker.firstName }} {{ worker.lastName }}</td>
            <td>{{ worker.age }}
            <td>
                <button type="button" class="btn btn-default btn-sm" @click="remove(worker.id)">
                    <span class="glyphicon glyphicon-trash"></span> 
                </button>
            </td>
        </tr>
    `,
    props: ["worker", "index"],
    methods: {
        remove: function(id){
            this.$emit("remove", id);
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
    }
});