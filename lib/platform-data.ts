import {SubjectCategorySlug} from './design-tokens';

export const PLATFORM_IMAGES = {
  heroDiscovery: '/src/assets/images/hero_practical_discovery_1795308169008.jpg',
  iceFloatsWater: '/src/assets/images/journey_ice_floats_water_1795308167758.jpg',
  fluidDynamicsLab: '/src/assets/images/resource_fluid_dynamics_lab_1795307344557.jpg',
  subjects: {
    mathematics: '/src/assets/images/subject_mathematics_geometry_1795308170282.jpg',
    physics: '/src/assets/images/subject_physics_optics_1795307344643.jpg',
    chemistry: '/src/assets/images/subject_chemistry_experiment_1795308169207.jpg',
    'biology-life-science':
      '/src/assets/images/subject_biology_microscopy_1795307346120.jpg',
    'technology-computing':
      '/src/assets/images/subject_technology_computing_1795308169046.jpg',
    'engineering-innovation':
      '/src/assets/images/project_solar_water_sensor_1795307346390.jpg',
  },
} as const;

export interface SubjectDetailData {
  slug: SubjectCategorySlug;
  title: string;
  disciplineCode: string;
  levelScope: string;
  shortDescription: string;
  heroSubtitle: string;
  whyThisFieldMatters: string;
  coreFocus: string;
  imageSrc: string;
  imageAlt: string;
  accentColor: 'blue' | 'teal' | 'amber';
  exemplarTopics: string[];
  featuredConcept: {
    question: string;
    whatItIs: string;
    whyItMatters: string;
    howItWorks: string;
    realWorldExamples: string[];
    experimentOrObservation: string;
    whatLearnersCreate: string;
  };
}

