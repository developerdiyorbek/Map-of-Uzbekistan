import { useTranslation } from "react-i18next";
import MapComponent from "./components/MapSection";
import "./utils/i18n";
import LanguageSwitcher from "./components/LanguageSwitcher";

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <LanguageSwitcher />
      <h1 className="text-3xl max-md:text-xl text-center font-bold text-gray-800 my-6">
        {t("title")}
      </h1>
      <MapComponent />
    </div>
  );
}

export default App;
