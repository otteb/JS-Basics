//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  function isTyler(name) 
  {
    if(name === 'Tyler')
    {
      return true;
    }
    else
    {
      return false;
    }
  }

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName()
{
  var user_name = prompt("what is your name?", "John Doe");
  return user_name;

}



//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome()
{
  alert("Welcome, " + getName());
}

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Aruguments are the actual value that is passed to a function, and parameters are declared at the same time and place that the function is created. Parameters represent the arguments passed.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // falsy values are as follows:
  //  1 - NaN
  //  2 - undefined
  //  3 - null
  //  4 - false
  //  5 - "" empty string
  //  6 - 0
  



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName()
  {
    return 'Brian';
  }
  


//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName;

//Now alert the result of invoking newMyName

alert(newMyName());



//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn()
{
  function anonymous()
  {
    return 'Otte';
  }
  return anonymous;
}
//Now save the result of invoking outerFn into a variable called innerFn.

 var innerFn = outerFn();

//Now invoke innerFn.
innerFn();
