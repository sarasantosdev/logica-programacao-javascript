let button = document.getElementById('btn-calcula').addEventListener('click', () =>{

    let number = document.getElementById('numero').value;

    let double = number * 2;

    document.getElementById('dobro').textContent = `O dobro de ${number} é: ${double}`;
});