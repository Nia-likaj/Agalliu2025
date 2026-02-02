import { Equipment } from '../types';

export const equipment: Equipment[] = [
  {
    id: 'e1',
    name: 'Makineri larje fasade',
    category: 'Heavy Machinery',
    description: 'Pajisje profesionale për larje fasade/xhami me presion të kontrolluar.',
    specifications: [
      'Presion i rregullueshëm',
      'Aksesorë të ndërrueshëm',
      'Përdorim i sigurt',
    ],
    image: '/assets/equipment/equipment-01.jpg',
  },
  {
    id: 'e2',
    name: 'Pajisje për parket',
    category: 'Concrete Equipment',
    description: 'Vegla dhe makina për montim, prerje dhe përfundime precize.',
    specifications: [
      'Prerje precize',
      'Aspirim pluhuri (opsional)',
      'Përfundime profesionale',
    ],
    image: '/assets/equipment/equipment-02.jpg',
  },
  {
    id: 'e3',
    name: 'Pajisje pastrimi & dezinfektimi',
    category: 'Cleaning Equipment',
    description: 'Zgjidhje për pastrim të thellë dhe dezinfektim ambientesh.',
    specifications: [
      'Pastrime të thella',
      'Dezinfektim',
      'Aromatizim ambienti',
    ],
    image: '/assets/equipment/equipment-03.jpg',
  },
];
