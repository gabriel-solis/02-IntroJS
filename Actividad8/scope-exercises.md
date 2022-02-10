# JS Closures / Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }/Users/krystelbaca/Documents/docs-m1/learning/ejercicios/functions/scope-exercises.md
  
  test();
  ```

> _a is undefined porque aunque esta en el mismo bloque, esta definida despues de que se le llama_


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> _5_
3. What is the result of the following code? Explain your answer.
  ```js
  var fullname = 'John Doe';
  var obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  var test = obj.prop.getFullname;
  
  console.log(test());
  ```
> _Auelio De Rosa Aurelio de Rosa, dos veces porque el primer console.log imprime el nombre, luego a test se le asigna lafunción de getFullname que esta dentro de prop y se llama test() que es lo mismo que el console.log anterior_
4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  console.log(a);    
  ```

> _10_
