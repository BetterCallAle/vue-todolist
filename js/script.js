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
            }]

        }
    }
}).mount("#app")