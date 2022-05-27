let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

console.log(localStorage.clear("myLeads"));

console.log(ulEl);

inputBtn.addEventListener("click", function () {
  if (inputEl.value == ""){
    return false
    } else {
      myLeads.push(inputEl.value);
    }
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
          <a href='https://www.linkedin.com/in/faizanhabib/' target='_blank'>
          ${myLeads[i]}
          </a>
      </li>
      `;
  }
  ulEl.innerHTML = listItems;
}
