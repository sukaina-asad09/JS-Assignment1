// // chapter 1
        // // task 1
        alert("Welcome to my Website");
        // // task 2
        alert("Error! Please enter a valid password.");
        // // task 3
        alert("Welcome to JS Land..\n Happy Coding!");
        // // task 4
        alert("Welcome to JS Land");
        alert("Happy Coding");
        // // task 5
        console.log(alert("Hello..I can run JS through my web browser's console"));


        // //  chapter 2
        // // task1
        var username;
        // // task2
        var myName="Sukaina Asad";
        // // task3
        var message;
        message="Hello World";
        alert(message);
        // // task4
        var name="John Doe";
        var age="15 years old";
        var certification="Certified Mobile Application Development";
        alert(name);
        alert(age);
        alert(certification);
        // // task5
        var pizzaVar="PIZZA \nPIZZ \nPIZ \nPI \nP";
        alert(pizzaVar);
        // // task6
        var email="syedasukaina09@gmail.com";
        alert("My email address is "+email);
        // // task7
        var book="A Smarter Way to Learn JavaScript"
        alert("I am trying to learn from the Book "+book);
        // // task8
        document.write("I can write HTML content through JavaScript");
        // // task9
        var image="▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"; 
        alert(image);

        // // chapter 3
        // // task 1
        var age=15;
        alert("I am "+age+ " years old.");
        // // task2
        var visits=10;
        alert("You have visisted this site "+visits+" times");
        // // task3
        var birthYear=2000;
        document.write("My Birth year is "+birthYear + "<br>data type of my declared variable is number <br>");
        // // task4
        var visitorName="George";
        var productTitle="T-shirt";
        var quantity=5;
        document.write(visitorName+" ordered"+quantity+productTitle+"(s) on XYZ Clothing Store");

        // chapter 4
        // task1
        var a,b,c;
        // // task2
        // // legal variables
        var legal1="a";
        var my_legal2="b";
        var myLegal3="c";
        var _legal4="d";
        var My_Legal5="e";
        // // illegal variables
        // var illegal variable;
        var break;
        var 1stillegal;
        var illegal*4;
        // task3
        document.write("<h1>Rules for assigning JS variables</h1><br>");
        document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable <br>");
        document.write("Variables must begin with a letter, $ or _. For example: $name, name, _name <br>");
        document.write("Variable names are case sensitive <br>");
        document.write("Variable names should not be JS keywords.")

        // // // CHAPTER 05
        // // //MATH EXPRESSIONS


        // // 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

        var num1 = 3;
        var num2 = 5;
        var sum = num1 + num2;
        document.write("Sum of "+num1+" and "+num2+" is "+sum+"<br>");

        // // 2. Repeat task1 for subtraction, multiplication, division & modulus.

        var difference = num1 - num2;
        document.write("Difference of "+num1+" and "+num2+" is "+difference+"<br>");

        var mul = num1 * num2;
        document.write("Multiplication of "+num1+" and "+num2+" is "+mul+"<br>");

        var divide = num1 / num2;
        document.write("Division of "+num1+" by "+num2+" is "+divide+"<br>");

        var modulus = num1 % num2;
        document.write("Modulus of "+num1+" by "+num2+" is "+modulus+"<br>");

        // // 3. Do the following using JS Mathematic Expressions 
        // // a. Declare a variable.
        // // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
        // // c. Initialize the variable with some number. 
        // // d. Show the value of variable in your browser like “Initial value: 5”. 
        // // e. Increment the variable. 
        // // f. Show the value of variable in your browser like “Value after increment is: 6”. 
        // // g. Add 7 to the variable. 
        // // h. Show the value of variable in your browser like “Value after addition is: 13”. 
        // // i. Decrement the variable. 
        // // j. Show the value of variable in your browser like “Value after decrement is: 12”. 
        // // k. Show the remainder after dividing the variable’s value by 3.  
        // // l. Output : “The remainder is : 0”

        var myvar;
        document.write("Value after variable declaration is: "+myvar+"<br>");
        myvar = 5;
        document.write("Initial value: "+myvar+"<br>");
        myvar++;
        document.write("Value after increment is: "+myvar+"<br>");
        myvar = myvar + 7;
        document.write("Value after addition is: "+myvar+"<br>");
        myvar--;
        document.write("Value after decrement is: "+myvar+"<br>");
        myvar = myvar % 3;
        document.write("The remainder is : "+myvar+"<br>");


        // // 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a
        // // variable & calculate the cost of buying 5 tickets to a movie. Example output:

        var ticketPrice = 600;
        var totalTickets = 5;
        var totalPrice = ticketPrice*totalTickets;
        document.write("Total cost to buy "+totalTickets+" tickets to a movie is "+totalPrice+" PKR <br>");


        // // 5. Write a script to display multiplication table of any number in your browser. E.g 

        var tableOf = 4;
        document.write("Table of: "+tableOf+"<br>");
        document.write(tableOf+" x "+1+" = "+tableOf*1+"<br>");
        document.write(tableOf+" x "+2+" = "+tableOf*2+"<br>");
        document.write(tableOf+" x "+3+" = "+tableOf*3+"<br>");
        document.write(tableOf+" x "+4+" = "+tableOf*4+"<br>");
        document.write(tableOf+" x "+5+" = "+tableOf*5+"<br>");
        document.write(tableOf+" x "+6+" = "+tableOf*6+"<br>");
        document.write(tableOf+" x "+7+" = "+tableOf*7+"<br>");
        document.write(tableOf+" x "+8+" = "+tableOf*8+"<br>");
        document.write(tableOf+" x "+9+" = "+tableOf*9+"<br>");
        document.write(tableOf+" x "+10+" = "+tableOf*10+"<br>");

        // // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
        // // a.  Store a Celsius temperature into a variable. 
        // // b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
        // // c. Now store a Fahrenheit temperature into a variable. 
        // // d. Convert it to Celsius & output “NNoF is NNoC”. 
        // // Conversion Formulae

        var TempC = 25;
        var TempC_to_F = ((TempC*9/5)+32);
        document.write(TempC+"°C is " +TempC_to_F+"°F"+"<br>");

        var TempF = 70;
        var TempF_to_C = ((TempF-32)*(5/9));
        document.write(TempF+"°C is " +TempF_to_C+"°F"+"<br>");


        // // 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
        // // Store the following in variables 
        // // a. Price of item 1 
        // // b. Price of item 2 
        // // c. Ordered quantity of item 1 
        // // d. Ordered Quantity of item 2 
        // // e. Shipping charges 
        // // Compute the total cost & show the receipt in your browser.

        var item1 = 650;
        var item2 = 100;
        var quantity1 = 3;
        var quantity2 = 7;
        var shipping_charges = 100;
        var total_cost = (item1*quantity1)+(item2*quantity2)+shipping_charges;
        document.write("Price of Item 1 is: "+item1+"<br>");
        document.write("Quantity of Item 1 is: "+quantity1+"<br>");
        document.write("Price of Item 2 is: "+item2+"<br>");
        document.write("Quantity of Item 2 is: "+quantity2+"<br>");
        document.write("Shipping Charges: "+shipping_charges+"<br><br>");
        document.write("Total cost of your order is: "+total_cost+"<br>");


        // // 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage 
        // // & show the result in your browser

        var total_marks = 980;
        var marks_obtained = 804;
        var percentage = (marks_obtained*100)/total_marks;
        document.write("Total Marks: "+total_marks+"<br>");
        document.write("Marks Obtained: "+marks_obtained+"<br>");
        document.write("Percentage: "+percentage+"<br>");


        // // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency 
        // // to Pakistani Rupees. Perform all calculations in a single expression. 
        // // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 



        var dollars = 10;
        var riyals = 25;
        var PKR = (dollars*104.80)+(riyals*28);
        document.write("Total Currency in PKR: "+PKR+"<br>");


        // // 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
        // // a. Add 5 
        // // b. Multiply by 10 
        // // c. Divide the result by 2 Perform all calculations in a single expression

        var number = 12;
        var total_number = (((number+5)*10)/2);
        document.write("Number after calculation is: "+total_number+"<br>");



        // // 11. The Age Calculator: Forgot how old someone is? Calculate it! 
        // // a. Store the current year in a variable. 
        // // b. Store their birth year in a variable. 
        // // c. Calculate their 2 possible ages based on the stored values. 
        // // Output them to the screen like so: “They are either NN or NN years old”. 


        var current_year = 2020;
        var birth_year = 2000;
        var current_age = current_year - birth_year;
        var possible_age = current_age+1;
        document.write("They are either "+current_age+" or " +possible_age+ " years old <br>");



        // // 12. The Geometrizer: Calculate properties of a circle. 
        // // a. Store a radius into a variable. 
        // // b. Calculate the circumference based on the radius, and output “The circumference is NN”. 
        // // (Hint : Circumference of a circle = 2 π r , π = 3.142) 
        // // Calculate the area based on the radius, and output “The  area is NN”. 
        // // (Hint : Area of a circle = π r2, π = 3.142) 

        var radius = 20;
        var pi = 3.142;
        var circumference = 2*pi*radius;
        var area = pi*(radius**2);
        document.write("The radius of circle is: "+radius+"<br>");
        document.write("The circumference is: "+circumference+"<br>");
        document.write("The area is: "+area+"<br>");


        // // 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? 
        // // Wonder no more. 
        // // a. Store your favorite snack into a variable 
        // // b. Store your current age into a variable.
        // // c. Store a maximum age into a variable. 
        // // d. Store an estimated amount per day (as a number). 
        // // e. Calculate how many would you eat total for the rest of your life. 
        // // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

        var snack = "Chocolate chip"
        var my_age = 15;
        var max_age = 65;
        var estimated_amount = 3;

        document.write("Favourite Snack: "+snack+"<br>");
        document.write("Current Age: "+my_age+"<br>");
        document.write("Estimated Maximum Age: "+max_age+"<br>");
        document.write("Amount of snacks per day: "+estimated_amount+"<br>");
        document.write("You will need "+(max_age-my_age)*estimated_amount+" "+snack+" to last you until the ripe old age "+max_age+"<br>");
        
        // CHAPTER 06 TO 09
        //MATH EXPRESSIONS


        // 1. Write a program to take a number in a variable, do the required arithmetic to display 
        // the following result in your browser:  

        let a=10;
        document.getElementById('mytext').innerHTML=`Result:<br> the value of a is: ${a}<br>.................<br>`;
        a=++a;

        let val=`The value of ++a is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;
        a=a++
        let next=`The value of a++ is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;
        a=--a;
        let next1=`The value of --a is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;
        a=a--;
        let next2=`The value of a-- is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;
        document.getElementById('maths').innerHTML=val+next+next1+next2;

        // 2. What will be the output in variables a, b & result after execution of the following script: 
        // var a = 2,
        // b = 1; 
        // var result = --a - --b + ++b + b--; 
        // Explain the output at each stage: 
        // --a; 
        // --a - --b; 
        // --a - --b + ++b; 
        // --a - --b + ++b + b--;


        var a=2;
        var b=1;
        document.getElementById('mytext').innerHTML=`Result:<br> the value of a is: ${a}<br>.................<br>`;
        a=++a;

        let val=`The value of ++a is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;
        a=a++
        let next=`The value of a++ is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;
        a=--a;
        let next1=`The value of --a is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;
        a=a--;
        let next2=`The value of a-- is: ${a}<br>
        Now the value of a is: ${a}<br><br>`;

        document.getElementById('maths').innerHTML=val+next+next1+next2;
        a=b;
        val=`Result of b=${b}<br>
        The value of ++b is: ${a}<br>
        Now the value of b is: ${a}<br><br>`;
        a=a++
        next=`The value of b++ is: ${a}<br>
        Now the value of b is: ${a}<br><br>`;
        a=--a;
        next1=`The value of --b is: ${a}<br>
        Now the value of b is: ${a}<br><br>`;
        a=a--;
        next2=`The value of b-- is: ${a}<br>
        Now the value of b is: ${a}<br>`;
        a=2
        b=1;
        var result = `result: ${--a - --b + ++b + b--}`;

        document.getElementById('b').innerHTML=val+next+next1+next2+result;


        // 3. Write a program that takes input a name from user & greet the user

        let name=prompt('Enter your name');
        if (name!=null){
        document.getElementById('mytext').innerHTML=`Welcome ${name}`;}

        // 5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
        // If user does not enter a new number, multiplication table of 5 should be displayed by default


        let number=prompt('Enter number');
        if (number!=null){

        let table =``;
        for (i=1;i<=10;i++){
            tab= `${number}*${i}=${number*i}<br>`
            table+=tab;
        }
        document.getElementById('mytext').innerHTML=`TABLE= ${number}<br>`+table;
        }


        // 6. Take 
        // a) Take three subjects name from user and store them in 3 different variables. 
        // b) Total marks for each subject is 100, store it in another variable. 
        // c) Take obtained marks for first subject from user and stored it in different variable. 
        // d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
        // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 

        let sub1=prompt('enter name of subject1');
        let sub2=prompt('enter name of subject2');
        let sub3=prompt('enter name of subject3');

        document.getElementById('sub1').innerHTML=sub1;
        document.getElementById('sub2').innerHTML=sub2;
        document.getElementById('sub3').innerHTML=sub3
        let marks1=prompt('enter marks1');
        let marks2=prompt('enter mark2');
        let marks3=prompt('enter marks3');

        document.getElementById('mark1').innerHTML=marks1;
        document.getElementById('mark2').innerHTML=marks2;
        document.getElementById('mark3').innerHTML=marks3
        let per1=marks1/100*100;
        let per2=marks2/100*100;
        let per3=marks3/100*100;
        document.getElementById('per1').innerHTML=per1+`%`;
        document.getElementById('per2').innerHTML=per2+`%`;
        document.getElementById('per3').innerHTML=per3+`%`;

        // CHAPTER 10 TO 11
        //USER INPUT & CONDITIONAL STATEMENT


        // 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the 
        // user like this: “Welcome to city of lights” 
        city = prompt("Enter City Name: ");
        if (city.toLowerCase() == "karachi"){
            document.write("Welcome to city of lights!");
        }

        // 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good 
        // Morning Sir. If the user is female, give the message: Good Morning Ma’am. 
        gender = prompt("Enter Gender: ");
        if (gender.toLowerCase() == "male"){
            document.write("Good Morning Sir!");
        }
        else if (gender.toLowerCase() == "female"){
            document.write("Good Morning Ma'am!");
        }

        // 3. Write a program to take input color of road traffic signal from the user & show the message 
        // according to this table: 
        color = prompt("Enter Color: ");
        if (color.toLowerCase() == "red"){
            document.write("Must Stop!");
        }
        else if (color.toLowerCase() == "yellow"){
            document.write("Ready to move!");
        }
        else if (color.toLowerCase() == "green"){
            document.write("Move now!");
        }

        // 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel 
        // is less than 0.25litres, show the message “Please refill the fuel in your car” 
        fuel = prompt("Enter Remaining Fuel (in Litres): ");
        if (fuel<0.25){
            document.write("Please refill the fuel in your car");
        }


        // 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
        // a. var a = 4; 
        // if (++a === 5){ 
        //     alert("given condition for variable a is true"); 
        // } 

        //Alert Message Displayed =====> True

        // b. var b = 82; 
        // if (b++ === 83){ 
        //     alert("given condition for variable b is true"); 
        // }

        //Alert Message was not Displayed.

        // c. var c = 12; 
        // if (c++ === 13){ 
        //     alert("condition 1 is true"); 
        // } 
        // if (c === 13){ 
        //     alert("condition 2 is true"); 
        // } 
        // if (++c < 14){ 
        //     alert("condition 3 is true"); 
        // } 
        // if(c === 14){ 
        //     alert("condition 4 is true"); 
        // }

        //Alert Message Displayed =====> condition 2 is true
        //Alert Message Displayed =====> condition 4 is true

        // d. var materialCost = 20000; 
        // var laborCost = 2000; 
        // var totalCost = materialCost + laborCost; 
        // if (totalCost === laborCost + materialCost){ 
        //     alert("The cost equals"); 
        // } 

        //Alert Message Displayed =====> The cost equals


        // e. if (true){ 
        //     alert("True"); 
        // }
        // if (false){ 
        //     alert("False"); 
        // }

        //Alert Message Displayed =====> True

        // f. if("car" < "cat"){ 
        //     alert("car is smaller than cat"); 
        // }

        //Alert Message Displayed =====> car is smaller than cat


        // 6. Write a program to take input the marks obtained in three subjects & total marks. 
        // Compute & show the resulting percentage on your page. Take percentage & 
        // compute grade as per following table
        // Show the total marks, marks obtained, percentage, grade & remarks like: 
        var urdu = parseInt(prompt("Enter Urdu Marks: "));
        var english = parseInt(prompt("Enter English Marks: "));
        var maths = parseInt(prompt("Enter Maths Marks: "));

        Total_obtained_marks = urdu + english + maths;
        Total__marks = 300;
        Total_Percentage = (Total_obtained_marks*100)/Total__marks;

        if (Total_Percentage>=80){
            document.write("<h1>Marks Sheet</h1><br>");
            document.write("Total Marks:"+Total__marks+"<br>");
            document.write("Marks Obtained:"+Total_obtained_marks+"<br>");
            document.write("Percentage:"+Total_Percentage+"<br>");
            document.write("Grade: A-one"+"<br>");
            document.write("Remarks: Excellent"+"<br>");
        }
        else if (Total_Percentage>=70){
            document.write("<h1>Marks Sheet</h1><br>");
            document.write("Total Marks:"+Total__marks+"<br>");
            document.write("Marks Obtained:"+Total_obtained_marks+"<br>");
            document.write("Percentage:"+Total_Percentage+"<br>");
            document.write("Grade: A"+"<br>");
            document.write("Remarks: Good"+"<br>");
        }
        else if (Total_Percentage>=60){
            document.write("<h1>Marks Sheet</h1><br>");
            document.write("Total Marks:"+Total__marks+"<br>");
            document.write("Marks Obtained:"+Total_obtained_marks+"<br>");
            document.write("Percentage:"+Total_Percentage+"<br>");
            document.write("Grade: B"+"<br>");
            document.write("Remarks: You need to improve"+"<br>");
        }
        else if (Total_Percentage<60){
            document.write("<h1>Marks Sheet</h1><br>");
            document.write("Total Marks:"+Total__marks+"<br>");
            document.write("Marks Obtained:"+Total_obtained_marks+"<br>");
            document.write("Percentage:"+Total_Percentage+"<br>");
            document.write("Grade: Fail"+"<br>");
            document.write("Remarks: Sorry"+"<br>");
        }

        // 7. Guess game: 
        // Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number. 
        // a. If user guesses the same number, show “Bingo! Correct answer”. 
        // b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
        guess = parseInt(prompt("Enter Number: ","Guess between 0 to 10"));
        win = 7;
        if (guess == win){
            document.write("Bingo! Correct answer");
        }
        else if (guess == win+1){
            document.write("Close enough to the correct answer");
        }



        // 8. Write a program to check whether the given number is divisible by 3. Show the message to the 
        // user if the number is divisible by 3.
        number_ = parseInt(prompt("Enter Number: "));
        if (number_%3 == 0){
            document.write("Tne number is divisible by 3");
        }

        // 9. Write a program that checks whether the given input is an even number or an odd number.
        Even_or_odd = parseInt(prompt("Enter Number: "));

        if (Even_or_odd%2 == 0){
            document.write("The number is Even");
        }
        else if (Even_or_odd%2 != 0){
            document.write("The number is Odd");
        }


        // 10. Write a program that takes temperature as input and shows a message based on following criteria 
        // a. T > 40 then “It is too hot outside.” 
        // b. T > 30 then “The Weather today is Normal.” 
        // c. T > 20 then “Today’s Weather is cool.” 
        // d. T > 10 then “OMG! Today’s weather is so Cool.”
        T = parseInt(prompt("Enter Temperature: "));
        if (T>40){
            document.write("It is too hot outside.");
        }
        else if (T>30){
            document.write("he Weather today is Normal.");
        }
        else if (T>20){
            document.write("Today’s Weather is cool.");
        }
        else if (T>10){
            document.write("OMG! Today’s weather is so Cool.");
        }

        // 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
        // a. First number 
        // b. Second number 
        // c. Operation (+, -, *, /, %) 
        // Compute & show the calculated result to user.
        number1 = parseInt(prompt("Enter First Number: "));
        number2 = parseInt(prompt("Enter Second Number: "));
        operation = prompt("Enter Operation: ");


        if (operation == "+"){
            document.write(number1+" "+operation+" "+number2+" = "+(number1+number2));
        }
        else if (operation == "-"){
            document.write(number1+" "+operation+" "+number2+" = "+(number1-number2));
        }
        else if (operation == "*"){
            document.write(number1+" "+operation+" "+number2+" = "+(number1*number2));
        }
        else if (operation == "/"){
            document.write(number1+" "+operation+" "+number2+" = "+(number1/number2));
        }
        else if (operation == "%"){
            document.write(number1+" "+operation+" "+number2+" = "+(number1%number2));
        }




        // CHAPTER 12 TO 13
        // IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS


        // 1. Write a program that takes a character (number or string) in a variable & checks 
        // whether the given input is a number, uppercase letter or lower case letter. 
        // (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).
        character = prompt("Enter Character: ");
        check = character.charCodeAt(0);

        if (check >= 65 && check <= 90){
            document.write("Character is Upper Case Alphabet")
        } 
        else if (check >= 97 && check <= 122){
            document.write("Character is Lower Case Alphabet")

        }
        else if (check >= 48 && check <= 57) {
            document.write("Character is a Digit");
        }

        // 2. Write a JavaScript program that accept two integers and display the larger. 
        // Also show if the two integers are equal. 
        number_1 = parseInt(prompt("Enter First Number: "));
        number_2 = parseInt(prompt("Enter Second Number: "));

        if (number_1>number_2){
            document.write(number_1+" is Greater");
        }
        else if (number_2>number_1){
            document.write(number_2+" is Greater");
        }
        else if (number_2==number_1){
            document.write("Both are Equal");
        }


        // 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero
        number_1 = parseInt(prompt("Enter First Number: "));

        if (number_1>0){
            document.write(number_1+" is Positive");
        }
        else if (number_1<0){
            document.write(number_1+" is Negative");
        }
        else if (number_1==0){
            document.write("Number is Zero");
        }


        // 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
        vowel = prompt("Enter Character");

        if (vowel.toLowerCase() == "a" || vowel.toLowerCase() == "e" ||vowel.toLowerCase() == "i"
        ||vowel.toLowerCase() == "o" ||vowel.toLowerCase() == "u"){
            document.write("True");
        }
        else{
            document.write("False")
        }


        // 5. Write a program that 
        // a. Store correct password in a JS variable. 
        // b.  Asks user to enter his/her password 
        // c.  Validate the two passwords: 
        //     i. Check if user has entered password. If not, then give message “ Please enter your password” 
        //     ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. 
        //     Show “Incorrect password” otherwise. 
        var correct_password = "HelloWorld";
        user_password = prompt("Enter Password: ");

        if (!user_password){
            document.write("Please enter your password")

        }
        else{
            if (user_password == correct_password){
                document.write("Correct! The password you entered matches the original password")
            }
            else{
                document.write("Incorrect password")

            }
        }

        // 6. This if/else statement does not work. Try to fix it:
        var greeting; 
        var hour = 13; 
        if (hour < 18) { 
            greeting = "Good day"; 
            document.write(greeting);
        }
        else {    
            greeting = "Good evening"; 
            document.write(greeting);
        }



        // 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. 
        // Implement the following case using if, else & else if statements 
        Time = parseInt(prompt("Enter Time: "));
        if (Time>=0000 && Time<1200){
            document.write("Good Morning");
        }
        else if (Time>=1200 && Time<1700){
            document.write("Good Afternoon");
        }
        else if (Time>=1700 && Time<2100){
            document.write("Good Evening");
        }
        else if (Time>=2100 && Time<=2400){
            document.write("Good Night");
        }


        // Chapter 17-20

        // // task1: Declare and initialize an empty multidimensional array. (Array of arrays)
        var arr1=[[],[],[],];

        // // task2: Declare and initialize a multidimensional array representing the following matrix:
        var arr2=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
        document.write(arr2);

        // // task3: Write a program to print numeric counting from 1 to 10.
        for(var i=0; i<11; i++){
            document.write(i+"<br>")
        }

        // // task4: Write a program to print multiplication table of any number using for loop.
        // // Table number & length should be taken as an input from user.
        var t=prompt("enter your number to get its table");
        var l=parseInt(prompt("enter length of table"));
        for(j=1; j<=l; j++){
            document.write(t+"*"+j+"="+t*j+"<br>");
        }

        // task5:Write a program to print items of the following array using for loop:
        // fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

        var fruits=["apple","banana","mango","orange","strawberry"];
        for(var m=0; m<fruits.length; m++){
            document.write(fruits[m]+"<br>");
        }
        for(var n=0; n<fruits.length; n++){
            document.write("element at index "+ n+" is "+ fruits[n]+"<br>");
        }

        // 6. Generate the following series in your browser. See example output. 
        // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
        // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
        // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
        // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
        // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
        counting = [];
        reverse_counting = [];
        even = [];
        odd = [];
        series = [];

        for (i = 1; i <= 15; i++) {
            counting.push(i);
        }
        for (i = 10; i >= 1; i--) {
            reverse_counting.push(i);
        }
        for (i = 0; i <= 20; i++) {
            if (i % 2 == 0) {
                even.push(i);
            }
        }
        for (i = 0; i <= 20; i++) {
            if (i % 2 != 0) {
                odd.push(i);
            }
        }
        for (i = 1; i <= 20; i++) {
            if (i % 2 == 0) {
                series.push(i+"k")
            }
        }
        document.write("Counting: "+counting+"<br>");
        document.write("Reverse Counting"+reverse_counting+"<br>");
        document.write("Even Counting"+even+"<br>");
        document.write("Odd Counting"+odd+"<br>");
        document.write("Series"+series+"<br>");


        // 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable 
        // “search by user input” in an array. After searching, prompt the user whether the given item is found in 
        // the list or not. Example:
        item = prompt("Welcome to ABC Bakery \nWhat do you want to order Sir/Ma'am?");
        bakery_items = ["cake", "apple pie", "cookie", "chips", "patties"];
        var answer = bakery_items.indexOf(item,0);
        if (answer==-1){
            document.write("We are Sorry "+item+" is not available at our bakery ");

        }else{
            document.write(item+" is available at "+answer+" in our bakery ");

        }

        // 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
        Array2 = [24, 53, 78, 91, 12,];
        len2= Array2.length

        var largest=Array2[0]
        for (i=0; i<=len2; i++){
            if (Array2[i]>largest){
                largest=Array2[i];
                i++
            }
        }
        document.write("Array Items: "+Array2+"<br>");
        document.write("The Largest Number is: "+largest+"<br>");

        // 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
        Array1 = [24, 53, 78, 91, 12,];
        len= Array1.length

        var smallest=Array1[0]
        for (i=0; i<=len; i++){
            if (Array1[i]<smallest){
                smallest=Array1[i];
                i++
            }

        }
        document.write("Array Items: "+Array1+"<br>");
        document.write("The Smallest Number is: "+smallest+"<br>");

        // 10. Write a program to print multiples of 5 ranging 1 to 100
        numbers=[]
        for (var i=1; i<= 100; i++){
            if (i%5==0){
                numbers.push(i)

            }


        }
        document.write(numbers+"<br>");


