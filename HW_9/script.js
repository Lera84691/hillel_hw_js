//Написать функцию, которая принимает один параметр. При первом вызове, она его запоминает, при втором - суммирует переданный параметр с тем, что передали первый раз и так далее. Всё это с замыканиями. Например:

// a.sum(3) = 3
// b.3sum(5) = 8
// c.sum(20) = 28

(function () {
    function sum (val) {
        let temp = val;
        sum = function() {
            let arg = arguments[0] ? arguments[0] : 0;
            return temp = temp + arg;
        };
        return sum();
    }
    console.log(sum(3)); //3
    console.log(sum(8)); //11
    console.log(sum(28)); //39
})();

// или

(function () {
    function sum (val) {
        let temp = 0;
        sum = function(arg) {
            return temp = temp + arg;
        };
        return sum(val);
    }
    console.log(sum(3)); //3
    console.log(sum(8)); //11
    console.log(sum(28)); //39
})();
