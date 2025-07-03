import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    name: 'Lazer Epilasyon',
    category: 'Epilasyon',
    description: 'En son teknoloji lazer epilasyon cihazlarıyla istenmeyen tüylerden kalıcı olarak kurtulun. Tüm cilt tiplerine uygun, güvenli ve etkili çözüm.',
    image: 'https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=500',
    popular: true,
  },
  {
    id: 2,
    name: 'Cilt Bakımı',
    category: 'Cilt',
    description: 'Cildinizin ihtiyacına özel olarak tasarlanmış profesyonel cilt bakım uygulamaları. Derin temizlik, nemlendirme ve canlandırma.',
    image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 3,
    name: 'İspanya Işıltısı',
    category: 'Cilt',
    description: 'Cildinize doğal bir parlaklık ve ışıltı kazandıran özel İspanya ışıltısı uygulaması. Anında fark edilir sonuçlar.',
    image: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 4,
    name: 'Anne Bakımı',
    category: 'Bakım',
    description: 'Hamilelik sonrası cilt problemleri ve bakımı için özel olarak tasarlanmış anne bakım programları.',
    image: 'https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 5,
    name: 'Leke Bakımı',
    category: 'Cilt',
    description: 'Güneş lekeleri, yaşlılık lekeleri ve hiperpigmentasyon tedavisi için özel bakım uygulamaları.',
    image: 'https://images.pexels.com/photos/3997373/pexels-photo-3997373.jpeg?auto=compress&cs=tinysrgb&w=500',
    popular: true,
  },
  {
    id: 6,
    name: 'Anti-Aging',
    category: 'Cilt',
    description: 'Yaşlanma karşıtı özel bakım ve tedaviler. Kırışıklık görünümünü azaltma ve cilt gençleştirme uygulamaları.',
    image: 'https://images.pexels.com/photos/3997382/pexels-photo-3997382.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
  {
    id: 7,
    name: 'Kirpik Lifting',
    category: 'Kirpik',
    description: 'Doğal kirpiklerinize dolgunluk ve kıvrım kazandıran profesyonel kirpik lifting uygulaması.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500',
  },
];

export default function ServicesPage() {
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
              Hizmetlerimiz
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Doğal güzelliğinizi ortaya çıkarmak için tasarlanmış kapsamlı güzellik ve bakım hizmetlerimizi keşfedin
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="service-card h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {service.category}
                      </Badge>
                      {service.popular && (
                        <Badge className="bg-rose-500 text-white">
                          Popüler
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    
                    <Button 
                      asChild 
                      className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                    >
                      <Link to="/contact">
                        Randevu Al
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}