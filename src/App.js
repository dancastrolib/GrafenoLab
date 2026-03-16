import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";

import hexagonosImg from "./assets/hexagonos.jpeg";
import nobelImg from "./assets/nobel-geim-novoselov2.jpg";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />

      <main>
        <Section id="oque" title="O que é o grafeno?">
          <div className="grafeno-bloco">
            <div className="grafeno-bloco__texto">
              <p>
                O grafeno é um material formado por uma única camada de átomos de
                carbono, organizada numa rede hexagonal semelhante a um favo de
                mel. É tão fino que tem apenas um átomo de espessura, sendo
                considerado o material mais fino alguma vez observado. Pode
                imaginar-se como uma folha extremamente fina retirada da grafite,
                o material presente na mina de um lápis. Apesar da sua
                simplicidade, esta estrutura microscópica revelou propriedades
                físicas extraordinárias que rapidamente despertaram o interesse da
                comunidade científica e da indústria.
              </p>
            </div>
              <div className="grafeno-bloco__imagem">
                <img
                  src={hexagonosImg}
                  alt="Estrutura hexagonal do grafeno"
                />
              </div>
          </div>

          <div className="grafeno-bloco">
            <div className="grafeno-bloco__texto">
              <h3>A descoberta</h3>

              <p>
                Em 2004, dois investigadores da Universidade de Manchester,
                Andre Geim e Konstantin Novoselov, conseguiram isolar grafeno a
                partir de grafite utilizando um método surpreendentemente
                simples: fita adesiva.
              </p>

              <p>
                A descoberta abriu uma nova área da ciência dos materiais e
                valeu aos dois cientistas o Prémio Nobel da Física em 2010.
                Desde então, o grafeno tornou-se um dos materiais mais estudados
                no mundo.
              </p>
            </div>

            <div className="grafeno-bloco__imagem">
              <img
                src={nobelImg}
                alt="Prémio Nobel de Física 2010 — Andre Geim e Konstantin Novoselov"
              />
            </div>
          </div>

          <p className="mensagem-chave">
            Um material extremamente simples na sua estrutura, mas com um
            potencial tecnológico extraordinário.
          </p>
        </Section>

        <Section id="propriedades" title="Propriedades">
          <p>
            O grafeno destaca-se pela sua elevada resistência, condutividade
            elétrica e flexibilidade.
          </p>
        </Section>

        <Section id="aplicacoes" title="Aplicações">
          <p>
            As aplicações incluem eletrónica avançada, sensores, energia e
            materiais compósitos.
          </p>
        </Section>

        <Section id="futuro" title="O futuro do grafeno">
          <p>
            A investigação continua a explorar novas formas de produzir e
            aplicar este material revolucionário.
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}