interface ICardProps {
    imagem: string,
    imagemAlt: string,
    titulo: string,
    descricao: string
}

export default function Card({ imagem, imagemAlt, titulo, descricao }: ICardProps) {
    return (
        <>
            <div className="card">
                <span>
                    <img src={imagem} alt={imagemAlt}/>
                </span>
                <div>
                    <h3>
                        {titulo}
                    </h3>
                    <p>
                        {descricao}
                    </p>
                    <hr />
                </div>
            </div>
        </>
    )
}