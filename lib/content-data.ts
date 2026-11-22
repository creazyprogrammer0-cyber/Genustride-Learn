import {SubjectCategorySlug} from './design-tokens';

export const PLATFORM_IMAGES = {
  heroCuriousLearners:
    '/src/assets/images/hero_curious_learners_lab_1795308719777.jpg',
  iceFloatingMolecular:
    '/src/assets/images/ice_floating_molecular_experiment_1795308719650.jpg',
  frozenLakeNature:
    '/src/assets/images/frozen_lake_insulation_nature_1795308718807.jpg',
  bangladeshLearners:
    '/src/assets/images/bangladesh_learners_workshop_1795308719101.jpg',
  mathematicsGeometry:
    '/src/assets/images/subject_mathematics_geometry_1795308498594.jpg',
  physicsOptics: '/src/assets/images/subject_physics_optics_1795307344643.jpg',
  chemistryElectro:
    '/src/assets/images/subject_chemistry_electrochemistry_1795308502114.jpg',
  biologyMicroscopy:
    '/src/assets/images/subject_biology_microscopy_1795307346120.jpg',
  computingMicrocontroller:
    '/src/assets/images/subject_computing_microcontroller_1795308500861.jpg',
  solarWaterProject:
    '/src/assets/images/project_solar_water_sensor_1795307346390.jpg',
  fluidDynamicsLab:
    '/src/assets/images/resource_fluid_dynamics_lab_1795307344557.jpg',
} as const;

export interface SubjectPageContent {
  slug: SubjectCategorySlug;
  title: string;
  disciplineCode: string;
  levelScope: string;
  shortDescription: string;
  leadSummary: string;
  coreFocus: string;
  imageSrc: string;
  imageAlt: string;
  accentColor: 'blue' | 'teal' | 'amber';
  exemplarTopics: string[];
  featuredConcept: {
    topicTitle: string;
    guidingQuestion: string;
    whatIsIt: string;
    whyItMatters: string;
    howItWorks: string;
    realWorldExamples: string[];
    experimentOrObservation: {
      title: string;
      summary: string;
      apparatus: string;
    };
    practicalApplication: string;
    whatYouCanCreate: string;
  };
}

