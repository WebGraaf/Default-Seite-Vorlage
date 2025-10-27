import React from 'react';
import { Link } from 'react-router-dom';
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
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
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;