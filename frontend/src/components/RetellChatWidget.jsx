import { useEffect } from 'react';

const RETELL_SCRIPT_ID = 'retell-widget';

const RetellChatWidget = () => {
  useEffect(() => {
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

    const handleWidgetMutation = () => {
      if (applyWidgetStyles()) observer?.disconnect();
    };

    const handleError = () => {
      observer?.disconnect();
      console.error('Retell AI widget script request failed.');
    };

    if (!script) {
      console.error('Retell AI widget script is missing from the page.');
      return undefined;
    }

    observer = new MutationObserver(handleWidgetMutation);
    observer.observe(document.body, { childList: true, subtree: true });

    script.addEventListener('error', handleError, { once: true });
    handleWidgetMutation();

    return () => {
      observer?.disconnect();
      script.removeEventListener('error', handleError);
    };
  }, []);

  return null;
};

export default RetellChatWidget;