export const SUBJECTS_DATA: Record<SubjectCategorySlug, SubjectPageContent> = {
  mathematics: {
    slug: 'mathematics',
    title: 'Mathematics',
    disciplineCode: 'MAT-01',
    levelScope: 'School · College · University',
    shortDescription:
      'Discover mathematics not as isolated rules to memorize, but as the living language of patterns, rates of change, spatial geometry, and logical decision-making.',
    leadSummary:
      'Every bridge curve, river flood model, encryption key, and structural proportion relies on mathematical reasoning. Learn why equations take the shapes they do and how to model real phenomena.',
    coreFocus:
      'Rates of change, geometric proportions, optimization, and probability models.',
    imageSrc: PLATFORM_IMAGES.mathematicsGeometry,
    imageAlt:
      'Mathematical modeling workspace with precision drafting compass, steel ruler, and hand-drawn calculus rate-of-change graphs',
    accentColor: 'blue',
    exemplarTopics: [
      'Differential Rates of Change',
      'Geometric Ratios & Structural Design',
      'Probability & Decision Trees',
    ],
    featuredConcept: {
      topicTitle: 'Rates of Change & Optimization in Physical Systems',
      guidingQuestion:
        'How can we predict the exact moment a changing quantity reaches its peak or minimum?',
      whatIsIt:
        'Differential calculus and rate-of-change modeling measure how one variable responds dynamically to small changes in another across time or space.',
      whyItMatters:
        'Instead of guessing by trial and error, engineers and scientists use rate-of-change models to optimize solar panel tilt angles, minimize structural material waste, and forecast river water levels.',
      howItWorks:
        'By measuring the slope of a secant line across shrinking intervals (Δy/Δx), we find the instantaneous rate of change where the tangent slope equals zero at a local maximum or minimum.',
      realWorldExamples: [
        'Determining the optimal seasonal tilt angle for solar panels in Dhaka (23.8°N latitude).',
        'Modeling the rate of water discharge and flood peak timing along river basins.',
        'Designing parabolic arch curves that distribute load evenly without bending.',
      ],
      experimentOrObservation: {
        title: 'Measuring Non-Linear Drainage Rate from a Cylindrical Vessel',
        summary:
          'Track water height every 10 seconds as water drains through a small basal orifice, plot h(t) on millimeter graph paper, and draw tangent lines to verify Torricelli’s rate law.',
        apparatus: 'Clear graduated cylinder, stopwatch, millimeter grid paper, straightedge.',
      },
      practicalApplication:
        'Used in civil hydrology, solar energy engineering, epidemiology, and logistics routing.',
      whatYouCanCreate:
        'Create a seasonal solar-tilt optimization chart and geometric angle finder for rooftops in your local latitude.',
    },
  },
  physics: {
    slug: 'physics',
    title: 'Physics',
    disciplineCode: 'PHY-02',
    levelScope: 'School · College · University',
    shortDescription:
      'Understand the fundamental principles governing matter, energy, forces, waves, and light through direct observation, physical models, and experimentation.',
    leadSummary:
      'Physics connects everyday curiosity—why prisms split white light, how generators induce electric current, and why fluids transition from smooth laminar streams to turbulent eddies—to universal natural laws.',
    coreFocus:
      'Wave optics & refraction, electromagnetism, fluid mechanics, and energy conversion.',
    imageSrc: PLATFORM_IMAGES.physicsOptics,
    imageAlt:
      'Glass prism refracting a beam of light across a laboratory notebook with handwritten geometric ray diagrams',
    accentColor: 'blue',
    exemplarTopics: [
      'Prism Refraction & Dispersion',
      'Electromagnetic Induction',
      'Laminar & Turbulent Fluid Flow',
    ],
    featuredConcept: {
      topicTitle: 'Wave Optics, Refraction & Spectral Dispersion',
      guidingQuestion:
        'Why does a beam of light bend and separate into distinct colors when passing through glass or water?',
      whatIsIt:
        'Refraction is the redirection of a wave as it passes from one medium to another with a different wave propagation speed.',
      whyItMatters:
        'Refraction and total internal reflection make microscope lenses, corrective eyeglasses, astronomical telescopes, and undersea fiber-optic communication networks possible.',
      howItWorks:
        "When light enters denser glass, its phase velocity decreases according to n = c/v. Shorter wavelengths (violet/blue) interact more strongly with electrons in the glass than longer wavelengths (red), bending at a sharper angle (Snell's Law: n₁ sin θ₁ = n₂ sin θ₂).",
      realWorldExamples: [
        'Fiber-optic cables carrying high-speed internet signals via total internal reflection.',
        'Compound microscope objective lenses correcting chromatic aberration.',
        'Atmospheric refraction and rainbow formation in water droplets.',
      ],
      experimentOrObservation: {
        title: 'Geometric Ray Tracing & Refractive Index Measurement',
        summary:
          'Trace incident and emergent light rays through a triangular glass prism on graph paper to measure the angle of minimum deviation and calculate the glass refractive index.',
        apparatus: 'Triangular glass prism, narrow light slit, millimeter graph paper, protractor.',
      },
      practicalApplication:
        'Applied in optical spectroscopy, medical endoscopy, photovoltaics, and telecommunications.',
      whatYouCanCreate:
        'Build a calibrated tabletop prism or diffraction-grating spectrometer to compare spectra of sunlight, LEDs, and fluorescent lamps.',
    },
  },
  chemistry: {
    slug: 'chemistry',
    title: 'Chemistry',
    disciplineCode: 'CHM-03',
    levelScope: 'School · College · University',
    shortDescription:
      'Explore how atomic structure, chemical bonding, molecular interactions, and reaction equilibria explain materials, energy storage, and water chemistry.',
    leadSummary:
      'Chemistry bridges invisible molecular geometry with tangible reality—explaining why ice floats on liquid water, how batteries store electrical potential, and how water purification removes dissolved contaminants.',
    coreFocus:
      'Molecular bonding, electrochemistry, aqueous buffer equilibrium, and reaction kinetics.',
    imageSrc: PLATFORM_IMAGES.chemistryElectro,
    imageAlt:
      'Chemistry laboratory workbench showing a galvanic electrochemical cell experiment with copper and zinc electrodes connected to a digital multimeter',
    accentColor: 'teal',
    exemplarTopics: [
      'Hydrogen Bonding & Density Anomalies',
      'Galvanic & Electrolytic Cells',
      'Water Quality & Acid-Base Buffers',
    ],
    featuredConcept: {
      topicTitle: 'Electrochemical Cells & Redox Energy Conversion',
      guidingQuestion:
        'How does a spontaneous chemical reaction between two metals generate a steady electrical voltage?',
      whatIsIt:
        'Electrochemistry studies how electron transfer (oxidation-reduction) reactions convert chemical potential energy directly into electrical energy and vice versa.',
      whyItMatters:
        'Every mobile phone battery, solar micro-grid storage bank, electroplating process, and water conductivity probe operates on electrochemical half-cell potentials.',
      howItWorks:
        'When a more reactive metal (like zinc) is paired with a less reactive metal (like copper) in electrolyte solutions connected by an ion bridge, zinc atoms oxidize (Zn → Zn²⁺ + 2e⁻) and push electrons through an external circuit toward the copper cathode.',
      realWorldExamples: [
        'Rechargeable lithium-ion and lead-acid battery backups for household solar systems.',
        'Sacrificial zinc anodes protecting steel river ferries and bridges from corrosion.',
        'Electrochemical sensors measuring dissolved oxygen and water salinity.',
      ],
      experimentOrObservation: {
        title: 'Building a Multi-Cell Galvanic Battery & Measuring Load Voltage',
        summary:
          'Construct a copper-zinc galvanic cell using salt-bridge electrolytes, measure open-circuit voltage with a multimeter, and observe how electrode surface area affects current output.',
        apparatus: 'Copper and zinc strips, electrolyte solutions, glass beakers, salt bridge, digital multimeter.',
      },
      practicalApplication:
        'Used in grid energy storage, corrosion engineering, water purification, and industrial metallurgy.',
      whatYouCanCreate:
        'Assemble a series-connected electrochemical battery array capable of powering a low-power microcontroller sensor node.',
    },
  },
  'biology-life-science': {
    slug: 'biology-life-science',
    title: 'Biology & Life Science',
    disciplineCode: 'BIO-04',
    levelScope: 'School · College · University',
    shortDescription:
      'Investigate living organisms, cellular mechanisms, plant physiology, and ecosystems as dynamic, interconnected biological systems.',
    leadSummary:
      'Move past memorizing anatomical word lists. Understand how cells regulate osmotic pressure, how trees lift water without mechanical pumps, and how ecosystems adapt to environmental change.',
    coreFocus:
      'Cellular microscopy, plant vascular transport, enzyme regulation, and ecosystem resilience.',
    imageSrc: PLATFORM_IMAGES.biologyMicroscopy,
    imageAlt:
      'Student researcher examining plant leaf specimens under a compound microscope in a bright laboratory',
    accentColor: 'teal',
    exemplarTopics: [
      'Cellular Microscopy & Osmosis',
      'Xylem & Phloem Vascular Transport',
      'Hemoglobin Oxygen Affinity (Bohr Effect)',
    ],
    featuredConcept: {
      topicTitle: 'Stomatal Regulation & Plant Vascular Transport',
      guidingQuestion:
        'How do plants lift water from soil to high canopy leaves while balancing carbon dioxide intake against dehydration?',
      whatIsIt:
        'The cohesion-tension mechanism and stomatal guard-cell feedback loop that drive water and mineral transport through plant xylem vessels.',
      whyItMatters:
        'Understanding plant water efficiency is critical for cultivating drought- and salinity-resilient crops, managing agricultural irrigation, and modeling forest transpiration.',
      howItWorks:
        'Evaporation from leaf mesophyll cell walls creates negative pressure tension that pulls hydrogen-bonded water columns upward through xylem conduits, while guard cells adjust pore aperture via potassium-driven turgor pressure.',
      realWorldExamples: [
        'Salinity and drought adaptation in mangrove and coastal agricultural crops in southern Bangladesh.',
        'Microscopic stomatal density differences between sun-exposed and shade-grown leaves.',
        'Bio-inspired passive capillary wicking systems for micro-irrigation.',
      ],
      experimentOrObservation: {
        title: 'Epidermal Stomatal Casts & Microscopic Density Mapping',
        summary:
          'Create transparent epidermal impressions from upper and lower leaf surfaces, examine guard cells at 400x magnification, and calculate stomatal index per square millimeter.',
        apparatus: 'Compound microscope, glass slides, clear film solution, forceps, fresh plant leaves.',
      },
      practicalApplication:
        'Applied in agronomy, crop physiology, climate biology, and biomimetic fluidics.',
      whatYouCanCreate:
        'Build a comparative botanical field atlas mapping stomatal density and transpiration rates across local plant species.',
    },
  },
  'technology-computing': {
    slug: 'technology-computing',
    title: 'Technology & Computing',
    disciplineCode: 'TEC-05',
    levelScope: 'School · College · University',
    shortDescription:
      'Demystify how computers, algorithms, digital logic circuits, networks, and embedded microcontrollers represent and process real-world information.',
    leadSummary:
      'Computing is more than syntax. Understand how physical voltage levels become binary logic, how sensors digitize continuous signals, and how algorithms solve complex problems step by step.',
    coreFocus:
      'Digital logic gates, sensor analog-to-digital sampling, data structures, and algorithmic reasoning.',
    imageSrc: PLATFORM_IMAGES.computingMicrocontroller,
    imageAlt:
      'Computer engineering desk with an embedded microcontroller board wired to sensors and an oscilloscope display',
    accentColor: 'blue',
    exemplarTopics: [
      'Boolean Logic to Silicon Gates',
      'Analog-to-Digital Sensor Sampling',
      'Algorithmic Efficiency & Routing',
    ],
    featuredConcept: {
      topicTitle: 'From Physical Signals to Digital Data (ADC & Filtering)',
      guidingQuestion:
        'How does a digital microcontroller read continuous physical phenomena like temperature, sound, or water conductivity?',
      whatIsIt:
        'Signal sampling, quantization, and digital filtering convert continuous analog voltages from physical sensors into discrete binary numbers.',
      whyItMatters:
        'Every smart instrument—from medical pulse oximeters and weather stations to automated industrial controllers—depends on accurate analog-to-digital conversion.',
      howItWorks:
        'An Analog-to-Digital Converter (ADC) samples a continuous voltage waveform at fixed time intervals (sampling frequency) and maps the voltage amplitude to an integer register (e.g., 0–1023 for a 10-bit ADC).',
      realWorldExamples: [
        'Microcontroller weather nodes sampling air temperature, humidity, and barometric pressure.',
        'Digital audio recorders sampling acoustic sound waves above the Nyquist rate.',
        'Moving-average software filters removing electrical noise from industrial sensor probes.',
      ],
      experimentOrObservation: {
        title: 'Sampling an Analog Photoresistor & Observing Signal Noise',
        summary:
          'Wire a voltage-divider sensor to a microcontroller ADC pin, plot raw versus moving-average filtered readings in real time, and measure quantization step resolution.',
        apparatus: 'Microcontroller development board, breadboard, sensor resistor, jumper wires, serial plotter.',
      },
      practicalApplication:
        'Foundational to embedded systems, IoT telemetry, biomedical instrumentation, and signal processing.',
      whatYouCanCreate:
        'Program a calibrated multi-sensor environmental data logger with real-time noise filtering and threshold alerts.',
    },
  },
  'engineering-innovation': {
    slug: 'engineering-innovation',
    title: 'Engineering & Innovation',
    disciplineCode: 'ENG-06',
    levelScope: 'School · College · University',
    shortDescription:
      'Combine physics, mathematics, chemistry, and computing to design, prototype, test, and refine practical hardware and infrastructure solutions.',
    leadSummary:
      'Engineering is where conceptual understanding becomes tangible creation. Learn how to analyze constraints, test prototypes systematically, and build resilient systems for real communities.',
    coreFocus:
      'Solar-powered environmental sensors, structural mechanics, control feedback loops, and system design.',
    imageSrc: PLATFORM_IMAGES.solarWaterProject,
    imageAlt:
      'Student engineering a solar-powered breadboard circuit connected to a water quality probe and multimeter',
    accentColor: 'amber',
    exemplarTopics: [
      'Solar Water Quality Telemetry',
      'Structural Truss Force Distribution',
      'Closed-Loop Feedback Control',
    ],
    featuredConcept: {
      topicTitle: 'Autonomous Solar-Powered Water Quality Instrumentation',
      guidingQuestion:
        'How can we combine photovoltaic power, electrochemistry, and embedded circuits to monitor water salinity in the field?',
      whatIsIt:
        'An interdisciplinary engineering design process integrating energy harvesting, ionic conductivity sensing, and calibration verification.',
      whyItMatters:
        'Provides affordable, field-repairable tools for students, farmers, and community researchers to monitor drinking and irrigation water quality.',
      howItWorks:
        'A regulated solar cell supplies power to an oscillating measurement bridge across submerged electrodes; the resulting voltage drop is calibrated against known salt concentrations (TDS in ppm) with temperature compensation.',
      realWorldExamples: [
        'Field testing river and tube-well water salinity in coastal districts of Bangladesh.',
        'Solar-powered soil moisture and conductivity monitors for precision agriculture.',
        'Modular citizen-science environmental monitoring stations.',
      ],
      experimentOrObservation: {
        title: 'Calibrating a Breadboard Water Conductivity Probe with Standard Solutions',
        summary:
          'Prepare three reference water samples of known salinity, measure probe output voltage with a multimeter, and plot a calibration curve relating voltage to Total Dissolved Solids (TDS).',
        apparatus: 'Small solar panel, breadboard circuit, stainless probe electrodes, digital multimeter, glass beaker.',
      },
      practicalApplication:
        'Applied in environmental engineering, renewable instrumentation, agricultural technology, and public health.',
      whatYouCanCreate:
        'Design, build, and calibrate a standalone solar-powered water quality and salinity testing station.',
    },
  },
};

