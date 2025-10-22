import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Star, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import logo from '../default_images/logo_default.webp';
import {
  Select,
  Checkbox,
  Radio,
  Switch,
  DatePicker,
  Input,
  FormResult,
  HoneypotField,
  FormLoading,
} from '../components/FormComponents';
import { Tooltip, Popover, CommandPalette, useCommandPalette } from '../components/MicroInteractions';
import { ImageGallery, BeforeAfterSlider, VideoPlayer } from '../components/MediaComponents';
import { Banner } from '../components/Banner';
import { Modal } from '../components/Modal';
import { Drawer } from '../components/Drawer';
import { Toast } from '../components/Toast';
import { AccordionSection } from '../components/AccordionSection';
import { ItemList } from '../components/ItemList';
import { SortableTable } from '../components/SortableTable';
import { PricingCards } from '../components/PricingCards';
import { TabSection } from '../components/TabSection';
import { StandortSection } from '../components/StandortSection';
import { TextAnimations } from '../components/TextAnimations';
import { KPISection } from '../components/KPISection';
import { KeyValueSection } from '../components/KeyValueSection';
import { AnimatedTextDemo } from '../components/AnimatedText';

const Components: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { isOpen: commandPaletteOpen, close: closeCommandPalette } = useCommandPalette();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  const galleryImages = [
    'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const features = [
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      stats: '2.5M+',
      color: 'bg-white',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
      stats: '50K+',
      color: 'bg-white',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      stats: '99.9%',
      color: 'bg-white',
    },
  ];

  const testimonials = [
    {
      name: 'Alexandra Mueller',
      role: 'Product Manager',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      name: 'Marcus Schmidt',
      role: 'Tech Lead',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 5,
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Designer',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
      rating: 4,
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
    },
  ];

  return (
    <div>
      <CommandPalette isOpen={commandPaletteOpen} onClose={closeCommandPalette} />


      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="border border-blue-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group bg-transparent">
                <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-blue-200`}>
                  <feature.icon className="w-7 h-7 text-blue-600" />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-neutral-900">{feature.title}</h3>
                  <Tooltip content="Learn more">
                    <button className="text-neutral-400 hover:text-blue-600 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </Tooltip>
                </div>
                <p className="text-neutral-600 mb-4">{feature.description}</p>
                <div className="text-3xl font-bold text-blue-600">{feature.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Form Components</h2>
          <div className="max-w-2xl mx-auto">
            <div className="border border-blue-200 rounded-xl p-8 bg-white">
              {formState === 'idle' && (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <HoneypotField />
                  <Input label="Full Name" placeholder="John Doe" required error="Name is required" />
                  <Input label="Email Address" type="email" placeholder="john@example.com" required />
                  <Select
                    label="Select Your Country"
                    options={[
                      { value: 'de', label: 'Germany' },
                      { value: 'at', label: 'Austria' },
                      { value: 'ch', label: 'Switzerland' },
                      { value: 'us', label: 'United States' },
                    ]}
                  />
                  <DatePicker label="Preferred Date" />

                  <div className="space-y-4">
                    <p className="text-sm font-medium text-neutral-700">Preferences</p>
                    <Checkbox
                      label="Subscribe to newsletter"
                      description="Get weekly updates about new features and products"
                    />
                    <Switch
                      label="Enable notifications"
                      description="Receive real-time alerts about important updates"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-neutral-700 mb-3">Choose Your Plan</p>
                    <Radio
                      name="plan"
                      options={[
                        { value: 'basic', label: 'Basic', description: 'Perfect for individuals' },
                        { value: 'pro', label: 'Professional', description: 'For small teams' },
                        { value: 'enterprise', label: 'Enterprise', description: 'For large organizations' },
                      ]}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Submit Form
                  </button>
                </form>
              )}

              {formState === 'loading' && <FormLoading message="Processing your request..." />}
            </div>
          </div>
        </div>
      </section>

      {formState === 'success' && (
        <FormResult
          type="success"
          title="Success!"
          message="Your form has been submitted successfully. We'll get back to you soon."
          onClose={() => setFormState('idle')}
        />
      )}

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Before & After Comparison</h2>
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200"
              afterImage="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Pricing & Features</h2>
          <PricingCards />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Tabs & Accordions</h2>
          <div className="space-y-12">
            <TabSection />
            <AccordionSection />
          </div>
        </div>
      </section>

      <StandortSection />

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4 text-center">Image Gallery</h2>
          <p className="text-neutral-600 text-center mb-8">Click any image to open the lightbox viewer</p>
          <ImageGallery images={galleryImages} />
        </div>
      </section>


      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border border-blue-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-neutral-900">{testimonial.name}</h4>
                    <p className="text-sm text-neutral-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-neutral-600">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Data Display Components</h2>
          <div className="space-y-12">
            <ItemList />
            <SortableTable />
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 text-slate-900">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg text-slate-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => console.log('Primary action')}
                  className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Start Free Trial
                </button>
                <button
                  onClick={() => console.log('Secondary action')}
                  className="px-8 py-4 bg-transparent border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-900/10 transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Analytics & Data</h2>
          <div className="space-y-12">
            <KPISection />
            <KeyValueSection />
          </div>
        </div>
      </section>


      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Text Animations</h2>
          <TextAnimations />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Animated Text</h2>
          <div className="text-center">
            <AnimatedTextDemo />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-neutral-900 mb-4">Product</h3>
              <div className="flex flex-col space-y-2 items-start">
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Features</a>
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Pricing</a>
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Documentation</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-4">Company</h3>
              <div className="flex flex-col space-y-2 items-start">
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">About</a>
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Blog</a>
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Careers</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-4">Support</h3>
              <div className="flex flex-col space-y-2 items-start">
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Help Center</a>
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Contact</a>
                <a href="#" className="text-neutral-600 hover:text-blue-600 transition-colors text-sm">Status</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 mb-4">Contact</h3>
              <div className="flex flex-col space-y-2 items-start">
                <div className="flex items-center text-sm text-neutral-600">
                  <Mail className="w-4 h-4 mr-2" />
                  hello@example.com
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <Phone className="w-4 h-4 mr-2" />
                  +49 123 456 7890
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  Berlin, Germany
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-300 mt-8 pt-8 text-center text-sm text-neutral-600">
            © 2025 Component Showcase. All rights reserved.
          </div>
        </div>
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome!"
      >
        <p className="text-slate-600 mb-4">
          This is a modal dialog. You can put any content here.
        </p>
        <button
          onClick={() => {
            setIsModalOpen(false);
            setToast({ message: 'Modal closed successfully!', type: 'success' });
            setTimeout(() => setToast(null), 3000);
          }}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Close Modal
        </button>
      </Modal>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Navigation"
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default Components;