export const SUBJECTS_DATA: SubjectDetailData[] = [
  {
    slug: 'mathematics',
    title: 'Mathematics',
    disciplineCode: 'MAT · 01',
    levelScope: 'School · College · University',
    shortDescription:
      'Discover patterns, quantitative reasoning, geometric proportions, and the mathematical structures behind change and decision-making.',
    heroSubtitle:
      'See mathematics not as isolated rules to memorize, but as the living language of proportion, rate of change, and logical structure.',
    whyThisFieldMatters:
      'Every physical law, structural bridge design, flood prediction model, and digital algorithm relies on mathematical relationships.',
    coreFocus:
      'Rates of change, geometric proportions, optimization, and probability reasoning.',
    imageSrc: PLATFORM_IMAGES.subjects.mathematics,
    imageAlt:
      'Mathematics study desk with brass compasses, wooden geometric solids, scale ruler, and hand-drawn calculus and proportion diagrams',
    accentColor: 'blue',
    exemplarTopics: [
      'Calculus & Rates of Change',
      'Geometric Proportions in Architecture',
      'Probability & Decision Trees',
    ],
    featuredConcept: {
      question: 'Why Do Suspension Bridges and Thrown Objects Follow Parabolic Curves?',
      whatItIs:
        'A quadratic geometric curve formed when uniform downward load or gravity acts alongside horizontal tension or velocity.',
      whyItMatters:
        'Allows civil engineers to distribute bridge weight evenly along suspension cables and helps physicists model trajectories accurately.',
      howItWorks:
        'When load is distributed uniformly along a horizontal span, the vertical rate of change of tension increases linearly with distance (dy/dx = kx), whose integral produces a parabola (y = ½kx²).',
      realWorldExamples: [
        'Suspension bridge main cables carrying uniform roadway weight',
        'Parabolic solar concentrators focusing sunlight onto a single receiver tube',
        'Projectile motion of water jets in irrigation systems',
      ],
      experimentOrObservation:
        'Hang a flexible chain between two supports, then attach equal weights at uniform horizontal intervals to observe the transition from a catenary curve to a true parabola.',
      whatLearnersCreate:
        'A scaled physical suspension span model with calculated cable tension vectors and load-distribution diagrams.',
    },
  },
  {
    slug: 'physics',
    title: 'Physics',
    disciplineCode: 'PHY · 02',
    levelScope: 'School · College · University',
    shortDescription:
      'Understand forces, energy, waves, light refraction, and fluid mechanics through direct physical observation and real-world systems.',
    heroSubtitle:
      'Connect equations of motion, optics, and electromagnetism directly to the physical phenomena happening around you every day.',
    whyThisFieldMatters:
      'Physics explains how energy is generated, how optical fibers carry data across continents, and how structures withstand wind and water forces.',
    coreFocus:
      'Wave optics & refraction, electromagnetism, fluid mechanics, and energy conversion.',
    imageSrc: PLATFORM_IMAGES.subjects.physics,
    imageAlt:
      'Glass prism refracting a beam of light across a laboratory notebook with handwritten ray diagrams',
    accentColor: 'blue',
    exemplarTopics: [
      'Wave Optics & Prism Refraction',
      'Electromagnetic Induction',
      'Fluid Dynamics & Buoyancy',
    ],
    featuredConcept: {
      question: 'How Does a Glass Prism Separate White Light Into a Spectrum?',
      whatItIs:
        'Optical refraction and chromatic dispersion occurring when light waves cross an angled boundary between air and glass.',
      whyItMatters:
        'Forms the basis of optical spectrometers, camera lens color correction, fiber-optic telecommunications, and atmospheric optics.',
      howItWorks:
        "According to Snell's Law (n₁ sin θ₁ = n₂ sin θ₂), light bends when its wave speed changes. Because shorter blue/violet wavelengths travel slightly slower in glass than longer red wavelengths, each color bends at a distinct angle.",
      realWorldExamples: [
        'Chemical spectrometers identifying elements by their light wavelengths',
        'Achromatic camera and microscope lenses correcting color fringing',
        'Sunlight refracting and reflecting inside raindrops to form rainbows',
      ],
      experimentOrObservation:
        'Trace a narrow beam of light entering and exiting a triangular glass prism on millimeter graph paper to measure incident angle, minimum deviation, and spectral spread.',
      whatLearnersCreate:
        'A calibrated tabletop cardboard-and-prism spectrometer to compare light spectra from sunlight, LEDs, and fluorescent lamps.',
    },
  },
  {
    slug: 'chemistry',
    title: 'Chemistry',
    disciplineCode: 'CHM · 03',
    levelScope: 'School · College · University',
    shortDescription:
      'Explore atomic bonding, molecular structure, reaction equilibrium, and electrochemistry in water, materials, and energy storage.',
    heroSubtitle:
      'Understand how molecular structure and electron transfer govern everything from clean drinking water to battery storage.',
    whyThisFieldMatters:
      'Chemistry turns abstract periodic table trends into practical tools for water purification, sustainable materials, and clean energy.',
    coreFocus:
      'Hydrogen bonding, electrochemistry, acid-base buffering, and reaction kinetics.',
    imageSrc: PLATFORM_IMAGES.subjects.chemistry,
    imageAlt:
      'Chemistry titration and pH measurement experiment on a laboratory workbench with glass beakers and equilibrium notes',
    accentColor: 'teal',
    exemplarTopics: [
      'Electrochemical Cells & Batteries',
      'Acid-Base Buffering in Water',
      'Molecular Geometry & Hydrogen Bonding',
    ],
    featuredConcept: {
      question: 'How Do Buffer Solutions Keep Biological and Natural Waters Stable?',
      whatItIs:
        'An aqueous equilibrium system of a weak acid and its conjugate base that resists drastic changes in pH when acids or bases are added.',
      whyItMatters:
        'Human blood must remain near pH 7.40 to transport oxygen, and river ecosystems rely on bicarbonate buffering to protect aquatic life.',
      howItWorks:
        "Through Le Chatelier's Principle, added H⁺ ions react with the conjugate base (A⁻) to form weak acid (HA), while added OH⁻ ions are neutralized by HA, holding free H⁺ concentration stable.",
      realWorldExamples: [
        'Bicarbonate buffer system regulating oxygen transport in human blood',
        'Soil and river carbonate buffering protecting crops and fish from acid rain',
        'Calibrated buffer solutions used to standardize laboratory pH probes',
      ],
      experimentOrObservation:
        'Compare pH changes drop-by-drop when dilute acid is added to pure water versus a weak acetic acid–acetate buffer solution using a pH meter or natural indicator.',
      whatLearnersCreate:
        'A titration curve comparison chart and a natural plant-pigment pH indicator kit for testing local water samples.',
    },
  },
  {
    slug: 'biology-life-science',
    title: 'Biology & Life Science',
    disciplineCode: 'BIO · 04',
    levelScope: 'School · College · University',
    shortDescription:
      'Investigate living cells, plant vascular systems, physiological adaptation, and ecosystems as dynamic self-regulating networks.',
    heroSubtitle:
      'Move past memorizing anatomical labels to understand how living organisms transport energy, sense their environment, and adapt.',
    whyThisFieldMatters:
      'Understanding biological mechanisms drives agriculture, healthcare diagnostics, ecological conservation, and bio-inspired engineering.',
    coreFocus:
      'Cellular microscopy, plant vascular transport, enzyme kinetics, and aquatic ecology.',
    imageSrc: PLATFORM_IMAGES.subjects['biology-life-science'],
    imageAlt:
      'Student researcher examining plant leaf specimens through a modern compound microscope beside botanical sketches',
    accentColor: 'teal',
    exemplarTopics: [
      'Cellular Microscopy & Osmosis',
      'Xylem & Phloem Vascular Transport',
      'Aquatic Ecosystems & Thermal Insulation',
    ],
    featuredConcept: {
      question: 'How Do Tall Trees Lift Water Tens of Meters Without a Mechanical Pump?',
      whatItIs:
        'Cohesion-tension transport through microscopic xylem vessels driven by solar evaporation at leaf surfaces.',
      whyItMatters:
        'Explains crop irrigation demand, drought resilience in agriculture, and passive capillary fluid transport in microfluidic devices.',
      howItWorks:
        'As water molecules evaporate through leaf stomata (transpiration), negative pressure pulls a continuous column of hydrogen-bonded water molecules upward from roots to canopy.',
      realWorldExamples: [
        'Crop transpiration rates guiding precision agricultural irrigation',
        'Mangrove trees filtering saline water in the Sundarbans coastal delta',
        'Paper-based microfluidic diagnostic strips drawing fluid by capillary action',
      ],
      experimentOrObservation:
        'Examine lower leaf epidermis impressions under a microscope to count stomatal pores and measure water uptake velocity in a leafy shoot using a bubble potometer.',
      whatLearnersCreate:
        'A comparative stomatal density and transpiration rate report across shade-adapted and sun-adapted local plant species.',
    },
  },
  {
    slug: 'technology-computing',
    title: 'Technology & Computing',
    disciplineCode: 'TEC · 05',
    levelScope: 'School · College · University',
    shortDescription:
      'Understand how digital logic, algorithms, embedded microcontrollers, and networks sense, process, and communicate information.',
    heroSubtitle:
      'Demystify computing from the ground up—connecting binary logic and sensor signals to real algorithms and intelligent software.',
    whyThisFieldMatters:
      'Computational thinking transforms learners from passive software consumers into architects who can model data and automate solutions.',
    coreFocus:
      'Digital logic circuits, sensor data acquisition, algorithms, and network systems.',
    imageSrc: PLATFORM_IMAGES.subjects['technology-computing'],
    imageAlt:
      'Student connecting a laptop displaying code and live sensor graphs to a microcontroller development board on a workbench',
    accentColor: 'blue',
    exemplarTopics: [
      'Boolean Logic to Silicon Gates',
      'Sensor Analog-to-Digital Conversion',
      'Algorithmic Problem Solving',
    ],
    featuredConcept: {
      question: 'How Does a Digital Computer Measure a Continuous Physical World?',
      whatItIs:
        'Analog-to-Digital Conversion (ADC) and discrete signal sampling that translate physical voltages into binary numbers.',
      whyItMatters:
        'Every weather station, medical pulse sensor, smartphone microphone, and industrial controller bridges analog physics and digital code.',
      howItWorks:
        'A sensor converts temperature or light into a continuous voltage. The microcontroller samples that voltage at fixed time intervals and quantizes it into discrete integer steps (e.g., 0 to 1023 for a 10-bit ADC).',
      realWorldExamples: [
        'Automated flood-level and rainfall telemetry nodes along river basins',
        'Digital thermometers and pulse oximeters filtering noisy sensor readings',
        'Solar charge controllers tracking peak power output in real time',
      ],
      experimentOrObservation:
        'Sample a thermistor or photoresistor voltage divider on a microcontroller, plot raw vs. moving-average filtered signals, and observe quantization steps.',
      whatLearnersCreate:
        'A real-time environmental temperature and light data logger with a noise-filtering algorithm.',
    },
  },
  {
    slug: 'engineering-innovation',
    title: 'Engineering & Innovation',
    disciplineCode: 'ENG · 06',
    levelScope: 'School · College · University',
    shortDescription:
      'Combine physics, mathematics, chemistry, and computing to design, prototype, test, and refine practical real-world solutions.',
    heroSubtitle:
      'Experience how engineers turn scientific understanding into working instruments, resilient structures, and sustainable technology.',
    whyThisFieldMatters:
      'Engineering bridges the gap between knowing a scientific principle in theory and building reliable systems that serve communities.',
    coreFocus:
      'Solar-powered instrumentation, environmental sensors, structural mechanics, and control systems.',
    imageSrc: PLATFORM_IMAGES.subjects['engineering-innovation'],
    imageAlt:
      'Student testing a solar-powered breadboard circuit connected to a water quality probe and digital multimeter',
    accentColor: 'amber',
    exemplarTopics: [
      'Solar-Powered Water Quality Probes',
      'Structural Truss Load Distribution',
      'Closed-Loop Feedback Systems',
    ],
    featuredConcept: {
      question: 'How Can We Build a Low-Cost Solar Sensor to Monitor Water Salinity?',
      whatItIs:
        'An integrated environmental engineering system combining photovoltaic power regulation, ionic conductivity measurement, and circuit calibration.',
      whyItMatters:
        'Empowers students and communities to monitor water salinity and dissolved solids using accessible, repairable hardware.',
      howItWorks:
        'A small solar panel charges a regulated sensing circuit. Two submerged electrodes measure electrical conductance across a water sample, converting ionic concentration into a measurable voltage.',
      realWorldExamples: [
        'Community water salinity monitoring in coastal agricultural districts',
        'Off-grid solar weather and soil-moisture stations for farmers',
        'Industrial water filtration quality checkpoints',
      ],
      experimentOrObservation:
        'Calibrate a two-electrode conductivity circuit against known salt-water dilutions using a multimeter and plot voltage output versus salinity concentration.',
      whatLearnersCreate:
        'A working solar-powered water conductivity probe with a calibrated reference chart.',
    },
  },
];