export const ICE_FLOATING_JOURNEY_STEPS = [
  {
    stepNumber: '01',
    stageTag: 'Understand',
    title: 'Start with a Question',
    subtitle: 'Why Does Ice Float on Water?',
    description:
      'Almost every solid sinks when placed in its own liquid—solid wax sinks in melted wax, and solid iron sinks in molten iron. Yet solid ice floats effortlessly on liquid water. Why does water behave differently?',
    scientificNote: 'Curiosity begins by noticing an everyday anomaly rather than memorizing a fact.',
    accent: 'blue' as const,
  },
  {
    stepNumber: '02',
    stageTag: 'Understand',
    title: 'Understand Density',
    subtitle: 'Mass Packed Into Volume (ρ = m / V)',
    description:
      'Whether an object floats or sinks depends on its density compared to the surrounding fluid. Liquid water reaches its maximum density (1.000 g/cm³) at 4°C, while solid ice at 0°C has a lower density of about 0.917 g/cm³.',
    scientificNote: 'When water freezes into ice, its volume expands by roughly 9%.',
    accent: 'blue' as const,
  },
  {
    stepNumber: '03',
    stageTag: 'Explore',
    title: 'Explore Molecular Structure',
    subtitle: 'Hydrogen Bonding & Hexagonal Crystal Lattices',
    description:
      'In liquid water, polar H₂O molecules constantly form, break, and slip past hydrogen bonds, packing closely together. As temperature drops to 0°C, thermal motion slows and hydrogen bonds lock molecules into a rigid, open hexagonal lattice with empty space between molecules.',
    scientificNote: 'Open hexagonal geometry holds H₂O molecules farther apart than in liquid water.',
    accent: 'teal' as const,
  },
  {
    stepNumber: '04',
    stageTag: 'Explore',
    title: 'Observe and Experiment',
    subtitle: 'Measure Volume Expansion & Buoyant Displacement',
    description:
      'By marking the water level in a graduated cylinder before and after freezing, or measuring the submerged fraction (~91.7%) of a floating ice cube in a glass beaker beside a thermometer, you directly verify the density ratio.',
    scientificNote: 'Archimedes’ Principle: Floating ice displaces a volume of liquid water equal to its weight.',
    accent: 'teal' as const,
  },
  {
    stepNumber: '05',
    stageTag: 'Apply',
    title: 'Connect It with Frozen Lakes and Aquatic Life',
    subtitle: 'Thermal Insulation of Ecosystems in Winter',
    description:
      'If ice were denser than liquid water, lakes and rivers would freeze from the bottom up, destroying aquatic ecosystems. Because ice floats, it forms an insulating surface blanket that keeps the dense 4°C liquid water beneath unfrozen all winter.',
    scientificNote: 'A microscopic molecular bond angle (104.5°) preserves entire macroscopic ecosystems.',
    accent: 'blue' as const,
  },
  {
    stepNumber: '06',
    stageTag: 'Create',
    title: 'Apply What Was Learned',
    subtitle: 'Solve Engineering & Real-World Problems',
    description:
      'Understanding water’s expansion upon freezing explains why unprotected water pipes burst in sub-zero weather, how frost wedging fractures rocks into soil, and how engineers design expansion joints and cold-climate water infrastructure.',
    scientificNote: 'From molecular chemistry to civil engineering and ecology—one connected concept.',
    accent: 'amber' as const,
  },
] as const;

