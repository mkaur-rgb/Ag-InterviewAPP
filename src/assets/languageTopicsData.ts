import { CityCountry } from '../app/multiselect-language-topic/multiselect-language-topic.component';

export const citiesByCountry: CityCountry[] = [
  {
    name: 'España',
    provinces: [
      { name: 'Madrid', cities: ['Alcalá de Henares', 'Getafe', 'Leganés'] },
      {
        name: 'Barcelona',
        cities: ['Hospitalet de Llobregat', 'Terrassa', 'Sabadell'],
      },
      { name: 'Valencia', cities: ['Torrente', 'Mislata', 'Alzira'] },
    ],
  },
  {
    name: 'Francia',
    provinces: [
      {
        name: 'París',
        cities: ['Neuilly-sur-Seine', 'Boulogne-Billancourt', 'Saint-Denis'],
      },
      {
        name: 'Lyon',
        cities: ['Villeurbanne', 'Caluire-et-Cuire', 'Saint-Priest'],
      },
      {
        name: 'Marsella',
        cities: ['Aubagne', 'Bouches-du-Rhône', 'Aix-en-Provence'],
      },
    ],
  },
  {
    name: 'Italia',
    provinces: [
      { name: 'Roma', cities: ['Latina', 'Fiumicino', 'Anguillara Sabazia'] },
      { name: 'Milán', cities: ['Novara', 'Brescia', 'Pavia'] },
      { name: 'Nápoles', cities: ['Caserta', 'Salerno', 'Pozzuoli'] },
    ],
  },
  {
    name: 'Alemania',
    provinces: [
      {
        name: 'Berlín',
        cities: ['Brandenburg an der Havel', 'Potsdam', 'Magdeburg'],
      },
      { name: 'Hamburgo', cities: ['Lübeck', 'Wedel', 'Geesthacht'] },
      { name: 'Múnich', cities: ['Augsburg', 'Ingolstadt', 'Rosenheim'] },
    ],
  },
  {
    name: 'Reino Unido',
    provinces: [
      {
        name: 'Londres',
        cities: ['Waltham Forest', 'Newham', 'Barking and Dagenham'],
      },
      { name: 'Manchester', cities: ['Salford', 'Bolton', 'Rochdale'] },
      { name: 'Birmingham', cities: ['Wolverhampton', 'Coventry', 'Solihull'] },
    ],
  },
  {
    name: 'Estados Unidos',
    provinces: [
      { name: 'California', cities: ['San Diego', 'San José', 'Oakland'] },
      { name: 'Texas', cities: ['Houston', 'San Antonio', 'Dallas'] },
      { name: 'Nueva York', cities: ['Buffalo', 'Rochester', 'Yonkers'] },
    ],
  },
  {
    name: 'Brasil',
    provinces: [
      { name: 'São Paulo', cities: ['Guarulhos', 'Osasco', 'Diadema'] },
      {
        name: 'Rio de Janeiro',
        cities: ['Niteroi', 'Duque de Caxias', 'Belford Roxo'],
      },
      {
        name: 'Salvador de Bahía',
        cities: ['Lauro de Freitas', 'Simões Filho', 'Camaçari'],
      },
    ],
  },
];