export const ICE_FLOATING_JOURNEY = [
  {
    step: '01',
    stage: 'Understand',
    title: 'Start with a Question',
    subtitle: 'Why Does Ice Float on Water?',
    description:
      'Most substances become denser and sink when they freeze from a liquid into a solid. Why does solid water behave completely differently—floating at the top of a glass or across the surface of a freezing lake?',
    insight: 'Curiosity begins by noticing an everyday anomaly that contradicts expectations.',
  },
  {
    step: '02',
    stage: 'Understand',
    title: 'Understand Density',
    subtitle: 'Mass Packed Into Volume (ρ = m / V)',
    description:
      'An object floats in a fluid when its density (mass per unit volume) is lower than the fluid beneath it. At 0°C, liquid water has a density of about 0.9998 g/cm³, whereas solid ice has a density of only 0.9167 g/cm³—roughly 9% less dense.',
    insight: 'The same mass of water expands to occupy ~9% more volume when frozen.',
  },
  {
    step: '03',
    stage: 'Explore',
    title: 'Explore Molecular Structure',
    subtitle: 'Hydrogen Bonds & Hexagonal Crystal Lattices',
    description:
      'In liquid water, polar H₂O molecules constantly jostle close together as hydrogen bonds break and reform. As temperature drops to 0°C, thermal motion slows and hydrogen bonds lock H₂O molecules into a rigid, open hexagonal lattice with empty space in the center of each ring.',
    insight: 'Molecular geometry at the nanoscale directly explains macroscopic expansion.',
  },
  {
    step: '04',
    stage: 'Explore',
    title: 'Observe and Experiment',
    subtitle: 'Measure Volume Expansion & Thermal Stratification',
    description:
      'By marking the water line in a graduated cylinder before and after freezing, and measuring temperature layers in a chilled beaker from 10°C down to 0°C, learners observe that water reaches maximum density at 4°C before expanding as it approaches freezing.',
    insight: 'Direct measurement turns an abstract molecular diagram into verified physical evidence.',
  },
  {
    step: '05',
    stage: 'Apply',
    title: 'Connect It with Frozen Lakes and Aquatic Life',
    subtitle: 'How Floating Ice Insulates Entire Ecosystems',
    description:
      'If ice sank, lakes and rivers in cold climates would freeze solid from the bottom up, destroying aquatic ecosystems every winter. Instead, floating ice forms an insulating thermal blanket at the surface, keeping liquid water near 4°C at the bottom where fish and plants survive.',
    insight: 'A single molecular bond angle (104.5°) preserves aquatic biodiversity on Earth.',
  },
  {
    step: '06',
    stage: 'Create',
    title: 'Apply What Was Learned',
    subtitle: 'Solve Engineering & Environmental Challenges',
    description:
      'Learners apply anomalous water expansion to explain why sealed water pipes burst in freezing weather, how freeze-thaw cycles fracture mountain rock into fertile river silt, and how to design expansion-safe thermal storage containers.',
    insight: 'True understanding empowers learners to predict, design, and solve new problems.',
  },
] as const;

