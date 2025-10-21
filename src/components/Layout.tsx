import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './LayoutComponents';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <main>{children}</main>
      <footer className="bg-gray-800 text-white py-8">
        <Container>
          <div className="flex justify-between">
            <p>&copy; 2025 Führerschein Website</p>
            <div className="space-x-4">
              <Link to="/impressum" className="hover:text-blue-400">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-blue-400">Datenschutz</Link>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;