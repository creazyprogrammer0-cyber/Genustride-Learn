import { VERIFIED_PHOTOGRAPHY_INVENTORY } from './photography-inventory';

export type ResourceCategoryName =
  | 'Concept Explainers'
  | 'Science in Everyday Life'
  | 'Mathematics Explained'
  | 'Technology & Innovation'
  | 'Practical Learning Guides'
  | 'Experiments & Activities'
  | 'Critical Thinking Challenges';

export interface ArticleSectionBlock {
  heading: string;
  paragraphs: string[];
  keyPrincipleOrFormula?: {
    label: string;
    expression: string;
    explanation: string;
  };
  bulletPoints?: string[];
}

export interface ResourceArticleData {
  slug: string;
  title: string;
  subtitle: string;
  category: ResourceCategoryName;
  subjectSlug: string;
  subjectLabel: string;
  readingTime: string;
  publishedContext: string;
  imageSrc: string;
  imageAlt: string;
  featured: boolean;
  coreQuestion: string;
  quickSummary: string[];
  sections: ArticleSectionBlock[];
  realWorldConnection: {
    title: string;
    description: string;
    bangladeshExample: string;
  };
  thinkingChallenge: {
    prompt: string;
    reasoningGuide: string;
  };
  relatedProjectSlug: string;
  relatedArticleSlugs: string[];
}

export const RESOURCE_CATEGORIES: {
  name: ResourceCategoryName;
  shortDescription: string;
}[] = [
  {
    name: 'Concept Explainers',
    shortDescription:
      'First-principles breakdowns of fundamental ideas in physics, chemistry, biology, and engineering.',
  },
  {
    name: 'Science in Everyday Life',
    shortDescription:
      'Uncovering the physical, chemical, and biological mechanisms behind daily phenomena.',
  },
  {
    name: 'Mathematics Explained',
    shortDescription:
      'Visualizing why mathematical formulas, geometric ratios, and calculus rates work in reality.',
  },
  {
    name: 'Technology & Innovation',
    shortDescription:
      'How sensors, algorithms, microcontrollers, and clean energy systems sense and shape our world.',
  },
  {
    name: 'Practical Learning Guides',
    shortDescription:
      'Methodologies for studying through conceptual reasoning rather than rote exam memorization.',
  },
  {
    name: 'Experiments & Activities',
    shortDescription:
      'Field guides on designing fair tests, isolating variables, and recording honest observations.',
  },
  {
    name: 'Critical Thinking Challenges',
    shortDescription:
      'Structured reasoning puzzles and thought experiments that test causal understanding.',
  },
];

