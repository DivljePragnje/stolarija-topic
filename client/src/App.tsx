import Footer from "./components/Footer/Footer";
import DesktopHeader from "./components/headers/DeskopHeader/DesktopHeader";
import { HomePage } from "./pages";

function App() {
  return (
    <div>
      <header>
        <DesktopHeader />
      </header>
      <main>
        <HomePage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
