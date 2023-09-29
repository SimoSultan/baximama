import { ContentContainer } from "./components/content/ContentContainer";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Menu } from "./components/menu/Menu";

function App() {
  return (
    <>
      <Header />
      <ContentContainer />
      <Menu />
      <Footer />
    </>
  );
}

export default App;
