import React, { useEffect, useState } from 'react';

const RETELL_SCRIPT_ID = 'retell-widget';
const RETELL_WIDGET_TIMEOUT = 12000;

const RetellChatWidget = () => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cancelled = false;
    let loadTimeout;
    let autoOpenTimeout;
    let observer;
    const script = document.getElementById(RETELL_SCRIPT_ID);

    const applyWidgetStyles = () => {
      const root = document.getElementById('retell-widget-root');
      if (!root) return false;

      const shadowHost = [root, ...root.querySelectorAll('*')].find(
        (element) => element.shadowRoot,
      );
      const shadowRoot = shadowHost?.shadowRoot;
      if (shadowRoot && !shadowRoot.getElementById('retell-fab-sizing-style')) {
        const style = document.createElement('style');
        style.id = 'retell-fab-sizing-style';
        style.textContent = `
          [class*="fabBase"][class*="fabChat"] {
            box-sizing: border-box !important;
            width: max-content !important;
            min-width: 200px !important;
            max-width: calc(100vw - 32px) !important;
            padding-inline: 16px !important;
            overflow: visible !important;
            white-space: nowrap !important;
          }

          [class*="fabText"] {
            display: block !important;
            flex: 0 0 auto !important;
            width: max-content !important;
            min-width: max-content !important;
            max-width: calc(100vw - 80px) !important;
            overflow: visible !important;
            white-space: nowrap !important;
          }
        `;
        shadowRoot.appendChild(style);
      }

      return true;
    };

    const markReady = () => {
      if (!applyWidgetStyles()) return false;
      if (!cancelled) setStatus('ready');
      window.clearTimeout(loadTimeout);
      observer?.disconnect();
      return true;
    };

    const markError = (message) => {
      if (cancelled) return;
      window.clearTimeout(loadTimeout);
      observer?.disconnect();
      console.error(message);
      setStatus('error');
    };

    if (!script) {
      markError('Retell AI widget script is missing from the page.');
      return undefined;
    }

    autoOpenTimeout = window.setTimeout(() => {
      script.dataset.autoOpen = 'true';
    }, 60000);

    observer = new MutationObserver(markReady);
    observer.observe(document.body, { childList: true, subtree: true });

    const handleLoad = () => {
      markReady();
    };

    const handleError = () => {
      markError('Retell AI widget script request failed.');
    };

    script.addEventListener('load', handleLoad, { once: true });
    script.addEventListener('error', handleError, { once: true });

    loadTimeout = window.setTimeout(() => {
      markError('Retell AI widget did not initialize before the timeout.');
    }, RETELL_WIDGET_TIMEOUT);

    markReady();

    return () => {
      cancelled = true;
      window.clearTimeout(loadTimeout);
      window.clearTimeout(autoOpenTimeout);
      observer?.disconnect();
      script.removeEventListener('load', handleLoad);
      script.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div id="retell-widget-container" aria-live="polite">
      {status === 'error' && (
        <div
          role="alert"
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            zIndex: 9999,
            padding: '10px 15px',
            borderRadius: '8px',
            background: 'white',
            color: '#e53e3e',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          El chat no está disponible temporalmente.
        </div>
      )}
    </div>
  );
};

export default RetellChatWidget;
