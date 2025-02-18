export const loanStatus = [
  {"value": "", "label": "None"},
  {"value": "Pending Validation", "label": "Pending Validation"},
  {"value": "Overdue", "label": "Overdue"},
  {"value": "Borrowed", "label": "Borrowed"},
  {"value": "Closed", "label": "Closed"},
  {"value": "Canceled", "label": "Canceled"},
  {"value": "Rejected", "label": "Rejected"},
  {"value": "Booked", "label": "Booked"}
];

export const statusMap = {
  'Pending Validation': 'blue',
  'Overdue': 'warning',
  'Borrowed': 'primary',
  'Closed': 'teal',
  'Canceled': 'amber',
  'Rejected': 'warning',
  'Booked': 'secondary'
};

export const availabityStatus = [
  {"value": "", "label": "None"}, 
  {"value": "available", "label": "Available"}, 
  {"value": "not_available", "label": "Not Available"}
];

export const availabityMap = {
  'available': 'green',
  'not_available': 'red'
};

export const teams = [
    'MOVE', 
    'LAME', 
    'BIOP', 
    'MICROTISS',
    'ECCEL', 
    'MC2', 
    'PSM', 
    'MODI', 
    'OPTIMA',
    'KAPAH', 
    'SECR', 
    'IT'
];

export const materialTypes = [
  { value: 'LAB_SUPPLIES', label: 'Lab Supplies' },
  { value: 'CONSUMABLES', label: 'Consumables' },
];

export const consumableTypes = [
  { value: 'FILTERS_FILTRATION_SUPPLIES', label: 'Filters and Filtration Supplies' },
  { value: 'BIOLOGICAL_CONSUMABLES', label: 'Biological Consumables' },
  { value: 'CHEMICALS', label: 'Chemicals' },
  { value: 'SAFETY_EQUIPMENT', label: 'Safety Equipment' },
  { value: 'LAB_FURNITURE_FIXTURES', label: 'Lab Fixtures' },
  { value: 'CLEANING_MAINTENANCE_SUPPLIES', label: 'Cleaning and Maintenance Supplies' },
];

export const lab_supplyTypes = [
  { value: 'GENERAL_SUPPLIES', label: 'General Supplies'},
  { value: 'BUILDINGS_INFRASTRUCTURE_WORKS_GREEN_SPACES', label: 'Building, Infrastructure, Works and Green spaces'},
  { value: 'COMMUNICATION_CULTURE_DOCUMENTATION', label: 'Communication, Culture and Documentation'},
  { value: 'TRAVEL_TRANSPORT_ACCOMMODATION', label: 'Travel : Transport and Accomodation '},
  { value: 'STUDIES_CONSULTING_INSURANCE_PI_HUMAN_RESOURCES', label: 'Studies, Consulting, Insurance and Human Resources'},
  { value: 'FREIGHT_SHIPPING_TRANSPORT_MOVING', label: 'Freight, Shipping, Transport and Moving'},
  { value: 'LABORATORY_WORKSHOP_GASES_CRYOGENICS', label: 'Laboratories or Workshop Gases and Cryogenics '},
  { value: 'HYGIENE_SAFETY', label: 'Hygiene and Safety at Work'},
  { value: 'IT_TELECOMMUNICATIONS_AUDIOVISUAL', label: 'IT, Telecommunications and Audiovisual'},
  { value: 'LABORATORY_TP_ROOM_FITTINGS', label: 'Laboratory and TP Room Fittings '},
  { value: 'ANIMAL_EXPERIMENTATION_ANIMAL_BREEDING_ANIMAL_CONSERVATION_ANIMAL_STUDIES', label: 'Animal Experimentation, Animal Breeding, Animal Conservation and Animal Studies'},
  { value: 'MEDICAL', label: 'Mecidal'},
  { value: 'MICROSCOPY_PROFILOMETRY', label: 'Microscopy and Profilometry'},
  { value: 'CHEMISTRY_BIOLOGY', label: 'Chemistry and Biology'},
  { value: 'OPTO_LASERS_OPTICAL_EQUIPMENT', label: 'Opto, Lasers and Optical Equipement'},
  { value: 'PHYSICS_NUCLEAR_CORPUSCULAR_PHYSICS', label: 'Physics, Nuclear and Corpuscular Physics'},
  { value: 'PLANT_EXPERIMENTATION', label: 'Plant Experimentation'},
  { value: 'WORKSHOP_MECHANICS_AUTOMATION', label: 'Workshop, Mechanics and Automation'},
  { value: 'SPECTROMETRY_SPECTROSCOPY_X-RAYS', label: 'Spectrometry, Spectroscopy and X-rays'},
  { value: 'ELECTRONICS_TEST_ENERGY_MEASUREMENT', label: 'Electronics or Tests, Energy and Measurement'},
  { value: 'ARTH_SCIENCES_GEOPHYSICS_ASTROPHYSICS_ARCHAEOLOGY', label: 'Arth Sciences, Geophysics, Astrophysics and Archaeology'},
  { value: 'VACUUM_VACUUM_TECHNOLOGY_EQUIPMENT', label: 'Vacuum and Vacuum Technology Equipment'},
  { value: 'NANOTECHNOLOGIES_MICROELECTRONICS', label: 'Nanotechnologies and Microelectronics'},
  { value: 'NON_PURCHASING_EXPENSES', label: 'Non Purchasing Expenses'}
];

export const unitList = [
  { value: 'M', label: 'Meter' },
  { value: 'KG', label: 'Kilogram' },
  { value: 'G', label: 'Gram' },
  { value: 'L', label: 'Liter' },
  { value: 'ML', label: 'Milliliter' },
  { value: 'PC', label: 'Piece' }
];

export const requestTypes = [
  {
    value: 'MATERIAL_REQUEST',
    label: 'Request a Material',
  },
  {
    value: 'ACCOUNT_HELP',
    label: 'Account Help',
  },
  {
    value: 'GENERAL_INQUIRY',
    label: 'General Inquiry',
  },
  {
    value: 'REPORT_ISSUE',
    label: 'Report an Issue',
  },
  {
    value: 'FORMATION_INQUIRY',
    label: 'Inquiry about Formations',
  },
];
