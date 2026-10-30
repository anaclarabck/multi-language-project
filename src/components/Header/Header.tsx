import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslations } from "next-intl";

function Header() {
  const t = useTranslations("Header");
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1 sm:px-6">
        <h1 className="text-xl font-medium">{t("title")}</h1>
        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
