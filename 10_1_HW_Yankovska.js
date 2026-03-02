var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];
var re = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail|yahoo)\.com$/i;

var trustedEmails = [];

for (var i = 0; i < arr.length; i++) {
    if (re.test(arr[i].email)) {
        trustedEmails.push(arr[i].email);
    }
}

console.log(trustedEmails);