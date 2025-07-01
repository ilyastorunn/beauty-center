import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles, Scissors, Palette, Heart, Clock, DollarSign } from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Anti-Aging Facial',
    category: 'Facial',
    price: 150,
    duration: 75,
    description: 'Advanced anti-aging treatment with peptides and vitamin C to reduce fine lines and restore youthful glow.',
    image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Sparkles className="h-5 w-5" />,
    popular: true,
  },
  {
    id: 2,
    name: 'Hydrating Facial',
    category: 'Facial',
    price: 120,
    duration: 60,
    description: 'Deep hydration treatment with hyaluronic acid and natural moisturizers for dry skin.',
    image: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    id: 3,
    name: 'Acne Treatment Facial',
    category: 'Facial',
    price: 135,
    duration: 60,
    description: 'Targeted treatment for acne-prone skin with salicylic acid and LED light therapy.',
    image: 'https://images.pexels.com/photos/3985321/pexels-photo-3985321.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Sparkles className="h-5 w-5" />,
  },
  {
    id: 4,
    name: 'Hair Cut & Style',
    category: 'Hair',
    price: 85,
    duration: 90,
    description: 'Professional haircut and styling with consultation to find your perfect look.',
    image: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Scissors className="h-5 w-5" />,
  },
  {
    id: 5,
    name: 'Hair Color & Highlights',
    category: 'Hair',
    price: 180,
    duration: 180,
    description: 'Full color service with premium organic hair products and personalized color matching.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Scissors className="h-5 w-5" />,
    popular: true,
  },
  {
    id: 6,
    name: 'Hair Treatment',
    category: 'Hair',
    price: 75,
    duration: 45,
    description: 'Deep conditioning treatment to repair damaged hair and restore natural shine.',
    image: 'https://images.pexels.com/photos/3993434/pexels-photo-3993434.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Scissors className="h-5 w-5" />,
  },
  {
    id: 7,
    name: 'Gel Manicure',
    category: 'Nails',
    price: 45,
    duration: 30,
    description: 'Long-lasting gel manicure with wide selection of colors and nail art options.',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: 8,
    name: 'Pedicure',
    category: 'Nails',
    price: 55,
    duration: 45,
    description: 'Relaxing pedicure with foot massage, exfoliation, and polish application.',
    image: 'https://images.pexels.com/photos/3997982/pexels-photo-3997982.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: 9,
    name: 'Nail Art',
    category: 'Nails',
    price: 65,
    duration: 60,
    description: 'Creative nail art designs with premium materials and intricate detailing.',
    image: 'https://images.pexels.com/photos/3997969/pexels-photo-3997969.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Palette className="h-5 w-5" />,
  },
  {
    id: 10,
    name: 'Swedish Massage',
    category: 'Massage',
    price: 90,
    duration: 60,
    description: 'Classic Swedish massage for relaxation and stress relief with essential oils.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Heart className="h-5 w-5" />,
  },
  {
    id: 11,
    name: 'Deep Tissue Massage',
    category: 'Massage',
    price: 110,
    duration: 75,
    description: 'Therapeutic deep tissue massage targeting muscle tension and chronic pain.',
    image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Heart className="h-5 w-5" />,
    popular: true,
  },
  {
    id: 12,
    name: 'Hot Stone Massage',
    category: 'Massage',
    price: 125,
    duration: 90,
    description: 'Luxurious hot stone massage for ultimate relaxation and muscle relief.',
    image: 'https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=500',
    icon: <Heart className="h-5 w-5" />,
  },
];

const categories = ['All', 'Facial', 'Hair', 'Nails', 'Massage'];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = services.filter(service => 
    selectedCategory === 'All' || service.category === selectedCategory
  );

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
              Our Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of beauty and wellness services designed to enhance your natural beauty
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? 'bg-rose-500 hover:bg-rose-600 text-white'
                    : 'border-rose-500 text-rose-500 hover:bg-rose-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
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
                          Popular
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                      {service.icon}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <DollarSign className="h-4 w-4 mr-1" />
                          <span className="text-rose-500 font-semibold text-base">${service.price}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{service.duration} min</span>
                        </div>
                      </div>
                      
                      <Button 
                        asChild 
                        className="w-full bg-rose-500 hover:bg-rose-600 text-white"
                      >
                        <Link to="/contact">
                          Book Now
                        </Link>
                      </Button>
                    </div>
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