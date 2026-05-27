import EstrelaPreenchida from "../assets/estrela_preenchida.svg";
import EstrelaNaoPreenchida from "../assets/estrela_nao_preenchida.svg";

interface ITestimonialCard {
    imagem: string,
    descricao: string,
    nome: string,
    cargo: string,
    nota: number
}

export default function TestimonialCard({ imagem, descricao, nome, cargo, nota }: ITestimonialCard) {
    const totalEstrelas = 5;

    return (
        <div className="carousel-card">
            <img src={imagem} alt={`Imagem perfil de ${nome}`} />

            <span className="testimony">
                <p>{descricao}</p>
            </span>

            <span className="rating">
                {Array.from({ length: totalEstrelas }).map((_, index) => {
                    if (index < nota) {
                        return (
                            <img
                                key={index}
                                src={EstrelaPreenchida}
                                alt="ícone estrela preenchida"
                                width={22}
                                height={20}
                            />
                        );
                    }
                    return (
                        <img
                            key={index}
                            src={EstrelaNaoPreenchida}
                            alt="ícone estrela sem fundo"
                            width={20}
                            height={22}
                        />
                    );
                })}
            </span>

            <span className="names">
                <p>{nome}</p>
                <p>{cargo}</p>
            </span>
        </div>
    );
}