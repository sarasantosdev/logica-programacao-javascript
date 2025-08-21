document.getElementById('calculate').addEventListener('click', () =>{
        let student = document.getElementById('student').value;
        let grade_1 = Number(document.getElementById('grade-1').value); 
        let grade_2 = Number(document.getElementById('grade-2').value);

        let result = (grade_1 + grade_2) / 2;

        if(isNaN(grade_1) || isNaN(grade_2)){
            document.getElementById('result').innerHTML = `<strong>Por favor, informe um número válido</strong>`;
            return;
        }

        if (result >= 7.0){
            document.getElementById('result').innerHTML = `<strong style="color: blue;">Parabéns ${student}! Você foi aprovado(a) com a média: ${result}</strong>`;
        } else {
            document.getElementById('result').innerHTML = `<strong style="color: red;"> ${student}, você foi reprovado(a) com a média: ${result}</strong>`;
            
        }
});
