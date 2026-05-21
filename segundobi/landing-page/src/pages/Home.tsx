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
        </>
    )
}