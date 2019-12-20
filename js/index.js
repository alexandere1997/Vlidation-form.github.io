function selectOptions1(date) {
  let year = date.getFullYear();
  if (year < 10) year = '0' + year;
  return year;
}

let year1 = new Date();
let timer1 = selectOptions1(year1);

function selectOptions2(date) {
  let year = date.getFullYear() + 50;
  if (year < 10) year = '0' + year;
  return year;
}

let year2 = new Date();
let timer2 = selectOptions2(year2);

for (let i = timer1; i < timer2; i++) {
  let selectBlock1 = document.querySelector(".selct2");
  let optinoElem1 = document.createElement("option");
  optinoElem1.innerHTML = i;
  selectBlock1.appendChild(optinoElem1);
}
/*день*/

let dateArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let _i = 0; _i < dateArray.length; _i++) {
  let selectBlock2 = document.querySelector(".selct1");
  let optinoElem2 = document.createElement("option");
  optinoElem2.innerHTML = dateArray[_i];
  selectBlock2.appendChild(optinoElem2);
}

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");
let input6 = document.querySelector("#input6");

const myForm = document.querySelector("#main_form");
/*При клике на кнопку формы*/

let form__input = document.querySelectorAll(".form__input");
let form__input1 = document.querySelector(".form__input1");
let form__input2 = document.querySelector(".content-block-wrap-form__input2");

function messegError() {
  let elem = document.createElement("span");
  let elemText = document.createTextNode("hello");
  elem.appendChild(elemText);
  let inputElement = document.querySelector("#block__page1");
  inputElement.appendChild(elem);
}


myForm.addEventListener("submit", (event) => {
  for(let index of form__input) {
    console.log(index.value);
    if(index.value.length < 4) 
    {
      event.preventDefault();
      index.style.border = "1px solid red";
      index.setAttribute("required", "required");
    }
    else 
    {
      index.style.border = "1px solid green";
    }
  }

  if(form__input1.value.length < 3) 
  {
    event.preventDefault();
    form__input1.style.border = "1px solid red";
    form__input1.setAttribute("required", "required");
  }
  else 
  {
    form__input1.style.border = "1px solid green";
  }

  if(form__input2.value.length < 5 || /[А-Яа-я]{1,50}/.test(form__input2.value)) {
    event.preventDefault();
    form__input2.style.border = "1px solid red";
    form__input2.setAttribute("required", "required");
  }
  else {
    form__input2.style.border = "1px solid green";
  }

let select__form = document.querySelectorAll(".select__form");

for (const selectForm of select__form) 
{
  if(!selectForm.value) {
    selectForm.style.border = "1px solid red";
    console.log(selectForm);
    selectForm.setAttribute("required", "required");
  }
  else {
    selectForm.style.border = "1px solid green";
  }
}
});


form__input1.addEventListener("input", () => {
  if(form__input1.value.length < 3) {
    form__input1.style.border = "1px solid red";
    form__input1.setAttribute("required", "required");
  }
  else {
    form__input1.style.border = "1px solid green";
  }
});

form__input2.addEventListener("input", () => {
  if(form__input2.value.length < 5 || /[А-Яа-я]{1,50}/.test(form__input2.value)) {
    form__input2.style.border = "1px solid red";
    form__input2.setAttribute("required", "required");
  }
  else {
    form__input2.style.border = "1px solid green";
  }
});




/*При вводе данных в поле инпут*/

for(let speed of form__input) {
  speed.addEventListener("input", () => {
    if(speed.value.length < 4) {
      console.log("true");
      speed.style.border = "1px solid red";
      speed.setAttribute("required", "required");
    }
    else {
      console.log("false");
      speed.style.border = "1px solid green"
    }
  });
}

let select__form = document.querySelectorAll(".select__form");

for (const selectForm of select__form) {
    selectForm.addEventListener("change", () => {
    if(!selectForm.value){
      selectForm.style.border = "1px solid red";
      selectForm.setAttribute("required", "required");
    }
    else {
      selectForm.style.border = "1px solid green";
    }
  });
}


/*маска ввода для номера карточки*/
function mask(event) {
      var matrix = "____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, "");
      if (def.length >= val.length) val = def;
      this.value = matrix.replace(/./g, function(a) {
          return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
      });
      if (event.type == "blur") {
          if (this.value.length == 2) this.value = ""
      } 
  };
  /*маска ввода для секретного кода с оборотной стороны карты*/
  function mask1(event) {
    var matrix = "___",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function(a) {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
        if (this.value.length == 2) this.value = ""
    } 
};

      input1.addEventListener("input", mask, false);
      input1.addEventListener("focus", mask, false);
      input1.addEventListener("blur", mask, false);

      input2.addEventListener("input", mask, false);
      input2.addEventListener("focus", mask, false);
      input2.addEventListener("blur", mask, false);

      input3.addEventListener("input", mask, false);
      input3.addEventListener("focus", mask, false);
      input3.addEventListener("blur", mask, false);

      input4.addEventListener("input", mask, false);
      input4.addEventListener("focus", mask, false);
      input4.addEventListener("blur", mask, false);

      input6.addEventListener("input", mask1, false);
      input6.addEventListener("focus", mask1, false);
      input6.addEventListener("blur", mask1, false);

/*pattern="[A-Za-z]{4,}" required oninvalid="setCustomValidity('Имя должно содержать не менее 4 букв на латинице')" oninput="setCustomValidity('')"*/