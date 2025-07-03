import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Bizi Ziyaret Edin",
    details: ["Esmira Plaza", "Selçuklu, Konya"],
    action: "Yol tarifi alın",
    link: "https://maps.app.goo.gl/VGrHKqe6zNQgMgYS7"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Bizi Arayın",
    details: ["(507) 404-6079", "Pazartesi - Cumartesi"],
    action: "Bizi Arayın",
    link: "tel:+905074046079"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Bize Email Gönderin",
    details: ["nihaltorunn@gmail.com", "24 saat içinde dönüş yapıyoruz"],
    action: "Email Gönder",
    link: "mailto:nihaltorunn@gmail.com"
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "WhatsApp",
    details: ["(507) 404-6079", "Anında mesajlaşma"],
    action: "Mesaj Gönder",
    link: "https://wa.me/905074046079"
  },
];

const businessHours = [
  { day: "Pazartesi", hours: "9:00 - 18:00" },
  { day: "Salı", hours: "9:00 - 18:00" },
  { day: "Çarşamba", hours: "9:00 - 18:00" },
  { day: "Perşembe", hours: "9:00 - 18:00" },
  { day: "Cuma", hours: "9:00 - 18:00" },
  { day: "Cumartesi", hours: "8:00 - 18:00" },
  { day: "Pazar", hours: "Kapalı" },
];

const socialLinks = [
  { icon: <Instagram className="h-5 w-5" />, name: "Instagram", url: "https://www.instagram.com/nihalreyyanguzellikestetik/" },
  { icon: <Facebook className="h-5 w-5" />, name: "Facebook", url: "#" },
  { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              İletişim
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sizden haber almaktan mutluluk duyarız. Randevu almak, sorularınızı sormak veya sadece merhaba demek için bizimle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-rose-100 rounded-full text-rose-500">
                        {info.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {info.title}
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-rose-500 text-rose-500 hover:bg-rose-50 hover:text-rose-500"
                      asChild
                    >
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Bizimle İletişime Geç</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Ad Soyad *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Adınız ve soyadınız"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-Posta Adresi *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Telefon Numarası</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject">Konu *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Konu başlığı"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Mesaj *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Size nasıl yardımcı olabiliriz?"
                        rows={6}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                    >
                      Mesaj Gönder
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Business Hours & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-rose-500" />
                    Çalışma Saatleri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-900">
                          {schedule.day}
                        </span>
                        <span
                          className={`text-sm ${
                            schedule.hours === "Kapalı"
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Adresimiz</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.5512279498944!2d32.5015484!3d37.8941765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0858e3bccb053%3A0x31d06cad012ebcf7!2sEsmira%20Office%20Center!5e0!3m2!1str!2str!4v1751536176290!5m2!1str!2str"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-rose-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">
                          Nihal Reyyan Güzellik
                        </p>
                        <p className="text-gray-600">Esmira Plaza</p>
                        <p className="text-gray-600">Selçuklu, Konya</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle>Bizi Takip Edin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mt-0">
                    Güzellik ipuçları, özel teklifler ve daha fazlası için <br /> sosyal medya hesaplarımızı takip edin!
                  </p>
                  <div className="flex items-center justify-center gap-4 mt-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="border-rose-500 text-rose-500 hover:bg-rose-50"
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                          {social.icon}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
