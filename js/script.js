const {createApp} = Vue;

createApp({
    data(){
        return{
            toDoList: [{
                toDo: "Impazzire con Js",
                isDone: false
            },

            {
                toDo: "Guardare per la trentesima volta How I Met Your Mother",
                isDone: true
            },

            {
                toDo: "Comprare il caffè",
                isDone: false
            }],

            userToDo: ""

        }
    },

    methods:{

        /* Function for add the input value in the toDoList array */
        addStringToList(){
            this.toDoList.push({
                toDo: this.userToDo,
                isDone: false
            });
            this.userToDo = ""
        },

        /* Function check the done elements */
        deleteListItem(arrayIndex){
            this.toDoList.splice(arrayIndex, 1)
        }
    }

}).mount("#app")