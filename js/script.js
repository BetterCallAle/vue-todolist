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
            userToDo: "",
            isNotLongEnough: false,
        }
    },

    methods:{

        /* Function for add the input value in the toDoList array */
        addStringToList(){
           if(this.userToDo.length < 5){

                this.isNotLongEnough = true;

           } else{

            this.toDoList.push({
                toDo: this.userToDo,
                isDone: false
            });

            this.userToDo = ""

            this.isNotLongEnough = false
           }
        },

        /* Function to delete list elements */
        deleteListItem(arrayIndex){
            this.toDoList.splice(arrayIndex, 1)
        },

        /* Function to check as done the list items */
        checkAsDone(thisElement){
            thisElement.isDone = !thisElement.isDone
        }
    }

}).mount("#app")