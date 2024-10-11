function greeting(greetingHandler, name){
    greetingHandler(name);
}




function greetingHandler(name){
    console.log("good morning", name);
}
// greeting(greetingHandler());
greeting(greetingHandler, "Tom Hanks");