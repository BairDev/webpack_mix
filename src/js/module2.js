define(
    ['./module3'],
    function(Something){
        console.log('Inside module2, what type is the exported constructor of module3?', typeof Something, Something, Something.default);
        // TODO: put this on the page

        // 1. test
        var something = new Something.default();
        console.log('check instance of something', something.sayHello('June'));

        return function Anotherthing(){
            this.something = new Something.default();
        };
    }
);