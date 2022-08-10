// Task 21
const uzunluq = function(num){
    let length = 0;
    while(num>0){
        num = parseInt(num/10)
        length++
    }
    return length
}


// Task 22

const salam = function(name = 'qonaq'){
    return `Salam ${name}`
}

// console.log(salam('Samir'));

// Task 23


const palindrome = function(num){
    const len = uzunluq(num)
    let guessed = num
    let result = '';
    for(let i = 1; i<=len; i++){
    let n = parseInt(guessed%(10 **(i))/(10 ** (i-1)))
    result += '' + n
    }
    if(num == result){
        alert(`${num} palindromdur`)
    }else{
        alert(`${num} palindrome deyil`)
    }
    return result;   
}
// console.log(palindrome(1003))

// Task 24

const check = function(num){
    let n1 = parseInt(num%10)
    let n2 = parseInt(num%100/10)
    let n3 = parseInt(num/100)
    console.log(n1,n2,n3);
    if(n1 === n2 && n2 ===n3 && n1 ===n3){
        alert(`${num} reqemler eynidir`)
    }else{
        alert(`${num} reqemler ferqlidir`)
    }
}

// check(666)

// Task 25

const kicik = function(num){
    let qaliq = num%10;
    let eded = num -qaliq
    if(qaliq ===0){
        alert(`${num} 10-a tam bolunur`)
    }else{
        alert(`${num}-dan kicik 10-a bolunen eded ${eded}-dir`)
    }
}

// Task 26

const calculate = function(n,m = 2){
    return n*m;
}

// Task 27

const hesabla = function(num,deyer){
    let guessed = num
    const len = uzunluq(num)
    for(let i = 1; i<=len; i++){
        let n = parseInt(guessed%(10 **(i))/(10 ** (i-1)))
    
        alert(`Sondan ${deyer} ci eded ${n-deyer + 1}-dir`)
        break;
    }
}

// hesabla(123456789,3)


// Task 28

const sade = function(num){
    for(let i = 2;i<num;i++){
        if(num%i==0){
            alert(`${num} sade deyil`)
            break
        }else{
            alert(`${num} sadedir`)
            break
        }
    }
}

// Task 29

const qaytar = function(num){
    let count = 0
    if(num>0){
    for(let i =1 ; i<num; i++){
        if(i%2 == 1){
            console.log(i);
            count++;
        }
    }

    }else if(num<0)
        for(let i =num ; i<0; i++){
        if(i%2 == -1){
            console.log(i);
            count++;
         }
    
        }
        console.log(count);
}

// qaytar(-16)

// Task 30
const atm = function(userGuess){
    let bill;
    bill = parseInt(userGuess / 100)
    let hundred = bill;
    userGuess = userGuess - (bill * 100);
    bill = parseInt(userGuess / 50)
    let fifty = bill;
    userGuess = userGuess - (bill * 50);
    bill = parseInt(userGuess / 20)
    let twenty = bill;
    userGuess = userGuess - (bill * 20);
    bill = parseInt(userGuess / 10)
    let ten = bill;
    userGuess = userGuess - (bill * 10);
    bill = parseInt(userGuess / 5)
    let five = bill;
    userGuess = userGuess - (bill * 5);
    bill = userGuess / 1
    let one = bill;
    alert( `100 manat ${hundred} eded\n50 manat ${fifty} eded\n20 manat ${twenty} eded\n10 manat ${ten} eded \n5 manat ${five} eded \n1 manat ${one} eded`)
}

// atm(248)