import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Star, TrendingUp, Users, Award, ArrowRight, Shield, Zap, Globe } from 'lucide-react';
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
import { BeforeAfterSlider, VideoPlayer } from '../components/MediaComponents';
import { Banner } from '../components/Banner';
import { Modal } from '../components/Modal';
import { Drawer } from '../components/Drawer';
import { Toast } from '../components/Toast';
import { ItemList } from '../components/ItemList';
import { SortableTable } from '../components/SortableTable';
import { PricingCards } from '../components/PricingCards';
import { TextAnimations } from '../components/TextAnimations';
import { KPISection } from '../components/KPISection';
import { KeyValueSection } from '../components/KeyValueSection';
import { AnimatedTextDemo } from '../components/AnimatedText';

const Components: React.FC = () => {
  const { isOpen: commandPaletteOpen, close: closeCommandPalette } = useCommandPalette();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

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