export const RESOURCE_ARTICLES: ResourceArticleData[] = [
  // 1. Concept Explainers
  {
    slug: 'why-voltage-is-pressure-not-flow',
    title: 'Why Voltage Is Electrical Pressure—Not Electrical Flow',
    subtitle:
      'Untangling the most common misconception in introductory physics by comparing electric potential difference, current, and hydraulic head.',
    category: 'Concept Explainers',
    subjectSlug: 'physics',
    subjectLabel: 'Physics & Electronics',
    readingTime: '6 min read',
    publishedContext: 'First-Principles Physics Series',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleVoltagePressure.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleVoltagePressure.alt,
    featured: true,
    coreQuestion:
      'How can a 3-volt battery have full voltage across its terminals even when zero current is flowing?',
    quickSummary: [
      'Voltage (ΔV) is a difference in electric potential energy per unit charge (Joules per Coulomb) between two points—it exists even when a switch is open.',
      'Current (I) is the actual flow rate of electric charge (Coulombs per second) through a cross-section, which occurs only when a conductive path closes the loop.',
      'Resistance (R) acts like a narrow constriction in a pipe, determining how much current flows for a given potential difference (I = ΔV / R).',
    ],
    sections: [
      {
        heading: '1. The Open-Switch Paradox That Confuses Memorizers',
        paragraphs: [
          'Ask a student who has only memorized V = I × R what the voltage across an open wall switch or an unconnected 3V battery is. Many will guess "zero, because I = 0 so V = 0 × R = 0." Yet if you touch a multimeter across the terminals of an unconnected battery, it reads 3.0 Volts immediately.',
          'Why? Because V = I × R describes the voltage drop across a resistive conductor when current flows through it—not the definition of electric potential difference itself. Voltage is the push waiting to happen; current is the motion that results only after a path is provided.',
        ],
        keyPrincipleOrFormula: {
          label: 'Definition of Electric Potential Difference',
          expression: 'ΔV = ΔU_electric / q   (1 Volt = 1 Joule / Coulomb)',
          explanation:
            'One Volt means each Coulomb of charge gains or loses 1 Joule of potential energy moving between two points.',
        },
      },
      {
        heading: '2. The Rooftop Water Tank Analogy—Used Accurately',
        paragraphs: [
          'Imagine an overhead water tank on the roof of a four-story building in Dhaka. Even when every tap in the building is turned tightly shut, the water at the bottom pipe still experiences high hydrostatic pressure (ΔP = ρ · g · h) due to gravity.',
          'In an electric circuit, chemical reactions inside the battery maintain an excess of electrons at the negative terminal and a deficit at the positive terminal. That separation of charge creates an electric field—analogous to the water height h. Opening the tap (closing the switch) allows charge carriers to drift down the potential gradient.',
        ],
        bulletPoints: [
          'Electric Potential Difference (ΔV in Volts) ↔ Hydrostatic Pressure Difference (ΔP in Pascals).',
          'Electric Current (I in Amperes) ↔ Volumetric Water Flow Rate (Q in Liters/second).',
          'Electrical Resistance (R in Ohms) ↔ Pipe Constriction / Valve Drag.',
        ],
      },
      {
        heading: '3. Tracing Energy Conservation Around a Closed Loop',
        paragraphs: [
          'When you wire a 3.0 V battery pack in series with a 220 Ω resistor and a red LED on a breadboard, every electron leaving the battery must return to the opposite terminal at the original potential. By Kirchhoff’s Voltage Law, the 3.0 Joules per Coulomb supplied by the battery are partitioned across the components: roughly 1.9 V drops across the red LED’s semiconductor junction to create photons, and the remaining 1.1 V drops across the 220 Ω resistor as thermal vibration.',
        ],
      },
    ],
    realWorldConnection: {
      title: 'Why Birds Can Perch Safely on a Single High-Voltage Line',
      description:
        'A power transmission line may sit at 11,000 Volts relative to the Earth below, yet a bird standing with both feet on the same wire experiences almost zero potential difference (ΔV ≈ 0 V) between its left foot and right foot.',
      bangladeshExample:
        'In household wiring and solar microgrids across Bangladesh, technicians always measure voltage BETWEEN two reference points (Line-to-Neutral or Battery+ to Battery−), because potential at a single isolated point has no physical meaning without a reference.',
    },
    thinkingChallenge: {
      prompt:
        'Suppose you measure 3.0 V across a battery when no circuit is attached. When you connect a small DC motor, the voltage measured directly across the battery terminals drops to 2.7 V. Where did the missing 0.3 V go?',
      reasoningGuide:
        'Every real battery has a small internal chemical resistance r_internal in series with its ideal voltage source. When current I flows, a voltage drop I · r_internal occurs inside the battery itself.',
    },
    relatedProjectSlug: 'build-a-simple-electric-circuit',
    relatedArticleSlugs: [
      'how-to-read-any-equation-like-a-sentence',
      'how-to-design-a-fair-scientific-experiment',
    ],
  },

  // 2. Science in Everyday Life
  {
    slug: 'why-clay-pitchers-cool-water-and-monsoon-air-feels-heavy',
    title: 'Why Clay Pitchers Cool Water—and Why Monsoon Air Stops the Cooling',
    subtitle:
      'Exploring latent heat of vaporization, molecular kinetic energy distributions, and relative humidity in everyday South Asian life.',
    category: 'Science in Everyday Life',
    subjectSlug: 'chemistry',
    subjectLabel: 'Chemistry & Thermodynamics',
    readingTime: '7 min read',
    publishedContext: 'Everyday Molecular Science',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleClayEvaporation.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleClayEvaporation.alt,
    featured: true,
    coreQuestion:
      'How can a traditional unglazed clay pitcher (Matka) cool drinking water below room temperature without electricity?',
    quickSummary: [
      'Temperature measures the average translational kinetic energy of molecules in a liquid—some molecules move much faster than average, others slower.',
      'Porous terracotta clay allows tiny amounts of water to seep through microscopic capillaries to the outer surface, where the highest-energy molecules escape into the air as vapor.',
      'When relative humidity approaches 90% during the monsoon season, the air is nearly saturated with water vapor, halting net evaporation and stopping the cooling effect.',
    ],
    sections: [
      {
        heading: '1. Evaporation Is Molecular Selection at the Surface',
        paragraphs: [
          'In a glass of water at 30°C, not every H₂O molecule moves at the same speed. Molecules collide billions of times per second, creating a Maxwell-Boltzmann distribution of kinetic energies. Only the fastest, most energetic molecules near the liquid surface possess enough kinetic energy to break free from the hydrogen-bond network of their neighbors and escape into the gas phase.',
          'When those highest-energy "hot" molecules leave the liquid, the average kinetic energy of the molecules remaining behind necessarily drops. A lower average molecular kinetic energy is, by definition, a lower temperature.',
        ],
        keyPrincipleOrFormula: {
          label: 'Latent Heat of Vaporization of Water',
          expression: 'Q_evap = m_evaporated · L_v   (L_v ≈ 2,430 J/g at 30°C)',
          explanation:
            'Every single gram of water that evaporates from the outer wall of a clay pitcher extracts roughly 2,430 Joules of thermal energy from the remaining water.',
        },
      },
      {
        heading: '2. Why Glass and Steel Containers Do Not Cool Water',
        paragraphs: [
          'If you pour the same 30°C water into a sealed stainless-steel jug or a non-porous glass bottle, the water stays at 30°C. Traditional earthen pitchers are fired from clay that retains a network of micrometer-scale pores.',
          'Capillary action draws a thin film of water continuously from the interior to the exterior wall, creating a large wet surface area exposed to passing air currents.',
        ],
      },
      {
        heading: '3. The Humidity Bottleneck: Why April Feels Different from July',
        paragraphs: [
          'Evaporation is a two-way street: water molecules continually leave the wet surface into the air while water vapor molecules in the surrounding air collide with the surface and condense back into liquid. Net evaporative cooling depends on the difference between the saturation vapor pressure at the water surface and the partial pressure of water vapor already in the air.',
        ],
        bulletPoints: [
          'Dry April afternoon (Relative Humidity ~40%): Fast net evaporation → Clay pitcher cools water by 4°C to 6°C below ambient air temperature.',
          'Humid July monsoon day (Relative Humidity ~88%): Condensation nearly balances evaporation → Net cooling drops to less than 1°C.',
        ],
      },
    ],
    realWorldConnection: {
      title: 'Human Perspiration, Wet-Bulb Temperature & Industrial Cooling Towers',
      description:
        'Your skin cools your body through the exact same latent-heat extraction mechanism as a porous clay pitcher. Power plants and textile mills also use evaporative cooling towers to reject megawatts of process heat.',
      bangladeshExample:
        'In rural households and pottery communities across Bangladesh (such as Dhamrai and Dinajpur), porous terracotta vessels and zero-energy cool chambers built from wet sand and brick keep drinking water and harvested vegetables fresh.',
    },
    thinkingChallenge: {
      prompt:
        'If you wrap a dry, thick wool blanket around a clay water pitcher, will the water inside cool down faster or slower? Why?',
      reasoningGuide:
        'Trace what happens to air circulation and water vapor accumulation right outside the clay pores when a blanket traps a stagnant layer of 100% humid air against the vessel wall.',
    },
    relatedProjectSlug: 'build-a-simple-weather-station',
    relatedArticleSlugs: [
      'why-voltage-is-pressure-not-flow',
      'why-clean-looking-water-can-still-be-unsafe',
    ],
  },

  // 3. Mathematics Explained
  {
    slug: 'how-to-read-any-equation-like-a-sentence',
    title: 'How to Read Any Mathematical Equation Like a Cause-and-Effect Sentence',
    subtitle:
      'Stop memorizing formulas as strings of letters. Learn to see numerators, denominators, and exponents as stories about proportionality and physical limits.',
    category: 'Mathematics Explained',
    subjectSlug: 'mathematics',
    subjectLabel: 'Mathematics & Modeling',
    readingTime: '6 min read',
    publishedContext: 'Mathematical Intuition Series',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleReadEquations.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleReadEquations.alt,
    featured: true,
    coreQuestion:
      'How do mathematicians and engineers look at an unfamiliar formula and immediately know how the system will behave without plugging in numbers?',
    quickSummary: [
      'Variables in the numerator drive the output upward (direct scaling); variables in the denominator restrain the output (inverse scaling).',
      'Exponents tell you how sensitive a system is: a squared term (like D² in pipe area or v² in kinetic energy) means doubling the input quadruples the effect.',
      'Checking extreme boundary cases (What happens as X → 0 or X → ∞?) immediately reveals whether a formula makes physical sense.',
    ],
    sections: [
      {
        heading: '1. Numerators Push Up; Denominators Hold Back',
        paragraphs: [
          'When students memorize formulas for an exam, F = G·m₁·m₂ / r², I = V / R, and P = F / A feel like three completely unrelated facts to store in short-term memory. To a concept-driven thinker, all three have the exact same structural grammar: Output = Driving Cause / Resisting Spread.',
          'Take pressure: P = F / A. Reading it as a sentence says: "The stress experienced by a surface increases directly with the total force F applied, and decreases inversely as you spread that force over a larger contact area A." Immediately you understand why a sharp sewing needle (tiny A in the denominator) pierces cloth with gentle finger force, while wide snowshoes prevent sinking.',
        ],
        keyPrincipleOrFormula: {
          label: 'The Structural Grammar of Ratios',
          expression: 'Effect = (Driving Factors) / (Opposing or Spreading Factors)',
          explanation:
            'Before calculating a single digit, ask: which variables sit upstairs in the numerator, and which sit downstairs in the denominator?',
        },
      },
      {
        heading: '2. Why Exponents Are Where Surprising Behavior Hides',
        paragraphs: [
          'Human intuition tends to assume everything in life is linear—if you drive twice as fast, you expect braking distance to double. Yet kinetic energy is E_k = ½ · m · v². Because velocity v carries an exponent of 2, increasing vehicle speed from 40 km/h to 80 km/h multiplies kinetic energy—and minimum braking distance—by 2² = 4 times.',
          'Similarly, in our Hydraulic System experiment, circular piston area is A = π · (D/2)². Using an output syringe with just twice the barrel diameter (D₂ = 2·D₁) multiplies lifting force by 2² = 4 times.',
        ],
      },
      {
        heading: '3. The Boundary-Case Sanity Check',
        paragraphs: [
          'Whenever you derive or recall an equation, test its edges. In Darcy’s water filtration equation Q = (k · A · Δh) / L, what happens if filter bed thickness L becomes huge? Since L is in the denominator, flow rate Q shrinks toward zero—matching our physical intuition that a thicker sand column slows percolation.',
        ],
      },
    ],
    realWorldConnection: {
      title: 'Structural Engineering, Epidemiology & Financial Compounding',
      description:
        'Whether an engineer is sizing a bridge beam (where stiffness scales with the cube of beam depth h³) or a biologist is modeling bacterial doubling (2^t), reading the structure of an equation prevents catastrophic design errors.',
      bangladeshExample:
        'When civil engineers in Bangladesh design river embankments against monsoon current erosion, knowing that hydrodynamic drag force scales with the square of water velocity (F_drag ∝ v²) explains why a modest increase in flood current speed exerts vastly higher scouring force.',
    },
    thinkingChallenge: {
      prompt:
        'Look at the formula for the electrical resistance of a copper wire: R = ρ · L / A, where L is wire length and A = π·r² is cross-sectional area. If you stretch a copper wire so it becomes twice as long (2L) while its radius shrinks to half (r/2), by what factor does its resistance R change?',
      reasoningGuide:
        'Put 2L in the numerator and (r/2)² = r²/4 in the denominator: Factor = 2 / (1/4) = 8 times higher resistance.',
    },
    relatedProjectSlug: 'explore-mathematical-patterns-in-nature',
    relatedArticleSlugs: [
      'why-voltage-is-pressure-not-flow',
      'four-questions-that-replace-rote-memorization',
    ],
  },

  // 4. Technology & Innovation
  {
    slug: 'how-sensors-turn-the-physical-world-into-digital-decisions',
    title: 'How Sensors Turn the Physical World into Digital Decisions',
    subtitle:
      'Tracing the signal chain from a raw physical phenomenon—light, sound, temperature, or pressure—into microcontroller code and real-world action.',
    category: 'Technology & Innovation',
    subjectSlug: 'technology',
    subjectLabel: 'Technology & Computing',
    readingTime: '6 min read',
    publishedContext: 'Embedded Systems & Sensing',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleSensorsDigital.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleSensorsDigital.alt,
    featured: true,
    coreQuestion:
      'A computer processor only understands binary numbers—so how can it possibly measure the height of water in a river or the moisture in a rice field?',
    quickSummary: [
      'A transducer is a physical bridge that converts a non-electrical quantity (sound echo, heat, light intensity) into a measurable electrical signal (voltage, resistance, or pulse duration).',
      'An Analog-to-Digital Converter (ADC) or hardware timer samples that electrical signal and turns it into a discrete number in memory.',
      'Calibration is the essential scientific step that maps raw digital numbers to real physical units (centimeters, degrees Celsius, or Pascals).',
    ],
    sections: [
      {
        heading: '1. Step One: The Transducer Bridge',
        paragraphs: [
          'Software code cannot touch water or feel wind directly. Every smart device begins with a material whose electrical properties change predictably when exposed to a physical stimulus. In a thermistor, semiconductor resistance drops as temperature rises. In a solar photodiode, incident photons liberate electron-hole pairs proportional to irradiance. In an ultrasonic sensor, a vibrating piezoelectric crystal turns an incoming acoustic pressure wave into a voltage pulse.',
        ],
        keyPrincipleOrFormula: {
          label: 'The 4-Stage Sensor Signal Chain',
          expression: 'Physical Variable → Transducer (V or Δt) → ADC/Timer (Integer) → Calibrated Action',
          explanation:
            'Every automated control system—from a rooftop water pump controller to a weather satellite—follows this four-stage pipeline.',
        },
      },
      {
        heading: '2. Step Two: Quantization & Timing',
        paragraphs: [
          'Once a transducer outputs an analog voltage between 0 V and 5 V, a 10-bit Analog-to-Digital Converter (ADC) inside a microcontroller slices that 5 V range into 2¹⁰ = 1,024 discrete integer steps (0 to 1023). Or, in time-of-flight sensors like the HC-SR04 ultrasonic module, a digital clock counts exactly how many microseconds elapse between sending a 40 kHz sound burst and receiving its echo.',
        ],
      },
      {
        heading: '3. Why Uncalibrated Sensors Lie',
        paragraphs: [
          'A beginner writes code that prints an ADC value of 614 and stops there. An engineer asks: what does 614 mean in reality, and what happens when ambient temperature shifts? By comparing sensor outputs against a trusted physical reference—like a millimeter ruler or an alcohol thermometer—you establish an empirical calibration curve and error bounds.',
        ],
      },
    ],
    realWorldConnection: {
      title: 'Smart Irrigation, Flood Early-Warning Nodes & Medical Diagnostics',
      description:
        'Low-cost microcontrollers paired with calibrated sensors allow communities to monitor air quality, soil moisture, and river stages in real time.',
      bangladeshExample:
        'Across northern and coastal Bangladesh, student engineers and agricultural researchers build solar-powered soil-moisture and ultrasonic river-level telemetry nodes to help farmers optimize irrigation water and track flash-flood surges.',
    },
    thinkingChallenge: {
      prompt:
        'A 10-bit ADC maps 0.0 V–5.0 V into integers 0–1023. What is the smallest voltage change (voltage resolution) that this ADC can detect without amplification?',
      reasoningGuide:
        'Divide the full-scale voltage range (5.0 V = 5,000 mV) by 1,023 steps: 5000 mV / 1023 ≈ 4.89 mV per digital step.',
    },
    relatedProjectSlug: 'microcontroller-ultrasonic-distance-logger',
    relatedArticleSlugs: [
      'why-voltage-is-pressure-not-flow',
      'how-to-design-a-fair-scientific-experiment',
    ],
  },

  // 5. Practical Learning Guides
  {
    slug: 'four-questions-that-replace-rote-memorization',
    title: 'Four Questions That Replace Rote Memorization in Any Subject',
    subtitle:
      'A practical study protocol using Understand → Explore → Apply → Create to master science and mathematics permanently.',
    category: 'Practical Learning Guides',
    subjectSlug: 'physics',
    subjectLabel: 'Learning Methodology',
    readingTime: '5 min read',
    publishedContext: 'Genustride Study Framework',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleFourQuestions.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleFourQuestions.alt,
    featured: true,
    coreQuestion:
      'Why do students forget 80% of what they crammed for an exam within two weeks—and what study habit builds permanent understanding instead?',
    quickSummary: [
      'Rote memorization stores isolated sentences without causal hooks; if you forget one word on exam day, the entire answer collapses.',
      'Conceptual learning builds a cause-and-effect mental model so you can reconstruct the explanation or equation from scratch whenever you need it.',
      'Asking four structured questions (What is it? Why does it work this way? Where does it appear in real life? What happens if I change a variable?) transforms passive reading into active mastery.',
    ],
    sections: [
      {
        heading: '1. The Illusion of Competence When Re-Reading Textbooks',
        paragraphs: [
          'Cognitive scientists call it the "fluency illusion": when you read a highlighted textbook paragraph for the fourth time, the words look familiar, so your brain mistakes visual familiarity for conceptual understanding. Then, when a problem asks you to apply the idea to a slightly unfamiliar situation, your mind goes blank.',
          'True understanding means you can close the book, explain the mechanism in plain language to a younger student, and predict what will happen when one of the system’s conditions changes.',
        ],
      },
      {
        heading: '2. The 4-Question Study Protocol',
        paragraphs: [
          'Next time you study any topic—whether it is osmosis in biology, Pascal’s principle in physics, or quadratic optimization in mathematics—divide a notebook page into four quadrants corresponding to the Genustride Learn framework:',
        ],
        bulletPoints: [
          '01. UNDERSTAND: What physical or logical problem does this concept solve, and why does it matter?',
          '02. EXPLORE: What is the underlying mechanism? Draw a diagram showing how the parts interact.',
          '03. APPLY: Where can I observe or test this right now in my home, street, or workshop?',
          '04. CREATE: What happens if I double, halve, or invert one of the key variables?',
        ],
      },
      {
        heading: '3. Drawing Schematics Beats Copying Paragraphs',
        paragraphs: [
          'Whenever you translate a block of text into a labeled causal sketch—with arrows showing force directions, electron flow, or concentration gradients—you force your brain to resolve ambiguities immediately. If you cannot draw how it works, you have found the exact gap in your understanding to investigate next.',
        ],
      },
    ],
    realWorldConnection: {
      title: 'How Engineers, Physicians, and Researchers Actually Think',
      description:
        'In real professional work, no one hands you a multiple-choice sheet asking you to recite a textbook definition. You are given an unfamiliar symptom, a bridge vibration, or a circuit fault and asked to diagnose the root cause.',
      bangladeshExample:
        'Students across Bangladesh preparing for both national board exams and university engineering or medical entrance assessments find that once they understand the causal mechanism behind a chapter, they spend far less time memorizing guidebook answers.',
    },
    thinkingChallenge: {
      prompt:
        'Pick the last topic you studied in school or college. Can you explain WHY its main rule works in three sentences without using technical jargon, and name one place within 50 meters of you where that principle is operating right now?',
      reasoningGuide:
        'If you get stuck on the "Why", trace the concept one layer deeper to the conservation law or geometric constraint underneath it.',
    },
    relatedProjectSlug: 'make-a-basic-hydraulic-system',
    relatedArticleSlugs: [
      'how-to-read-any-equation-like-a-sentence',
      'how-to-design-a-fair-scientific-experiment',
    ],
  },

  // 6. Experiments & Activities
  {
    slug: 'how-to-design-a-fair-scientific-experiment',
    title: 'How to Design a Fair Scientific Experiment—and Why "Unexpected" Data Is Valuable',
    subtitle:
      'A practical guide to isolating independent variables, controlling confounders, and keeping an honest empirical observation logbook.',
    category: 'Experiments & Activities',
    subjectSlug: 'engineering',
    subjectLabel: 'Scientific Method & Labs',
    readingTime: '6 min read',
    publishedContext: 'Practical Laboratory Guide',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleFairExperiment.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleFairExperiment.alt,
    featured: true,
    coreQuestion:
      'What separates a casual demonstration from a genuine scientific experiment—and what should you do when your measured numbers disagree with textbook theory?',
    quickSummary: [
      'A fair test changes only ONE independent variable at a time while holding all other control variables constant.',
      'Every experiment needs a baseline Control Reference (such as unfiltered muddy water or an unbraced flat beam) so you have an objective benchmark for comparison.',
      'Never alter or invent data to match a textbook formula; real physical deviations reveal friction, internal resistance, heat loss, and measurement limits.',
    ],
    sections: [
      {
        heading: '1. The One-Variable Rule (Isolating Cause and Effect)',
        paragraphs: [
          'Suppose you want to test whether finer sand improves water filtration clarity. If you build Column A with coarse sand and 10 cm depth, and Column B with fine sand and 25 cm depth, and Column B produces clearer water—what caused the improvement? Was it the finer grain size or the 2.5× deeper bed?',
          'Because two variables changed at once, you cannot tell. In a controlled experiment, you vary only the Independent Variable (grain size), measure the Dependent Variable (filtrate clarity and flow time for 100 mL), and lock every Control Variable (column diameter, bed depth, input water turbidity, and pouring height).',
        ],
        keyPrincipleOrFormula: {
          label: 'Variable Architecture of a Fair Test',
          expression: 'Independent Variable (You Change) → Dependent Variable (You Measure) | Control Variables (Held Fixed)',
          explanation:
            'Write down all three categories in your notebook before touching your apparatus.',
        },
      },
      {
        heading: '2. Why Expected Observations Must Be Separated from Actual Results',
        paragraphs: [
          'In many traditional school practical classes, students are pressured to fudge their lab notebook numbers so their graph passes neatly through the textbook answer. That habit destroys scientific thinking.',
          'On Genustride Learn, every project guide separates Expected Theoretical Behavior from Your Actual Measured Results. If Ohm’s Law predicts 11.0 mA for a fresh 3.0 V battery and 100 Ω resistor, but your multimeter measures 9.8 mA, you have not "failed"—you have just discovered battery internal resistance and resistor tolerance (±5%).',
        ],
      },
      {
        heading: '3. Repeatability and Uncertainty',
        paragraphs: [
          'A single stopwatch click can easily be off by ±0.3 seconds due to human reaction time. Taking three trials for each condition and recording both the individual readings and their average turns a rough observation into trustworthy empirical evidence.',
        ],
      },
    ],
    realWorldConnection: {
      title: 'Clinical Trials, Agricultural Field Plots & Structural Testing',
      description:
        'Whether agronomists are testing a new saline-tolerant rice variety or engineers are testing concrete strength, strict control groups and honest data logging are the foundation of trustworthy science.',
      bangladeshExample:
        'At agricultural research stations across Bangladesh, field trials compare new rice varieties side-by-side against control plots with identical soil salinity, fertilizer, and water depth so farmers receive reliable yield guidance.',
    },
    thinkingChallenge: {
      prompt:
        'You want to test whether painting an aluminum can matte black makes water inside it heat up faster in sunlight than an unpainted shiny aluminum can. List at least four control variables you must keep identical between the two cans.',
      reasoningGuide:
        'Consider initial water temperature, exact water volume (mL), can size/wall thickness, starting time and sun exposure angle, and thermometer placement depth.',
    },
    relatedProjectSlug: 'explore-water-filtration',
    relatedArticleSlugs: [
      'why-clean-looking-water-can-still-be-unsafe',
      'four-questions-that-replace-rote-memorization',
    ],
  },

  // 7. Critical Thinking Challenges
  {
    slug: 'why-clean-looking-water-can-still-be-unsafe',
    title: 'Critical Thinking Challenge: Why Crystal-Clear Water Can Still Be Unsafe to Drink',
    subtitle:
      'Use scale reasoning across orders of magnitude—from millimeters down to angstroms—to evaluate what physical filters can and cannot remove.',
    category: 'Critical Thinking Challenges',
    subjectSlug: 'chemistry',
    subjectLabel: 'Chemistry, Biology & Scale Reasoning',
    readingTime: '6 min read',
    publishedContext: 'Scale & Evidence Reasoning',
    imageSrc:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleClearWaterScale.url,
    imageAlt:
      VERIFIED_PHOTOGRAPHY_INVENTORY.articleClearWaterScale.alt,
    featured: true,
    coreQuestion:
      'If a sand-and-charcoal filter turns muddy brown water completely transparent and odor-free, why is visual clarity never sufficient proof of potability?',
    quickSummary: [
      'Human eyes cannot resolve individual particles smaller than ~40–50 micrometers (µm) without magnification, and light scattering drops sharply for dissolved species.',
      'Physical sand pores (~10–50 µm) trap silt and clay, and activated carbon micropores adsorb many organic molecules, but viruses (~0.02–0.3 µm) and dissolved toxic ions (~0.0002 µm) require disinfection or specialized chemical matrices.',
      'Critical thinking in science requires comparing the physical scale of the hazard against the physical mechanism of the barrier.',
    ],
    sections: [
      {
        heading: '1. The Trap of Relying on Immediate Sensory Appearance',
        paragraphs: [
          'Our everyday senses evolved to warn us away from visibly muddy or foul-smelling water. When a learner runs turbid water through a multi-layer gravel, sand, and activated charcoal column and collects crystal-clear water in a beaker, the immediate intuitive impulse is: "It looks just like bottled drinking water—it must be pure!"',
          'Scientific reasoning asks a deeper question: What is the size scale of the pore channels in our filter, and what is the size scale of everything else that could be present in water?',
        ],
        keyPrincipleOrFormula: {
          label: 'Orders of Magnitude in Water Treatment',
          expression: 'Fine Sand Silt (~20 µm)  >>  Bacteria (~1–3 µm)  >>  Viruses (~0.05 µm)  >>  Dissolved Ions (~0.0003 µm)',
          explanation:
            'Spanning from a grain of fine silt down to a dissolved sodium or arsenic ion covers five orders of magnitude (a factor of 100,000× in diameter).',
        },
      },
      {
        heading: '2. Matching Every Contaminant Class to Its Removal Mechanism',
        paragraphs: [
          'No single filter barrier removes every class of contaminant. Water treatment engineers combine multiple orthogonal mechanisms in series, each targeting a specific physical or chemical property:',
        ],
        bulletPoints: [
          'Suspended Sand, Silt & Clay (5–500 µm): Removed by gravel and silica sand mechanical filtration and coagulation.',
          'Dissolved Organic Pigments & Odors (1–50 nm): Removed by Van der Waals surface adsorption on granular activated carbon.',
          'Pathogenic Bacteria & Viruses (20 nm–5 µm): Inactivated by thermal boiling (rolling boil), UV-C irradiation, chlorination, or ultrafiltration membranes.',
          'Dissolved Heavy Metal Ions (e.g., Arsenic, Lead) & Salts (< 1 nm): Require specific chemical adsorption media (like iron-oxide matrices), ion exchange, distillation, or reverse osmosis.',
        ],
      },
      {
        heading: '3. Applying First-Principles Scale Reasoning Everywhere',
        paragraphs: [
          'This same critical thinking habit—comparing the scale of the object against the scale of the barrier or sensor—applies across all of science: from understanding why radio waves pass through brick walls while visible light does not, to understanding why surgical masks trap respiratory droplets.',
        ],
      },
    ],
    realWorldConnection: {
      title: 'Multi-Barrier Water Safety & Arsenic Mitigation in Groundwater',
      description:
        'Public health engineers never rely on a single filtration stage; they combine physical filtration, chemical adsorption, and biological disinfection.',
      bangladeshExample:
        'In Bangladesh, shallow tube-well water often looks crystal clear straight from the ground yet may contain dissolved inorganic arsenic—which led Bangladeshi chemist Dr. Abul Hussam to develop the SONO filter combining coarse river sand, composite iron matrix (CIM) for chemical arsenic binding, wood charcoal, and brick chips.',
    },
    thinkingChallenge: {
      prompt:
        'Suppose a friend claims that boiling water for 10 minutes makes it safe from ALL possible contaminants—including dissolved table salt (NaCl) or dissolved heavy metals. How would you use conservation of matter and phase-change physics to evaluate that claim?',
      reasoningGuide:
        'Boiling kills biological pathogens (bacteria, viruses, protozoa) by denaturing their proteins, but non-volatile dissolved salts and metal ions do not evaporate with the steam—in fact, as some water boils away, their concentration in the pot slightly increases!',
    },
    relatedProjectSlug: 'explore-water-filtration',
    relatedArticleSlugs: [
      'how-to-design-a-fair-scientific-experiment',
      'why-clay-pitchers-cool-water-and-monsoon-air-feels-heavy',
    ],
  },
];

export function getResourceArticleBySlug(
  slug: string
): ResourceArticleData | undefined {
  return RESOURCE_ARTICLES.find((article) => article.slug === slug);
}
