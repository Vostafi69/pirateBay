import { MainPage } from "@/pages";
import { MainLayout } from "./layouts/mainLayout";
import { Header } from "@/widgets";

function App() {
  return (
    <MainLayout headerSlot={<Header />}>
      <MainPage />
    </MainLayout>
  );
}

export default App;
