import { getSocialLinks } from '@/lib/social';
import { WhatsappIcon } from './SocialIcons';

// Botón flotante de WhatsApp (abajo a la izquierda, para no tapar el botón
// de "subir"). Se oculta solo si el número se deja vacío en el panel.
const WhatsAppFloat = async () => {
  const { whatsapp } = await getSocialLinks();
  if (!whatsapp) return null;

  return (
    <a
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <WhatsappIcon size={28} />
    </a>
  );
};

export default WhatsAppFloat;
