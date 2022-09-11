let inpNumber = prompt('Введіть число!');

if (inpNumber === null) {
    alert('Скасовано!')
} else {
    inpNumber = Number(inpNumber);

    if (Number.isNaN(inpNumber)) {
        alert('Введено не число!');
    } else {
        console.log(`Введене число : ${inpNumber}`);
        console.log(`Наступне : ${inpNumber+1}`);
        console.log(`Наступне : ${inpNumber+2}`);
    }
}