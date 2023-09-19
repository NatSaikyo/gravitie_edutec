let currentQuestion = 1;
        let countdown = 20; // Tempo em segundos
        let pontuação = 0;
        let countdownInterval;
        let n_perg = document.querySelector("#N_pergunta");
        let perg = document.querySelector(".questao_main"); 
        let a = document.querySelector("#resposta_A"); 
        let b = document.querySelector("#resposta_B"); 
        let c = document.querySelector("#resposta_C"); 
        let d = document.querySelector("#resposta_D"); 
        let main = document.querySelector("#main_do_quiz");

        function startCountdown() {
            countdownInterval = setInterval(updateCountdown, 1000);
        }

        function updateCountdown() {
            const countdownElement = document.getElementById('countdown');
            countdownElement.textContent = `00:${countdown < 10 ? '0' : ''}${countdown}`;
            countdown--;

            if (countdown === -1) {
               
                
                
                if (currentQuestion < 10) {
                    currentQuestion++;
             
                    passarQuestao();
                    countdown = 20;
                } else {
                    
                    alert('Quiz encerrado! Você respondeu todas as perguntas.');
                    premios();
                }
            }
        }

        function responder(resposta) {
            
            const respostasCorretas = {
                1: 'B',2: 'D',3: 'B',4: 'B',5: 'A',6: 'D',7: 'A',8: 'A',9: 'B',10: 'A' 
            };

            if (resposta === respostasCorretas[currentQuestion]) {
                pontuação ++;
                alert(`Sua pontuação ${pontuação}`);

                
            } else {
                alert('Resposta incorreta :(');
                
            }

            if (currentQuestion < 10) { 
                currentQuestion++;
                passarQuestao();
                
            } else {

                alert('Quiz encerrado! Você respondeu todas as perguntas.');
                premios();
            }
        }

        function passarQuestao(){
            
            
            if (currentQuestion == 2 ) {
                countdown = 20;
                n_perg .innerText = "2/10";
                perg.innerText = "Em que ano foi desenvolvida a Teoria da Relatividade Geral?";
                a.innerText = "1915";
                b.innerText = "1930";
                c.innerText = "1923";
                d.innerText = "1905";
            }
            else if (currentQuestion == 3 ) {
                countdown = 20;
                n_perg .innerText = "3/10";
                perg.innerText = "A Relatividade Geral substituiu qual teoria da gravidade amplamente aceita?";
                a.innerText = "Teoria Eletromagnética";
                b.innerText = "Gravidade Newtoniana";
                c.innerText = "Teoria do Big Bang";
                d.innerText = "Teoria das Cordas";
            }
            else if (currentQuestion == 4 ) {
                countdown = 20;
                n_perg .innerText = "4/10";
                perg.innerText = "A Relatividade Geral é uma teoria que descreve principalmente o comportamento de objetos:";
                a.innerText = "Extremamente pequenos";
                b.innerText = "Com massas planetárias";
                c.innerText = "Em alta pressão";
                d.innerText = "Na velocidade da luz";
            }
            else if (currentQuestion == 5 ) {
                countdown = 20;
                n_perg .innerText = "5/10";
                perg.innerText = "Existe apenas uma coisa que pode atingir a velocidade máxima permitida no universo, segundo os estudos que temos atualmente, qual é essa coisa?";
                a.innerText = "A luz";
                b.innerText = "O Bóson de Higgs";
                c.innerText = "Os Neutrinos";
                d.innerText = "Táquions";
            }
            else if (currentQuestion == 6 ) {
                countdown = 20;
                n_perg .innerText = "6/10";
                perg.innerText = "Qual é o nome da famosa fórmula que surge da Relatividade Geral e descreve a relação entre a energia (E), a massa (m) e a velocidade da luz (c)?";
                a.innerText = "h/2π";
                b.innerText = "Bhaskara";
                c.innerText = "Teorema de Pitágoras";
                d.innerText = "E=M.C²";
            }
            else if (currentQuestion == 7 ) {
                countdown = 20;
                n_perg .innerText = "7/10";
                perg.innerText = "Relatividade Geral prevê a existência de quê, que é observado como a curvatura do espaço-tempo ao redor de objetos massivos?";
                a.innerText = "Buracos Negros";
                b.innerText = "Buracos Brancos";
                c.innerText = "Buracos de Minhoca";
                d.innerText = "Supernovas";
            }
            else  if (currentQuestion == 8 ) {
                countdown = 20;
                n_perg .innerText = "8/10";
                perg.innerText = "Se um objeto for observado em dois pontos de vista diferentes, como ele será analisado?";
                a.innerText = "Diferentemente";
                b.innerText = "Do mesmo jeito";
                c.innerText = "Não pode ser observado";
                d.innerText = "Ficará invisivel para um";
            }
            else if (currentQuestion == 9 ) {
                countdown = 20;
                n_perg .innerText = "9/10";
                perg.innerText = "O que a Relatividade Geral prevê em relação às órbitas dos planetas em torno do Sol?";
                a.innerText = "Órbitas perfeitamente circulares";
                b.innerText = "Órbitas elípticas devido à gravidade";
                c.innerText = "Órbitas muito próximas do Sol";
                d.innerText = "Órbitas retilíneas devido à inércia";
            }
            else {
                countdown = 20;
                n_perg .innerText = "10/10";
                perg.innerText = "A Relatividade Geral prevê que a luz é afetada pela gravidade. Essa afirmação é verdadeira?";
                a.innerText = "Depende da gravidade";
                b.innerText = "Não";
                c.innerText = "Apenas em um espelho";
                d.innerText = "Em buracos negros";
            }
        }
        function premios(){

            if (pontuação <= 4 ){
                main.innerHTML = `

            <div class="centralizacao2">
                <section class="caixa_results">
                    <h1 id = "qt_acertos"></h1>
          
                    <h2>Parabéns!</h2>
                <div class="restart_div">
                <a href="../quiz_main.html"><button class="restart">REINICIAR</button></a>
                </div>
                </section>
            </div>
            </main>
                `;
            let mostrar_pont= document.querySelector("#qt_acertos");
            mostrar_pont.innerText = `Você acertou ${pontuação}/10 questões`;
            }
            else if (pontuação > 4 && pontuação <= 7){
                main.innerHTML = `
  
            <div class="centralizacao2">
                <section class="caixa_results">
                    <h1 id = "qt_acertos"></h1>
          
                    <h2>Parabéns!</h2>
                <div class="restart_div">
                <a href="../quiz_main.html"><button class="restart">REINICIAR</button></a>
                </div>
                </section>
            </div>
            </main>
                `;
            let mostrar_pont= document.querySelector("#qt_acertos");
            mostrar_pont.innerText = `Você acertou ${pontuação}/10 questões`;
            }
            else{
                main.innerHTML = `

            <div class="centralizacao2">
                <section class="caixa_results">
                    <h1 id = "qt_acertos"></h1>
          
                    <h2>Parabéns!</h2>
                <div class="restart_div">
                <a href="../quiz_main.html"><button class="restart">REINICIAR</button></a>
                </div>
                </section>
            </div>
            </main>
                `;
            let mostrar_pont= document.querySelector("#qt_acertos");
            mostrar_pont.innerText = `Você acertou ${pontuação}/10 questões`;
            }
        }
    

    
        window.onload = startCountdown;