export const REAL_WORLD_LEARNING_METHODS = [
  {
    id: 'real-world-examples',
    index: '01',
    title: 'Real-World Examples',
    subtitle: 'See Where Concepts Live Outside Textbooks',
    description:
      'Every topic connects directly to tangible systems—from how river ferries use sacrificial zinc anodes against corrosion to how fiber-optic cables guide laser pulses across continents.',
    exampleConnection: 'Physics & Engineering · Laminar vs. turbulent flow past river bridge piers',
    imageSrc: PLATFORM_IMAGES.fluidDynamicsLab,
    imageAlt:
      'Students observing a real fluid dynamics wave tank experiment in an engineering laboratory',
  },
  {
    id: 'experiments-observations',
    index: '02',
    title: 'Experiments & Observations',
    subtitle: 'Test Ideas Through Direct Physical Evidence',
    description:
      'Science is built on observation. Guided experiments show how to set up simple apparatus, record measurements honestly, trace light rays or biological structures, and verify principles firsthand.',
    exampleConnection: 'Physics & Biology · Prism ray-tracing & leaf stomatal microscopy',
    imageSrc: PLATFORM_IMAGES.physicsOptics,
    imageAlt:
      'Glass prism refracting a beam of light across a notebook with handwritten geometric ray diagrams',
  },
  {
    id: 'practical-projects',
    index: '03',
    title: 'Practical Projects',
    subtitle: 'Synthesize Knowledge by Building Something Useful',
    description:
      'Move from passive reading to active creation. Combine concepts across subjects to prototype working instruments, environmental sensors, mathematical models, and experimental tools.',
    exampleConnection: 'Engineering & Chemistry · Solar-powered water conductivity & salinity probe',
    imageSrc: PLATFORM_IMAGES.solarWaterProject,
    imageAlt:
      'Student testing a solar-powered breadboard circuit and water quality probe with a digital multimeter',
  },
  {
    id: 'interactive-learning',
    index: '04',
    title: 'Interactive Learning',
    subtitle: 'Explore Cause and Effect Step by Step',
    description:
      'Manipulate variables, step through multi-stage conceptual breakdowns, and trace how changing one physical parameter reshapes an entire mathematical, biological, or electronic system.',
    exampleConnection: 'Computing & Systems · Real-time sensor signal sampling and waveform analysis',
    imageSrc: PLATFORM_IMAGES.computingMicrocontroller,
    imageAlt:
      'Computer engineering workbench with microcontroller circuit and live waveform display on monitor',
  },
] as const;

