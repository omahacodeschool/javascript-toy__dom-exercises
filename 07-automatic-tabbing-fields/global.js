window.onload = function() {;

  var numBox1 = document.getElementById("first");

  var numBox2 = document.getElementById("second");

  var numBox3 = document.getElementById("third");

  inputFields = [numBox1, numBox2, numBox3];

  var i = 0;

  // Function moves the focus from one text field to the next.
  function switchInputField(){;
    i++;
    inputFields[i].focus();
  };

  numBox1.addEventListener("keyup", function() {;
    i = 0;
    if(numBox1.value.length == 3){;
      switchInputField();
      };
    });

  numBox2.addEventListener("keyup", function() {;
    i = 1;
    if(numBox2.value.length == 3){;
      switchInputField();
      };
    });

  numBox3.addEventListener("keyup", function() {;
    i = 2;
    if(numBox3.value.length == 4){;
      };
    });
};
