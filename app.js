// Error Handleing 

try{
    alert('voy nai ')
}catch(err){
    document.getElementById('demo').innerHTML= err.message
}

// Reference Error
try{
    // namddd('voy nai ')
}catch(err){
    // document.getElementById('demo').innerHTML= err.name
}


function myFunction() {
    const mainStorage = document.getElementById('demo1')
    mainStorage.innerHTML = '';
    let x = document.getElementById('demo').value ;
    try{
        if (x == '') throw ' value is empty '
        if(isNaN(x)) throw ' Not a Number '
        x = Number(x)
        if(x < 5) throw 'this is low Number'
        if ( x >=6) throw ' this is high Number'
    }catch(err){
        mainStorage.innerHTML = 'your input is ' + err ; 
    }
  }