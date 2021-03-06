import React from 'react';
import './coletivo-enegrecer.css';

const coletivoEnegrecer = () => (
  <div className="row coletivo-enegrecer">
    <div className="col s12 m6 conteudo">
      <div className="titulo">
        <div className="detalhe_titulo">
          <h1>O coletivo</h1>
          <div className="retangular-bloco" />
        </div>
        <h1>Enegrecer</h1>
      </div>

      <div className="texto_coletivo" >
        <p>O coletivo nacional de Juventude Enegrecer é uma expressão do movimento social negro,
              de âmbito nacional, que se constitui como espaço autônomo de articulação e formação
              política, anti-capitalista, anti-racista,anti-patriarcal não lesbofóbica e não
              homofóbica objetivando organizar jovens negros e negras,visando a busca da efetiva
              cidadania da juventude negra brasileira. É um movimento que se soma a todos os demais
              movimentos sociais progressistas que lutam por outro mundo possível.</p>
        <p>O coletivo nacional de Juventude Enegrecer surge como espaço auto-organizativo dos jovens
          militantes negros e negras da Kizomba, corrente política que desde 1999
          constrói e disputa os rumos da União Nacional dos Estudantes.</p>
        <p>Em setembro de 2009 reunidos na cidade de Salvador – BA nós militantes do “Enegrecer
            Kizomba” oriundos de diferentes estados definimos pela ampliação do espaço de atuação,
            não mais nos
            restringindo a luta política travada no interior do movimento estudantil brasileiro.</p>
        <p>Constituímo-nos hoje como parte integrante desta importante trajetória marcada por
            incansáveis períodos de lutas e participação política que teve início no processo de
            resistência negra ao regime escravocrata chamado de movimento negro brasileiro.</p>
        <p>Para mais informações acesse: <a href="https://coletivoenegrecer.wordpress.com/quem-somos/" target="blank" >Quem Somos</a>.</p>
      </div>
    </div>

    <div className="col s12 m6 imagem_coletivo">
      <img src="https://firebasestorage.googleapis.com/v0/b/enegrecer-e37b3.appspot.com/o/fotos%2Fcoletivo-enegrecer.jpg?alt=media&token=07a7d2b3-91f4-4633-8551-f7788d668d26" alt="Imagem de pessoas negras segurando a bandeira do Coletivo Enegrecer" />
    </div>
  </div>
);

export default coletivoEnegrecer;
