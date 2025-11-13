import { Helmet } from "react-helmet";
import { useLanguage } from '../contexts/LanguageContext';

export default function Seo({ title, description }) {
  const { language } = useLanguage();
  
  return (
    <Helmet>
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
