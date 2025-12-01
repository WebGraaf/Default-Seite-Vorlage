import { Link } from 'react-router-dom';

type ConsentBannerProps = {
  isVisible: boolean;
  onAccept: () => void;
  onDecline: () => void;
  onOpenSettings: () => void;
};

export const ConsentBanner = ({ isVisible, onAccept, onDecline, onOpenSettings }: ConsentBannerProps) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card-bg shadow-2xl border-t border-card-border">
      {/* Mobile-optimized container with proper padding */}
      <div className="container mx-auto px-4 py-5 sm:px-6 sm:py-6">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-text-heading flex items-center gap-2">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Datenschutzeinstellungen
          </h2>
        </div>

        {/* Main content */}
        <div className="space-y-4">
          {/* Description text - GDPR compliant */}
          <div className="text-sm sm:text-base text-text-body leading-relaxed">
            <p className="mb-2">
              Wir nutzen Cookies und ähnliche Technologien auf unserer Website. Einige von ihnen sind essenziell,
              während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern.
            </p>
            <p className="mb-2">
              Wenn Sie „Alle akzeptieren" klicken, stimmen Sie der Verwendung von Google Maps zu.
              Dabei werden personenbezogene Daten (z.B. Ihre IP-Adresse) an Google LLC in die USA übertragen,
              wo möglicherweise kein angemessenes Datenschutzniveau besteht.
            </p>
            <p className="text-text-muted text-xs sm:text-sm">
              Weitere Informationen finden Sie in unserer{' '}
              <Link to="/datenschutz" className="text-primary-600 hover:text-primary-700 underline">
                Datenschutzerklärung
              </Link>
              {' '}und im{' '}
              <Link to="/impressum" className="text-primary-600 hover:text-primary-700 underline">
                Impressum
              </Link>.
            </p>
          </div>

          {/* Essential cookies info */}
          <div className="bg-secondary-50 rounded-lg p-3 sm:p-4 border border-secondary-200">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-medium text-text-heading">Essenzielle Cookies</p>
                <p className="text-xs text-text-muted mt-0.5">
                  Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
                </p>
              </div>
            </div>
          </div>

          {/* Buttons - Mobile stacked, Desktop inline */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            {/* Decline button */}
            <button
              onClick={onDecline}
              className="w-full sm:w-auto order-3 sm:order-1 px-5 py-2.5 sm:py-2 rounded-lg text-sm font-medium
                         bg-secondary-100 text-secondary-700 hover:bg-secondary-200
                         border border-secondary-300 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-secondary-400 focus:ring-offset-2"
            >
              Nur Essenzielle
            </button>
            
            {/* Settings button */}
            <button
              onClick={onOpenSettings}
              className="w-full sm:w-auto order-2 px-5 py-2.5 sm:py-2 rounded-lg text-sm font-medium
                         text-btn-outline-fg border border-btn-outline-border
                         hover:bg-secondary-50 transition-colors duration-200
                         focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              Einstellungen anpassen
            </button>
            
            {/* Accept button - Primary action */}
            <button
              onClick={onAccept}
              className="w-full sm:w-auto sm:ml-auto order-1 sm:order-3 px-5 py-2.5 sm:py-2 rounded-lg text-sm font-medium
                         bg-btn-solid-bg text-btn-solid-fg hover:bg-btn-solid-hover
                         transition-colors duration-200 shadow-sm
                         focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2"
            >
              Alle akzeptieren
            </button>
          </div>

          {/* Legal note */}
          <p className="text-xs text-text-muted text-center sm:text-left pt-1">
            Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.
            Klicken Sie dazu auf „Privatsphäre" im Footer.
          </p>
        </div>
      </div>
    </div>
  );
};