export const REAL_WORLD_LEARNING_METHODS = [
  {
    id: 'real-world-examples',
    index: '01',
    title: 'Real-World Examples',
    subtitle: 'See Where Concepts Live Outside Textbooks',
    description:
      'Every topic connects directly to tangible systems—from river hydrodynamics, bridge geometry, and power grids to cellular biology and modern telecommunications.',
    exampleHighlight:
      'Connecting Snell’s Law of refraction to undersea fiber-optic cables and microscope lenses.',
    imageSrc: PLATFORM_IMAGES.subjects.physics,
    imageAlt: 'Glass prism refracting a beam of light across a laboratory notebook with ray diagrams',
  },
  {
    id: 'experiments-observations',
    index: '02',
    title: 'Experiments & Observations',
    subtitle: 'Verify Principles Through Direct Evidence',
    description:
      'Learn how to formulate hypotheses, observe natural phenomena, take careful measurements, and understand why scientific laws hold true in practice.',
    exampleHighlight:
      'Observing leaf stomata under a microscope and measuring plant transpiration rates.',
    imageSrc: PLATFORM_IMAGES.subjects['biology-life-science'],
    imageAlt: 'Student examining plant leaf specimens under a compound microscope',
  },
  {
    id: 'practical-projects',
    index: '03',
    title: 'Practical Projects',
    subtitle: 'Synthesize Knowledge by Building Something Real',
    description:
      'Move from passive reading to hands-on creation by building simple instruments, circuits, mathematical models, and experimental prototypes.',
    exampleHighlight:
      'Assembling and calibrating a solar-powered water conductivity and salinity sensor.',
    imageSrc: PLATFORM_IMAGES.subjects['engineering-innovation'],
    imageAlt: 'Student testing a solar-powered water quality sensor circuit on a workbench',
  },
  {
    id: 'interactive-learning',
    index: '04',
    title: 'Interactive Learning',
    subtitle: 'Explore Cause-and-Effect Step by Step',
    description:
      'Break complex systems down into guided conceptual stages so learners can test "what happens if" scenarios and trace how variables interact.',
    exampleHighlight:
      'Exploring laminar vs. turbulent fluid flow regimes in a wave and channel workshop.',
    imageSrc: PLATFORM_IMAGES.fluidDynamicsLab,
    imageAlt: 'Students observing a fluid dynamics wave tank experiment in an engineering lab',
  },
] as const;

