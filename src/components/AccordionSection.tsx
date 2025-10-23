import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Wie melde ich mich an und welche Unterlagen brauche ich?',
      answer: 'Personalausweis/Reisepass, biometrisches Passfoto, Sehtest (üblich: nicht älter als 2 Jahre), Erste-Hilfe-Kurs (9 UE). Unter 18 zusätzlich Einverständniserklärung der Erziehungsberechtigten; bei BF17 die Daten der Begleitpersonen. Den amtlichen Antrag stellen Sie bei der Fahrerlaubnisbehörde (die Fahrschule hilft dabei).'
    },
    {
      question: 'Wie lange dauert der Führerschein (Klasse B) durchschnittlich?',
      answer: 'Typisch 6–12 Wochen – abhängig von Kursstart, Terminverfügbarkeit, Lernfortschritt und Saison. Intensivkurse sind möglich, wenn Unterlagen/Anträge und Theorie zügig erledigt werden.'
    },
    {
      question: 'Wie viele Theorie- und Praxisstunden sind nötig?',
      answer: 'Klasse B: 14 Doppelstunden Theorie (12 Grundstoff + 2 klassenspezifisch B). In der Praxis so viele Übungsstunden wie erforderlich plus 12 Sonderfahrten: 5 Überland, 4 Autobahn, 3 Nacht.'
    },
    {
      question: 'Was kostet der Führerschein und woraus setzen sich die Kosten zusammen?',
      answer: 'Kosten variieren regional; als grober Richtwert für B: ca. 1.800–3.000 €. Bestandteile: Grundgebühr, Lernmaterial/App, Übungsfahrten (à 45 min), Sonderfahrten, Prüfungsgebühren (TÜV/Dekra) und Vorstellungsentgelte für Theorie & Praxis. Ein transparenter Kostenvoranschlag klärt die Details.'
    },
    {
      question: 'Was ist „Begleitetes Fahren ab 17" (BF17) und wer darf begleiten?',
      answer: 'Ab 17 darf mit eingetragenen Begleitpersonen gefahren werden. Voraussetzungen für Begleitpersonen: mind. 30 Jahre alt, seit mind. 5 Jahren Klasse B, maximal 1 Punkt im Fahreignungsregister. BF17 gilt in der Regel nur in Deutschland; ab 18 entfällt die Begleitauflage.'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heading mb-4">
            Häufig gestellte Fragen
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-xl shadow-md border border-default overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-hover transition-colors"
              >
                <span className="font-semibold text-heading text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-body leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
