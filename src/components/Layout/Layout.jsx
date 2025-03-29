
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';  // Если нужна стилизация

const Layout = () => {
  return (
    <div className="layout">
      <Header />  {/* Ваш хедер */}
      <main className="layout__content">
        <Outlet />  {/* Здесь будет рендериться контент страниц */}
      </main>
      <Footer />  {/* Ваш футер */}
    </div>
  );
};

export default Layout;