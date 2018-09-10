(function(){
    // Last In First Out
    // Functions => push , pop, peek(last element) , length(size)

    // Using array as a stack

    // Function to check if a given string is a palindrome

    let letters = [];

    let word = "racecar";

    let rword = "";

    //push function -> adding item to the stack
    for(let i = 0 ; i < word.length; i++){
        letters.push(word[i]);
    }

    
    for(let i= 0; i < word.length ; i++){
        rword += letters.pop();
    }

    if(word === rword){
        console.log(word + "is a palindrome");
    }else{
        console.log(word + "is not a palindrome");
    }



    // Creating a class to implement Stack in javascript

    let Stack = function(){
        this.count = 0;
        this.storage = [];


        //Adds a value onto the end of the stack
        this.push = function(value){
            this.storage[this.count + 1] = value;
            this.count++;
        }

        //Removes and returns the value at the end of the stack

        this.pop = function(){
            if(this.count == 0){
                return undefined
            }

            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }


        // Returns the size of the stack 
        this.size = function(){
            return this.count;
        }


        // Returns the value at the end of the stack
        this.peek = function(){
            return this.storage[this.count - 1];
        }
        

    }
})();