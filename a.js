// We can export js Object { P:V, method()}
let student = {
    name:"Hiral",
    info:{
        //mobno:"",
        surname:"Bansal",
        moreinfo:{
            Fav:"Monish",

        }
    }
}

// I can export By two Methods
// I can export anything
//1. Default export
// 2. Named export 
//2.1 Inline export
//2.2 Export list export {ExportElement1,ExportElement2,......}

//Named Export List
export { student};
