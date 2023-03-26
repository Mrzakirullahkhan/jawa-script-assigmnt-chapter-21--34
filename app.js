// chapter 21 to  25 

// Q No =1
// Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("enter your first name ");
// let lastName = prompt("Enter your last Name");
// let fullName= firstName + lastName;
// console.log(fullName);


// Q No=2
// Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser


// let fvrtModel = prompt("what is your favrt mobile model?")
// let length = fvrtModel.length
// console.log(` your favrt modal name is ${fvrtModel} and the length of the model is ${length}`)



// Q No=3
//  Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

//  let str = "pakistani"
//  let index= str.indexOf("n")
//  console.log(`string: ${str}  index of n : ${index}`)


// Q No =4
// . Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let str = "Hello World"
// let lastWord = str.lastIndexOf("o");   hamesha yad rkna lastindex me vo last wala string bataega 
// console.log(`string: ${str} the index of last world "l" is ${lastWord}`);

// // Q No=5
//  Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


// let str = "pakistan ";
// let number = 4;
// findIndex = str.charAt(number);
// console.log(findIndex);

// Q No=6
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let str = "Hydrabad"
// let newString = str.replace("Hydra", "islam");
// console.log(newString)


// Q No = 8
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// newMessage = message.replaceAll("and", "&");
// console.log(newMessage)

// // Q No = 09
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// let str = prompt("what is your marks?");
// let convertInNum = parseInt(str);
// console.log(`string ${str} and number ${convertInNum}`)
// console.log( typeof convertInNum)



// // Q No = 10
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

//  let user = prompt("type any thing i will convert into capital letter").toUpperCase();
//  console.log(user)

// // Q No = 11
// 11. Write a program that takes user input. Convert and
// show the input in title case.

// let user = prompt("write some thing i will conver into titile case");
// let firstChar = user.slice(0,1);
// firstChar = firstChar.toUpperCase();
// let remainChar = user.slice(1);
// remainChar = remainChar.toLowerCase();
// let result = firstChar + remainChar
// console.log(result)


// Q No= 12
// 12. Write a program that converts the variable num to
// string.

// let myUser  = Number(prompt("input your number"));
// let changeInString = myUser.toString();
// console.log(typeof changeInString)


// write a progrsm that remove the dot from the number 
// let decimalNumber = Number(prompt("input your number"))
// let integerNumber = Math.floor(decimalNumber);
// console.log(integerNumber);


// Q No 13
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// let myUser = prompt("input your name");
// if( /[!@.,]/.test(myUser)){
//     alert("please input a valid string ")
// }
// else{
//     alert(myUser)
// }

// // Q No= 14
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. 


// let myUser = prompt("input your product name ");
// let firstCharacter = myUser.slice(0,1).toUpperCase();
// let space = myUser.indexOf(" ");
// let remainChar = myUser.slice(1).toLowerCase();
// let fullString = firstCharacter + remainChar;

// products = ["Cake", "Apple Pie", "Aookie", "Chips", "Patties"];
// for(let i = 0; i<products.length; i++){
//     if(products[i]==fullString){
//         console.log("yes your requird product is available")
//         break

//     }
//     else{
//         console.log("no this product is not found in the list ")
//         break
//     }

// }


// Q No =15
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// let userInput = prompt("enter your pasward");
// let alphabetsAndNum = /^[a-z0-9]+$/i;
// if((userInput.length!==6)){
//     console.log("pasward length must be 6 digits")
   

// }
// else if(/^[0-9]/.test(userInput)){
//     console.log("paswrd must not start with numbers")
// }
// else if(alphabetsAndNum.test(userInput) ){
//     console.log("your paswrd is ," userInput)
// }

// else{
//     console.log("hello bhai")
// }


// Q No = 16
// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// let university = "University of Karachi";
// let myValue = university.split("");
// console.log(myValue)



// Q No= 17
// 17. Write a program to display the last character of a user
// input.
// let user = prompt("write some thing");
// let lastChar = user.charAt(user.length-1);
// console.log(`your input is ${user} and last char is ${lastChar}`)

// // Q No =18
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let str = "The quick brown fox jumps over the lazy dog"
// let toFind = str.includes("the")
// console.log(toFind)


// .......chapter 26 to 30 ........
// Q No =01
//  Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


//  let userInt =Number(prompt("input a number"));
//  let newNum = Math.floor(userInt);
//  let CeilNum = Math.ceil(userInt);

