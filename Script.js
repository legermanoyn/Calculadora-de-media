const form = document.querySelector("#gradeForm");

const result = document.querySelector("#result");

const averageElement = document.querySelector("#average");

const message = document.querySelector("#message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const notas = [
        Number(document.querySelector("#grade1").value),
        Number(document.querySelector("#grade2").value),
        Number(document.querySelector("#grade3").value)
    ];

    if (
        notas.some(
            nota => !Number.isFinite(nota) ||
            nota < 0 ||
            nota > 10
        )
    ) {

        result.className = "result invalid";

        averageElement.textContent = "!";

        message.textContent =
            "Digite notas válidas entre 0 e 10.";

        return;
    }

    const media = notas.reduce(
        (total, nota) => total + nota, 0
    ) / notas.length;

    averageElement.textContent =
        media.toFixed(1).replace(".", ",");

    if (media >= 7) {

        result.className = "result success";

        message.textContent =
            "🎉 Aprovado(a)! Parabéns pelo resultado.";

    } else {

        result.className = "result recovery";

        message.textContent =
            "📚 Você ficou de recuperação. Continue estudando!";

    }

});