export const BEYOND_CLASSROOM_SKILLS = [
  {
    index: '01',
    title: 'Critical Thinking',
    description:
      'Evaluate claims using evidence, question underlying assumptions, and distinguish true causal mechanisms from surface correlations.',
    practiceContext: 'Asking "Why does this formula work, and where do its assumptions break down?"',
  },
  {
    index: '02',
    title: 'Problem Solving',
    description:
      'Break unfamiliar real-world challenges into clear physical, mathematical, and logical components that can be analyzed and tested.',
    practiceContext: 'Translating an environmental or engineering constraint into a solvable model.',
  },
  {
    index: '03',
    title: 'Creativity',
    description:
      'Connect ideas across different fields—using biological vascular patterns to inspire fluid design, or geometry to optimize energy capture.',
    practiceContext: 'Seeing unexpected bridges between mathematics, nature, and technology.',
  },
  {
    index: '04',
    title: 'Practical Skills',
    description:
      'Gain confidence working with real measurements, circuit breadboards, optical instruments, microscopy slides, and quantitative data.',
    practiceContext: 'Turning abstract textbook diagrams into working hands-on observations.',
  },
  {
    index: '05',
    title: 'Independent Learning',
    description:
      'Develop the habit of self-directed inquiry—knowing how to investigate a new phenomenon from first principles without waiting for a syllabus.',
    practiceContext: 'Progressing autonomously through Understand → Explore → Apply → Create.',
  },
  {
    index: '06',
    title: 'Innovation',
    description:
      'Use deep conceptual understanding not merely to repeat existing answers, but to design better tools, processes, and solutions for your community.',
    practiceContext: 'Moving from consumer of textbook answers to creator of practical solutions.',
  },
] as const;
