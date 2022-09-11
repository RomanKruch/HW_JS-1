const inpData = prompt('Введіть ваш рік народження');

if (inpData === null) {
    alert('Скасовано!')
} else {
    const numberOfInp = Number(inpData);

    if (Number.isNaN(numberOfInp)) {
        alert('Введено не число!');
    } else {
        console.log(`Ваш вік: ${2022-numberOfInp} роки`);
    }
}