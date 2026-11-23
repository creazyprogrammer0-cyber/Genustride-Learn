import { VERIFIED_PHOTOGRAPHY_INVENTORY } from './photography-inventory';

export type ProjectCategorySlug =
  | 'engineering'
  | 'science'
  | 'technology'
  | 'mathematics';

export type ProjectDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ProjectMaterialItem {
  name: string;
  quantity: string;
  purpose: string;
}

export interface ProjectConceptItem {
  title: string;
  discipline: string;
  principleOrFormula: string;
  explanation: string;
}

export interface ProjectProcedureStep {
  stepNumber: number;
  title: string;
  instruction: string;
  verificationCheck: string;
}

export interface ProjectObservationColumn {
  trialOrCondition: string;
  expectedQualitativeBehavior: string;
  learnerMeasurementPrompt: string;
  unit: string;
}

export interface ProjectReflectionItem {
  question: string;
  conceptualHint: string;
}

export interface ProjectDetailData {
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategorySlug;
  categoryLabel: string;
  subjectSlug: string;
  subjectLabel: string;
  difficulty: ProjectDifficulty;
  isBeginnerFriendly: boolean;
  isFeatured: boolean;
  estimatedTime: string;
  imageSrc: string;
  imageAlt: string;
  coreMechanismFormula: string;
  whatYouCreateSummary: string;
  requiredMaterials: ProjectMaterialItem[];
  whatYouWillDiscover: string[];
  whyThisProjectMatters: string;
  conceptsInvolved: ProjectConceptItem[];
  safetyInstructions: {
    severityLevel: 'Low-Voltage / General Caution' | 'Field & Mechanical Caution' | 'Laboratory & Hygiene Caution';
    warnings: string[];
  };
  stepByStepProcedure: ProjectProcedureStep[];
  expectedObservations: {
    distinctionNotice: string;
    qualitativeExpectations: string[];
    measurementLogTemplate: ProjectObservationColumn[];
  };
  scientificExplanation: {
    overview: string;
    governingEquation: string;
    equationBreakdown: string;
    deeperMechanism: string;
    diagramType:
      | 'electric-circuit'
      | 'water-filtration'
      | 'hydraulic-pascal'
      | 'solar-irradiance'
      | 'weather-station'
      | 'fibonacci-phyllotaxis'
      | 'truss-vectors'
      | 'lorentz-motor';
  };
  realWorldApplication: {
    headline: string;
    description: string;
    bangladeshAndGlobalContext: string;
    industryExamples: string[];
  };
  reflectionQuestions: ProjectReflectionItem[];
  furtherChallenges: {
    title: string;
    description: string;
    targetVariable: string;
  }[];
  relatedProjectSlugs: string[];
}

export const PROJECT_CATEGORY_DEFINITIONS: {
  slug: ProjectCategorySlug;
  name: string;
  shortLabel: string;
  description: string;
  focusAreas: string[];
}[] = [
  {
    slug: 'engineering',
    name: 'Engineering Projects',
    shortLabel: 'Engineering',
    description:
      'Design, build, and test mechanical, hydraulic, structural, and renewable energy systems under real physical constraints.',
    focusAreas: [
      'Fluid power & Pascal’s principle',
      'Solar photovoltaic energy conversion',
      'Structural truss load geometry',
    ],
  },
  {
    slug: 'science',
    name: 'Science Activities',
    shortLabel: 'Science',
    description:
      'Investigate electrical circuits, multi-stage water purification, electromagnetism, and cellular microscopy through controlled experiments.',
    focusAreas: [
      'Closed-loop DC circuits & Ohm’s Law',
      'Porous media filtration & adsorption',
      'Microscopy & biological transport',
    ],
  },
  {
    slug: 'technology',
    name: 'Technology Projects',
    shortLabel: 'Technology',
    description:
      'Construct environmental measurement instruments and sensor-driven data loggers to quantify real-world physical phenomena.',
    focusAreas: [
      'Meteorological instrumentation',
      'Ultrasonic time-of-flight sensing',
      'Empirical calibration & logging',
    ],
  },
  {
    slug: 'mathematics',
    name: 'Mathematics Challenges',
    shortLabel: 'Mathematics',
    description:
      'Measure geometric ratios, Fibonacci phyllotaxis spirals, and trigonometric force vectors directly in natural and engineered structures.',
    focusAreas: [
      'Fibonacci sequences & Golden Angle',
      'Angular packing efficiency',
      'Trigonometric vector equilibrium',
    ],
  },
];

