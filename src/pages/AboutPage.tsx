import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, Heart, Star, CheckCircle } from 'lucide-react';

const stats = [
  { icon: <Users className="h-6 w-6" />, label: 'Mutlu Müşteri', value: '10,000+' },
  { icon: <Clock className="h-6 w-6" />, label: 'Yıllık Deneyim', value: '15+' },
  { icon: <Award className="h-6 w-6" />, label: 'Ödül', value: '25+' },
  { icon: <Heart className="h-6 w-6" />, label: 'Memnuniyet Oranı', value: '98%' },
];

const certifications = [
  'Sağlık Bakanlığı Onaylı Güzellik Uzmanı',
  'İleri Seviye Cilt Bakımı Sertifikası',
  'Lazer Epilasyon Uzmanlığı',
  'Kirpik Lifting Sertifikası',
  'Profesyonel Makyaj Uzmanlığı',
  'Organik Cilt Bakımı Sertifikası'
];

const values = [
  {
    title: 'Mükemmellik',
    description: 'En kaliteli ürünleri ve teknikleri kullanarak her hizmetimizde mükemmelliği hedefliyoruz.',
    icon: <Star className="h-6 w-6 text-rose-500" />
  },
  {
    title: 'Dürüstlük',
    description: 'Müşterilerimizle şeffaf ve dürüst bir ilişki kurarak, kalıcı güven bağları oluşturuyoruz.',
    icon: <CheckCircle className="h-6 w-6 text-rose-500" />
  },
  {
    title: 'Yenilikçilik',
    description: 'En son güzellik trendlerini ve teknolojilerini takip ederek, modern tedaviler sunuyoruz.',
    icon: <Award className="h-6 w-6 text-rose-500" />
  },
  {
    title: 'Sağlık',
    description: 'Hem görünüşünüzü hem de genel sağlığınızı iyileştiren bütünsel güzellik yaklaşımını benimsiyoruz.',
    icon: <Heart className="h-6 w-6 text-rose-500" />
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nihal Reyyan Güzellik Hakkında
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              15 yılı aşkın süredir, müşterilerimizin en iyi görünmelerine ve hissetmelerine yardımcı oluyoruz. 
              Uzman ekibimiz, uzmanlığı ve içten ilgiyi birleştirerek olağanüstü güzellik deneyimleri sunuyor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-rose-100 rounded-full text-rose-500">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hikayemiz
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nihal Reyyan Güzellik, basit bir inançla doğdu: herkes kendi cildinde güzel ve kendinden emin hissetmeyi hak eder. 
                  Küçük bir mahalle güzellik salonundan başlayan yolculuğumuz, bugün prestijli bir güzellik merkezine dönüştü, 
                  ancak temel değerlerimiz aynı kaldı.
                </p>
                <p>
                  Gerçek güzelliğin içten geldiğine ve bizim rolümüzün doğal ışıltınızı ortaya çıkarmak olduğuna inanıyoruz. 
                  Uzman ekibimiz, kendinizi şımartılmış, tazelenmiş ve kesinlikle güzel hissetmenizi sağlayan 
                  kişiselleştirilmiş bakım sunmaya kendini adamıştır.
                </p>
                <p>
                  Kapımızdan içeri adım attığınız andan itibaren, güzellik yolculuğunuz hakkında gerçekten önemseyerek çalışan 
                  insanlarla çalışmanın farkını hissedeceksiniz. Sadece hizmet sunmak için değil, en güvenli ve güzel halinizi 
                  keşfetmenize yardımcı olmak için buradayız.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Güzellik salonu iç mekanı"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Değerlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bu temel prensipler, yaptığımız her şeye rehberlik eder ve sunduğumuz olağanüstü deneyimi şekillendirir
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-6">
                  <CardContent className="space-y-4">
                    <div className="flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sertifikalar ve Yeterlilikler
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ekibimiz sürekli eğitim ve profesyonel sertifikalarla en yüksek standartları korumaktadır
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-rose-500 flex-shrink-0" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}