import { useEffect, useState } from "react";
import Logo from "../assets/logo-landing-page.svg";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import RetangleOne from "../assets/retangle1.png";
import RetangleTwo from "../assets/retangle2.png";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/Button";
import "../styles/hero.css"
import "../styles/solution.css";
import Card from "../components/Card";
import "../styles/testimonials.css";
import TestimonialCard from "../components/TestimonialCard";
import "../styles/pricing.css";
import Check from "../assets/check.svg"
import "../styles/contact.css";
import "../styles/footer.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function sendContactEmail() {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email,
                message
            }),
        });

        if (!response.ok) {
            const body = await response.json().catch(() => ({}));
            throw new Error(body.error ?? "Erro ao enviar mensagem.");
        }
    }

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo LandingPage" width={140} height={70} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>

                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#hero">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Destaques</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)}
                                                href="#solution">Contato</a>
                                        </li>
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={RetangleOne} alt="Retangulo" />
                </span>
                <img src={RetangleTwo} alt="" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Os melhores mangás em um só lugar</h1>
                    <p>Descubra histórias incríveis, personagens marcantes e mergulhe nos universos mais famosos dos animes e mangás.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Destaques</h2>
                        <span className="desktop-only">
                            <h2>
                                Explore os mangás mais populares
                            </h2>
                        </span>
                    </span>
                    <p>
                        Conheça obras que marcaram gerações, com histórias intensas, personagens inesquecíveis e universos únicos para mergulhar.                    </p>
                </header>
                <section className="even-columns">
                    <Card
                        imagem="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx105778-euxXZEIfDY2u.png"
                        imagemAlt="Chainsaw Man Capa"
                        titulo="Chainsaw Man"
                        descricao="Denji tem sua vida transformada após se fundir com Pochita, ganhando poderes de motosserra e entrando para o mundo brutal dos Caçadores de Demônios.">
                    </Card>

                    <Card
                        imagem="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3588-fSMggQoFSbUI.png"
                        imagemAlt="Soul Eater Capa"
                        titulo="Soul Eater"
                        descricao="Em uma academia para ceifadores, estudantes e suas armas vivas enfrentam criaturas sombrias para proteger o mundo do caos.">
                    </Card>

                    <Card
                        imagem="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx63327-glC9cDxYBja9.png"
                        imagemAlt="Tokyo Ghoul Capa"
                        titulo="Tokyo Ghoul"
                        descricao="Após um encontro fatal com um ghoul, Kaneki se torna meio humano e meio monstro, precisando sobreviver entre os dois mundos.">
                    </Card>
                </section>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Quem cria também aprova!</h2>
                    </span>
                    <p>
                        Quem trabalha conosco conhece o nosso compromisso com a qualidade.
                        Estamos mudando a ideia de que o processo de publicação precisa ser complicado.
                        Acompanhe abaixo os depoimentos de quem aprova nosso suporte.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <TestimonialCard
                            nome="Kei Urana"
                            cargo="Mangaká (Gachiakuta)"
                            imagem="https://i.ibb.co/XrvgxHnR/web-profile-kei-urana.webp"
                            descricao="O suporte com os prazos e a qualidade da diagramação final são excelentes. Sinto total liberdade para focar na arte."
                            nota={5}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Atsushi Ohkubo"
                            cargo="Mangaká (Soul Eater / Fire Force)"
                            imagem="https://i.ibb.co/Nd0VhLd5/web-profile-atsushi-ohkubo.webp"
                            descricao="Uma equipe que realmente entende o ritmo de um autor. A assistência gráfica faz toda a diferença no resultado das páginas."
                            nota={4}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Hiro Mashima"
                            cargo="Mangaká (Fairy Tail)"
                            imagem="https://i.ibb.co/LzkyLfGW/web-profile-hiro-mashima.webp"
                            descricao="A velocidade de resposta e a atenção aos detalhes na revisão são impressionantes. Perfeito para manter meu fluxo de publicação."
                            nota={5}
                        ></TestimonialCard>
                    </div>
                    <div className="carousel-content">
                        <TestimonialCard
                            nome="Kei Urana"
                            cargo="Mangaká (Gachiakuta)"
                            imagem="https://i.ibb.co/XrvgxHnR/web-profile-kei-urana.webp"
                            descricao="O suporte com os prazos e a qualidade da diagramação final são excelentes. Sinto total liberdade para focar na arte."
                            nota={5}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Atsushi Ohkubo"
                            cargo="Mangaká (Soul Eater / Fire Force)"
                            imagem="https://i.ibb.co/Nd0VhLd5/web-profile-atsushi-ohkubo.webp"
                            descricao="Uma equipe que realmente entende o ritmo de um autor. A assistência gráfica faz toda a diferença no resultado das páginas."
                            nota={4}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Hiro Mashima"
                            cargo="Mangaká (Fairy Tail)"
                            imagem="https://i.ibb.co/LzkyLfGW/web-profile-hiro-mashima.webp"
                            descricao="A velocidade de resposta e a atenção aos detalhes na revisão são impressionantes. Perfeito para manter meu fluxo de publicação."
                            nota={5}
                        ></TestimonialCard>
                    </div>
                </section>
            </section >

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>
                <section className="even-columns gap-1.5">

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Iniciante</h3>
                            <p>Ideal para quem está conhecendo a plataforma e quer ler casualmente.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Começar agora" secondary key="free" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Leitura com anúncios</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Acesso a mais de 100 títulos</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Qualidade padrão de imagem</p>
                        </span>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>MAIS POPULAR</p>
                        </span>
                        <span className="plan">
                            <h3>Premium Otaku</h3>
                            <p>Para leitores ávidos que querem acompanhar os lançamentos do Japão.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 19,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Assinar agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Sem anúncios e interrupções</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Capítulos no mesmo dia do Japão</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Leitura offline pelo app</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>VIP Colecionador</h3>
                            <p>O plano definitivo para quem apoia a indústria e ama benefícios físicos.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 49,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Seja VIP" secondary key="enterprise" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Tudo do plano Premium Otaku</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>1 Mangá físico por mês (brinde)</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Descontos exclusivos em eventos</p>
                        </span>
                    </div>

                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <p className="desktop-only">Envie sua dúvida</p>
                    <h2>Entre em contato</h2>
                    <p>
                        Entre em contato, estamos dispostos a tirar qualquer dúvida,
                        seja um orçamento, uma dúvida técnica de algum de nossos produtos.
                        Estamos à disposição para responder.😎
                    </p>
                </header>
                <form className="contact-form" onSubmit={sendContactEmail}>
                    <input
                        type="email"
                        placeholder="Seu melhor Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <Button text="Enviar" />
                </form>
            </section>

            <footer>
                <div className="container footer-content">
                    <div className="footer-brand">
                        <img src={Logo} alt="Logo LandingPage" width={140} height={70} />
                        <div className="social-links">
                            <a href="#" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                            <a href="#" aria-label="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="link-column">
                            <h3>Empresa</h3>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Faça parte do time</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="link-column">
                            <h3>Funcionalidades</h3>
                            <ul>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Análise de dados</a></li>
                                <li><a href="#">Boot discord</a></li>
                            </ul>
                        </div>
                        <div className="link-column">
                            <h3>Recursos</h3>
                            <ul>
                                <li><a href="#">IOS & Android</a></li>
                                <li><a href="#">Teste a Demo</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom container">
                    <p>Feito com ódio na aula de Programação Web🖤 ©2026 Luiz Querobin - Todos os direitos reservados.</p>
                </div>
            </footer>
        </>
    )
}