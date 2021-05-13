import React from 'react';
import AreaTexto from './AreaTexto';
import Botao from './Botao';
import logo from './logo.png';

export default class App extends React.Component{
    constructor(){
        super();
        this.state={
            nomeBotao:'Esconder',
            classeDiv:'hide'
        }
    }

    alterarEstado(){
        var Estado;
        var NomeBotao;
        if(this.state.classeDiv === 'hide'){
            Estado="show";
            NomeBotao='Gostou ? kkk';
        }else{
            Estado="hide";
            NomeBotao='veja seu presente';
        }
        this.setState({
            nomeBotao: NomeBotao,
            classeDiv: Estado
        })
    }

    render(){
        return(
            <div>
                 <header className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                 <h1>
                    Um poema para poucos
                     </h1>
                    <p className="textos">
                    Até porque, você já ouviu falar de cabo de vassoura? supunhetamos que você vai ter a vida que
                    você é hoje, daqui uns anos... não sei, vai que, nasca uma planta pra sobreviver.... e que a..
                    pode ser que mude a... alternativa do... Dom Pedro 2º, e o padre quando for rezar uma missa vai 
                    querer tomar uma latinha de cerveja.
                    </p>

                    <h1>
                    De sua Namorada
                    </h1>
                    <p className="textos-namorada"></p>
                    
                    <h1>
                    De seu amigo
                    </h1>
                    <div className="textos">
                    <p>fala bixa, primeiramente quero que vc vá tomar bem no meio do seu cú. 
                        bom, agora que já nos apresentamos, quero lhe desejar um feliz aniversário... tomei a liberdade de escrever 
                        algumas palavras a você
                    </p>
                    <p>
                        Parabéns, amigo! Espero que este dia seja muito feliz e recheado de coisas boas. Você merece tudo de bom, pois 
                        é um amigo muito querido e dedicado e o melhor colega de trabalho. Aliás, você é uma das melhores coisas dos meus 
                        dias de trabalho.

                        Espero que complete muitos anos de vida, sempre com saúde, amor e paz. E que o seu caminho pela vida seja sempre 
                        acompanhado pela felicidade e pelo sucesso. Feliz aniversário, meu amigo!
                    </p>
                    <p>
                        Amigo é aquela pessoa com quem conversamos sem reservas,independente da hora ele sabe oferecer o aconchego do seu coração 
                        sem pedir nada em troca, e quando ele precisa sabe que pode fazer o mesmo sem objeção, não importa o tempo que estejam distante 
                        fisicamente, amizade é irmã do amor e não tem cara, tem reciprocidade, afetividade, respeito, carinho, confiança e alegria.
                    </p>
                    <p>
                        Amigo é aquela pessoa que nos diz o que acha ser correto, mesmo não sendo o que gostaríamos de escutar, más sabe respeitar a decisão 
                        do outro sem censuras.
                    </p>
                    <p>
                        Amigo nos avisa do perigo quando não conseguimos enxergar, sem contrapor nas decisões tomadas.
                    </p>
                    <p>
                        Amigo sabe dar e receber o ombro amigo sem pré-requisitos, ele sabe ouvir, tanto quanto escutar...
                        Amigo naturalmente se comporta com aceitação mil e ameaça zero.
                    </p>
                    <p>
                        Não existe escola para formação de amigos,
                        eles por si já nascem aptos, por isto não impomos regras dentro de uma amizade,
                        elas se compatibilizam sem invasões,
                        unindo os verdadeiros amigos, sem maldades, sem segredos, sem interesses,
                        a felicidade de um, é a felicidade do outro.
                    </p>
                    <p>
                        Sem esforço sabemos distinguir nossos amigos hoje te procurei simplesmente para dizer:
                        Estou feliz porque te amo meu amigo.
                        És muito importante para mim.
                    </p>
                    </div>

                    <h1> Presente</h1>
                    <p className="textos">
                    emfim, chegamos aonde todos esperam, mas... oq da de presente pra alguém que ganha 3x mais que eu? 
                    Porra nehuma vcs não acham?, mas, resolvi dar algo que você nunca terá... 
                    
                    </p>
        
                        
                        <AreaTexto className="testet" classeSecundaria={this.state.classeDiv}/>
                    
                
                        <Botao funcao={this.alterarEstado.bind(this)} valor={this.state.nomeBotao} />
                    </header>
                    
            </div>
        );
    }

}