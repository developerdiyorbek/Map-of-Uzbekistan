import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-4 my-4 ml-2">
      <button
        onClick={() => changeLanguage("en")}
        className={`flex items-center px-2 py-1 border rounded transition-colors ${
          i18n.language === "en" ? "bg-gray-100" : "hover:bg-gray-100"
        }`}
      >
        <img src="/ukFLag.svg" alt="eng" width={30} height={30} />
      </button>
      <button
        onClick={() => changeLanguage("uz")}
        className={`flex items-center px-2 py-1 border rounded transition-colors ${
          i18n.language === "uz" ? "bg-gray-100" : "hover:bg-gray-100"
        }`}
      >
        <img src="/uzFlag.svg" alt="eng" width={30} height={30} />
      </button>
      <button
        onClick={() => changeLanguage("ru")}
        className={`flex items-center px-2 py-1 border rounded transition-colors ${
          i18n.language === "ru" ? "bg-gray-100" : "hover:bg-gray-100"
        }`}
      >
        <img src="/ruFlag.svg" alt="eng" width={30} height={30} />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
