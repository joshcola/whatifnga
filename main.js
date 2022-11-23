const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("Enter your name");
    
    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "ARAY SAKET MO NA";
    }

    if (n.length > 0) {
        alert("What if gusto kita");
        alert('What if tayo nalang');
        alert('What if tayo talaga');
        alert('What if gusto modin ako?');
        alert('What if');
        alert('What if crushback moko');
        main.style.display = 'block';
        break;
    }
}