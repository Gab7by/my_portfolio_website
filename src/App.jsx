import { ThemeProvider } from "./context/ThemeContext";
import { AppRouter } from "./router/AppRouter";
import { PageLoader } from "./layout/PageLoader";

function App() {
  return (
    <ThemeProvider>
      <PageLoader />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
