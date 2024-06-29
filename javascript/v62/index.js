/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

function Adjectives(random_number) {
    if (random_number<0.33) {
        first_word="Crazy"
    }

    else if(random_number>=0.33 && random_number<0.66){
        first_word="Amazing"

    }

    else{
        first_word="Fire"

    }

    return first_word
}

function Shop_Name(random_number) {
    if (random_number<0.33) {
        first_word="Engine"
    }

    else if(random_number>=0.33 && random_number<0.66){
        first_word="Foods"

    }

    else{
        first_word="Garments"

    }

    return first_word
}

function Another_word(random_number) {
    if (random_number<0.33) {
        first_word="Bros"
    }

    else if(random_number>=0.33 && random_number<0.66){
        first_word="Limited"

    }

    else{
        first_word="Hub"

    }

    return first_word
}

let r=Math.random()

let first,second,third;

first=Adjectives(r)
second=Shop_Name(r)
third=Another_word(r)

console.log(`${first} ${second} ${third }`)

let new_string= first + second +third

console.log(new_string)
