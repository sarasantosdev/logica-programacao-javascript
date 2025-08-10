document.getElementById('btn-calcula').addEventListener('click', ()=>{
    let days = document.getElementById('dias').value;
    let hours = document.getElementById('horas').value;

    let daysInHours = Number(days) * 24;

    let durationTravel = Number(daysInHours) + Number(hours);

    document.getElementById('duracao-viagem').textContent = `A viagem durou em horas: ${durationTravel} `;
});