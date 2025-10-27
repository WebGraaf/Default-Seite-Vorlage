import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Calendar, Check, AlertCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
interface SelectProps {
  label: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange, error }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(value || '');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    setSelected(optionValue);
    onChange?.(optionValue);
    setIsOpen(false);
  };

  const selectedLabel = options.find(opt => opt.value === selected)?.label || 'Select...';

  return (
    <div className="relative" ref={ref}>
      <label className="block text-sm font-medium text-neutral-700 mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-2.5 text-left bg-white border rounded-lg transition-all duration-200 flex items-center justify-between hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          error ? 'border-red-400' : 'border-blue-300'
        }`}
      >
        <span className={selected ? 'text-neutral-900' : 'text-neutral-500'}>{selectedLabel}</span>
        <ChevronDown className={`w-5 h-5 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-blue-200 rounded-lg shadow-lg max-h-60 overflow-auto animate-in fade-in slide-in-from-top-2 duration-200">
          {options.map(option => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              className={`w-full px-4 py-2.5 text-left hover:bg-gray-100 transition-colors flex items-center justify-between ${
                selected === option.value ? 'bg-gray-100 text-blue-700' : 'text-neutral-700'
              }`}
            >
              {option.label}
              {selected === option.value && <Check className="w-5 h-5" />}
            </button>
          ))}
        </div>
      )}

      {error && (
        <div className="flex items-center mt-2 text-sm text-red-600 animate-in fade-in slide-in-from-top-1 duration-200">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  description?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked = false, onChange, description }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="flex items-start cursor-pointer group">
      <div className="relative flex items-center justify-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="sr-only"
        />
        <div className={`w-5 h-5 border-2 rounded transition-all duration-200 flex items-center justify-center ${
          isChecked
            ? 'bg-blue-600 border-blue-600 scale-100'
            : 'bg-blue-50 border-blue-300 group-hover:border-blue-400'
        }`}>
          {isChecked && <Check className="w-3.5 h-3.5 text-white animate-in zoom-in duration-150" />}
        </div>
      </div>
      <div className="ml-3">
        <span className="text-sm font-medium text-neutral-700">{label}</span>
        {description && <p className="text-sm text-neutral-500 mt-0.5">{description}</p>}
      </div>
    </label>
  );
};

