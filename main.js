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
    btn1.setAttribute('disabled', false)
    btn2.setAttribute('disabled', false)
    console.log(btn1, btn2)
    if (currentVal == 1) {
        btn1.setAttribute('disabled', true)
        console.log("disabled 1")
    } else if (currentVal == 6) {
        btn2.setAttribute('disabled', true)
        console.log("disabled 2")
    }
}
autoDisableBtn()

function handleBtn(isback) {
    console.log("clicked")
    for (l of link) {
        l.classList.remove("active")
    }
    // let type = typeof(isback)
    // console.log(`${type} : ${isback}`)
    if (isback) {
        currentVal--;
    } else {
        currentVal++;
    }

    link[currentVal - 1].classList.add("active");
    autoDisableBtn()
    console.log(this.event.target)
}