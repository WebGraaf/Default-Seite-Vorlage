import React, { useState } from 'react';
import { Input, Select, DatePicker, FormResult, FormLoading, HoneypotField } from './FormComponents';

export const AnmeldeFormular: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section className="py-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-heading mb-8 text-center">Jetzt Anmelden</h2>
        <div className="max-w-2xl mx-auto">
          <div className="border border-primary-200 rounded-xl p-8 bg-card-bg">
            {formState === 'idle' && (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <HoneypotField />
                <Input label="Vorname" placeholder="Max" required error="Vorname ist erforderlich" />
                <Input label="Nachname" placeholder="Mustermann" required error="Nachname ist erforderlich" />
                <Input label="E-Mail-Adresse" type="email" placeholder="max@example.com" required />
                <Input label="Telefonnummer" type="tel" placeholder="+49 123 456789" required />
                <DatePicker label="Geburtsdatum" />
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
                <div>
                  <label className="block text-sm font-medium text-text-body mb-2">Zusätzliche Nachricht</label>
                  <textarea
                    className="w-full px-3 py-2 border border-field-border rounded-lg focus:ring-2 focus:ring-field-focus-ring focus:border-transparent bg-field-bg text-field-fg placeholder-field-placeholder"
                    rows={4}
                    placeholder="Ihre Nachricht..."
                  />
                </div>

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