interface RadioProps {
  name: string;
  options: { value: string; label: string; description?: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({ name, options, value, onChange }) => {
  const [selected, setSelected] = useState(value || '');

  const handleChange = (optionValue: string) => {
    setSelected(optionValue);
    onChange?.(optionValue);
  };

  return (
    <div className="space-y-3">
      {options.map(option => (
        <label key={option.value} className="flex items-start cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="radio"
              name={name}
              checked={selected === option.value}
              onChange={() => handleChange(option.value)}
              className="sr-only"
            />
            <div className={`w-5 h-5 border-2 rounded-full transition-all duration-200 flex items-center justify-center ${
              selected === option.value
                ? 'bg-blue-50 border-blue-600'
                : 'bg-blue-50 border-blue-300 group-hover:border-blue-400'
            }`}>
              {selected === option.value && (
                <div className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-in zoom-in duration-150" />
              )}
            </div>
          </div>
          <div className="ml-3">
            <span className="text-sm font-medium text-neutral-700">{option.label}</span>
            {option.description && <p className="text-sm text-neutral-500 mt-0.5">{option.description}</p>}
          </div>
        </label>
      ))}
    </div>
  );
};

interface SwitchProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  description?: string;
}

const Switch: React.FC<SwitchProps> = ({ label, checked = false, onChange, description }) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    const newValue = !isOn;
    setIsOn(newValue);
    onChange?.(newValue);
  };

  return (
    <label className="flex items-center justify-between cursor-pointer group">
      <div>
        <span className="text-sm font-medium text-neutral-700">{label}</span>
        {description && <p className="text-sm text-neutral-500 mt-0.5">{description}</p>}
      </div>
      <button
        type="button"
        onClick={handleToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isOn ? 'bg-blue-600' : 'bg-blue-50'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-blue-50 transition-transform duration-200 ${
            isOn ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </label>
  );
};

interface DatePickerProps {
  label: string;
  value?: string;
  onChange?: (date: string) => void;
  error?: string;
}

const DatePicker: React.FC<DatePickerProps> = ({ label, value, onChange, error }) => {
  const [date, setDate] = useState(value || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-2">{label}</label>
      <div className="relative">
        <input
          type="date"
          value={date}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 pr-10 bg-blue-50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            error ? 'border-red-400' : 'border-blue-300'
          }`}
        />
        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
      </div>
      {error && (
        <div className="flex items-center mt-2 text-sm text-red-600 animate-in fade-in slide-in-from-top-1 duration-200">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, value, onChange, error, required }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [touched, setTouched] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e.target.value);
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const showError = error && touched;

  return (
    <div>
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`w-full px-4 py-2.5 bg-blue-50 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          showError ? 'border-red-400' : 'border-blue-300'
        }`}
      />
      {showError && (
        <div className="flex items-center mt-2 text-sm text-red-600 animate-in fade-in slide-in-from-top-1 duration-200">
          <AlertCircle className="w-4 h-4 mr-1" />
          {error}
        </div>
      )}
    </div>
  );
};

interface FormResultProps {
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
}

const FormResult: React.FC<FormResultProps> = ({ type, title, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in duration-200">
      <div className="bg-blue-50 rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 animate-in zoom-in slide-in-from-bottom-4 duration-300">
        <div className={`w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 ${
          type === 'success' ? 'bg-blue-50' : 'bg-blue-50'
        }`}>
          {type === 'success' ? (
            <Check className="w-8 h-8 text-green-600" />
          ) : (
            <AlertCircle className="w-8 h-8 text-red-600" />
          )}
        </div>
        <h3 className="text-2xl font-bold text-center mb-2 text-neutral-900">{title}</h3>
        <p className="text-neutral-600 text-center mb-6">{message}</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const HoneypotField: React.FC = () => {
  return (
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
      className="absolute -left-[9999px] w-0 h-0 opacity-0"
    />
  );
};

interface FormLoadingProps {
  message?: string;
}

const FormLoading: React.FC<FormLoadingProps> = ({ message = 'Submitting...' }) => {
  return (
    <div className="flex items-center justify-center py-4">
      <Loader2 className="w-6 h-6 text-blue-600 animate-spin mr-3" />
      <span className="text-neutral-600 font-medium">{message}</span>
    </div>
  );
};

export const AnmeldeFormular: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { elementRef, isVisible } = useScrollReveal();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-12"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-heading mb-8 text-center">Jetzt Anmelden</h2>
        <div className="max-w-2xl mx-auto">
          <div className="border border-primary-200 rounded-xl p-8 bg-card-bg">
            {formState === 'idle' && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <HoneypotField />
                <fieldset className="space-y-4">
                  <legend className="text-lg font-semibold text-heading mb-4">Persönliche Informationen</legend>
                  <Input label="Vorname" placeholder="Max" required error="Vorname ist erforderlich" />
                  <Input label="Nachname" placeholder="Mustermann" required error="Nachname ist erforderlich" />
                  <Input label="E-Mail-Adresse" type="email" placeholder="max@example.com" required />
                  <Input label="Telefonnummer" type="tel" placeholder="+49 123 456789" required />
                  <DatePicker label="Geburtsdatum" />
                </fieldset>

                <fieldset className="space-y-4">
                  <legend className="text-lg font-semibold text-heading mb-4">Kursdetails</legend>
                  <Select
                    label="Gewünschte Klasse"
                    options={[
                      { value: 'a', label: 'Klasse A' },
                      { value: 'b', label: 'Klasse B' },
                      { value: 'c', label: 'Klasse C' },
                      { value: 'd', label: 'Klasse D' },
                      { value: 'l', label: 'Klasse L' },
                      { value: 't', label: 'Klasse T' },
                    ]}
                  />
                  <DatePicker label="Gewünschter Starttermin" />
                </fieldset>

                <fieldset className="space-y-4">
                  <legend className="text-lg font-semibold text-heading mb-4">Zusätzliche Informationen</legend>
                  <div>
                    <label className="block text-sm font-medium text-text-body mb-2">Zusätzliche Nachricht</label>
                    <textarea
                      className="w-full px-3 py-2 border border-field-border rounded-lg focus:ring-2 focus:ring-field-focus-ring focus:border-transparent bg-field-bg text-field-fg placeholder-field-placeholder"
                      rows={4}
                      placeholder="Ihre Nachricht..."
                    />
                  </div>
                </fieldset>

                <button
                  type="submit"
                  className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  Anmeldung abschicken
                </button>
              </form>
            )}

            {formState === 'loading' && <FormLoading message="Anmeldung wird verarbeitet..." />}
          </div>
        </div>
      </div>
      {formState === 'success' && (
        <FormResult
          type="success"
          title="Anmeldung erfolgreich!"
          message="Ihre Anmeldung wurde erfolgreich übermittelt. Wir melden uns bald bei Ihnen."
          onClose={() => setFormState('idle')}
        />
      )}
    </section>
  );
};