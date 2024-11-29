import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="imgWebsite">
      </div>
      <div id="resultados">
        <h1>Resultados</h1>
        <FormDivs
          imageSrc="/imgs/formResposta1.jpg"
          title="Adoção de Tecnologia e Crescimento Rápido"
          description="Nossa pesquisa revelou que 94,4% dos empreendedores acreditam que o uso de tecnologia é crucial para acelerar o crescimento de seus negócios. Isso reflete a crescente importância da inovação digital como fator determinante para o sucesso empresarial."
        />
        <FormDivs
          imageSrc="/imgs/formResposta2.jpg"
          title="A Importância das Tecnologias Digitais no Sucesso Empresarial"
          description="100% dos entrevistados afirmam que o uso de tecnologias digitais é essencial para o sucesso de um negócio nos dias de hoje. Esse resultado destaca como as ferramentas tecnológicas são agora indispensáveis para a competitividade e sustentabilidade no mercado atual."
        />
        <FormDivs
          imageSrc="/imgs/formResposta3.jpg"
          title="O Impacto das Redes Sociais no Sucesso de Pequenos Empreendedores"
          description="100% dos entrevistados acreditam que o uso de redes sociais pode ser um diferencial significativo para o sucesso de pequenos empreendedores. As plataformas digitais têm se mostrado essenciais para expandir a visibilidade e engajamento com o público-alvo, fortalecendo a presença online de negócios em crescimento."
        />
        <FormDivs
          imageSrc="/imgs/formResposta4.jpg"
          title="Automação e Eficiência nos Processos Empresariais"
          description="Com 88,2% de concordância, os empreendedores reconhecem que a automação de processos empresariais pode aumentar a eficiência de um negócio. A automação permite otimizar tarefas repetitivas, reduzindo erros humanos e melhorando a produtividade, o que resulta em melhores resultados operacionais."
        />
        <FormDivs
          imageSrc="/imgs/formResposta5.jpg"
          title="Áreas Impactadas pela Tecnologia no Empreendedorismo"
          description="A pesquisa revelou que a tecnologia tem um impacto marcante em várias áreas do empreendedorismo, com destaque para o marketing digital (72,2%) e gestão financeira (66,7%). A transformação digital também atinge o atendimento ao cliente, embora de forma menos expressiva (33,3%), mostrando como a tecnologia pode impulsionar diferentes aspectos de um negócio."
        />
      </div>
      <div id="entrevistas">
        <h1>Entrevistas</h1>
        <EntrevistaDivs
          src="/videoEntrevista.mp4"
          titulo="Entrevista com a professora Cristina Alves"
        />
      </div>
      <div id="cursos">
        <h1>Cursos Recomendados</h1>
        <br></br>
        <br></br>
        <CursoList />
      </div>
      <Footer />
    </div>
  );
}

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <ul>
        <NavItem href="/" label="Home" />
        <NavItem href="#resultados" label="Resultados" />
        <NavItem href="#entrevistas" label="Entrevistas" />
        <NavItem href="#cursos" label="Cursos" />
      </ul>
    </nav>
  );
}

function NavItem({ href, label }) {
  return (
    <li>
      <a href={href} className="nav-link">
        {label}
      </a>
    </li>
  );
}

function FormDivs({ imageSrc, title, description }) {
  return (
    <div className="formResultado">
      <div className="textoForm">
        <h2>{title}</h2>
        <br />
        <p>{description}</p>
      </div>
      <div className="imgResultado">
        <img width="100%" src={imageSrc} alt="Imagem do Projeto" />
      </div>
    </div>
  );
}

function EntrevistaDivs({ src, titulo }) {
  return (
    <div className="entrevista-container">
      <h3>{titulo}</h3>
      <div className="videoWrapper">
        <video controls width="80%">
          <source src={src} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </div>
    </div>
  );
}

function CursoCard({ title, description, link }) {
  return (
    <div className="curso-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Saiba mais
      </a>
    </div>
  );
}

function CursoList() {
  const cursos = [
    {
      title: "Marketing Digital de A a Z",
      description:
        "Descubra como atrair clientes e aumentar suas vendas com estratégias de marketing digital.",
      link: "https://www.udemy.com/course/marketing-digital-de-a-a-z/",
    },
    {
      title: "Gestão Financeira para Pequenos Negócios",
      description:
        "Saiba o essencial de finanças para pequenas e médias empresas e como fazer gestão financeira efetiva.",
      link: "https://www.udemy.com/course/gestao-financeira/?couponCode=BFCPSALE24",
    },
    {
      title: "Transformação Digital para Pequenos Negócios",
      description:
        "Entenda como implementar tecnologia e modernizar processos para aumentar a competitividade.",
      link: "https://www.ev.org.br/trilhas-de-conhecimento/transformacao-digital-e-inovacao",
    },
  ];

  return (
    <div className="curso-list">
      {cursos.map((curso, index) => (
        <CursoCard
          key={index}
          imageSrc={curso.imageSrc}
          title={curso.title}
          description={curso.description}
          link={curso.link}
        />
      ))}
    </div>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2024 Projeto Empreenda. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default App;
