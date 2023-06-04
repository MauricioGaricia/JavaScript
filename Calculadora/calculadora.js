let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerHTML === "=") {
        string = eval(string);
        if (isNaN(string) || !isFinite(string)) {
          throw new Error("Resultado inválido");
        }
        document.querySelector("textarea").textContent = string;
      } else if (e.target.innerHTML === "AC") {
        string = "";
        document.querySelector("textarea").textContent = string;
      } else if (e.target.innerHTML === "←") {
        string = string.slice(0, -1);
        document.querySelector("textarea").textContent = string;
      } else {
        string = string + e.target.innerText;
        document.querySelector("textarea").textContent = string;
      }
    }  catch (error) {
        console.error(error);
        document.querySelector("textarea").textContent = "Math ERROR";
      }
    });
  });
