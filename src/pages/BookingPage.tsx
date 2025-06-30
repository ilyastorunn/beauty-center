import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight, Check, Calendar as CalendarIcon, Clock, User, Phone, Mail } from 'lucide-react';

const services = [
  { id: 1, name: 'Anti-Aging Facial', price: 150, duration: 75, category: 'Facial' },
  { id: 2, name: 'Hydrating Facial', price: 120, duration: 60, category: 'Facial' },
  { id: 3, name: 'Hair Cut & Style', price: 85, duration: 90, category: 'Hair' },
  { id: 4, name: 'Hair Color & Highlights', price: 180, duration: 180, category: 'Hair' },
  { id: 5, name: 'Gel Manicure', price: 45, duration: 30, category: 'Nails' },
  { id: 6, name: 'Pedicure', price: 55, duration: 45, category: 'Nails' },
  { id: 7, name: 'Swedish Massage', price: 90, duration: 60, category: 'Massage' },
  { id: 8, name: 'Deep Tissue Massage', price: 110, duration: 75, category: 'Massage' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function BookingPage() {
  const location = useLocation();
  const selectedService = location.state?.selectedService;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: selectedService || null,
    date: null,
    time: '',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const steps = [
    { number: 1, title: 'Select Service', icon: <User className="h-4 w-4" /> },
    { number: 2, title: 'Choose Date & Time', icon: <CalendarIcon className="h-4 w-4" /> },
    { number: 3, title: 'Your Information', icon: <Phone className="h-4 w-4" /> },
    { number: 4, title: 'Confirmation', icon: <Check className="h-4 w-4" /> }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceSelect = (service) => {
    setBookingData({ ...bookingData, service });
  };

  const handleDateSelect = (date) => {
    setBookingData({ ...bookingData, date });
  };

  const handleTimeSelect = (time) => {
    setBookingData({ ...bookingData, time });
  };

  const handleSubmit = () => {
    toast.success('Booking confirmed! We will contact you shortly to confirm your appointment.');
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.service !== null;
      case 2:
        return bookingData.date && bookingData.time;
      case 3:
        return bookingData.name && bookingData.email && bookingData.phone;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-gray-600">
            Follow these simple steps to schedule your beauty treatment
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.number
                    ? 'bg-rose-500 border-rose-500 text-white'
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    currentStep > step.number ? 'bg-rose-500' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <Progress value={(currentStep / 4) * 100} className="h-2" />
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {steps[currentStep - 1].icon}
                {steps[currentStep - 1].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <Card
                        key={service.id}
                        className={`cursor-pointer transition-all hover:shadow-md ${
                          bookingData.service?.id === service.id
                            ? 'ring-2 ring-rose-500 bg-rose-50'
                            : ''
                        }`}
                        onClick={() => handleServiceSelect(service)}
                      >
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gray-900">{service.name}</h3>
                            <Badge variant="secondary">{service.category}</Badge>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-600">
                            <span>${service.price}</span>
                            <span>{service.duration} min</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium mb-4 block">Select Date</Label>
                    <div className="flex justify-center">
                      <Calendar
                        mode="single"
                        selected={bookingData.date}
                        onSelect={handleDateSelect}
                        disabled={(date) => date < new Date() || date.getDay() === 0}
                        className="rounded-md border"
                      />
                    </div>
                  </div>
                  
                  {bookingData.date && (
                    <div>
                      <Label className="text-base font-medium mb-4 block">Available Times</Label>
                      <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                        {timeSlots.map((time) => (
                          <Button
                            key={time}
                            variant={bookingData.time === time ? 'default' : 'outline'}
                            className={`${
                              bookingData.time === time
                                ? 'bg-rose-500 hover:bg-rose-600'
                                : 'border-rose-500 text-rose-500 hover:bg-rose-50'
                            }`}
                            onClick={() => handleTimeSelect(time)}
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="notes">Special Requests (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special requests or notes for your appointment..."
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="bg-rose-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-4">Booking Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{bookingData.service?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">
                          {bookingData.date?.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{bookingData.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">{bookingData.service?.duration} minutes</span>
                      </div>
                      <div className="flex justify-between text-lg font-semibold text-rose-600 pt-2 border-t">
                        <span>Total:</span>
                        <span>${bookingData.service?.price}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><span className="font-medium">Name:</span> {bookingData.name}</p>
                      <p><span className="font-medium">Email:</span> {bookingData.email}</p>
                      <p><span className="font-medium">Phone:</span> {bookingData.phone}</p>
                      {bookingData.notes && (
                        <p><span className="font-medium">Notes:</span> {bookingData.notes}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600"
                  >
                    <Check className="h-4 w-4" />
                    Confirm Booking
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}