export const PROJECTS_DATA: ProjectDetailData[] = [
  // 1. Build a Simple Electric Circuit
  {
    slug: 'build-a-simple-electric-circuit',
    title: 'Build a Simple Electric Circuit',
    subtitle:
      'Construct a closed-loop low-voltage DC circuit on a breadboard to observe how voltage, current, and resistance govern electrical energy flow.',
    category: 'science',
    categoryLabel: 'Science Activities',
    subjectSlug: 'physics',
    subjectLabel: 'Physics & Electronics',
    difficulty: 'Beginner',
    isBeginnerFriendly: true,
    isFeatured: true,
    estimatedTime: '45 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectElectricCircuit.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectElectricCircuit.alt,
    coreMechanismFormula: 'V = I · R',
    whatYouCreateSummary:
      'A switch-controlled LED breadboard circuit with interchangeable series and parallel resistor branches.',
    requiredMaterials: [
      {
        name: 'Solderless Breadboard (400-point)',
        quantity: '1 unit',
        purpose: 'Provides conductive spring clips to connect components without soldering.',
      },
      {
        name: '3V AA Battery Holder with 2 × 1.5V AA Alkaline Cells',
        quantity: '1 pack (3V DC total)',
        purpose: 'Supplies a safe, low-voltage direct current potential difference.',
      },
      {
        name: '5mm Standard Red LEDs (Forward Voltage ~1.8V–2.0V)',
        quantity: '2 units',
        purpose: 'Converts electrical current into visible light when forward-biased.',
      },
      {
        name: 'Carbon or Metal Film Resistors (100 Ω, 220 Ω, 470 Ω)',
        quantity: '1 of each value',
        purpose: 'Limits electrical current to protect the LED and test Ohm’s Law.',
      },
      {
        name: 'Momentary Tactile Push Button or Slide Switch',
        quantity: '1 unit',
        purpose: 'Opens and closes the conductive loop to control current flow.',
      },
      {
        name: 'Male-to-Male Jumper Wires & Optional Digital Multimeter',
        quantity: '4–6 wires',
        purpose: 'Completes breadboard paths and allows optional voltage/current measurement.',
      },
    ],
    whatYouWillDiscover: [
      'Why electrical current flows only when a continuous, unbroken conductive path (closed loop) exists between the positive and negative terminals.',
      'How a current-limiting resistor prevents excessive current from damaging a light-emitting diode (LED).',
      'Why swapping a 100 Ω resistor for a 470 Ω resistor visibly alters LED brightness by changing current according to Ohm’s Law.',
      'How diode polarity (anode vs. cathode) enforces one-way current conduction.',
    ],
    whyThisProjectMatters:
      'Every smartphone, hospital monitor, solar microgrid, and household appliance relies on controlled closed-loop circuits. When learners physically trace the path from battery anode through switch, resistor, and LED back to cathode, voltage and resistance stop being abstract symbols on an exam sheet and become tangible physical controls.',
    conceptsInvolved: [
      {
        title: 'Closed-Loop Circuit Continuity',
        discipline: 'Electromagnetism',
        principleOrFormula: '∑ I_in = ∑ I_out',
        explanation:
          'Charge carriers require a complete path from higher electric potential (+) to lower electric potential (−). An open switch creates an air gap with near-infinite resistance.',
      },
      {
        title: 'Ohm’s Law & Current Limiting',
        discipline: 'Physics',
        principleOrFormula: 'I = (V_source − V_LED) / R',
        explanation:
          'For a given voltage drop across the resistor, current is inversely proportional to resistance R.',
      },
      {
        title: 'Semiconductor Diode Polarity',
        discipline: 'Electronics',
        principleOrFormula: 'V_forward ≈ 1.9 V (Red LED)',
        explanation:
          'An LED conducts and emits photons only when its longer anode lead is connected toward the positive supply and its shorter cathode lead toward negative.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Low-Voltage / General Caution',
      warnings: [
        'Use only low-voltage AA alkaline batteries (3V DC total). Never connect breadboard components to wall mains AC outlets or high-capacity lithium packs.',
        'Never connect the positive (+) and negative (−) battery leads directly together without a resistor and load; a direct short circuit will rapidly overheat the battery and wires.',
        'Always place a resistor (at least 100 Ω) in series with the LED before closing the switch so the LED does not burn out.',
        'Disconnect the battery pack clip when rearranging jumper wires or finished with the experiment.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Inspect Breadboard Rail Continuity',
        instruction:
          'Place your breadboard flat on the desk. Identify the long vertical power rails (+ and −) along the edges and the horizontal 5-hole terminal rows (A–E and F–J) separated by the center divider.',
        verificationCheck:
          'Confirm the battery pack is disconnected while placing components.',
      },
      {
        stepNumber: 2,
        title: 'Insert the Switch and Current-Limiting Resistor',
        instruction:
          'Bridge the tactile push switch across the center trench of the breadboard. Connect one terminal of the switch to the positive (+) rail using a jumper wire, and connect a 220 Ω resistor from the switch’s output row to a new empty terminal row.',
        verificationCheck:
          'Ensure both resistor leads are firmly seated in separate horizontal rows.',
      },
      {
        stepNumber: 3,
        title: 'Connect the LED with Correct Polarity',
        instruction:
          'Inspect the 5mm red LED: the longer metal leg is the positive anode (+), and the shorter leg next to the flat rim is the negative cathode (−). Insert the longer anode leg into the same row as the 220 Ω resistor output, and insert the shorter cathode leg into a row connected to the negative (−) ground rail.',
        verificationCheck:
          'Double-check that the two LED legs are not plugged into the same 5-hole row.',
      },
      {
        stepNumber: 4,
        title: 'Connect the 3V Battery Pack and Test the Loop',
        instruction:
          'Attach the red positive wire of the 3V AA battery pack to the positive (+) breadboard rail and the black negative wire to the negative (−) rail. Press the push switch to close the circuit.',
        verificationCheck:
          'The red LED should illuminate immediately while the switch is pressed and turn off when released.',
      },
      {
        stepNumber: 5,
        title: 'Compare Resistance Values (100 Ω vs. 220 Ω vs. 470 Ω)',
        instruction:
          'Release the switch, swap the 220 Ω resistor first for the 100 Ω resistor, and then for the 470 Ω resistor. Observe the relative LED brightness for each resistor and, if using a multimeter, measure the voltage drop across the resistor.',
        verificationCheck:
          'Record your qualitative brightness rankings and any multimeter readings in your observation log.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: The behaviors listed below are theoretical expectations based on Ohm’s Law for a nominal 3.0V supply and a 1.9V red LED. Your actual measured voltages and currents will vary depending on your battery’s real terminal voltage and resistor tolerance (±5%). Record what you actually observe.',
      qualitativeExpectations: [
        'When the push switch is open, the circuit loop is broken; expected current is 0 mA and the LED remains completely dark.',
        'When closed with the 100 Ω resistor, the LED is expected to glow brightest because lower resistance permits higher current.',
        'When closed with the 470 Ω resistor, the LED is expected to glow noticeably dimmer because higher resistance restricts current flow.',
        'If the LED is intentionally reversed (cathode toward +), the reverse-biased p-n junction blocks current and the LED will not light.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Trial 1: Series R = 100 Ω (Switch Closed)',
          expectedQualitativeBehavior: 'Bright illumination; theoretical I ≈ (3.0V − 1.9V) / 100Ω ≈ 11.0 mA',
          learnerMeasurementPrompt: 'Record actual LED brightness & multimeter current (if available)',
          unit: 'mA / Visual Rank',
        },
        {
          trialOrCondition: 'Trial 2: Series R = 220 Ω (Switch Closed)',
          expectedQualitativeBehavior: 'Moderate illumination; theoretical I ≈ (3.0V − 1.9V) / 220Ω ≈ 5.0 mA',
          learnerMeasurementPrompt: 'Record actual LED brightness & multimeter current (if available)',
          unit: 'mA / Visual Rank',
        },
        {
          trialOrCondition: 'Trial 3: Series R = 470 Ω (Switch Closed)',
          expectedQualitativeBehavior: 'Dimmer illumination; theoretical I ≈ (3.0V − 1.9V) / 470Ω ≈ 2.3 mA',
          learnerMeasurementPrompt: 'Record actual LED brightness & multimeter current (if available)',
          unit: 'mA / Visual Rank',
        },
        {
          trialOrCondition: 'Trial 4: LED Polarity Reversed (220 Ω)',
          expectedQualitativeBehavior: 'No light emission; reverse-biased diode blocks current (I ≈ 0 mA)',
          learnerMeasurementPrompt: 'Confirm whether LED remains off when reversed',
          unit: 'On / Off',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'An electric circuit transfers energy from a chemical voltage source (the 3V AA battery) to an electrical load (the resistor and LED) via moving electrons in metallic conductors. By Kirchhoff’s Voltage Law, the sum of potential rises equals the sum of potential drops around any closed loop.',
      governingEquation: 'I = (V_source − V_LED) / R_series',
      equationBreakdown:
        'Where V_source is the battery terminal voltage (~3.0 V), V_LED is the forward threshold voltage of the red LED (~1.9 V), R_series is the resistance in Ohms (Ω), and I is the resulting loop current in Amperes (A).',
      deeperMechanism:
        'Because the LED has a characteristic forward voltage drop of roughly 1.9 V once conducting, the remaining ~1.1 V drops across the series resistor. Doubling the resistance halves the current flowing through every series component in the loop.',
      diagramType: 'electric-circuit',
    },
    realWorldApplication: {
      headline: 'From Breadboard Prototypes to Household Electronics & Microgrids',
      description:
        'Every indicator lamp, solar charge controller, and microcontroller GPIO output pin uses the exact series current-limiting architecture you built on this breadboard.',
      bangladeshAndGlobalContext:
        'In Bangladesh’s off-grid and rooftop Solar Home Systems (SHS) as well as electronics repair workshops, technicians diagnose faults by checking loop continuity, diode polarity, and voltage drops across protective resistors.',
      industryExamples: [
        'Microcontroller status indicators and display backlights',
        'DC fuse and resistor protection networks in battery-powered devices',
        'Automotive and household low-voltage lighting switches',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'Why did changing the position of the resistor (before the LED vs. after the LED in the same series loop) have no effect on LED brightness?',
        conceptualHint:
          'In a single unbranched series loop, conservation of charge guarantees that the exact same current I flows through every cross-section of the circuit.',
      },
      {
        question:
          'What would happen if you connected two red LEDs (~1.9 V forward voltage each) in series using only a 3.0 V battery pack?',
        conceptualHint:
          'Compare the combined minimum forward threshold voltage (1.9 V + 1.9 V = 3.8 V) against the 3.0 V supply voltage.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Parallel Dual-LED Branch Comparison',
        description:
          'Wire a second LED with its own 220 Ω resistor in parallel across the same power rails. Compare the brightness of two parallel LEDs against two LEDs wired in series.',
        targetVariable: 'Branch Voltage & Total Supply Current',
      },
      {
        title: 'Variable Brightness Dimmer with a Potentiometer',
        description:
          'Keep the 100 Ω safety resistor in series and add a 1 kΩ rotary potentiometer to create a continuous brightness dimmer.',
        targetVariable: 'Continuous Resistance Control (100 Ω – 1100 Ω)',
      },
    ],
    relatedProjectSlugs: [
      'understand-solar-energy',
      'build-a-commutated-dc-electric-motor',
      'microcontroller-ultrasonic-distance-logger',
    ],
  },

  // 2. Explore Water Filtration
  {
    slug: 'explore-water-filtration',
    title: 'Explore Water Filtration',
    subtitle:
      'Construct a multi-layer gravity filtration column using gravel, fine sand, activated charcoal, and cotton to investigate particle separation and adsorption.',
    category: 'science',
    categoryLabel: 'Science Activities',
    subjectSlug: 'chemistry',
    subjectLabel: 'Chemistry & Environmental Science',
    difficulty: 'Beginner',
    isBeginnerFriendly: true,
    isFeatured: true,
    estimatedTime: '60 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectWaterFiltration.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectWaterFiltration.alt,
    coreMechanismFormula: 'd_particle > d_pore  &  Surface Adsorption',
    whatYouCreateSummary:
      'A multi-stage gravity filter column and a comparative turbidity & flow-rate observation chart.',
    requiredMaterials: [
      {
        name: 'Clear PET Plastic Bottle (1.5 L, base cleanly cut by an adult) or Lab Funnel Column',
        quantity: '1 column',
        purpose: 'Serves as the transparent vertical vessel for layered filtration media.',
      },
      {
        name: 'Clean Cotton Balls or Fine Cheesecloth Mesh',
        quantity: '3–4 balls',
        purpose: 'Forms the bottom retaining plug so charcoal granules do not wash into the beaker.',
      },
      {
        name: 'Rinse-Washed Granular Activated Carbon (Charcoal)',
        quantity: '150 g',
        purpose: 'Provides high microscopic surface area to adsorb dissolved organic compounds and odors.',
      },
      {
        name: 'Washed Fine Silica Sand & Coarse Silica Sand',
        quantity: '200 g each',
        purpose: 'Traps fine suspended silt and clay particles within narrow interstitial pore spaces.',
      },
      {
        name: 'Washed Pea Gravel / Small Pebbles',
        quantity: '200 g',
        purpose: 'Intercepts large debris at the top and prevents upward disturbance of the sand layer.',
      },
      {
        name: 'Clear Glass Beakers, Stopwatch, and Muddy Test Water (Tap water + garden soil/tea)',
        quantity: '3 beakers',
        purpose: 'Allows side-by-side visual comparison of unfiltered vs. filtered water clarity and flow time.',
      },
    ],
    whatYouWillDiscover: [
      'Why water filtration layers are ordered from coarsest material at the top (gravel) to finest porous media and adsorption media below (sand and activated carbon).',
      'The difference between mechanical sieving (trapping suspended solids larger than pore channels) and chemical adsorption (binding organic molecules to activated carbon surfaces).',
      'Why clear-looking filtered water is still not guaranteed to be microbiologically safe for drinking without disinfection or boiling.',
      'How pore size packing controls the trade-off between percolation flow rate and filtrate clarity.',
    ],
    whyThisProjectMatters:
      'Clean water engineering is one of humanity’s most vital applied sciences. Understanding how physical filtration removes suspended turbidity—and why dissolved ions or microscopic pathogens require additional treatment steps—equips learners to evaluate real municipal and household water treatment systems critically.',
    conceptsInvolved: [
      {
        title: 'Graduated Granular Sieving',
        discipline: 'Environmental Engineering',
        principleOrFormula: 'd_pore(gravel) > d_pore(sand) > d_pore(cotton)',
        explanation:
          'If fine media were placed at the very top without coarse pre-filtration, large sediment would clog the surface immediately (surface blinding).',
      },
      {
        title: 'Activated Carbon Adsorption',
        discipline: 'Surface Chemistry',
        principleOrFormula: 'Van der Waals Surface Binding',
        explanation:
          'Activated charcoal contains millions of micropores per gram, attracting non-polar organic pigments and odor molecules onto its internal carbon surfaces.',
      },
      {
        title: 'Darcy Percolation & Flow Resistance',
        discipline: 'Fluid Mechanics',
        principleOrFormula: 'Q = (k · A · Δh) / L',
        explanation:
          'Volumetric flow rate Q through a porous bed depends on hydraulic permeability k, cross-sectional area A, water head Δh, and bed thickness L.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Laboratory & Hygiene Caution',
      warnings: [
        'NEVER DRINK the filtered water produced in this experiment. Gravity sand-and-charcoal columns remove suspended dirt and pigments but do NOT sterilize bacteria, viruses, or heavy metals.',
        'Pre-rinse the gravel, sand, and activated charcoal separately in a colander before layering so loose black charcoal dust does not cloud your first trial.',
        'Have an adult prepare the cut plastic bottle edge or cover the cut rim with masking tape to prevent sharp plastic edges.',
        'Wash hands thoroughly with soap and water after handling garden soil and test water samples.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Prepare and Pack the Bottom Cotton Retaining Plug',
        instruction:
          'Invert the transparent column over a stable collection beaker with the cap removed. Pack a 3 cm layer of clean cotton balls firmly into the narrow neck.',
        verificationCheck:
          'Pour 50 mL of clean tap water through to confirm water drips steadily without dislodging the cotton.',
      },
      {
        stepNumber: 2,
        title: 'Layer the Activated Charcoal, Fine Sand, and Gravel',
        instruction:
          'Gently spoon a 4 cm layer of pre-rinsed activated charcoal directly above the cotton plug. Above the charcoal, add a 5 cm layer of fine sand, followed by a 4 cm layer of coarse sand, and top with a 4 cm layer of washed gravel.',
        verificationCheck:
          'Look through the transparent wall to verify distinct, horizontal strata with minimal mixing at the boundaries.',
      },
      {
        stepNumber: 3,
        title: 'Prepare a Standardized Turbid Test Sample',
        instruction:
          'In a separate beaker, mix 300 mL of tap water with 1 tablespoon of fine soil and 20 mL of brewed tea (to introduce both suspended particles and dissolved organic color). Stir well and pour 50 mL into a small reference cup labeled "Unfiltered Control".',
        verificationCheck:
          'Place a printed text card behind the Unfiltered Control cup and observe whether the letters are legible through the liquid.',
      },
      {
        stepNumber: 4,
        title: 'Run Filtration Pass 1 and Measure Percolation Time',
        instruction:
          'Start your stopwatch as you slowly pour 200 mL of the turbid sample onto the top gravel layer. Record the time until the first clear drop exits the bottom nozzle (breakthrough time) and the total time to collect 100 mL of filtrate.',
        verificationCheck:
          'Pour gently onto the gravel so the incoming water stream does not bore a hole into the sand layer.',
      },
      {
        stepNumber: 5,
        title: 'Evaluate Clarity and Run a Second Filtration Pass',
        instruction:
          'Compare your Pass 1 filtrate side-by-side against the Unfiltered Control using the printed text card test. Then pour the Pass 1 filtrate through the column a second time (Pass 2) and record changes in clarity and flow rate.',
        verificationCheck:
          'Log your actual breakthrough times and text-card visibility observations in the data table.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Breakthrough times and filtrate clarity depend heavily on the grain size distribution of your sand, how tightly you packed the cotton plug, and the clay content of your local soil. Do not copy theoretical numbers—record your stopwatch measurements.',
      qualitativeExpectations: [
        'Large leaf fragments and coarse soil grains are expected to remain trapped in the top gravel and coarse sand layers.',
        'Fine suspended silt is expected to accumulate in the upper 1–2 cm of the fine sand layer, visibly darkening that zone.',
        'The collected filtrate is expected to be substantially clearer than the muddy control sample, with reduced tea coloration due to activated carbon adsorption.',
        'In subsequent passes, percolation flow rate typically slows down slightly as trapped sediment reduces the open pore volume in the sand layer.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Control Sample (Unfiltered Muddy + Tea Water)',
          expectedQualitativeBehavior: 'Opaque brown suspension; printed 12pt text behind beaker is not readable',
          learnerMeasurementPrompt: 'Describe color, odor, and text visibility distance',
          unit: 'Visual Clarity Grade',
        },
        {
          trialOrCondition: 'Filtration Pass 1 (100 mL Collected)',
          expectedQualitativeBehavior: 'Suspended soil removed; translucent liquid; text card becomes readable',
          learnerMeasurementPrompt: 'Record stopwatch breakthrough time & total time for 100 mL',
          unit: 'Seconds (s)',
        },
        {
          trialOrCondition: 'Filtration Pass 2 (Re-filtering Pass 1 Output)',
          expectedQualitativeBehavior: 'Further reduction in fine turbidity and organic tint; slightly slower drip rate',
          learnerMeasurementPrompt: 'Record stopwatch time for 100 mL & compare clarity against Pass 1',
          unit: 'Seconds (s)',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'Granular media filtration operates through a combination of physical straining, sedimentation inside pore tortuosity, and surface adsorption. Rather than acting like a single flat kitchen sieve, a deep sand bed forces water through a three-dimensional labyrinth of micro-channels.',
      governingEquation: 'Q = (k · A · Δh) / L   (Darcy’s Law for Porous Flow)',
      equationBreakdown:
        'Volumetric flow rate Q (mL/s) increases with hydraulic conductivity k, column cross-sectional area A, and water head height Δh above the bed, and decreases as filter bed thickness L increases.',
      deeperMechanism:
        'While silica sand removes suspended particulate matter down to tens of micrometers, dissolved organic molecules pass right through sand pores. The activated charcoal stage addresses these dissolved compounds via high-surface-area microporous adsorption.',
      diagramType: 'water-filtration',
    },
    realWorldApplication: {
      headline: 'Slow Sand Filters, Groundwater Aquifers & Municipal Treatment',
      description:
        'Municipal water treatment plants and rural community filters use the exact multi-media stratification (gravel support, silica sand, and granular activated carbon) demonstrated in your column.',
      bangladeshAndGlobalContext:
        'In Bangladesh, Pond Sand Filters (PSF) in coastal districts like Satkhira and Khulna and household SONO multi-layer filters rely on carefully graded river sand, brick chips, and charcoal matrices to provide clean water.',
      industryExamples: [
        'Municipal rapid and slow sand filtration beds',
        'Activated carbon taste-and-odor polishing cartridges',
        'Rainwater harvesting sediment pre-filters',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'What would happen to the filter’s flow rate if you reversed the layer order and put the fine sand and cotton at the very top above the gravel?',
        conceptualHint:
          'Consider how quickly coarse mud and debris would form an impermeable cake across the fine pores at the top entrance.',
      },
      {
        question:
          'If you dissolved table salt (NaCl) into the water before pouring it through the sand and charcoal column, would the filtered water still taste salty? Why?',
        conceptualHint:
          'Compare the size of hydrated sodium and chloride ions (~0.3 nanometers) against the pore size of sand and non-polar carbon surfaces.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Compare Bed Compaction & Flow Rate',
        description:
          'Build two identical columns—one with loosely poured sand and one with gently tamped sand—and compare both percolation speed (mL/min) and filtrate clarity.',
        targetVariable: 'Porosity vs. Hydraulic Conductivity k',
      },
      {
        title: 'Test Activated Carbon Adsorption Capacity',
        description:
          'Prepare water tinted with a drop of food coloring or diluted tea and compare a column WITH activated charcoal against a column containing ONLY sand and gravel.',
        targetVariable: 'Dissolved Pigment Adsorption',
      },
    ],
    relatedProjectSlugs: [
      'leaf-stomata-microscopy-and-osmosis',
      'build-a-simple-weather-station',
      'make-a-basic-hydraulic-system',
    ],
  },

  // 3. Make a Basic Hydraulic System
  {
    slug: 'make-a-basic-hydraulic-system',
    title: 'Make a Basic Hydraulic System',
    subtitle:
      'Connect two fluid-filled syringes of different cross-sectional areas with vinyl tubing to demonstrate Pascal’s Principle and mechanical force multiplication.',
    category: 'engineering',
    categoryLabel: 'Engineering Projects',
    subjectSlug: 'engineering',
    subjectLabel: 'Engineering & Fluid Mechanics',
    difficulty: 'Beginner',
    isBeginnerFriendly: true,
    isFeatured: true,
    estimatedTime: '50 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectHydraulicSystem.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectHydraulicSystem.alt,
    coreMechanismFormula: 'F₂ / F₁ = A₂ / A₁ = d₁ / d₂',
    whatYouCreateSummary:
      'A dual-cylinder hydraulic lift mechanism capable of lifting a heavy test mass with small input effort.',
    requiredMaterials: [
      {
        name: '10 mL Plastic Luer-Slip or Luer-Lock Syringe (Without Needle)',
        quantity: '1 unit (Input Master Cylinder)',
        purpose: 'Acts as the smaller cross-sectional area input piston (A₁).',
      },
      {
        name: '30 mL or 50 mL Plastic Syringe (Without Needle)',
        quantity: '1 unit (Output Slave Cylinder)',
        purpose: 'Acts as the larger cross-sectional area output actuator piston (A₂).',
      },
      {
        name: 'Clear Flexible Silicone or PVC Vinyl Tubing (4 mm inner diameter, 35 cm length)',
        quantity: '1 tube',
        purpose: 'Transmits pressurized fluid cleanly between the two syringe nozzles.',
      },
      {
        name: 'Water Tinted with 1 Drop of Blue Food Coloring',
        quantity: '100 mL',
        purpose: 'Serves as an incompressible working fluid whose level and air bubbles are easy to see.',
      },
      {
        name: 'Millimeter Ruler, Calipers, & Small Calibration Weights (or Stack of Coins/Books)',
        quantity: '1 set',
        purpose: 'Measures syringe barrel inner diameters (D₁, D₂) and piston displacement distances (d₁, d₂).',
      },
      {
        name: 'Cardboard or Wooden Mounting Stand & Cable Ties',
        quantity: '1 base',
        purpose: 'Holds both syringes upright so vertical piston travel can be read accurately.',
      },
    ],
    whatYouWillDiscover: [
      'How an enclosed incompressible liquid transmits pressure equally in all directions throughout the fluid (Pascal’s Law).',
      'Why pushing a narrow syringe plunger requires much less force to lift a heavy weight resting on a wide syringe plunger.',
      'Why force multiplication always comes with an exact distance trade-off: the small plunger must travel farther than the large plunger rises (conservation of volume and work).',
      'What happens to hydraulic stiffness when compressible air bubbles are trapped inside the fluid line.',
    ],
    whyThisProjectMatters:
      'Excavator booms, automotive brake calipers, aircraft landing gear, and factory hydraulic presses all operate on Pascal’s Principle. Building a two-syringe actuator lets learners feel mechanical advantage directly through their fingertips and verify volume conservation with a millimeter ruler.',
    conceptsInvolved: [
      {
        title: 'Pascal’s Principle of Pressure Transmission',
        discipline: 'Fluid Mechanics',
        principleOrFormula: 'P = F₁ / A₁ = F₂ / A₂',
        explanation:
          'A pressure change applied to an enclosed incompressible fluid is transmitted undiminished to every portion of the fluid and the walls of the container.',
      },
      {
        title: 'Hydraulic Mechanical Advantage',
        discipline: 'Mechanical Engineering',
        principleOrFormula: 'MA = A₂ / A₁ = (D₂ / D₁)²',
        explanation:
          'Because circular piston area scales with the square of diameter (A = πD²/4), doubling the output cylinder diameter multiplies output lifting force by four.',
      },
      {
        title: 'Conservation of Fluid Volume & Work',
        discipline: 'Physics',
        principleOrFormula: 'V_displaced = A₁ · d₁ = A₂ · d₂',
        explanation:
          'An incompressible liquid cannot be created or destroyed; the volume pushed out of Cylinder 1 equals the volume entering Cylinder 2.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Field & Mechanical Caution',
      warnings: [
        'Use only blunt plastic syringes WITHOUT needles. Never use medical needles for fluid mechanics experiments.',
        'Secure the vinyl tubing tightly over both syringe nozzles with small zip-ties or tape before applying heavy weights so pressurized water does not spray.',
        'Keep dyed water away from electrical outlets and laptops.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Measure Cylinder Inner Diameters (D₁ and D₂)',
        instruction:
          'Remove the plungers from the 10 mL syringe and the 30 mL (or 50 mL) syringe. Use a millimeter ruler to measure the internal barrel diameter D₁ of the small syringe and D₂ of the large syringe. Calculate their circular areas A₁ = π(D₁/2)² and A₂ = π(D₂/2)².',
        verificationCheck:
          'Record D₁, D₂, and the theoretical area ratio A₂ / A₁ in your notebook.',
      },
      {
        stepNumber: 2,
        title: 'Bleed All Air Bubbles from the Fluid Circuit',
        instruction:
          'Submerge the tip of the 10 mL syringe in the blue-tinted water and draw the plunger back to fill it completely. Attach the flexible tubing to the 10 mL syringe and push water through until the tube is completely full with zero air pockets. Attach the other end of the tube to the large syringe with its plunger pushed all the way down.',
        verificationCheck:
          'Inspect the transparent tubing to confirm no air bubbles remain trapped in the line.',
      },
      {
        stepNumber: 3,
        title: 'Measure the Displacement Ratio (d₁ vs. d₂)',
        instruction:
          'Mount both syringes vertically next to millimeter scales. Push the small input plunger down by an exact distance d₁ = 30 mm (or 5 mL volume mark) and measure the exact vertical distance d₂ that the large output plunger rises.',
        verificationCheck:
          'Compare your measured displacement ratio (d₁ / d₂) against your calculated area ratio (A₂ / A₁).',
      },
      {
        stepNumber: 4,
        title: 'Test Force Multiplication Under Load',
        instruction:
          'Place a small book or calibrated weight stack on top of the wide output syringe plunger and push the small input plunger to lift it. Then reverse roles: place the same weight on the small syringe and press the large syringe plunger to feel the difference in required effort.',
        verificationCheck:
          'Notice how much easier it is to lift the load when pushing the smaller-area plunger.',
      },
      {
        stepNumber: 5,
        title: 'Investigate Compressible Air vs. Incompressible Water',
        instruction:
          'Disconnect the tubing briefly, introduce 5 mL of air into the system, reconnect, and press the input plunger under load. Observe the "spongy" delay caused by gas compression compared to pure liquid.',
        verificationCheck:
          'Record the difference in actuator responsiveness between pure liquid and air-contaminated fluid.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Ideal hydraulic equations ignore O-ring rubber seal friction against the syringe barrel wall. Your actual measured force will include a small friction threshold, while your measured travel distances (d₁ and d₂) should closely match volume conservation.',
      qualitativeExpectations: [
        'When pushing 5 mL of water out of the 10 mL input syringe, the output syringe volume reading is expected to increase by the exact same 5 mL (assuming zero air bubbles).',
        'Because the output syringe has a wider barrel area A₂, its linear upward stroke d₂ will be proportionally shorter than the input plunger’s downward stroke d₁.',
        'Pushing the narrow plunger to lift a weight on the wide plunger feels significantly easier than pushing the wide plunger to lift the same weight on the narrow plunger.',
        'When air is intentionally introduced, the air bubble compresses first before the output plunger moves, demonstrating why hydraulic brake lines must be bled of air.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Geometry Measurement: Barrel Diameters D₁ & D₂',
          expectedQualitativeBehavior: 'Typical 10 mL syringe D₁ ≈ 14.5 mm; 30 mL syringe D₂ ≈ 21.7 mm (Area ratio ≈ 2.24×)',
          learnerMeasurementPrompt: 'Measure and record your actual syringe barrel inner diameters D₁ & D₂',
          unit: 'mm & Area Ratio',
        },
        {
          trialOrCondition: 'Stroke Test: Input Travel d₁ = 30.0 mm (Pure Water)',
          expectedQualitativeBehavior: 'Expected output travel d₂ = d₁ · (A₁ / A₂)',
          learnerMeasurementPrompt: 'Measure actual upward travel d₂ of the large output plunger',
          unit: 'Millimeters (mm)',
        },
        {
          trialOrCondition: 'Air Bubble Comparison (5 mL Air Pocket Added)',
          expectedQualitativeBehavior: 'Compressible air pocket shrinks under load; delayed & spongy output motion',
          learnerMeasurementPrompt: 'Record lost plunger stroke before output cylinder begins lifting',
          unit: 'Millimeters (mm)',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'Liquids are virtually incompressible because their molecules are already packed closely together. When force F₁ is applied to a piston of cross-sectional area A₁, it generates hydrostatic fluid pressure P = F₁ / A₁ throughout the enclosed tubing.',
      governingEquation: 'F₂ = F₁ · (A₂ / A₁)   and   d₂ = d₁ · (A₁ / A₂)',
      equationBreakdown:
        'Output force F₂ is amplified by the ratio of output area A₂ to input area A₁. Simultaneously, output travel distance d₂ is reduced by the inverse ratio A₁ / A₂ so mechanical work W = F₁·d₁ = F₂·d₂ is conserved.',
      deeperMechanism:
        'No machine can multiply energy. A hydraulic system trades displacement distance for force: a long, low-force stroke at the narrow master cylinder produces a short, high-force stroke at the wide slave cylinder.',
      diagramType: 'hydraulic-pascal',
    },
    realWorldApplication: {
      headline: 'Hydraulic Excavators, Automotive Braking & River Dredging Cranes',
      description:
        'Heavy machinery uses oil-filled steel cylinders driven by high-pressure pumps to lift multi-ton loads with finger-tip joystick control.',
      bangladeshAndGlobalContext:
        'From river dredging barges on the Padma and Meghna rivers to hydraulic jacks in local automotive workshops and garment factory baling presses, Pascal’s law underpins heavy mechanical work across Bangladesh.',
      industryExamples: [
        'Automotive hydraulic disc and drum braking systems',
        'Construction excavator and crane boom actuators',
        'Aircraft flight control surfaces and landing gear retraction',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'If your output cylinder has 3 times the cross-sectional area of your input cylinder (A₂ = 3·A₁), does the hydraulic lift produce 3 times as much mechanical energy (Work)? Why or why not?',
        conceptualHint:
          'Calculate mechanical work W = Force × Distance for both the input plunger (F₁ · d₁) and the output plunger (F₂ · d₂).',
      },
      {
        question:
          'Why is automobile brake fluid or mineral oil used in industrial hydraulic machinery instead of plain water?',
        conceptualHint:
          'Consider boiling point under high friction heat, freezing point, metal corrosion, and lubrication of piston seals.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Build a Dual-Axis Cardboard Hydraulic Robotic Arm',
        description:
          'Use two pairs of syringes (4 syringes total) mounted to a hinged cardboard crane arm—one pair to raise the boom and a second pair to open and close a gripper claw.',
        targetVariable: 'Multi-Degree-of-Freedom Actuation',
      },
      {
        title: 'Quantify Seal Friction Loss',
        description:
          'Place known coin masses on the input plunger until the output plunger just begins to move, and calculate the static friction force of the rubber plungers.',
        targetVariable: 'Mechanical Efficiency η = W_out / W_in',
      },
    ],
    relatedProjectSlugs: [
      'load-test-a-structural-truss-bridge',
      'explore-water-filtration',
      'understand-solar-energy',
    ],
  },

  // 4. Understand Solar Energy
  {
    slug: 'understand-solar-energy',
    title: 'Understand Solar Energy',
    subtitle:
      'Measure how sunlight incidence angle, surface shading, and electrical load resistance affect the power output of a photovoltaic solar cell.',
    category: 'engineering',
    categoryLabel: 'Engineering Projects',
    subjectSlug: 'engineering',
    subjectLabel: 'Engineering & Physics',
    difficulty: 'Intermediate',
    isBeginnerFriendly: false,
    isFeatured: true,
    estimatedTime: '60 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectSolarEnergy.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectSolarEnergy.alt,
    coreMechanismFormula: 'P = V · I = G · A · η · cos(θ)',
    whatYouCreateSummary:
      'An angle-calibrated solar photovoltaic test rig and an empirical tilt-angle vs. power curve.',
    requiredMaterials: [
      {
        name: 'Small Polycrystalline or Monocrystalline Solar Panel (5V–6V, 1W–2W)',
        quantity: '1 panel',
        purpose: 'Converts incident solar photon flux into direct current electricity.',
      },
      {
        name: 'Digital Multimeter (DC Voltage & DC Milliamps / Resistance)',
        quantity: '1 unit',
        purpose: 'Measures open-circuit voltage (V_oc), short-circuit current (I_sc), and load voltage.',
      },
      {
        name: 'Protractor & Hinged Cardboard or Wood Tilt Mount',
        quantity: '1 rig',
        purpose: 'Sets the panel’s incidence angle θ relative to incoming sunlight from 0° to 90°.',
      },
      {
        name: 'Assorted Load Resistors (47 Ω, 100 Ω, 220 Ω) or Small DC Fan Motor',
        quantity: '3 resistors + 1 motor',
        purpose: 'Acts as a realistic electrical load to measure actual power transfer P = V² / R.',
      },
      {
        name: 'Opaque Index Card (For Partial Shading Tests)',
        quantity: '1 card',
        purpose: 'Covers 25%, 50%, and 75% of the solar cells to test series-cell shading loss.',
      },
    ],
    whatYouWillDiscover: [
      'How the cosine law of illumination (cos θ) governs the electrical current generated as a solar panel tilts away from perpendicular sunlight.',
      'The difference between a panel’s Open-Circuit Voltage (V_oc, when no load is attached) and its actual operating power under load.',
      'Why shading even a single cell in a series-wired photovoltaic string can cause a disproportionate drop in total current output.',
      'How to determine the optimal tilt angle for stationary rooftop solar panels at your geographic latitude.',
    ],
    whyThisProjectMatters:
      'Solar photovoltaic energy is transforming power access worldwide, yet improper tilt orientation or partial shading from nearby trees and parapets can cut a solar installation’s daily yield by more than half. Measuring V, I, and θ directly turns renewable energy into quantitative engineering.',
    conceptsInvolved: [
      {
        title: 'Photovoltaic Effect in Semiconductor Junctions',
        discipline: 'Solid-State Physics',
        principleOrFormula: 'E_photon = h · f ≥ E_bandgap',
        explanation:
          'Photons with energy above silicon’s bandgap (~1.1 eV) excite electrons across the p-n junction, establishing a photo-generated current and electric potential.',
      },
      {
        title: 'Lambert’s Cosine Law of Irradiance',
        discipline: 'Optics & Energy Engineering',
        principleOrFormula: 'G_effective = G_0 · cos(θ)',
        explanation:
          'When light strikes a surface at angle θ from the surface normal, the same solar beam spreads over a larger area, reducing irradiance proportional to cos(θ).',
      },
      {
        title: 'Electrical Power & Load Matching',
        discipline: 'Electrical Engineering',
        principleOrFormula: 'P = V_load · I_load = V_load² / R_load',
        explanation:
          'At open circuit (I = 0) or short circuit (V = 0), power delivered to an external load is zero; maximum power occurs at the knee of the I–V curve.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Low-Voltage / General Caution',
      warnings: [
        'Never look directly at the sun when aligning the solar panel normal angle; use the length of the panel’s shadow on the baseplate to find perpendicular alignment (0° incidence).',
        'Do not leave small load resistors connected under intense midday sun for extended periods if they feel warm to the touch.',
        'When switching your multimeter between DC Voltage (V) and DC Current (mA), move the test probe plug to the correct multimeter jack before touching the circuit.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Mount the Solar Panel on the Protractor Tilt Rig',
        instruction:
          'Fasten the mini solar panel to a hinged cardboard or wooden plate with a protractor attached to the side pivot so you can set tilt angles accurately in 15° increments.',
        verificationCheck:
          'Take the rig outdoors in direct sunlight (or use a fixed high-intensity desk lamp indoors at 40 cm distance).',
      },
      {
        stepNumber: 2,
        title: 'Align for Normal Incidence (θ = 0°) Using the Shadow Method',
        instruction:
          'Point the panel directly toward the light source so its shadow directly behind it is maximized and a pencil held perpendicular to the panel face casts zero shadow. Define this perpendicular orientation as incidence angle θ = 0°.',
        verificationCheck:
          'Verify that cos(0°) = 1.00 represents maximum intercepted solar flux.',
      },
      {
        stepNumber: 3,
        title: 'Measure Output Across a 100 Ω Load Resistor from θ = 0° to 90°',
        instruction:
          'Connect a 100 Ω load resistor across the solar panel leads and place your multimeter in parallel across the resistor (DC Volts mode). Measure V_load at θ = 0°, 30°, 45°, 60°, and 90°. Calculate I_load = V_load / 100 Ω and Power P = V_load · I_load.',
        verificationCheck:
          'Keep the distance to the light source constant if testing under an indoor lamp.',
      },
      {
        stepNumber: 4,
        title: 'Test Partial Cell Shading (0%, 25%, 50%, 75%)',
        instruction:
          'Return the panel to θ = 0°. Use an opaque index card to cover 25%, 50%, and 75% of the active solar cell area and record the resulting load voltage and current at each stage.',
        verificationCheck:
          'Observe whether covering a single cell strip drops the output by more than 25%.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Outdoor solar irradiance fluctuates with cloud cover, atmospheric haze, and time of day (ranging from ~200 W/m² on hazy mornings to ~950 W/m² at clear solar noon). Record your actual multimeter voltage readings alongside sky conditions.',
      qualitativeExpectations: [
        'Maximum voltage and current across the 100 Ω load are expected at normal incidence (θ = 0°), where sunlight strikes the panel face at a 90° perpendicular angle.',
        'At θ = 60° tilt away from the sun’s rays, effective direct beam irradiance drops by cos(60°) = 0.50, causing a marked decrease in photo-current.',
        'At θ = 90° (panel edge-on to the sun), direct beam irradiance is zero; any small residual voltage comes only from diffuse sky scatter.',
        'Covering one whole cell in a series-connected mini panel often drops current sharply because the shaded cell acts as a high-resistance bottleneck for the entire series string.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Incidence Angle θ = 0° (Perpendicular to Rays, cos 0° = 1.00)',
          expectedQualitativeBehavior: 'Peak irradiance capture; highest measured V_load and calculated power P',
          learnerMeasurementPrompt: 'Record measured V_load across 100 Ω & compute P = V² / 100',
          unit: 'Volts (V) & mW',
        },
        {
          trialOrCondition: 'Incidence Angle θ = 30° (cos 30° ≈ 0.87)',
          expectedQualitativeBehavior: 'Slight reduction in photo-current (~85–90% of peak output)',
          learnerMeasurementPrompt: 'Record measured V_load across 100 Ω & compute P = V² / 100',
          unit: 'Volts (V) & mW',
        },
        {
          trialOrCondition: 'Incidence Angle θ = 60° (cos 60° = 0.50)',
          expectedQualitativeBehavior: 'Substantial reduction in intercepted beam area (~50% direct flux)',
          learnerMeasurementPrompt: 'Record measured V_load across 100 Ω & compute P = V² / 100',
          unit: 'Volts (V) & mW',
        },
        {
          trialOrCondition: 'Shading Test at θ = 0° (50% Panel Area Covered)',
          expectedQualitativeBehavior: 'Sharp drop in current and load power due to series cell limiting',
          learnerMeasurementPrompt: 'Record measured V_load across 100 Ω with half the panel shaded',
          unit: 'Volts (V) & mW',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'A solar photovoltaic cell is a large-area silicon p-n junction photodiode. Incoming photons generate electron-hole pairs proportional to the number of photons striking the active area per second. While Open-Circuit Voltage (V_oc) scales logarithmically with light intensity, Short-Circuit Current (I_sc) scales almost linearly with effective solar irradiance.',
      governingEquation: 'I_photo ∝ G_0 · A · cos(θ)   and   P_load = V_load² / R_load',
      equationBreakdown:
        'Where G_0 is normal solar irradiance (W/m²), A is active cell area (m²), θ is the angle between the solar beam and the panel’s surface normal, and P_load is the electrical power dissipated in load resistance R_load.',
      deeperMechanism:
        'Because individual silicon cells produce only ~0.5 V to 0.6 V each, a 6 V mini panel wires 10 to 12 cells in series. When one cell in that series string is shaded, its photo-current drops, restricting current flow through all unshaded cells in the string.',
      diagramType: 'solar-irradiance',
    },
    realWorldApplication: {
      headline: 'Solar Home Systems, Solar Irrigation Pumps & Rooftop Microgrids',
      description:
        'Solar engineers calculate latitude-based tilt angles and install bypass diodes across cell strings to maximize year-round energy harvest.',
      bangladeshAndGlobalContext:
        'Bangladesh sits near latitude 23.7° N. Fixed rooftop solar panels and solar agricultural irrigation pumps across the country are typically tilted at ~23°–24° facing due South to maximize annual solar capture.',
      industryExamples: [
        'Solar agricultural irrigation water pumps in northern Bangladesh',
        'Dual-axis solar trackers and Maximum Power Point Tracking (MPPT) charge controllers',
        'Rooftop industrial net-metering photovoltaic arrays',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'Why did Open-Circuit Voltage (V_oc, measured with no resistor attached) remain relatively high even when the panel was tilted to 60°, whereas actual power delivered to the 100 Ω resistor dropped significantly?',
        conceptualHint:
          'Remember that a solar cell’s voltage builds up with very little light when zero current is drawn, but current capacity I depends directly on photon flux.',
      },
      {
        question:
          'Why should a stationary solar panel in Dhaka or Rajshahi (~24° N latitude) face due South tilted at ~24° rather than lying flat (0° horizontal)?',
        conceptualHint:
          'Consider the sun’s midday elevation angle in the southern sky during winter and equinox months in the Northern Hemisphere.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Plot an Empirical Load Curve (Maximum Power Point)',
        description:
          'Keep the panel fixed at θ = 0° and measure V_load across five different resistors (22 Ω, 47 Ω, 100 Ω, 220 Ω, 470 Ω) to find which resistance extracts the highest power P = V² / R.',
        targetVariable: 'Optimal Load Resistance R_MPP',
      },
      {
        title: 'Dust Accumulation Efficiency Loss Study',
        description:
          'Sprinkle a uniform thin layer of dry road dust onto the panel glass, measure power output, and wipe it clean to quantify how much power routine panel cleaning restores.',
        targetVariable: 'Optical Transmittance Loss (%)',
      },
    ],
    relatedProjectSlugs: [
      'build-a-simple-electric-circuit',
      'build-a-simple-weather-station',
      'make-a-basic-hydraulic-system',
    ],
  },

  // 5. Build a Simple Weather Station
  {
    slug: 'build-a-simple-weather-station',
    title: 'Build a Simple Weather Station',
    subtitle:
      'Construct and calibrate a 3-cup rotational anemometer, a balanced wind vane, and a cylindrical rain gauge to record local microclimate data.',
    category: 'technology',
    categoryLabel: 'Technology Projects',
    subjectSlug: 'technology',
    subjectLabel: 'Technology & Earth Science',
    difficulty: 'Beginner',
    isBeginnerFriendly: true,
    isFeatured: true,
    estimatedTime: '75 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectWeatherStation.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectWeatherStation.alt,
    coreMechanismFormula: 'v_wind ∝ 2 · π · r · (RPM / 60)',
    whatYouCreateSummary:
      'A multi-instrument meteorological station and a 3-day empirical weather observation log.',
    requiredMaterials: [
      {
        name: '4 Lightweight Paper or Plastic Cups (3 Outer Cups + 1 Center Hub Cup)',
        quantity: '4 cups',
        purpose: 'Catches wind drag asymmetrically to spin the anemometer rotor.',
      },
      {
        name: '2 Straight Wooden Dowels or Firm Plastic Straws (25 cm length)',
        quantity: '2 arms',
        purpose: 'Forms the perpendicular cross-arms of the rotational anemometer.',
      },
      {
        name: 'Straight Metal Pin, Bead Spacer, & Wooden Pencil with Eraser Top',
        quantity: '1 pivot assembly',
        purpose: 'Creates a low-friction vertical rotational bearing for the anemometer hub.',
      },
      {
        name: 'Clear Straight-Sided Plastic Cylinder or Jar + Millimeter Ruler Strip',
        quantity: '1 vessel',
        purpose: 'Measures accumulated rainfall depth directly in millimeters (mm).',
      },
      {
        name: 'Cardstock Arrow Tail & Nose, Compass Rose Base, & Alcohol Thermometer',
        quantity: '1 set',
        purpose: 'Indicates wind origin direction (N/E/S/W) and ambient air temperature (°C).',
      },
      {
        name: 'Stopwatch & Bright Colored Marker (To mark 1 reference anemometer cup)',
        quantity: '1 timer',
        purpose: 'Allows you to count full revolutions per minute (RPM) accurately.',
      },
    ],
    whatYouWillDiscover: [
      'Why a 3-cup or 4-cup anemometer always rotates in the same direction regardless of which compass direction the wind blows from.',
      'How to convert rotational revolutions per minute (RPM) and arm radius into linear cup speed (m/s).',
      'Why a wind vane’s tail fin must have a larger surface area than its front pointer arrow so aerodynamic torque aligns the arrow into the wind.',
      'Why rainfall is measured in depth (millimeters) rather than volume (milliliters), and why a straight-sided cylinder gives a universal reading.',
    ],
    whyThisProjectMatters:
      'Weather forecasting, monsoon flood preparedness, and agricultural planning begin with accurate ground-level measurements. By building physical instruments and logging real observations over consecutive days, learners discover how raw mechanical motion and liquid height are transformed into quantitative environmental data.',
    conceptsInvolved: [
      {
        title: 'Aerodynamic Drag Asymmetry (Cup Anemometer)',
        discipline: 'Fluid Dynamics & Instrumentation',
        principleOrFormula: 'C_d(concave) ≈ 1.4  >  C_d(convex) ≈ 0.4',
        explanation:
          'The open concave side of a hemisphere cup experiences more than three times the aerodynamic drag force of the rounded convex back, creating net rotational torque.',
      },
      {
        title: 'Rotational Kinematics to Wind Speed',
        discipline: 'Physics & Technology',
        principleOrFormula: 'v_cup = (2 · π · r · N) / t',
        explanation:
          'Counting N full rotations of the marked cup in time t (seconds) at arm radius r yields tangential cup velocity, which scales with true wind speed via the anemometer factor.',
      },
      {
        title: 'Area-Normalized Precipitation Depth',
        discipline: 'Hydrology & Earth Science',
        principleOrFormula: 'Depth h = V_rain / A_collector (mm)',
        explanation:
          'In any vertical cylinder of uniform cross-sectional area A, rain volume V divided by area A yields a universal depth h in millimeters.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Field & Mechanical Caution',
      warnings: [
        'Handle the metal pivot pin carefully when pushing it through the anemometer center hub into the pencil eraser.',
        'Do not place the weather station on high, unguarded roof ledges or go outdoors during thunderstorms and lightning to take readings.',
        'Use a red alcohol thermometer rather than a glass mercury thermometer.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Assemble the Cross-Arm Anemometer Rotor',
        instruction:
          'Punch four evenly spaced holes around the rim of the center hub cup so two wooden dowels or straws slide through perpendicular to each other (forming a + cross). Attach the outer cups to the ends of the arms all facing the same circular direction (concave opening of each cup facing the back of the next cup).',
        verificationCheck:
          'Color one outer cup bright red or blue with a marker so you can count each full 360° revolution easily.',
      },
      {
        stepNumber: 2,
        title: 'Mount the Low-Friction Pivot and Measure Radius r',
        instruction:
          'Push the straight pin through the bottom center of the hub cup, slide a small plastic bead onto the pin as a low-friction washer, and press the pin into the center of the pencil eraser. Measure the distance r (in meters) from the center pin to the center of an outer cup.',
        verificationCheck:
          'Blow gently on the cups to confirm the rotor spins freely with minimal wobble.',
      },
      {
        stepNumber: 3,
        title: 'Build the Compass Wind Vane and Straight-Sided Rain Gauge',
        instruction:
          'Cut a small triangle pointer and a larger trapezoid tail fin from stiff cardstock, tape them to opposite ends of a straw balanced on a pin pivot over a N-E-S-W compass base. Tape a millimeter ruler vertically along a straight-sided clear jar so 0 mm aligns with the flat inner floor.',
        verificationCheck:
          'Use a magnetic compass (or smartphone compass) to align the wind vane base’s "N" mark toward geographic North.',
      },
      {
        stepNumber: 4,
        title: 'Calibrate the Anemometer with a Multi-Speed Fan',
        instruction:
          'Before placing the station outdoors, place the anemometer 50 cm in front of a household fan set to Low, Medium, and High speeds. Use your stopwatch to count revolutions of the marked cup in 30 seconds (multiply by 2 for RPM) at each setting.',
        verificationCheck:
          'Calculate tangential cup speed v_cup = (2 · π · r · RPM) / 60 for each fan speed.',
      },
      {
        stepNumber: 5,
        title: 'Record Outdoor Microclimate Observations',
        instruction:
          'Place the weather station in an open outdoor courtyard or balcony away from blocking walls. Record temperature (°C), wind origin direction, anemometer RPM, and rain gauge depth (mm) at morning, midday, and late afternoon.',
        verificationCheck:
          'Log your actual measured values and timestamps in the observation table.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Outdoor wind speed, direction, temperature, and precipitation vary continuously by location, season, and time of day. The calibration entries below explain how your instruments behave; fill the log with your own live measurements.',
      qualitativeExpectations: [
        'Because all outer cups point in the same rotational sense around the hub, wind from North, South, East, or West always spins the anemometer in the same direction.',
        'Increasing airflow (from Low to High fan setting, or during an outdoor breeze gust) increases the counted revolutions per minute (RPM) proportionally.',
        'The wind vane arrow points INTO the direction the wind is coming FROM because aerodynamic drag pushes the larger tail fin downwind.',
        'In the straight-sided rain gauge, 1 mm of vertical water height corresponds to 1 liter of rainwater per square meter of ground area.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Indoor Calibration: Fan Speed 1 (Low at 50 cm)',
          expectedQualitativeBehavior: 'Steady slow rotation; constant RPM over 30-second count',
          learnerMeasurementPrompt: 'Count revolutions in 30s, multiply by 2 for RPM, & compute v_cup',
          unit: 'RPM & m/s',
        },
        {
          trialOrCondition: 'Indoor Calibration: Fan Speed 2 (High at 50 cm)',
          expectedQualitativeBehavior: 'Higher rotational frequency; RPM increases with airflow velocity',
          learnerMeasurementPrompt: 'Count revolutions in 30s, multiply by 2 for RPM, & compute v_cup',
          unit: 'RPM & m/s',
        },
        {
          trialOrCondition: 'Outdoor Observation 1 (Morning Reading)',
          expectedQualitativeBehavior: 'Record ambient air temp, compass wind origin, RPM, and rainfall depth',
          learnerMeasurementPrompt: 'Log your actual morning temperature, wind direction, & RPM',
          unit: '°C / Dir / RPM',
        },
        {
          trialOrCondition: 'Outdoor Observation 2 (Midday / Afternoon Reading)',
          expectedQualitativeBehavior: 'Compare afternoon solar warming and convective breeze against morning',
          learnerMeasurementPrompt: 'Log your actual midday temperature, wind direction, & RPM',
          unit: '°C / Dir / RPM',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'Meteorological instruments convert invisible atmospheric state variables into observable mechanical displacements. The cup anemometer converts wind kinetic energy into angular velocity ω; the wind vane balances aerodynamic torque τ around a vertical pivot; and the rain gauge integrates precipitation flux over a known collection area.',
      governingEquation: 'v_cup = ω · r = (2 · π · r · RPM) / 60',
      equationBreakdown:
        'Where r is the arm radius in meters from the center pivot to the cup center, RPM is revolutions per minute, and v_cup is tangential cup speed in meters per second (m/s). True wind speed is typically 2.5 to 3.0 times v_cup due to convex cup back-drag.',
      deeperMechanism:
        'For the wind vane, when wind blows at an angle to the vane axis, the larger tail fin experiences a greater lateral force F_tail than the smaller nose cone F_nose. Since torque τ = F × d, the restoring torque rotates the assembly until the nose points directly into the oncoming wind (angle of attack = 0°).',
      diagramType: 'weather-station',
    },
    realWorldApplication: {
      headline: 'Agrometeorology, Cyclone Warning Networks & Renewable Site Assessment',
      description:
        'Automated weather stations combine rotational or ultrasonic anemometers, tipping-bucket rain gauges, and thermistors to feed numerical weather prediction models.',
      bangladeshAndGlobalContext:
        'Across Bangladesh’s coastal belt and river basins, the Bangladesh Meteorological Department (BMD) and agricultural extension stations track wind velocity, barometric shifts, and monsoon rainfall depth (mm/day) to issue cyclone warnings and irrigation advisories.',
      industryExamples: [
        'Wind turbine site wind-resource assessment towers',
        'Agricultural evapotranspiration and rainfall monitoring networks',
        'Airport runway crosswind and visibility instrumentation',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'What would happen if you accidentally mounted one of the outer anemometer cups facing the opposite direction from the other cups?',
        conceptualHint:
          'Analyze the opposing rotational torques around the center pivot pin.',
      },
      {
        question:
          'Why should a thermometer in a weather station be housed inside a ventilated white shade shelter (Stevenson screen) rather than placed directly in open midday sunlight?',
        conceptualHint:
          'Distinguish between the true temperature of the surrounding air molecules and radiative heating of the glass thermometer bulb by direct sunlight.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Add a Funnel Multiplier to Your Rain Gauge for Light Drizzle',
        description:
          'Place a wide funnel of circular area A_funnel over a narrower graduated cylinder of area A_cylinder. Derive the magnification scale factor (A_funnel / A_cylinder) so you can measure 0.2 mm light drizzles accurately.',
        targetVariable: 'Geometric Depth Magnification Factor',
      },
      {
        title: 'Digital Hall-Effect or Optical RPM Counter',
        description:
          'Attach a tiny magnet to the bottom of the anemometer hub and use a microcontroller Hall-effect sensor (or smartphone magnetometer app) to log RPM automatically.',
        targetVariable: 'Automated Digital Telemetry',
      },
    ],
    relatedProjectSlugs: [
      'microcontroller-ultrasonic-distance-logger',
      'understand-solar-energy',
      'explore-water-filtration',
    ],
  },

  // 6. Explore Mathematical Patterns in Nature
  {
    slug: 'explore-mathematical-patterns-in-nature',
    title: 'Explore Mathematical Patterns in Nature',
    subtitle:
      'Count opposing parastichy spirals in pinecones, sunflowers, and plant stems and measure divergence angles to verify Fibonacci numbers and the 137.5° Golden Angle.',
    category: 'mathematics',
    categoryLabel: 'Mathematics Challenges',
    subjectSlug: 'mathematics',
    subjectLabel: 'Mathematics & Biology',
    difficulty: 'Beginner',
    isBeginnerFriendly: true,
    isFeatured: true,
    estimatedTime: '45 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectMathPatternsNature.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectMathPatternsNature.alt,
    coreMechanismFormula: 'F_n = F_{n-1} + F_{n-2}   &   θ_golden ≈ 137.508°',
    whatYouCreateSummary:
      'A botanical phyllotaxis dataset and a geometric Golden Angle packing protractor model.',
    requiredMaterials: [
      {
        name: 'Botanical Specimens (Pinecone, Pineapple, Sunflower Head, Cauliflower floret, or Leafy Plant Stem)',
        quantity: '2–3 specimens',
        purpose: 'Provides real biological spiral arrangements (phyllotaxis) to count and measure.',
      },
      {
        name: '2 Colors of Washable Chalk Markers, Colored Pins, or Small Adhesive Dot Stickers',
        quantity: '2 colors (e.g., Blue & Amber)',
        purpose: 'Marks clockwise vs. counter-clockwise spiral families so no scale or bract is double-counted.',
      },
      {
        name: '360° Circular Protractor, Millimeter Calipers/Ruler, & Compass',
        quantity: '1 geometry set',
        purpose: 'Measures leaf divergence angles around a plant stem and constructs Golden Ratio rectangles.',
      },
      {
        name: 'Millimeter Graph Paper & Pencil',
        quantity: '2 sheets',
        purpose: 'Plots radial seed packing for 90°, 120°, and 137.5° divergence angles.',
      },
    ],
    whatYouWillDiscover: [
      'Why the number of clockwise spirals and counter-clockwise spirals on pinecones, pineapples, and sunflower heads almost always form consecutive Fibonacci number pairs—such as (5, 8), (8, 13), (13, 21), or (21, 34).',
      'How consecutive ratios of Fibonacci numbers (F_{n+1} / F_n) converge toward the irrational Golden Ratio φ = (1 + √5) / 2 ≈ 1.61803.',
      'Why rotating each new leaf or seed primordium by the Golden Angle (360° / φ² ≈ 137.5°) prevents radial stacking and maximizes sunlight and space efficiency.',
      'How a simple physical growth rule at a plant’s microscopic shoot apex generates complex global mathematical symmetry.',
    ],
    whyThisProjectMatters:
      'Many learners think mathematics exists only inside algebra textbooks. When you pick up a real pinecone, pineapple, or leafy branch from your garden and discover that its clockwise and counter-clockwise spiral counts are adjacent terms in the Fibonacci sequence (1, 1, 2, 3, 5, 8, 13, 21...), mathematics reveals itself as the structural language of the physical universe.',
    conceptsInvolved: [
      {
        title: 'The Fibonacci Recurrence & Golden Ratio φ',
        discipline: 'Number Theory & Geometry',
        principleOrFormula: 'lim (F_{n+1} / F_n) = φ = (1 + √5) / 2 ≈ 1.618034',
        explanation:
          'Each term is the sum of the two preceding terms (1, 1, 2, 3, 5, 8, 13, 21, 34, 55...). The ratio of consecutive terms rapidly approaches φ.',
      },
      {
        title: 'Botanical Phyllotaxis & Parastichy Spirals',
        discipline: 'Mathematical Biology',
        principleOrFormula: '(m, n) = (F_k, F_{k+1})',
        explanation:
          'Opposing spiral families visible on compact botanical cones and seed heads (called parastichies) correspond to consecutive Fibonacci numbers because of optimal disk packing.',
      },
      {
        title: 'The 137.5° Golden Divergence Angle',
        discipline: 'Optimization & Geometry',
        principleOrFormula: 'θ_golden = 360° · (1 − 1/φ) ≈ 137.5077°',
        explanation:
          'Rational fraction angles (like 1/3 · 360° = 120° or 1/4 · 360° = 90°) cause seeds or leaves to line up along straight radial spokes with wasted gaps between them. The most irrational ratio φ distributes elements uniformly.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Low-Voltage / General Caution',
      warnings: [
        'Handle sharp geometry compass points and pinecone spines carefully.',
        'When inspecting live garden plants for leaf divergence angles, observe the stem gently without uprooting or damaging community plants.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Count Clockwise Spirals on Specimen 1 (e.g., Pinecone or Pineapple)',
        instruction:
          'Turn the pinecone so you are looking directly at its base stem. Using blue dots or colored pins, trace one prominent spiral of scales curving CLOCKWISE from the center outward. Count the total number of parallel clockwise spirals around the entire cone.',
        verificationCheck:
          'Mark the starting scale of each spiral around the base ring so you do not count the same spiral twice.',
      },
      {
        stepNumber: 2,
        title: 'Count Counter-Clockwise Spirals on the Same Specimen',
        instruction:
          'Now trace the opposing family of spirals curving COUNTER-CLOCKWISE from the center outward using amber dots or chalk. Count the total number of parallel counter-clockwise spirals around the entire cone.',
        verificationCheck:
          'Record the ordered pair (Clockwise Count, Counter-Clockwise Count) and check whether both numbers belong to the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21, 34...).',
      },
      {
        stepNumber: 3,
        title: 'Measure Leaf Divergence Angles Along a Plant Stem',
        instruction:
          'Select a straight leafy plant stem (such as hibiscus, guava, or basil). Look straight down the vertical axis of the stem with a circular protractor. Measure the angle θ around the stem from Leaf #1 to the next higher Leaf #2, then from Leaf #2 to Leaf #3, and calculate the average divergence angle.',
        verificationCheck:
          'Compare your measured stem divergence angle against 137.5° (or alternate phyllotaxis fractions like 180° and 144°).',
      },
      {
        stepNumber: 4,
        title: 'Compare Radial Packing on Graph Paper (120° vs. 137.5°)',
        instruction:
          'On graph paper, draw two circles of radius 5 cm. In Circle A, plot 12 points moving outward by r = 4 mm per step at a rational angle increment of Δθ = 120° (1/3 turn). In Circle B, plot 12 points moving outward at the Golden Angle increment Δθ = 137.5°. Compare the spatial distribution.',
        verificationCheck:
          'Observe how Δθ = 120° stacks all points onto just 3 straight spokes with huge empty wedges, whereas 137.5° fills the disk evenly.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Biological organisms grow in real environments where physical damage or genetic variation can occasionally produce Lucas sequence pairs (e.g., 4, 7, 11) or slight irregularities. Record the exact spiral counts and angles you measure on your actual specimens.',
      qualitativeExpectations: [
        'On most pinecones, counting the steep clockwise spirals and the shallower counter-clockwise spirals yields consecutive Fibonacci pairs such as (5, 8) or (8, 13).',
        'On a pineapple’s hexagonal outer scales, three intersecting spiral families are typically visible with counts of 5, 8, and 13.',
        'In the graph-paper polar plot, any rational fraction of 360° (such as 360°/4 = 90° or 360°/5 = 72°) causes seeds to stack along 4 or 5 radial straight lines.',
        'Using the Golden Angle (~137.5°) prevents any two points from ever aligning along the same radial spoke, packing the circular area with maximum uniformity.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Specimen 1 Spiral Count (e.g., Pinecone or Pineapple)',
          expectedQualitativeBehavior: 'Opposing spiral families typically match consecutive Fibonacci numbers (e.g., 8 & 13)',
          learnerMeasurementPrompt: 'Record your actual (Clockwise, Counter-Clockwise) spiral counts & ratio',
          unit: 'Pair (m, n) & Ratio',
        },
        {
          trialOrCondition: 'Specimen 2 Spiral Count (e.g., Sunflower, Daisy, or Cauliflower)',
          expectedQualitativeBehavior: 'Higher-order Fibonacci pair (e.g., 13 & 21 or 21 & 34); ratio approaches 1.618',
          learnerMeasurementPrompt: 'Record your actual (Clockwise, Counter-Clockwise) spiral counts & ratio',
          unit: 'Pair (m, n) & Ratio',
        },
        {
          trialOrCondition: 'Leaf Stem Divergence Angle Measurement (Leaves 1 → 5)',
          expectedQualitativeBehavior: 'Successive leaves rotate around stem to minimize self-shading (often ~137.5° or 144°)',
          learnerMeasurementPrompt: 'Measure and record the average angular rotation Δθ between consecutive leaves',
          unit: 'Degrees (°)',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'A growing plant does not possess a calculator, yet it solves an optimization problem dynamically. As new leaf or seed primordia emerge one by one at the microscopic shoot apical meristem, each existing primordium releases chemical growth inhibitors (auxin gradients) that force the newest primordium to form in the largest available angular gap.',
      governingEquation: 'θ_k = k · 137.5077° (mod 360°),   r_k = c · √k   (Vogel’s Model)',
      equationBreakdown:
        'In H. Vogel’s mathematical model of phyllotaxis, the k-th seed sits at radial distance r_k = c·√k (ensuring equal area per seed) and angular coordinate θ_k = k · (360° / φ²).',
      deeperMechanism:
        'In number theory, the Golden Ratio φ = [1; 1, 1, 1, ...] has the slowest-converging continued fraction representation of any irrational number. That means 1/φ² is harder to approximate by a simple fraction p/q than any other number—guaranteeing that new leaves or seeds never align into periodic radial spokes.',
      diagramType: 'fibonacci-phyllotaxis',
    },
    realWorldApplication: {
      headline: 'Heliostat Solar Fields, Antenna Phased Arrays & Biomimetic Architecture',
      description:
        'Engineers apply Fibonacci spiral packing (Vogel spirals) whenever circular sensors or mirrors must be arranged with minimum mutual shadowing and maximum packing density.',
      bangladeshAndGlobalContext:
        'From concentrating solar thermal mirror fields (heliostats) that mimic sunflower phyllotaxis to acoustic microphone arrays and architectural truss domes, Golden Angle geometry solves modern spatial optimization challenges.',
      industryExamples: [
        'Biomimetic sunflower heliostat layouts for concentrated solar power plants',
        'Aperiodic Fibonacci phased-array radar and ultrasonic transducers',
        'Architectural structural domes and natural ventilation louver placement',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'Why does a rational angle like 144° (which is exactly 2/5 of 360°) initially pack leaves reasonably well for the first 5 leaves, but fail when packing 100 seeds on a sunflower head?',
        conceptualHint:
          'What happens on the 6th, 11th, and 16th seed when every step is an exact multiple of 2/5 of a full circle?',
      },
      {
        question:
          'Compute the ratios 5/3, 8/5, 13/8, and 21/13 to four decimal places. Notice how the ratios alternate slightly above and slightly below φ ≈ 1.6180. Why does this alternation happen?',
        conceptualHint:
          'Check Cassini’s Identity for Fibonacci numbers: F_{n-1} · F_{n+1} − F_n² = (−1)^n.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Code or Plot a 50-Seed Vogel Spiral',
        description:
          'Use a spreadsheet or short Python/JavaScript script to plot x_k = √k · cos(k · 137.508°) and y_k = √k · sin(k · 137.508°) for k = 1 to 100, then change the angle to 137.0° and 138.0° to see the spirals break into spokes.',
        targetVariable: 'Sensitivity to Divergence Angle Δθ',
      },
      {
        title: 'Compare Nautilus / Snail Shell Logarithmic Growth',
        description:
          'Measure the radial width of successive 90° chambers on a snail shell or shell photograph to test whether the radius grows by a constant geometric multiplier r(θ) = a · e^(bθ).',
        targetVariable: 'Logarithmic Spiral Growth Factor',
      },
    ],
    relatedProjectSlugs: [
      'load-test-a-structural-truss-bridge',
      'leaf-stomata-microscopy-and-osmosis',
      'build-a-simple-weather-station',
    ],
  },

  // 7. Load-Test a Structural Truss Bridge (Engineering & Mathematics)
  {
    slug: 'load-test-a-structural-truss-bridge',
    title: 'Load-Test a Structural Truss Bridge',
    subtitle:
      'Construct a triangular Warren truss span vs. an unbraced rectangular beam frame to quantify how triangulated geometry prevents bending collapse.',
    category: 'engineering',
    categoryLabel: 'Engineering Projects',
    subjectSlug: 'engineering',
    subjectLabel: 'Engineering & Mathematics',
    difficulty: 'Intermediate',
    isBeginnerFriendly: false,
    isFeatured: false,
    estimatedTime: '90 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectTrussBridge.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectTrussBridge.alt,
    coreMechanismFormula: '∑ F_x = 0,   ∑ F_y = 0,   ∑ τ = 0',
    whatYouCreateSummary:
      'A 40 cm triangulated Warren truss bridge and a load-vs.-midspan-deflection comparison table.',
    requiredMaterials: [
      {
        name: 'Uniform Wooden Craft Sticks (Popsicle Sticks, 114 mm × 10 mm)',
        quantity: '45 sticks',
        purpose: 'Serves as standardized tension and compression structural members.',
      },
      {
        name: 'PVA Wood Glue & Binder Clips (For clamping joints while curing)',
        quantity: '1 bottle + 12 clips',
        purpose: 'Bonds gusset joints rigidly at the triangle vertices.',
      },
      {
        name: '2 Sturdy Support Blocks (30 cm clear span gap) & Millimeter Ruler',
        quantity: '1 test stand',
        purpose: 'Supports the bridge ends and measures vertical mid-span deflection Δy in millimeters.',
      },
      {
        name: 'Suspended Loading Bucket or Hook with Graduated Water/Coin Weights (100 g increments)',
        quantity: 'Up to 2.0 kg',
        purpose: 'Applies controlled downward point loads at the center of the bridge span.',
      },
    ],
    whatYouWillDiscover: [
      'Why a 4-sided rectangular frame deforms into a parallelogram under load unless braced by a diagonal member into two rigid triangles.',
      'How a truss converts destructive vertical bending moments into pure axial compression (top chord) and pure axial tension (bottom chord).',
      'How to measure elastic structural stiffness k = F / Δy by tracking mid-span millimeter deflection as weight is added incrementally.',
    ],
    whyThisProjectMatters:
      'Every major railway truss, river crossing, and industrial roof structure relies on geometric triangulation. Testing an unbraced rectangular span against a Warren triangle truss proves visually why triangles are the fundamental building block of structural engineering.',
    conceptsInvolved: [
      {
        title: 'Geometric Rigidity of the Triangle (SSS Congruence)',
        discipline: 'Geometry & Statics',
        principleOrFormula: 'Degrees of Freedom = 2J − M − 3 = 0',
        explanation:
          'Unlike a quadrilateral, a triangle’s interior angles cannot change without changing the length of at least one of its sides.',
      },
      {
        title: 'Axial Tension vs. Compression Distribution',
        discipline: 'Structural Engineering',
        principleOrFormula: 'F_member = F_load / (2 · sin θ)',
        explanation:
          'Under a downward mid-span load, the top horizontal chord is squeezed in compression while the bottom horizontal chord is stretched in tension.',
      },
      {
        title: 'Elastic Stiffness & Mid-Span Deflection',
        discipline: 'Mechanics of Materials',
        principleOrFormula: 'k_effective = ΔF / Δy (N/mm)',
        explanation:
          'Structural stiffness measures how much load force ΔF is required to deflect the center of the span by 1 millimeter.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Field & Mechanical Caution',
      warnings: [
        'Place a soft towel or cushion directly beneath the suspended load bucket (only 3–4 cm below the bucket bottom) so weights cannot fall onto feet if a glue joint fails.',
        'Wear protective eyewear when load-testing wooden craft sticks near their breaking limit.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Build a Simple 4-Stick Pin-Jointed Rectangle vs. a 3-Stick Triangle',
        instruction:
          'Before gluing the bridge, fasten 4 craft sticks into a square using single brass paper fasteners at the corners, and 3 craft sticks into a triangle. Push sideways on the top corner of both shapes.',
        verificationCheck:
          'Confirm that the square collapses into a slanted parallelogram easily while the triangle remains rigid.',
      },
      {
        stepNumber: 2,
        title: 'Assemble Two Parallel Warren Truss Side Frames (60° Triangles)',
        instruction:
          'Lay out a bottom chord of 3 overlapping craft sticks (30 cm span) and a top chord of 2.5 sticks, connected by alternating 60° diagonal web members forming equilateral triangles. Glue and clamp all joints; build an identical second side frame and let cure.',
        verificationCheck:
          'Allow PVA wood glue to cure completely before applying test weights.',
      },
      {
        stepNumber: 3,
        title: 'Connect the Two Side Trusses with Lateral Cross-Beams',
        instruction:
          'Glue perpendicular floor beams across the bottom chords and top lateral struts across the top chords to form a 3D box truss.',
        verificationCheck:
          'Place the bridge across two support blocks separated by a 28 cm clear span.',
      },
      {
        stepNumber: 4,
        title: 'Measure Mid-Span Deflection (Δy) Under Incremental Load',
        instruction:
          'Position a vertical millimeter ruler at the center of the span and record the unloaded baseline height y_0. Hang the loading cup at mid-span and add 200 g increments (200 g, 400 g, 600 g, 800 g, 1000 g), recording vertical deflection Δy = y_0 − y at each step.',
        verificationCheck:
          'Compare the truss deflection against a single flat horizontal craft stick spanning the same gap.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Measured deflection depends on glue curing time, overlap area at the gusset joints, and wood grain stiffness. Record your actual millimeter readings safely within the elastic range.',
      qualitativeExpectations: [
        'A single flat horizontal beam spanning the gap bends several millimeters under even a 200 g load.',
        'The triangulated Warren truss exhibits very small vertical deflection (< 1–2 mm) under the same 200 g–1000 g loads because load is carried axially along the diagonals.',
        'If pushed toward failure, failure almost always occurs either by buckling of a top compression member or shear peeling at a bottom tension glue joint.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Control: Unbraced Flat Beam at 200 g Mid-Span Load',
          expectedQualitativeBehavior: 'Large visible downward sag (bending moment deflection)',
          learnerMeasurementPrompt: 'Measure and record vertical mid-span sag Δy in millimeters',
          unit: 'Millimeters (mm)',
        },
        {
          trialOrCondition: 'Warren Truss Span at 400 g Mid-Span Load',
          expectedQualitativeBehavior: 'Minimal elastic deflection; triangle web members distribute load to supports',
          learnerMeasurementPrompt: 'Measure and record vertical mid-span deflection Δy in millimeters',
          unit: 'Millimeters (mm)',
        },
        {
          trialOrCondition: 'Warren Truss Span at 1000 g (1.0 kg) Mid-Span Load',
          expectedQualitativeBehavior: 'High structural stiffness; top chord in compression, bottom chord in tension',
          learnerMeasurementPrompt: 'Measure and record vertical mid-span deflection Δy in millimeters',
          unit: 'Millimeters (mm)',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'At every joint (node) of a static truss bridge, the vector sum of horizontal forces ∑F_x = 0 and vertical forces ∑F_y = 0 must balance. Diagonal web members pitched at angle θ transfer vertical shear loads into horizontal tensile and compressive forces.',
      governingEquation: '∑ F_y = 0  ⇒  F_diagonal = R_support / sin(θ)',
      equationBreakdown:
        'Where R_support = W / 2 is the upward reaction force at each abutment for a symmetric center load W, and θ is the interior truss angle (typically 45°–60°).',
      deeperMechanism:
        'Increasing the vertical depth (height) of the truss increases its area moment of inertia I, dramatically reducing bending stress and mid-span deflection compared to a thin flat plank of equal mass.',
      diagramType: 'truss-vectors',
    },
    realWorldApplication: {
      headline: 'Railway Truss Bridges, River Crossings & Roof Space Frames',
      description:
        'Civil engineers use Pratt, Howe, and Warren trusses to span wide rivers with minimal structural steel mass.',
      bangladeshAndGlobalContext:
        'Iconic bridges in Bangladesh—including the historic Hardinge Bridge over the Padma and the steel truss superstructures of the Padma Multipurpose Bridge—employ deep triangulated Warren trusses to carry heavy freight trains and highway traffic.',
      industryExamples: [
        'Long-span steel railway and highway river bridges',
        'Industrial factory roof trusses and stadium space frames',
        'Telecommunications transmission towers and construction cranes',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'If you had thick steel cables (strong in tension, floppy in compression) and rigid wooden struts, which truss members could be replaced by cables under a downward gravity load?',
        conceptualHint:
          'Identify which members are being stretched (bottom chord) versus squeezed (top chord and end diagonals).',
      },
    ],
    furtherChallenges: [
      {
        title: 'Strength-to-Weight Ratio Optimization',
        description:
          'Weigh your finished bridge in grams on a kitchen scale and calculate its Structural Efficiency Ratio = Maximum Safe Load Supported (g) / Bridge Mass (g).',
        targetVariable: 'Strength-to-Mass Ratio',
      },
    ],
    relatedProjectSlugs: [
      'make-a-basic-hydraulic-system',
      'explore-mathematical-patterns-in-nature',
      'build-a-commutated-dc-electric-motor',
    ],
  },

  // 8. Build a Commutated DC Electric Motor (Science / Physics & Engineering)
  {
    slug: 'build-a-commutated-dc-electric-motor',
    title: 'Build a Commutated DC Electric Motor',
    subtitle:
      'Wind an enameled copper wire rotor coil suspended over a permanent magnet to convert electrical current into continuous rotational torque via the Lorentz force.',
    category: 'science',
    categoryLabel: 'Science Activities',
    subjectSlug: 'physics',
    subjectLabel: 'Physics & Engineering',
    difficulty: 'Intermediate',
    isBeginnerFriendly: false,
    isFeatured: false,
    estimatedTime: '55 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectDcElectricMotor.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectDcElectricMotor.alt,
    coreMechanismFormula: 'F = I · (L × B)',
    whatYouCreateSummary:
      'A spinning half-stripped copper armature DC motor driven by a single 1.5V battery.',
    requiredMaterials: [
      {
        name: '22–26 AWG Enameled Magnet Copper Wire (1 meter length)',
        quantity: '1 m',
        purpose: 'Winds into a lightweight 12-turn circular rotor coil.',
      },
      {
        name: '1.5V Alkaline D-Cell or AA Battery in Holder',
        quantity: '1 cell',
        purpose: 'Supplies direct current pulses to the rotor coil.',
      },
      {
        name: 'Ceramic Ferrite or Disk Magnet',
        quantity: '1–2 magnets',
        purpose: 'Provides the vertical static magnetic field B beneath the spinning coil.',
      },
      {
        name: '2 Large Metal Paperclips or Copper Wire Support Cradles + Fine Sandpaper',
        quantity: '2 cradles',
        purpose: 'Supports the rotor axles and conducts current into the half-stripped commutator leads.',
      },
    ],
    whatYouWillDiscover: [
      'How a current-carrying wire inside a magnetic field experiences a perpendicular mechanical push (the Lorentz Force).',
      'Why sanding the insulating enamel off only ONE HALF of the rotor axle wire acts as a commutator switch—preventing the coil from reversing torque on the back half of each spin.',
      'How reversing either the battery polarity or flipping the magnet poles reverses the motor’s spin direction.',
    ],
    whyThisProjectMatters:
      'Electric fans, water pumps, train traction motors, and industrial robotics all convert electrical energy into rotational work using the Lorentz force. Winding a working motor from bare copper wire and a magnet makes electromagnetism unforgettable.',
    conceptsInvolved: [
      {
        title: 'Magnetic Lorentz Force on a Conductor',
        discipline: 'Electromagnetism',
        principleOrFormula: 'F = I · L · B · sin(θ)',
        explanation:
          'Electric current I flowing through wire length L perpendicular to magnetic field B experiences a force mutually perpendicular to both I and B (Right-Hand Rule).',
      },
      {
        title: 'Half-Cycle Commutation',
        discipline: 'Electrical Engineering',
        principleOrFormula: 'τ_avg > 0 over 360° rotation',
        explanation:
          'If current flowed continuously in the same direction along the wire, torque would reverse after 180° and lock the coil. Half-stripping the axle interrupts current during the opposing half-cycle while rotational inertia carries the coil through.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Low-Voltage / General Caution',
      warnings: [
        'Use only a single 1.5V alkaline battery. Because the copper coil has very low electrical resistance, disconnect one battery lead as soon as you finish observing the motor spin so the wire and battery do not become hot.',
        'Keep strong magnets away from magnetic stripe cards and sensitive instruments.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Wind a Balanced 12-Turn Copper Rotor Coil',
        instruction:
          'Wrap the enameled copper wire 12 times tightly around a cylindrical marker (approx. 2.5 cm diameter), leaving 4 cm of straight wire extending from exactly opposite sides as balanced axle arms. Wrap the two free ends twice around the coil loop to hold the bundle together.',
        verificationCheck:
          'Spin the coil gently on your fingertips to make sure both axle arms are straight and balanced.',
      },
      {
        stepNumber: 2,
        title: 'Sand the Half-Stripped Commutator on the Axle Arms',
        instruction:
          'On one axle arm, use fine sandpaper to sand off the red/gold insulating enamel completely all the way around (360°). On the second axle arm, hold the coil vertical and sand off the enamel from ONLY THE TOP HALF (180°) of the wire circumference, leaving the bottom half insulated.',
        verificationCheck:
          'This 180° half-insulated axle is the key commutator switch that keeps the motor spinning continuously.',
      },
      {
        stepNumber: 3,
        title: 'Mount the Support Cradles, Magnet, and Rotor',
        instruction:
          'Bend two metal paperclips into upright loop cradles mounted on a wooden base 6 cm apart. Place the permanent magnet flat on the base directly below the midpoint between the cradles, and rest the copper coil axles inside the cradle loops about 1 cm above the magnet.',
        verificationCheck:
          'Confirm the bottom edge of the spinning coil clears the magnet without rubbing.',
      },
      {
        stepNumber: 4,
        title: 'Energize with 1.5V DC and Observe Spin Direction',
        instruction:
          'Connect the 1.5V battery leads to the two paperclip cradles and give the coil a gentle nudge to start rotation. Observe the spin direction, then flip the magnet upside down (reversing B) and observe what happens to the spin direction.',
        verificationCheck:
          'Disconnect the battery lead promptly after each 15–20 second run.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Rotor spin stability depends on mechanical balance of your hand-wound coil and clean electrical contact at the sanded axle. Record your actual observations for all polarity combinations.',
      qualitativeExpectations: [
        'When current flows and the coil is given a slight initial nudge past the dead-center position, the coil accelerates into continuous high-speed rotation.',
        'Flipping the magnet upside down (reversing the vertical B-field direction from North-up to South-up) reverses the rotational direction of the coil.',
        'Reversing the positive and negative battery leads (reversing current I) also reverses the rotational direction.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Config 1: Magnet North-Pole Up, Battery (+) Left / (−) Right',
          expectedQualitativeBehavior: 'Continuous rotation in one direction (Clockwise or Counter-Clockwise viewed from left)',
          learnerMeasurementPrompt: 'Record actual observed spin direction (CW or CCW)',
          unit: 'Spin Direction',
        },
        {
          trialOrCondition: 'Config 2: Magnet South-Pole Up (Flipped), Battery Unchanged',
          expectedQualitativeBehavior: 'Lorentz force vector reverses; rotor spins in opposite direction',
          learnerMeasurementPrompt: 'Record actual observed spin direction after flipping magnet',
          unit: 'Spin Direction',
        },
        {
          trialOrCondition: 'Config 3: Magnet North-Pole Up, Battery Leads Swapped',
          expectedQualitativeBehavior: 'Current vector reverses; rotor spins in opposite direction from Config 1',
          learnerMeasurementPrompt: 'Record actual observed spin direction after swapping battery leads',
          unit: 'Spin Direction',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'When current I flows horizontally through the bottom segment of the loop and the magnet produces an upward vertical magnetic field B, the cross product F = I(L × B) pushes the bottom wire sideways while pushing the top wire in the opposite sideways direction—forming a torque couple τ.',
      governingEquation: 'τ = N · I · A · B · sin(φ)',
      equationBreakdown:
        'Where N is the number of wire turns (12), I is coil current, A is loop area, B is magnetic flux density, and φ is the angle between the coil normal and the magnetic field.',
      deeperMechanism:
        'During the first 180° of rotation, bare copper touches the cradle and magnetic torque accelerates the rotor. During the second 180°, the un-sanded enamel side touches the cradle, cutting off current so opposing back-torque never occurs.',
      diagramType: 'lorentz-motor',
    },
    realWorldApplication: {
      headline: 'Electric Ceiling Fans, Irrigation Pumps & EV Traction Motors',
      description:
        'Every DC motor and AC induction motor relies on magnetic torque acting on current-carrying conductors.',
      bangladeshAndGlobalContext:
        'From electric three-wheeler traction motors (Easybikes) and ceiling fans in every household to garment sewing machine drives across Bangladesh, electromagnetic torque conversion powers modern daily life.',
      industryExamples: [
        'Brushless and brushed DC motors in electric vehicles and appliances',
        'Centrifugal water pump electric drives',
        'Precision robotic servo actuators',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'What happens if you sand off 100% of the enamel all the way around BOTH axle arms instead of leaving one axle half-insulated?',
        conceptualHint:
          'Trace the direction of the Lorentz force on the bottom wire before and after the coil flips upside down at 180°.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Compare 8 Turns vs. 16 Turns Rotor Torque',
        description:
          'Wind a second rotor with 16 turns of copper wire and compare startup torque and rotational speed against an 8-turn rotor.',
        targetVariable: 'Turn Count N vs. Torque & Mass',
      },
    ],
    relatedProjectSlugs: [
      'build-a-simple-electric-circuit',
      'understand-solar-energy',
      'microcontroller-ultrasonic-distance-logger',
    ],
  },

  // 9. Microcontroller Ultrasonic Distance & Sensor Logger (Technology)
  {
    slug: 'microcontroller-ultrasonic-distance-logger',
    title: 'Microcontroller Ultrasonic Distance & Sensor Logger',
    subtitle:
      'Wire an HC-SR04 ultrasonic time-of-flight transducer to a microcontroller to calculate physical distance and trigger multi-stage LED threshold alerts.',
    category: 'technology',
    categoryLabel: 'Technology Projects',
    subjectSlug: 'technology',
    subjectLabel: 'Technology & Computing',
    difficulty: 'Intermediate',
    isBeginnerFriendly: false,
    isFeatured: false,
    estimatedTime: '65 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectUltrasonicLogger.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectUltrasonicLogger.alt,
    coreMechanismFormula: 'd = (v_sound · Δt_echo) / 2',
    whatYouCreateSummary:
      'A non-contact ultrasonic rangefinder and water-level alert prototype calibrated against a ruler.',
    requiredMaterials: [
      {
        name: 'Arduino Uno / Nano or Compatible 5V Microcontroller + USB Cable',
        quantity: '1 board',
        purpose: 'Generates a 10 µs trigger pulse and measures echo pulse width in microseconds.',
      },
      {
        name: 'HC-SR04 Ultrasonic Distance Sensor Module (40 kHz)',
        quantity: '1 sensor',
        purpose: 'Emits ultrasonic acoustic bursts and detects the reflected echo wave.',
      },
      {
        name: 'Solderless Breadboard, Green/Amber/Red LEDs, & 3 × 220 Ω Resistors',
        quantity: '1 kit',
        purpose: 'Provides visual proximity threshold alerts (Safe / Caution / Critical).',
      },
      {
        name: 'Meter Stick / Tape Measure & Flat Cardboard Target Board',
        quantity: '1 scale',
        purpose: 'Provides ground-truth physical distance measurements from 10 cm to 100 cm.',
      },
    ],
    whatYouWillDiscover: [
      'How an ultrasonic sensor measures distance without physical contact by timing the round-trip echo of a 40 kHz sound pulse.',
      'Why the measured round-trip time Δt must be divided by 2 to compute the one-way distance to the target object.',
      'How air temperature slightly alters the speed of sound (v ≈ 331.3 + 0.606 · T_°C m/s) and affects sensor accuracy.',
    ],
    whyThisProjectMatters:
      'Automated river flood-level gauges, rooftop water-tank level controllers, and robotic obstacle-avoidance systems all depend on time-of-flight sensing. Comparing microcontroller output against a physical meter stick teaches empirical sensor calibration.',
    conceptsInvolved: [
      {
        title: 'Acoustic Time-of-Flight (ToF) Ranging',
        discipline: 'Wave Physics & Embedded Systems',
        principleOrFormula: 'd (cm) = (0.0343 cm/µs · Δt_µs) / 2',
        explanation:
          'At 20°C, sound travels in air at ~343 m/s (0.0343 cm per microsecond). Dividing round-trip travel distance by 2 gives one-way range.',
      },
      {
        title: 'Conditional Threshold Logic',
        discipline: 'Computer Science',
        principleOrFormula: 'if (d < d_crit) → state = ALERT',
        explanation:
          'Software conditional branches translate continuous numerical sensor readings into discrete control states.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Low-Voltage / General Caution',
      warnings: [
        'Always unplug the USB power cable while wiring Vcc (5V) and GND pins on the breadboard to avoid accidental reverse polarity on the HC-SR04 module.',
        'Include 220 Ω current-limiting resistors in series with each digital output pin driving an LED.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Wire the HC-SR04 Sensor and Indicator LEDs on the Breadboard',
        instruction:
          'Connect HC-SR04 Vcc to 5V, GND to GND, Trig to Digital Pin 9, and Echo to Digital Pin 10. Wire Green, Amber, and Red LEDs through 220 Ω resistors to Digital Pins 4, 5, and 6.',
        verificationCheck:
          'Verify Vcc and GND are not swapped before plugging in the USB cable.',
      },
      {
        stepNumber: 2,
        title: 'Program the 10 µs Trigger Pulse and Echo Timing Calculation',
        instruction:
          'Upload the sketch that pulses Trig HIGH for 10 microseconds, reads duration = pulseIn(10, HIGH), computes distanceCm = (duration * 0.0343) / 2.0, and prints both duration (µs) and distanceCm to the Serial Monitor.',
        verificationCheck:
          'Open the Serial Monitor at 9600 baud to confirm live microsecond and centimeter readings.',
      },
      {
        stepNumber: 3,
        title: 'Calibrate Sensor Output Against a Physical Meter Stick',
        instruction:
          'Lay a meter stick flat on the table in front of the sensor. Hold a flat cardboard book perpendicular to the sensor beam at exact ruler positions of 15.0 cm, 30.0 cm, 50.0 cm, and 80.0 cm, and record the sensor’s reported distance at each stop.',
        verificationCheck:
          'Calculate the percentage measurement error: |d_sensor − d_ruler| / d_ruler × 100%.',
      },
      {
        stepNumber: 4,
        title: 'Test Surface Angle and Soft Fabric Absorption',
        instruction:
          'At 30.0 cm distance, tilt the cardboard target by 45° so the sound wave reflects away from the receiver cone, and then cover the target with a soft folded towel. Observe what happens to the echo reading.',
        verificationCheck:
          'Note how specular acoustic reflection and porous sound absorption affect ultrasonic sensors.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Ultrasonic sensors have a minimum blind zone of ~2 cm and a beam spread cone of ~15°. Record the actual microsecond durations and centimeter values reported on your Serial Monitor.',
      qualitativeExpectations: [
        'For a flat target perpendicular to the sensor between 10 cm and 100 cm, the computed distance typically agrees with the physical ruler within ±0.5 to 1.5 cm.',
        'At 30.0 cm, the expected round-trip echo pulse duration Δt is approximately (60 cm) / (0.0343 cm/µs) ≈ 1,749 µs.',
        'When the flat target is tilted steeply (>30°–45°), the ultrasonic beam reflects off to the side rather than back into the receiver cylinder, causing a timeout or false far-wall reading.',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Calibration Stop 1: True Ruler Distance = 15.0 cm',
          expectedQualitativeBehavior: 'Expected round-trip Δt ≈ 875 µs; Green/Amber threshold active',
          learnerMeasurementPrompt: 'Record actual Serial Monitor Δt (µs) & computed distance (cm)',
          unit: 'µs & cm',
        },
        {
          trialOrCondition: 'Calibration Stop 2: True Ruler Distance = 30.0 cm',
          expectedQualitativeBehavior: 'Expected round-trip Δt ≈ 1,749 µs; high linearity with ruler',
          learnerMeasurementPrompt: 'Record actual Serial Monitor Δt (µs) & computed distance (cm)',
          unit: 'µs & cm',
        },
        {
          trialOrCondition: 'Calibration Stop 3: True Ruler Distance = 60.0 cm',
          expectedQualitativeBehavior: 'Expected round-trip Δt ≈ 3,498 µs',
          learnerMeasurementPrompt: 'Record actual Serial Monitor Δt (µs) & computed distance (cm)',
          unit: 'µs & cm',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'The HC-SR04 transmitter emits an 8-cycle burst of 40 kHz ultrasound. Those compression waves travel through air at the speed of sound v_s, bounce off the first acoustic impedance boundary, and return to the piezoelectric receiver.',
      governingEquation: 'd = [ (331.3 + 0.606 · T_°C) · Δt ] / 2',
      equationBreakdown:
        'At ambient temperature T = 28°C (common in Bangladesh), v_s ≈ 348.3 m/s (0.0348 cm/µs), about 1.5% faster than at 20°C.',
      deeperMechanism:
        'By incorporating an air temperature sensor to dynamically update v_s in code, engineers eliminate thermal drift in ultrasonic tank and river level gauges.',
      diagramType: 'weather-station',
    },
    realWorldApplication: {
      headline: 'Automated Water-Tank Level Controllers & River Flood Telemetry',
      description:
        'Non-contact ultrasonic transducers mounted at the top of water tanks or bridge decks measure water surface height continuously without corroding in the water.',
      bangladeshAndGlobalContext:
        'In urban apartment buildings across Dhaka and Chittagong, ultrasonic roof-tank controllers prevent water overflow, while bridge-mounted ultrasonic gauges monitor seasonal river levels.',
      industryExamples: [
        'Rooftop overhead water tank automatic pump controllers',
        'Bridge-mounted river and canal flood-stage telemetry nodes',
        'Automotive rear parking proximity sensors',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'If your room temperature is 32°C in summer, but your microcontroller code hardcodes the speed of sound for 20°C (343 m/s), will the sensor slightly underestimate or overestimate the true distance?',
        conceptualHint:
          'In warmer air, sound travels faster, so the echo returns in slightly fewer microseconds Δt.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Overhead Water Tank Percentage Gauge',
        description:
          'Mount the sensor at the top rim of a 30 cm tall bucket and write the formula: Fill_Percentage = ((H_bucket − d_measured) / H_bucket) * 100 as you pour water in.',
        targetVariable: 'Inverted Level-to-Volume Mapping',
      },
    ],
    relatedProjectSlugs: [
      'build-a-simple-weather-station',
      'build-a-simple-electric-circuit',
      'understand-solar-energy',
    ],
  },

  // 10. Leaf Stomata Microscopy & Cellular Osmosis (Science / Biology)
  {
    slug: 'leaf-stomata-microscopy-and-osmosis',
    title: 'Leaf Stomata Microscopy & Cellular Osmosis',
    subtitle:
      'Prepare a lower leaf epidermal peel and test plant tissue in fresh vs. saline water to observe stomatal guard cells and osmotic turgor pressure.',
    category: 'science',
    categoryLabel: 'Science Activities',
    subjectSlug: 'biology',
    subjectLabel: 'Biology & Life Science',
    difficulty: 'Beginner',
    isBeginnerFriendly: true,
    isFeatured: false,
    estimatedTime: '50 mins',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectLeafStomata.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.projectLeafStomata.alt,
    coreMechanismFormula: 'Ψ_w = Ψ_s + Ψ_p   (Water Potential & Turgor)',
    whatYouCreateSummary:
      'A wet-mount stomatal epidermal impression slide and a quantitative saline osmosis mass-change dataset.',
    requiredMaterials: [
      {
        name: 'Fresh Green Leaves (e.g., Rhoeo/Tradescantia, Hibiscus, or Spinach) & Potato Cylinders',
        quantity: '3 leaves + 3 strips',
        purpose: 'Provides accessible epidermal guard cells and uniform parenchymal tissue for osmosis testing.',
      },
      {
        name: 'Clear Nail Polish & Transparent Adhesive Tape (or Fine Forceps for Direct Peel)',
        quantity: '1 set',
        purpose: 'Lifts a clean microscopic impression or peel of the lower leaf epidermis.',
      },
      {
        name: 'Glass Microscope Slides, Cover Slips, & Optical Microscope (100×–400×) or Clip-On Macro Lens',
        quantity: '2 slides',
        purpose: 'Magnifies kidney-shaped guard cells and stomatal pores.',
      },
      {
        name: '3 Beakers with Distilled/Tap Water (0% NaCl), 2% Saline, and 10% Saline + Millimeter Ruler',
        quantity: '3 solutions',
        purpose: 'Tests hypotonic, near-isotonic, and hypertonic osmotic water transport.',
      },
    ],
    whatYouWillDiscover: [
      'Why terrestrial plant leaves typically have a much higher density of stomatal pores on their shaded underside (abaxial surface) than on their sun-exposed upper surface.',
      'How bean-shaped guard cells open stomatal pores when swollen with water (high turgor pressure) and close them when water exits under drought or hypertonic stress.',
      'Why plant tissue swells and stiffens in fresh water (hypotonic) yet shrinks and becomes flaccid in salty water (hypertonic).',
    ],
    whyThisProjectMatters:
      'Understanding how plants balance carbon dioxide intake against water loss—and how soil salinity dehydrates roots via osmosis—connects cellular microscopy directly to climate-resilient agriculture and coastal food security.',
    conceptsInvolved: [
      {
        title: 'Stomatal Guard Cell Turgor Mechanics',
        discipline: 'Plant Physiology',
        principleOrFormula: 'High Turgor Ψ_p → Pore Open; Low Ψ_p → Pore Closed',
        explanation:
          'Guard cells have thicker inner cell walls facing the pore; when water enters by osmosis, the outer walls stretch further than the inner walls, bowing the pore open.',
      },
      {
        title: 'Osmotic Water Potential Gradient',
        discipline: 'Cell Biology & Biophysics',
        principleOrFormula: 'Net H₂O Flow: High Ψ_water → Low Ψ_water (More Solute)',
        explanation:
          'Water diffuses across semi-permeable cell membranes toward the compartment with higher dissolved solute concentration.',
      },
    ],
    safetyInstructions: {
      severityLevel: 'Laboratory & Hygiene Caution',
      warnings: [
        'Handle glass microscope slides and thin glass cover slips carefully by their edges.',
        'If using clear nail polish for stomatal impressions, work in a well-ventilated area.',
      ],
    },
    stepByStepProcedure: [
      {
        stepNumber: 1,
        title: 'Prepare Upper vs. Lower Leaf Epidermal Peels (or Impressions)',
        instruction:
          'Tear a fresh leaf at an angle to peel a thin translucent strip of the lower (abaxial) epidermis and mount it flat on a microscope slide with a drop of fresh water and a cover slip (or brush a thin patch of clear nail polish on both upper and lower leaf surfaces, let dry, peel with clear tape, and stick onto a slide).',
        verificationCheck:
          'Label Slide A "Upper Surface (Adaxial)" and Slide B "Lower Surface (Abaxial)".',
      },
      {
        stepNumber: 2,
        title: 'Compare Stomatal Density Under Magnification',
        instruction:
          'Focus the microscope at 100× and then 400× magnification. Count the number of stomatal pores visible within a single circular field of view on the Lower Epidermis versus the Upper Epidermis.',
        verificationCheck:
          'Sketch the pair of kidney-shaped guard cells surrounding a central stomatal pore.',
      },
      {
        stepNumber: 3,
        title: 'Measure Osmotic Length/Turgor Change in 0% vs. 10% Salt Water',
        instruction:
          'Cut three uniform potato tissue strips (exact initial length L_0 = 50.0 mm). Place Strip 1 in 0% fresh water, Strip 2 in 1% salt solution, and Strip 3 in 10% hypertonic salt solution for 35 minutes. Remove, blot gently, and re-measure exact length L_final and flexibility.',
        verificationCheck:
          'Also place a drop of 5% salt water at the edge of your live epidermal peel slide and observe guard cell closure.',
      },
    ],
    expectedObservations: {
      distinctionNotice:
        'Scientific Integrity Note: Stomatal density varies widely across plant species (from ~50 to >300 stomata per mm²). Record the exact counts in your microscope field of view and your actual millimeter measurements of the potato tissue strips.',
      qualitativeExpectations: [
        'In most dicot terrestrial leaves, the lower shaded epidermis exhibits many more stomata per field of view than the upper sun-facing epidermis.',
        'The plant tissue strip placed in 0% fresh water (hypotonic) absorbs water by endosmosis, becoming rigid (turgid) and increasing slightly in length (e.g., +1 to +2.5 mm).',
        'The plant tissue strip placed in 10% salt water (hypertonic) loses internal water by exosmosis, becoming soft/bendable (flaccid) and shrinking in length (e.g., −2 to −4 mm).',
      ],
      measurementLogTemplate: [
        {
          trialOrCondition: 'Microscopy Count: Upper vs. Lower Leaf Epidermis',
          expectedQualitativeBehavior: 'Lower abaxial surface typically contains significantly higher stomatal count',
          learnerMeasurementPrompt: 'Record your actual stomata count per field of view (Upper vs. Lower)',
          unit: 'Stomata / Field',
        },
        {
          trialOrCondition: 'Osmosis Strip 1: Fresh Water (0% NaCl, Initial L_0 = 50.0 mm)',
          expectedQualitativeBehavior: 'Endosmosis into cells; strip becomes firm/turgid; ΔL > 0 mm',
          learnerMeasurementPrompt: 'Measure and record final strip length L_final & firmness after 35 min',
          unit: 'mm & % Change',
        },
        {
          trialOrCondition: 'Osmosis Strip 3: Hypertonic Saline (10% NaCl, Initial L_0 = 50.0 mm)',
          expectedQualitativeBehavior: 'Exosmosis out of cells; strip becomes limp/flaccid; ΔL < 0 mm',
          learnerMeasurementPrompt: 'Measure and record final strip length L_final & firmness after 35 min',
          unit: 'mm & % Change',
        },
      ],
    },
    scientificExplanation: {
      overview:
        'Water transport across plant cell membranes is governed by water potential Ψ_w = Ψ_s + Ψ_p, where Ψ_s is negative solute potential and Ψ_p is positive turgor pressure against the cellulose cell wall.',
      governingEquation: 'ΔL (%) = [ (L_final − L_initial) / L_initial ] × 100%',
      equationBreakdown:
        'When ΔL > 0%, the external solution is hypotonic relative to the cytoplasm. When ΔL < 0%, the external solution is hypertonic, drawing water out of the central vacuole (plasmolysis).',
      deeperMechanism:
        'In coastal agricultural soils affected by saltwater intrusion, high external Na⁺ and Cl⁻ concentrations lower soil water potential below root cell water potential, preventing crop roots from absorbing water even when the soil is wet.',
      diagramType: 'water-filtration',
    },
    realWorldApplication: {
      headline: 'Salinity-Tolerant Crop Breeding & Greenhouse Irrigation Management',
      description:
        'Agronomists measure stomatal conductance and osmotic potential to breed salt-tolerant rice and vegetable varieties.',
      bangladeshAndGlobalContext:
        'In southern coastal districts of Bangladesh (such as Bagerhat, Khulna, and Patuakhali), dry-season river salinity challenges rice cultivation. Plant scientists at BRRI and BINA select varieties that maintain cellular turgor and osmotic balance under saline stress.',
      industryExamples: [
        'Saline-tolerant rice cultivar screening in coastal agro-ecosystems',
        'Food preservation via osmotic dehydration',
        'Precision drip-irrigation scheduling based on leaf turgor sensors',
      ],
    },
    reflectionQuestions: [
      {
        question:
          'Unlike terrestrial plants, where would you expect to find the stomata on a floating aquatic plant leaf like a water lily (Shapla)? Why?',
        conceptualHint:
          'Consider which side of a floating water lily leaf is in contact with atmospheric air versus liquid water.',
      },
    ],
    furtherChallenges: [
      {
        title: 'Find the Isotonic Salt Concentration Point',
        description:
          'Test five salt concentrations (0%, 0.5%, 1.0%, 2.0%, 4.0% NaCl), plot % length change versus salt concentration, and find the exact x-intercept where ΔL = 0%.',
        targetVariable: 'Internal Cytoplasmic Osmolarity',
      },
    ],
    relatedProjectSlugs: [
      'explore-water-filtration',
      'explore-mathematical-patterns-in-nature',
      'build-a-simple-weather-station',
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetailData | undefined {
  return PROJECTS_DATA.find((project) => project.slug === slug);
}

export function getProjectsByCategory(
  category: ProjectCategorySlug
): ProjectDetailData[] {
  return PROJECTS_DATA.filter((project) => project.category === category);
}