export const SKILLS_BEYOND_ACADEMICS = [
  {
    id: 'critical-thinking',
    index: '01',
    title: 'Critical Thinking',
    description:
      'Evaluate claims using evidence, question underlying assumptions, and distinguish cause from coincidence instead of accepting answers at face value.',
    practicalHabit: 'Asking "Why does this relationship hold, and when does it break down?"',
  },
  {
    id: 'problem-solving',
    index: '02',
    title: 'Problem Solving',
    description:
      'Decompose unfamiliar, open-ended real-world challenges into clear physical, mathematical, or logical principles that can be analyzed systematically.',
    practicalHabit: 'Translating an unstructured real-world problem into testable components.',
  },
  {
    id: 'creativity',
    index: '03',
    title: 'Creativity',
    description:
      'Combine insights across mathematics, physics, biology, and computing to imagine novel approaches, experiments, and designs.',
    practicalHabit: 'Connecting ideas from two different disciplines to create something new.',
  },
  {
    id: 'practical-skills',
    index: '04',
    title: 'Practical Skills',
    description:
      'Develop confidence with measurement, observation, data interpretation, schematic reading, and hands-on experimentation.',
    practicalHabit: 'Turning abstract formulas into physical measurements and working models.',
  },
  {
    id: 'independent-learning',
    index: '05',
    title: 'Independent Learning',
    description:
      'Build the intellectual curiosity and structured self-guided habits needed to master new domains long after formal examinations end.',
    practicalHabit: 'Learning how to learn from primary observations and first principles.',
  },
  {
    id: 'innovation',
    index: '06',
    title: 'Innovation',
    description:
      'Look at everyday challenges in local communities and industries not as fixed constraints, but as opportunities to engineer thoughtful solutions.',
    practicalHabit: 'Moving from "What is the textbook answer?" to "What can I build with this?"',
  },
] as const;
