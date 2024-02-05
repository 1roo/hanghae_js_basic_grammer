// falsy한 값, truthy한 값

if (0) { //false
    console.log("hello");
}

if ("") { //false
    console.log("hello");
}

if (null) { //false
    console.log("hello");
}

if (undefined) { //false
    console.log("hello");
}

if (NaN) { //false
    console.log("hello");
}

if (false) { //false
    console.log("hello");
}

if (true) { //true
    console.log("hello");
}