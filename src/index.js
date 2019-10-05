import Vue from "vue/dist/vue.esm.js";
import app from "./App.vue";

new Vue({
    el: "#app",
    data: {
    msg:"hello"
    },
    // render: (h) => { 
    //     return h("div",null,"hello world");
    // }
    template: `
    <div>
    <p>hello world</p>
    <p>代代</p>
    <p>呀呀呀</p>
    <app>啦啦啦</app>
    </div>
   

    `,
    components: {
       app
    }
});