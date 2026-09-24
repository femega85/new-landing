import React, { useEffect, useState } from 'react';

const RetellChatWidget = () => {
  const [widgetLoaded, setWidgetLoaded] = useState(false);
  const [error, setError] = useState(null);

  // Configuration - direct values provided for the live Retell agent
  const publicKey = 'public_key_ef8cd85b088e9c6a7f395';
  const agentId = 'agent_3ea96bf2f35bacfb29d9d25d64';
  const agentVersion = 0;
  const title = 'Chat con FEMEGA';
  const customColor = '#f97316'; // Orange color matching FEMEGA branding
  const botName = 'Asistente FEMEGA';

  useEffect(() => {
    // Check if script already exists to prevent duplicate loading
    const existingScript = document.getElementById('retell-widget');
    if (existingScript) {
      setWidgetLoaded(true);
      return;
    }

    // Validate required environment variables
    if (!publicKey || !agentId) {
      console.error('Retell AI configuration missing. Please check environment variables.');
      setError('Configuración del asistente no disponible');
      return;
    }

    try {
      // Create and append the Retell widget script
      const script = document.createElement('script');
      script.id = 'retell-widget';
      script.src = 'https://dashboard.retellai.com/retell-widget.js';
      script.type = 'module';
      script.async = true;

      // Set all configuration attributes
      script.setAttribute('data-public-key', publicKey);
      script.setAttribute('data-agent-id', agentId);
      script.setAttribute('data-agent-version', agentVersion.toString());
      script.setAttribute('data-title', title);
      script.setAttribute('data-bot-name', botName);
      script.setAttribute('data-color', customColor);

      // Handle script load events
      script.onload = () => {
        setWidgetLoaded(true);
        console.log('Retell AI widget loaded successfully');
        
        // Add custom CSS to position Retell widget on the right
        const style = document.createElement('style');
        style.id = 'retell-widget-custom-style';
        style.innerHTML = `
          /* Position Retell AI widget in bottom right */
          retell-widget {
            position: fixed !important;
            bottom: 20px !important;
            right: 20px !important;
            z-index: 9998 !important;
          }
        `;
        document.head.appendChild(style);
      };

      script.onerror = (err) => {
        console.error('Failed to load Retell widget:', err);
        setError('No se pudo cargar el asistente de voz');
      };

      // Append to document body
      document.body.appendChild(script);

      return () => {
        // Cleanup: Remove script when component unmounts
        const scriptElement = document.getElementById('retell-widget');
        if (scriptElement) {
          scriptElement.remove();
        }
        const styleElement = document.getElementById('retell-widget-custom-style');
        if (styleElement) {
          styleElement.remove();
        }
      };
    } catch (err) {
      console.error('Error initializing Retell widget:', err);
      setError('Error al inicializar el asistente');
    }
  }, [publicKey, agentId]); // Add dependencies to fix ESLint warning

  return (
    <div id="retell-widget-container">
      {!widgetLoaded && !error && (
        <div style={{ 
          position: 'fixed', 
          bottom: '90px', 
          right: '20px', 
          fontSize: '12px', 
          color: '#999',
          background: 'white',
          padding: '10px 15px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 9999
        }}>
          Cargando asistente de voz AI...
        </div>
      )}
      {error && (
        <div style={{ 
          position: 'fixed', 
          bottom: '90px', 
          right: '20px', 
          fontSize: '12px', 
          color: '#e53e3e',
          background: 'white',
          padding: '10px 15px',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          zIndex: 9999
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default RetellChatWidget;
