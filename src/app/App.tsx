import { MainPage } from "@/pages";
import { MainLayout } from "./layouts/mainLayout";
import { Footer, Header } from "@/widgets";

function App() {
  return (
    <MainLayout headerSlot={<Header />} footerSlot={<Footer />}>
      <MainPage />
    </MainLayout>
  );
}

export default App;
