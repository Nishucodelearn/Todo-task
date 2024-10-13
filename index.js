// array
let Todos = [];



// input hide area
let hide_inputArea = document.getElementById("hide_inputArea");
hide_inputArea.classList.add("d-none");

// hide user Todo
let usertodo = document.getElementById("usertodo");
usertodo.classList.add("d-none");

// add task button ka function
function addTask() {
  let title = document.getElementById("title");
  let desc = document.getElementById("desc");
  let date = document.getElementById("date");

  let temTodo = {
    title: title.value,
    desc: desc.value,
    date: date.value,
  };

  Todos.push(temTodo);
  render();
  hide_inputArea.classList.add("d-none");
  console.log(Todos);
}

// check user already esit or not

// task show button function
function taskShow() {
  hide_inputArea.classList.remove("d-none");
}

// show btn user todo show
function showTODO() {
  usertodo.classList.remove("d-none");
}

// create div section
function render() {
  usertodo.innerHTML = " ";
  Todos.map((write) => {
    let firsttodo = document.createElement("div");
    firsttodo.classList.add("firsttodo");

    let userTitle = document.createElement("input");
    userTitle.classList.add("userTitle");
    userTitle.value = write.title;
    userTitle.style.backgroundColor = " rgb(205 204 204 / 7%)";
    userTitle.style.width="100%";
    // userTitle.style.margin="5px 0 ";
    // userTitle.style.padding="8px 10px";
    userTitle.style.boxSizing="border-box"
    userTitle.style.border="none"
    userTitle.style.fontSize="14px";
    userTitle.style.fontWeight="500";

    let userdes = document.createElement("input");
    userdes.classList.add("userdes");
    userdes.value = write.desc;
    userdes.style.backgroundColor = " rgb(205 204 204 / 7%)";
    userdes.style.width="100%";
    userdes.style.fontSize="11px";
    // userdes.style.padding="8px 10px";
    userdes.style.boxSizing="border-box";
    userdes.style.border="none";
    userdes.style.color="gray";

    let userDate = document.createElement("p");
    userDate.classList.add("userDate");

    const date = new Date(write.date);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const fdate = date.toLocaleDateString("en", options);
    console.log(fdate);
    userDate.innerText = fdate;

    usertodo.appendChild(firsttodo);
    firsttodo.appendChild(userTitle);
    firsttodo.appendChild(userdes);
    firsttodo.appendChild(userDate);
  });
}
