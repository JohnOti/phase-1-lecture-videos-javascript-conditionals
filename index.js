function isName(name){
    if(name==="John"){
        return "Welcome back"
    } else if(typeof name==="string"){
        return "Who are you"
    } else {
        return "Sorry pass in a name"
    }
     
}
isName("John")
isName("Peter")
isName(9)