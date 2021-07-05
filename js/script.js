//  generare 10 indirizzi email e stamparli
//   in pagina all'interno di una lista.


const app = new Vue({
       el: '#app',
       data: {
           email : [],


       },

       mounted(){
           for(let i = 0; i < 10; i++){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then (result => {
                console.log(result.data.response);
                this.email.push(result.data.response);
               
                


            })

           }
          



              
       }

    });