1) What is the difference between null and undefined?
   
   Answer: For the undefined, a variable has been declared, but any value has not been assigned to it. For example: 

        let price;
        console.log (price);  // output - undefined

    On the contrary, 'null' value is assigned to a declared variable which means 'No Value' exists in that declared variable. For example: 

        let price = null;
        console.log (price);  // output - null 

    Besides, type of undefined is undefined and type of null is object. 


2) What is the use of the map() function in JavaScript? How is it different from forEach()?

    Answer: 

        map() : It's a array method that is transford all array elements and return a new array with transformed values. It doesn't change the original array. For example: 

            const numbers = [1, 2, 3, 4];
            const numberPlusOne = numbers.map(num => num + 1);

            console.log (numberPlusOne);    // output - [2, 3, 4, 5];
            console.log (numbers);          // output - [1, 2, 3, 4];


        forEach (): Unlike map(), it doesn't return any new array, rather each element of that array can be iterated from it. For example: 

            const numbers = [1, 2, 3, 4];
            const numberPlusOne = numbers.forEach(num => consol.log (num));  // output - [2, 3, 4, 5];

3) What is the difference between == and ===?

    Answer: Double equal (==) checks only value and it forcefully changes the type. On the other hand, Tripple equal (===) checks both value and type. For example: 

        console.log ("5" == 5;)     output - true
        console.log ("5" === 5;)     output - false


4) What is the significance of async/await in fetching API data?

    Answer: async/await is a modern JavaScript system by which asynchronous codes can be written like synchronous codes. At the time of fetching data from the API, JavaScript cannot stop the program due to an internet problem or a late response by the server. We can easily write codes with async/await in that case.


5) Explain the concept of Scope in JavaScript (Global, Function, Block).

    Answer: Scope in JavaScript means from where a variable can be accessed from. For global scope, a variable can be accessed from any area of the codes. For example,

        let a = 10;

        function valueOfA () {
            let doubleA = a * 2;
            console.log (doubleA);
        }
        valueOfA ();     // output - 20;

        console.log (a);  // output - 10;

    For the block scope, a varible can be accessed only in that block, not from the outside block. For example: 

        let a = 10;

        if (a >= 10) {
            let b = 20;
            console.log("True");     // output - True;
            console.log(b);         // output - 20;
        }
        console.log(b);             // output - error

    For the Function scope, a variable can only be accessed within a function, not from the outside of the functionn. For example: 

        function herName(a) {
            let b = 10;
            let sum = a + b;

            return sum;
        }
        console.log(herName(20));       // output - 30;
        console.log(b);                 // output - error
