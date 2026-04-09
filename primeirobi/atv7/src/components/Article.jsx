export default function Article({ titulo, autor, data, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <p>
        <em>Escrito por: {autor}</em>
      </p>
      <time>{data}</time>

      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img width="100px" src={imagem.src} alt={imagem.alt} />
        <figcaption>{imagem.alt}</figcaption>
      </figure>
    </article>
  );
}
