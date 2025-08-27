function slider() {
    let test = document.querySelector("#test")
    let test2 = document.querySelector("#test2")

    let valorTest = getComputedStyle(test, null).display
    let valorTest2 = getComputedStyle(test2, null).display



    if (valorTest == "flex") {
        test.style.display = "none"
        test2.style.display = "flex"
    } else {
        test2.style.display = "none"
        test.style.display = "flex"
    }


}

