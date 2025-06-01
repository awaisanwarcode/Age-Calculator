const selected_year = document.getElementsByTagName("input")[0];
const btn = document.getElementsByTagName("button")[0];
const hid_ele = document.getElementsByClassName("hidden");
const container = document.getElementById("container");
const selects = document.getElementsByTagName("select");
let today_date = new Date();
let selected_date = "1";
let selected_month = "";
// ////////
for (let i = 1; i < 32; i++) {
    let newOption = document.createElement("option");
    newOption.innerText = i;
    newOption.value = i;
    selects[0].appendChild(newOption);
};
for (let i = 0; i < month_Arr.length; i++) {
    let newOption = document.createElement("option");
    newOption.innerText = month_Arr[i];
    newOption.value = i;
    selects[1].appendChild(newOption);
};
 ///////////
for (let i = 0; i < selects.length; i++) {
    selects[i].addEventListener("change", (evt) => {
        if (selects[i].getAttribute("id") == "date") {
            selected_date = evt.target.value;
        } else {
            selected_month = evt.target.value;
        }
    });
}
// //////////////////
btn.addEventListener("click", () => {
    if (selected_year.value == "") {
        alert("please fill the box/es")
    } else {
        for (let i = 0; i < hid_ele.length; i++) {
            hid_ele[i].style.display = "inline";
        }
        hid_ele[0].innerHTML = `You Entered ${selected_date}-${month_Arr[Number(selected_month)]}-${selected_year.value}`;

        age_calcu();
    };
});
// ////////////////////
let diff_year = "";
function age_calcu() {
    let year = today_date.getFullYear();
    diff_year = year - Number(selected_year.value);
    hid_ele[1].innerText = `
    Your Age is ${diff_year} years from ${selected_date}-${Number(selected_month) + 1}-${year} & on upcoming ${selected_date}-${Number(selected_month) + 1}-${year + 1} you would be of ${diff_year + 1};
    `;
};
//////
 
///Alhumdulilah Comlepeted by Awais Anwar S/O Muhammad Ayub\\