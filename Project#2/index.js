const input = document.getElementById("input")

function reverseString(str) {
    // split every character and store in the array
    // after reverse join back together to form a proper word
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if (value == reverse) {
        alert("P A L I N D R O M E")
    } else {
        alert("Not today!")
    }

    input.value = "";

}