
    document.getElementById("generatingButton").addEventListener("click",showTheBoxes); 
    function showTheBoxes(){ // Main function responsible for boxes creation
        document.getElementById('contentContainer').innerHTML = ""; 
        var arr = []; // Declaring the array responsible for storing the random numbers
        
        function sortingFunction(a,b){ // That function will be a parameter in the sort() method to prevent lexicographical sort
           return (a-b);
        }
        while(arr.length < 8){ //Loop generating 8 random numbers
            var randomnumber=Math.ceil(Math.random()*200);
            if(arr.indexOf(randomnumber) === -1){ // Making the number unique
                arr.push(randomnumber); 
                arr.sort(sortingFunction);
            }
        }
        for(i=0;i<arr.length;i++){ // Loop creating boxes with the random numbers in the DOM
            var currentArray = arr[i]; 
            var box = document.createElement("DIV"); 
            var para = document.createElement("p"); 
            var node = document.createTextNode(`${currentArray}`); // Creating the TextNode with the randomNumber
            var thergb = "rgb(" + (250-currentArray) + "," + 20 + "," + 0 + ")"; // Declaring the RGB style based on the current randomnumber iteration
            para.appendChild(node); 
            box.appendChild(para); 
            box.className = ('box');
            box.style.background = thergb;
            document.getElementById('contentContainer').appendChild(box);
            }
        }

    

