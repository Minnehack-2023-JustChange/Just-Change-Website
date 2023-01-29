import React from 'react';

function Button() {

  function sayHello() {
    alert('Hello!');
  }
  
  return (
    <button onClick={sayHello}>
      Click me!
    </button>
  );
}

export default Button;