function lb_kg(x) {
    var fnum = x / 2.2046226218;
    return fnum;
}

function lb_g(x) {
    var fnum = lb_kg(x) * 1000;
    return fnum;
}

function lb_oz(x) {
    var fnum = x * 16;
    return fnum;
}

function oz_kg(x) {
    var fnum = lb_kg(x) / 16;
    return fnum;
}

function oz_g(x) {
    var fnum = lb_kg(x) / 16 * 1000;
    return fnum;
}

function oz_lb(x) {
    var fnum = x / 16;
    return fnum;
}

function kg_lb(x) {
    var fnum = x * 2.2046226218;
    return fnum;
}

function kg_oz(x) {
    var fnum = kg_lb(x) * 16;
    return fnum;
}

function kg_g(x) {
    var fnum = x * 1000;
    return fnum;
}

function g_lb(x) {
    var fnum = kg_lb(x) / 1000;
    return fnum;
}

function g_oz(x) {
    var fnum = kg_lb(x) / 1000 * 16;
    return fnum;
}

function g_kg(x) {
    var fnum = x / 1000;
    return fnum;
}


function convert(x) {
    x = document.getElementById("input").value;
    var 1 st = document.getElementById("unit-select1").selectedIndex;
    var 2n d = document.getElementById("unit-select2").selectedIndex;
    if (1 st == "lb" && 2n d == "kg") {
        lb_kg(x);
        var number = document.createElement("p");
        number.textContent = fnum;
    }
}

let convertB = document.getElementById("convert");
convertB.addEventListener("click", () => {
    convert();
});
