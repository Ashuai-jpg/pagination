let link = document.getElementsByClassName("link")
const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
let currentVal = 1
let isback = true

function activeLink() {
    for (l of link) {
        l.classList.remove("active")
    }
    this.event.target.classList.add("active")
    currentVal = this.event.target.value
    console.log(currentVal)
    autoDisableBtn()
}

// function backBtn() {
//     if (currentVal > 1) {
//         for (l of link) {
//             l.classList.remove("active")
//         }
//         currentVal--;
//         link[currentVal - 1].classList.add("active");
//         console.log(currentVal)
//     }
// }
// function nextBtn() {
//     if (currentVal < 6) {
//         for (l of link) {
//             l.classList.remove("active")
//         }
//         currentVal++;
//         link[currentVal - 1].classList.add("active");
//         console.log(currentVal)
//     }
// }
function autoDisableBtn() {
    btn1.disabled = false
    btn2.disabled = false
    // console.log(btn1, btn2)
    if (currentVal == 1) {
        btn1.disabled = true
        console.log("disabled 1")
    } else if (currentVal == 6) {
        btn2.disabled = true
        console.log("disabled 2")
    }
}
// check if need to disable when script first invoke
autoDisableBtn()

/**
 * merge 2 btn funcs into 1
 * 
 */
function handleBtn(isback) {
    console.log("clicked")
    for (l of link) {
        l.classList.remove("active")
    }

    if (isback) {
        currentVal--;
    } else {
        currentVal++;
    }

    link[currentVal - 1].classList.add("active");
    autoDisableBtn()
    console.log(this.event.target)
}