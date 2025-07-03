import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Calendar,
  Sparkles,
  Heart,
  Scissors,
  Palette,
} from "lucide-react";

const featuredServices = [
  {
    id: 1,
    name: "Lazer Epilasyon",
    category: "Epilasyon",
    description: "İstenmeyen tüylerden kalıcı olarak kurtulmak için en son teknoloji lazer epilasyon hizmeti.",
    image:
      "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=500",
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "Cilt Bakımı",
    category: "Cilt",
    description: "Cildinizi derinlemesine temizleyen ve canlandıran profesyonel bakım uygulamaları.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    id: 3,
    name: "İspanya Işıltısı",
    category: "Cilt",
    description: "Cildinize parlaklık ve canlılık kazandıran özel İspanya ışıltısı uygulaması.",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=500",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "Kirpik Lifting",
    category: "Kirpik",
    description: "Doğal kirpiklerinize hacim ve kıvrım kazandıran kalıcı lifting işlemi.",
    image:
      "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500",
    icon: <Scissors className="h-5 w-5" />,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Amazing service! The facial treatment was exactly what I needed. The staff is professional and caring.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 2,
    name: "Emily Davis",
    rating: 5,
    comment:
      "Love coming here! The atmosphere is so relaxing and the results are always perfect.",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
  {
    id: 3,
    name: "Maria Rodriguez",
    rating: 5,
    comment:
      "The best beauty center in town! Highly skilled professionals and luxurious treatments.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
            alt="Lüks güzellik salonu iç mekanı"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white drop-shadow-lg">Güzelliğinizi</span>
              <span className="block bg-gradient-to-r from-rose-300 to-pink-200 bg-clip-text text-transparent drop-shadow-lg">
                Keşfedin
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
            >
              Uzman ekibimizle lüks güzellik uygulamalarını deneyimleyin. Hemen randevunuzu alın ve kendinize özel bakımın tadını çıkarın.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/contact">
                  <Calendar className="mr-3 h-6 w-6" />
                  İletişime Geçin
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/services">Hizmetlerimizi Görüntüle</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En çok tercih edilen uygulamalarımızı keşfedin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="service-card h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-gray-700"
                      >
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {service.name}
                      </h3>
                      {service.icon}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-rose-500 text-rose-500 hover:bg-rose-50 hover:text-rose-600"
            >
              <Link to="/services">Tüm Hizmetlerimizi Görüntüle</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Müşterilerimizin Yorumları
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hizmetlerimizi deneyimleyen memnun müşterilerimizin yorumlarını okuyun
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "{testimonial.comment}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-rose-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Güzelliğini Keşfetmeye Hazır mısın?
            </h2>
            <p className="text-lg text-rose-100 max-w-2xl mx-auto">
              Binlerce mutlu müşterimiz arasına katılın, doğal güzelliğinizi birlikte ortaya çıkaralım. Hemen randevunuzu alın!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-rose-500 hover:bg-gray-100 px-8 py-3 text-lg"
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Bizimle İletişime Geçin
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
