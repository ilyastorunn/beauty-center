import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Users, Clock, Heart, Star, CheckCircle } from 'lucide-react';

const stats = [
  { icon: <Users className="h-6 w-6" />, label: 'Happy Clients', value: '10,000+' },
  { icon: <Clock className="h-6 w-6" />, label: 'Years Experience', value: '15+' },
  { icon: <Award className="h-6 w-6" />, label: 'Awards Won', value: '25+' },
  { icon: <Heart className="h-6 w-6" />, label: 'Satisfaction Rate', value: '98%' },
];

const teamMembers = [
  {
    name: 'Sarah Williams',
    role: 'Founder & Lead Aesthetician',
    specialties: ['Anti-Aging', 'Acne Treatment', 'Chemical Peels'],
    experience: '15 years',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Sarah founded Bella Beauty with a vision to provide luxury beauty treatments in a welcoming environment.'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Master Hair Stylist',
    specialties: ['Color Expert', 'Bridal Styling', 'Hair Extensions'],
    experience: '12 years',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Maria brings creativity and precision to every cut and color, specializing in the latest trends and techniques.'
  },
  {
    name: 'Jessica Chen',
    role: 'Nail Artist & Technician',
    specialties: ['Nail Art', 'Gel Extensions', 'Manicure/Pedicure'],
    experience: '8 years',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Jessica is known for her artistic nail designs and attention to detail, creating beautiful nail art for every occasion.'
  },
  {
    name: 'Amanda Foster',
    role: 'Licensed Massage Therapist',
    specialties: ['Deep Tissue', 'Swedish', 'Hot Stone'],
    experience: '10 years',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Amanda specializes in therapeutic massage techniques to help clients relax and recover from daily stress.'
  },
];

const certifications = [
  'State Board Certified Aesthetician',
  'Advanced Chemical Peel Certification',
  'Microblading Certification',
  'Lash Extension Specialist',
  'Licensed Massage Therapy',
  'Organic Skincare Specialist'
];

const values = [
  {
    title: 'Excellence',
    description: 'We strive for perfection in every service we provide, using only the finest products and techniques.',
    icon: <Star className="h-6 w-6 text-rose-500" />
  },
  {
    title: 'Integrity',
    description: 'We believe in honest, transparent service and building lasting relationships with our clients.',
    icon: <CheckCircle className="h-6 w-6 text-rose-500" />
  },
  {
    title: 'Innovation',
    description: 'We stay current with the latest beauty trends and technologies to offer cutting-edge treatments.',
    icon: <Award className="h-6 w-6 text-rose-500" />
  },
  {
    title: 'Wellness',
    description: 'We focus on holistic beauty that enhances both your appearance and your well-being.',
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
              About Bella Beauty
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 15 years, we've been dedicated to helping our clients look and feel their absolute best. 
              Our team of skilled professionals combines expertise with genuine care to deliver exceptional beauty experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Bella Beauty was born from a simple belief: everyone deserves to feel beautiful and confident in their own skin. 
                  What started as a small neighborhood salon has grown into a premier beauty destination, but our core values remain the same.
                </p>
                <p>
                  We believe that true beauty comes from within, and our role is to help enhance your natural radiance. 
                  Our team of expert professionals is committed to providing personalized care that makes you feel pampered, 
                  refreshed, and absolutely beautiful.
                </p>
                <p>
                  From the moment you walk through our doors, you'll experience the difference that comes from working with 
                  people who truly care about your beauty journey. We're not just here to provide services – we're here to 
                  help you discover your most confident, beautiful self.
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
                  alt="Beauty salon interior"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the exceptional experience we provide
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented professionals are passionate about beauty and dedicated to making you look and feel amazing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-rose-500 font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Experience:</span> {member.experience}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
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
              Certifications & Credentials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our team maintains the highest standards through continuous education and professional certifications
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