function receivesAFunction(callback){
    callback();
    return "hi";
  }
  
  const iAmNamedFunction = ()=> console.log('I am a named function');
  
  function returnsANamedFunction(){
    return iAmNamedFunction;
  }
  
  function returnsAnAnonymousFunction(){
    return function(){
      console.log('I am an anonymous function');
    }
  }