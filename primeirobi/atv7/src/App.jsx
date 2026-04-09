import Header from "./components/Header";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const dadosPost = {
    titulo: "Descobrindo as Praias do Nordeste",
    autor: "João Silva", // Autor adicionado para cumprir a exigência
    data: "15 de agosto de 2025",
    conteudo: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales arcu quis vehicula condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sed dolor vel ipsum consectetur vulputate. Sed ut erat commodo, placerat odio vel, cursus nisl. In hac habitasse platea dictumst. Etiam eget libero diam. Ut sollicitudin est lorem, non vestibulum quam lobortis quis. Pellentesque molestie et sapien at convallis. Integer et magna enim. Phasellus eu ligula volutpat, ornare libero id, lobortis lorem. Suspendisse facilisis, turpis vitae ultricies euismod, magna sapien dapibus lacus, vel varius purus urna sit amet quam. Vestibulum mi justo, volutpat sit amet massa ut, ultrices porta lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eu sapien nec purus pulvinar luctus et in dolor. Mauris eu risus sit amet ligula euismod eleifend.",
      "Donec a nibh velit. Donec et augue mattis, feugiat ante eu, venenatis augue. Aliquam volutpat egestas dui, ac interdum lectus hendrerit a. In sagittis hendrerit tortor, a faucibus sem pulvinar vel. Etiam fermentum vehicula eros eu eleifend. Pellentesque tempus eros non urna placerat, vel lobortis augue mattis. Proin ut augue quis purus imperdiet efficitur. Sed sodales dui nec congue porta. Aliquam dictum, sapien id ornare suscipit, tellus enim gravida mauris, a maximus quam ipsum vel nisi.",
    ],
    imagem: {
      src: "https://wallpapers.com/images/high/sonic-the-hedgehog-pictures-s138j937t5yrvgdy.webp",
      alt: "Sonic, o ouriço azul",
    },
  };

  return (
    <>
      <Header />
      <main>
        <Article
          titulo={dadosPost.titulo}
          autor={dadosPost.autor}
          data={dadosPost.data}
          conteudo={dadosPost.conteudo}
          imagem={dadosPost.imagem}
        />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
