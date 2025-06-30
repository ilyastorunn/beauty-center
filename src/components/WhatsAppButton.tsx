import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    const message = 'Hi! I would like to book an appointment at Bella Beauty.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg whatsapp-pulse"
      size="icon"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}