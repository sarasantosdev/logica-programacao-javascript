function converter() {
    // capturou os dados passados pelo usuário
    let title = document.getElementById('filme').value;
    let time = document.getElementById('tempo').value;

    // converteu o tempo para número
    let duration = Number(time);

    // calculou a duração e arredondou para baixo: 1
    let hours = Math.floor(duration / 60); 

    // calculou os minutos pelo resto da divisão por 60: 48
    let minutes = duration % 60;

    // exibiu as informações nos parágrafos
    document.getElementById('titulo').textContent = title;
    document.getElementById('duracao').textContent = `Duração: ${hours}hora(s) e ${minutes}minuto(s)`;
}