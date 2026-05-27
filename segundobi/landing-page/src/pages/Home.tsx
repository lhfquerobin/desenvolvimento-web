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

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo LandingPage" width={140} height={70} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#hero">Home</a>
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
                            imagem="https://cdn.discordapp.com/attachments/1509324250694287382/1509324629754253353/web-profile-kei-urana.png?ex=6a18c399&is=6a177219&hm=113178061e68ee833039b84c1311c7b5f3876831209773290e30b6a66a5bf9e2"
                            descricao="O suporte com os prazos e a qualidade da diagramação final são excelentes. Sinto total liberdade para focar na arte."
                            nota={5}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Atsushi Ohkubo"
                            cargo="Mangaká (Soul Eater / Fire Force)"
                            imagem="https://cdn.discordapp.com/attachments/1509324250694287382/1509329372056916048/web-profile-atsushi-ohkubo.jpeg?ex=6a18c804&is=6a177684&hm=e6dbf8b806749e9fae15c023c0c8aeef3ba5636c39501cfeab37c65f09d36df6"
                            descricao="Uma equipe que realmente entende o ritmo de um autor. A assistência gráfica faz toda a diferença no resultado das páginas."
                            nota={4}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Hiro Mashima"
                            cargo="Mangaká (Fairy Tail)"
                            imagem="https://cdn.discordapp.com/attachments/1509324250694287382/1509330092801790002/web-profile-hiro-mashima.png?ex=6a18c8b0&is=6a177730&hm=cb2a2fc6d5ccdd515ccaa71493e281a4b62fce72641ed3f7b0b3f4b862ecb519"
                            descricao="A velocidade de resposta e a atenção aos detalhes na revisão são impressionantes. Perfeito para manter meu fluxo de publicação."
                            nota={5}
                        ></TestimonialCard>
                    </div>
                    <div className="carousel-content">
                        <TestimonialCard
                            nome="Kei Urana"
                            cargo="Mangaká (Gachiakuta)"
                            imagem="https://cdn.discordapp.com/attachments/1509324250694287382/1509324629754253353/web-profile-kei-urana.png?ex=6a18c399&is=6a177219&hm=113178061e68ee833039b84c1311c7b5f3876831209773290e30b6a66a5bf9e2"
                            descricao="O suporte com os prazos e a qualidade da diagramação final são excelentes. Sinto total liberdade para focar na arte."
                            nota={5}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Atsushi Ohkubo"
                            cargo="Mangaká (Soul Eater / Fire Force)"
                            imagem="https://cdn.discordapp.com/attachments/1509324250694287382/1509329372056916048/web-profile-atsushi-ohkubo.jpeg?ex=6a18c804&is=6a177684&hm=e6dbf8b806749e9fae15c023c0c8aeef3ba5636c39501cfeab37c65f09d36df6"
                            descricao="Uma equipe que realmente entende o ritmo de um autor. A assistência gráfica faz toda a diferença no resultado das páginas."
                            nota={4}
                        ></TestimonialCard>

                        <TestimonialCard
                            nome="Hiro Mashima"
                            cargo="Mangaká (Fairy Tail)"
                            imagem="https://cdn.discordapp.com/attachments/1509324250694287382/1509330092801790002/web-profile-hiro-mashima.png?ex=6a18c8b0&is=6a177730&hm=cb2a2fc6d5ccdd515ccaa71493e281a4b62fce72641ed3f7b0b3f4b862ecb519"
                            descricao="A velocidade de resposta e a atenção aos detalhes na revisão são impressionantes. Perfeito para manter meu fluxo de publicação."
                            nota={5}
                        ></TestimonialCard>
                    </div>
                </section>
            </section >
        </>
    )
}