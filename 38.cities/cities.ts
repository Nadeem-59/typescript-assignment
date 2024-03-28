//Ques no 38 :Cities: Write a function called describe_city()that accepts thename
 //of a city and its country. 
 
//Give the parameter for the country a default value.


function describe_city(city: string,country:string = 'Default Country.'){

    console.log(` ${city} is in ${country}`);
}

//The function should print a simple sentence, such as Karachi is in Pakistan.
describe_city('karachi','Pakistan');

describe_city('Tokyo','Japan');

//Call your function for three different cities, at least one of which is in
 //the default country.
describe_city('paris');
