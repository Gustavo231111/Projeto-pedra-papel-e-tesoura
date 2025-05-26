(() => {
            const choicesText = ['Pedra', 'Papel', 'Tesoura'];
            let wins = 0;
            let losses = 0;
            let ties = 0;

            const resultDiv = document.getElementById('resultado');
            const winsSpan = document.getElementById('wins');
            const lossesSpan = document.getElementById('losses');
            const tiesSpan = document.getElementById('ties');
            const buttons = document.querySelectorAll('.choice-btn');
            const exitBtn = document.getElementById('exit-btn');

            function getComputerChoice() {
                return Math.floor(Math.random() * 3);
            }

            function determineWinner(player, comp) {
                if (player === comp) return 'Empate';
                if (
                    (player === 0 && comp === 2) ||
                    (player === 1 && comp === 0) ||
                    (player === 2 && comp === 1)
                ) return 'Vitória';
                return 'Derrota';
            }

            function updateScoreboard() {
                winsSpan.textContent = wins;
                lossesSpan.textContent = losses;
                tiesSpan.textContent = ties;
            }

            function playRound(playerChoice) {
                const computerChoice = getComputerChoice();
                const result = determineWinner(playerChoice, computerChoice);

                if (result === 'Vitória') wins++;
                else if (result === 'Derrota') losses++;
                else ties++;

                updateScoreboard();

                resultDiv.innerHTML =
                    `Você escolheu: <strong>${choicesText[playerChoice]}</strong><br>` +
                    `Computador escolheu: <strong>${choicesText[computerChoice]}</strong><br>` +
                    `<strong>Resultado: ${result}</strong>`;
            }

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const choice = parseInt(button.dataset.choice, 10);
                    playRound(choice);
                });
            });

            exitBtn.addEventListener('click', () => {
                alert(`Jogo encerrado!\nVitórias: ${wins}\nDerrotas: ${losses}\nEmpates: ${ties}\nObrigado por jogar!`);
                wins = 0;
                losses = 0;
                ties = 0;
                updateScoreboard();
                resultDiv.textContent = 'Faça sua jogada para começar!';
            });
        })();