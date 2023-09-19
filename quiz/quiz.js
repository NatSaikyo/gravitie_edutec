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
                perg.innerText = "Não?";
                a.innerText = "sim";
                b.innerText = "Çim";
                c.innerText = "Cim";
                d.innerText = "SIM";
            }
            else if (currentQuestion == 3 ) {
                countdown = 20;
                n_perg .innerText = "3/10";
                perg.innerText = "Em que arco aparece Kaidou?";
                a.innerText = "Orange Town";
                b.innerText = "Dressrosa";
                c.innerText = "Whole Cake";
                d.innerText = "Wano";
            }
            else if (currentQuestion == 4 ) {
                countdown = 20;
                n_perg .innerText = "4/10";
                perg.innerText = "Qual a Pior matéria da escola?";
                a.innerText = "Geografia";
                b.innerText = "Redes";
                c.innerText = "Banco de Dados";
                d.innerText = "Sociologia";
            }
            else if (currentQuestion == 5 ) {
                countdown = 20;
                n_perg .innerText = "5/10";
                perg.innerText = "Qual foi a melhor temporada do Fortnite?";
                a.innerText = "Cap2 Temp2";
                b.innerText = "Cap2 Temp3";
                c.innerText = "Cap1 Temp9";
                d.innerText = "Cap4 Temp Atual";
            }
            else if (currentQuestion == 6 ) {
                countdown = 20;
                n_perg .innerText = "6/10";
                perg.innerText = "Qual é o capitão do bando do chapéu de palha?";
                a.innerText = "Zoro";
                b.innerText = "Robin";
                c.innerText = "Chopper";
                d.innerText = "Luffy";
            }
            else if (currentQuestion == 7 ) {
                countdown = 20;
                n_perg .innerText = "7/10";
                perg.innerText = "Qual a mais gostosa? (na minha opinião)";
                a.innerText = "Reyna";
                b.innerText = "Sage";
                c.innerText = "KillJoy";
                d.innerText = "Skye";
            }
            else  if (currentQuestion == 8 ) {
                countdown = 20;
                n_perg .innerText = "8/10";
                perg.innerText = "Ablublé?";
                a.innerText = "Sim";
                b.innerText = "Não";
                c.innerText = "Talvez";
                d.innerText = "Nenhuma das anteriores";
            }
            else if (currentQuestion == 9 ) {
                countdown = 20;
                n_perg .innerText = "9/10";
                perg.innerText = "Qual jogo é mais gay?";
                a.innerText = "Minecraft";
                b.innerText = "League of Legends";
                c.innerText = "Valorant";
                d.innerText = "Roblox";
            }
            else {
                countdown = 20;
                n_perg .innerText = "10/10";
                perg.innerText = "Qual a Capital do Brasil?";
                a.innerText = "Brasília";
                b.innerText = "São Paulo";
                c.innerText = "Rio de Janeiro";
                d.innerText = "Nenhumas das anteriores";
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