//  if(userInt>0){
//     console.log(`number: ${userInt}, floor value ${newNum}, ceil value ${CeilNum}`)
//  }
//  else{
//     console.log("you put negative integer")
//  }

// // Q No =02
// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


//  let userInt =Number(prompt("input a number"));
//  let roundNum = Math.round(userInt)
//  let newNum = Math.floor(userInt);
//  let CeilNum = Math.ceil(userInt);
//  if(userInt<0){
//     console.log(` number: ${userInt}, round : ${roundNum} floor value ${newNum}, ceil value ${CeilNum}`)
//  }
//  else{
//     console.log("you put positive  integer")
//  }


// Q No=03
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// let user = Number(prompt("input number"));
// let postiveNum = Math.abs(user);
// console.log(postiveNum)


// Q No=04
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// let randomNum = Math.random()*6+1;
// let floarNum = Math.floor(randomNum)
// console.log( "the random number is "+floarNum)



// Q No =05
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


// let num = Math.random()*2+1;
// let newNum = Math.floor(num);
// if(newNum==1){
//     console.log("random coin value is tail")
// }
// else if(newNum==2){
//     console.log("random coin value is head")
// }


// // Q No =7
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let user = Number(prompt("what is your age"));
// if(){

// }


// Q No = 08
// // 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// let myUser = Number(prompt("input your number "))
// let randomNum = Math.random()*10+1;
// let floorNum = Math.floor(randomNum);

// if((myUser>10) || (myUser==0)){
//     console.log("please inter number between 1 to 10")
// }
// else if( myUser==floorNum){
//     console.log("you win the game  ")

// }
// else{
//     console.log("you lost the game")
// }

// .....Chapter 31 to 34 .......

// // Q No =01
// . Write a program that displays current date and time in
// your browser.

// let today = new Date();
// console.log(today)


// // Q No=02
// 2. Write a program that alerts the current month in words.
// For example December.

// let month = ["Janvery","Febrary", "March", "April", "May", "June", "July", "Agust" ,"September","October", "November", "December" ]
// let cureentMonth = new Date();
// let today = cureentMonth.getMonth();
// console.log("the current month is "+month[today]);

// // Q No=03
// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// let weekName = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let current = new Date();
// let currentWeek = current.getDay();
// console.log(weekName[currentWeek])


// // // Q No=04
// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// let dayName = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// let currentDay = new Date().getDay();
// if(currentDay==0){
//     console.log(dayName[currentDay]+ "today is holiday")
// }
// else if((currentDay==1) ||(currentDay==2)||(currentDay==3)||(currentDay==4)||(currentDay==6)){
//     console.log(dayName[currentDay]+ "its working day")
// }
// else if (currentDay==5){
//     console.log(dayName[currentDay]+ "  its friday ")
// }

// // // // Q No=05
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// let currentdate = new Date().getDate();
// console.log(currentdate);
// if(currentdate<=15){
//     console.log("its initial days of the month")
// }
// else{
//     console.log("its final days of the month ")
// }


// // Q No = 06
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// let currentMinute = new Date().getMinutes();
// let OldMinute = new Date(1970,0,1).getMinutes();



// Q No = 07
// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let currentTime = new Date().getHours();
// if(currentTime<12){
//     console.log("its AM because the time is " + currentTime +"AM")

// }
// else{
//     console.log("its PM")
// }

// Q No =08
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.


// let laterDate = new Date(2020,11,31);
// console.log(laterDate)


// Q No = 09
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// let startDate = new Date(2015,5,18).getDate();
// let currentDate = new Date().getDate();
// let diffrence = currentDate - startDate;
// console.log("the number of days pass from 1st ramzan is "+diffrence)



// // Q No = 10
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// const currentTime = new Date();
// const beginningOf2015 = new Date(2015, 11, 5); // January is represented as 0 (0-indexed)
// const totalSecond = (currentTime.getTime() - beginningOf2015.getTime()) ;
// console.log(totalSecond)


// // Q No 11
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// let currentTime = new Date();
// let currentHour= new Date().getHours();
// currentTime.setHours(currentHour-1);
// console.log("before one hour the time was "+currentTime)

// // // Q No 12
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// let currentTime = new Date();
// let yearsOfago = new Date(currentTime.getFullYear()-100,currentTime.getMonth(),currentTime.getDate());
// console.log(yearsOfago)
  

// // Q No = 13
// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// let user = prompt("what is your age");
// let year = new Date().getFullYear();
// let bornInYear = year - user;
// console.log("your birthday year is " + bornInYear)