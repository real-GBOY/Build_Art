/** @format */

import { WhatsappIcon } from '../icons/whatsapp';

const WHATSAPP_NUMBER = '201039529116';

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl"
    >
      <WhatsappIcon className="h-8 w-8" />
    </a>
  );
}
