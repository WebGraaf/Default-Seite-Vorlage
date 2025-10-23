import { StandorteUebersicht, Location } from './StandorteUebersicht';

export function StandortSection() {
  const locations: Location[] = [
    {
      label: 'Berlin',
      address: 'Alexanderplatz 1, 10178 Berlin',
      phone: '+49 30 12345678',
      hours: 'Mo-Fr: 9:00-18:00\nSa: 10:00-16:00\nSo: geschlossen'
    },
    {
      label: 'München',
      address: 'Marienplatz 1, 80331 München',
      phone: '+49 89 98765432',
      hours: 'Mo-Fr: 9:00-18:00\nSa: 10:00-16:00\nSo: geschlossen'
    },
    {
      label: 'Hamburg',
      address: 'Jungfernstieg 1, 20354 Hamburg',
      phone: '+49 40 11223344',
      hours: 'Mo-Fr: 9:00-18:00\nSa: 10:00-16:00\nSo: geschlossen'
    }
  ];

  return (
    <StandorteUebersicht
      title="Unsere Standorte"
      subtitle="Finden Sie den nächstgelegenen Standort"
      locations={locations}
    />
  );
}