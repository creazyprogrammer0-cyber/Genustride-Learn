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
  physicsElectricMotor:
    '/src/assets/images/physics_electric_motor_experiment_1795309289820.jpg',
  chemistryElectro:
    '/src/assets/images/subject_chemistry_electrochemistry_1795308502114.jpg',
  biologyMicroscopy:
    '/src/assets/images/subject_biology_microscopy_1795307346120.jpg',
  biologyAgriculture:
    '/src/assets/images/biology_agriculture_ecology_study_1795309289917.jpg',
  computingMicrocontroller:
    '/src/assets/images/subject_computing_microcontroller_1795308500861.jpg',
  solarWaterProject:
    '/src/assets/images/project_solar_water_sensor_1795307346390.jpg',
  engineeringBridgeTruss:
    '/src/assets/images/engineering_bridge_truss_model_1795309288794.jpg',
  fluidDynamicsLab:
    '/src/assets/images/resource_fluid_dynamics_lab_1795307344557.jpg',
} as const;

export interface TopicCategoryItem {
  id: string;
  name: string;
  summary: string;
  coreMechanism: string;
  guidingQuestion: string;
  realLifeAnchor: string;
}

export interface RealWorldConnectionItem {
  title: string;
  topicLink: string;
  howItWorks: string;
  everydayObservation: string;
}

export interface FeaturedPracticalExample {
  id: string;
  title: string;
  topicBadge: string;
  question: string;
  explanation: string;
  underlyingLaw: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SubjectExperimentActivity {
  id: string;
  title: string;
  topic: string;
  duration: string;
  materials: string;
  procedure: string;
  whatYouDiscover: string;
}

export interface SubjectRelatedProject {
  id: string;
  title: string;
  subject: string;
  level: string;
  duration: string;
  imageSrc: string;
  imageAlt: string;
  whyItMatters: string;
  scientificPrinciple: string;
  whatYouCreate: string;
}

export interface RelatedSubjectLink {
  slug: SubjectCategorySlug;
  name: string;
  intersectionTitle: string;
  howTheyConnect: string;
}

export interface SubjectPageContent {
  slug: SubjectCategorySlug;
  route: string;
  title: string;
  shortTitle: string;
  disciplineCode: string;
  levelScope: string;
  accentColor: 'blue' | 'teal' | 'amber';
  heroHeadline: string;
  heroSubheadline: string;
  shortDescription: string;
  leadSummary: string;
  coreFocus: string;
  imageSrc: string;
  imageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
  exemplarTopics: string[];
  whyItMatters: {
    lead: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  whatLearnersWillUnderstand: Array<{
    index: string;
    title: string;
    description: string;
  }>;
  topicCategories: TopicCategoryItem[];
  realWorldConnections: RealWorldConnectionItem[];
  featuredPracticalExamples: FeaturedPracticalExample[];
  experimentsAndActivities: SubjectExperimentActivity[];
  relatedProjects: SubjectRelatedProject[];
  relatedSubjects: RelatedSubjectLink[];
}

export const SUBJECTS_DATA: Record<SubjectCategorySlug, SubjectPageContent> = {
  physics: {
    slug: 'physics',
    route: '/learn/physics',
    title: 'Physics',
    shortTitle: 'Physics',
    disciplineCode: 'PHY-02',
    levelScope: 'School · College · University',
    accentColor: 'blue',
    heroHeadline: 'Understand the Forces That Shape Our World.',
    heroSubheadline:
      'From the mechanics of moving vehicles and spinning electric motors to optical lenses and household power grids.',
    shortDescription:
      'Understand the fundamental principles governing matter, energy, forces, waves, electricity, and light through direct observation and physical experimentation.',
    leadSummary:
      'Physics is not a collection of disconnected equations to plug numbers into. It is the systematic study of how energy transforms, how forces change motion, and how fields and waves interact across every scale of reality.',
    coreFocus:
      'Motion, Force, Energy, Electricity, Magnetism, Optics, and Thermodynamics.',
    imageSrc: PLATFORM_IMAGES.physicsOptics,
    imageAlt:
      'Precision glass prism refracting a beam of light across a laboratory notebook with handwritten geometric ray diagrams',
    secondaryImageSrc: PLATFORM_IMAGES.physicsElectricMotor,
    secondaryImageAlt:
      'Hand-built DC electric motor with copper coil armature between permanent magnets wired to an ammeter and power supply',
    exemplarTopics: [
      'Motion, Force & Energy',
      'Electricity & Magnetism',
      'Optics & Thermodynamics',
    ],
    whyItMatters: {
      lead: 'Every physical machine, optical instrument, electrical grid, and natural weather system obeys the laws of physics. When you understand these laws conceptually, the engineered world stops being a black box.',
      pillars: [
        {
          title: 'Demystify Everyday Machines',
          description:
            'See how braking distances, ceiling fans, eyeglasses, and refrigerators rely on basic mechanics, electromagnetism, optics, and heat transfer.',
        },
        {
          title: 'Reason From First Principles',
          description:
            'Predict how a physical system will behave when mass, voltage, temperature, or angle changes—before running a trial.',
        },
        {
          title: 'Foundation for All Engineering',
          description:
            'Bridge theoretical physical laws directly to civil structures, electrical power generation, and modern sensors.',
        },
      ],
    },
    whatLearnersWillUnderstand: [
      {
        index: '01',
        title: 'How Forces Govern Motion and Equilibrium',
        description:
          'Why objects accelerate, how friction both opposes and enables movement, and how momentum is conserved in collisions.',
      },
      {
        index: '02',
        title: 'How Energy Converts Without Being Created or Destroyed',
        description:
          'Trace energy as it shifts between kinetic, gravitational potential, thermal, chemical, and electrical forms.',
      },
      {
        index: '03',
        title: 'How Electricity and Magnetism Are Two Sides of One Phenomenon',
        description:
          'Understand how moving electric charges create magnetic fields (motors) and how changing magnetic fields induce voltage (generators).',
      },
      {
        index: '04',
        title: 'How Light Refracts and Heat Flows',
        description:
          'Master wave refraction through lenses and prisms alongside the thermodynamic laws governing engines and refrigeration.',
      },
    ],
    topicCategories: [
      {
        id: 'motion',
        name: 'Motion',
        summary:
          'Kinematics of displacement, velocity, acceleration, projectile trajectories, and circular rotation.',
        coreMechanism:
          'Rate of change of position (v = dx/dt) and velocity (a = dv/dt) across time and reference frames.',
        guidingQuestion:
          'How do we describe and predict the exact path of a moving object over time?',
        realLifeAnchor: 'Vehicle stopping distances, river current drift, and satellite orbits.',
      },
      {
        id: 'force',
        name: 'Force',
        summary:
          "Newton's laws of motion, friction, tension, normal forces, torque, and structural equilibrium.",
        coreMechanism:
          'Net force causes acceleration proportional to mass (F_net = ma); balanced forces yield static or dynamic equilibrium.',
        guidingQuestion:
          'Why does a heavy vehicle require far more force to stop than a bicycle moving at the same speed?',
        realLifeAnchor: 'Tire-road traction, crane pulleys, and structural load balance.',
      },
      {
        id: 'energy',
        name: 'Energy',
        summary:
          'Work, kinetic and potential energy, conservation of mechanical energy, power, and efficiency.',
        coreMechanism:
          'Work transfers energy (W = F · d); total energy in an isolated system remains constant while changing form.',
        guidingQuestion:
          'Where does a moving car’s kinetic energy go when you press the brakes?',
        realLifeAnchor: 'Hydroelectric dams, regenerative braking, and pendulum clocks.',
      },
      {
        id: 'electricity',
        name: 'Electricity',
        summary:
          'Electric charge, voltage potential, current flow, resistance, series/parallel circuits, and electrical power.',
        coreMechanism:
          "Potential difference drives charge carriers through conductors against resistance (V = IR, P = VI).",
        guidingQuestion:
          'Why are household appliances wired in parallel rather than in a single series loop?',
        realLifeAnchor: 'Household circuit breakers, LED lighting, and battery distribution.',
      },
      {
        id: 'magnetism',
        name: 'Magnetism',
        summary:
          'Magnetic fields, Lorentz force on current-carrying conductors, electromagnetic induction, and transformers.',
        coreMechanism:
          "A current in a magnetic field experiences a perpendicular force (F = I L × B), while changing magnetic flux induces voltage (Faraday's Law).",
        guidingQuestion:
          'How can a spinning magnet inside a coil of copper wire light up an entire city?',
        realLifeAnchor: 'Electric motors, power plant generators, and step-down transformers.',
      },
      {
        id: 'optics',
        name: 'Optics',
        summary:
          'Reflection, refraction, Snell’s law, converging and diverging lenses, dispersion, and wave interference.',
        coreMechanism:
          'Light changes phase speed when crossing media of different optical densities (n₁ sin θ₁ = n₂ sin θ₂).',
        guidingQuestion:
          'How does a curved piece of glass bring blurry distant light into sharp focus on the human retina?',
        realLifeAnchor: 'Eyeglasses, compound microscopes, cameras, and fiber-optic cables.',
      },
      {
        id: 'thermodynamics',
        name: 'Thermodynamics',
        summary:
          'Temperature, internal thermal energy, heat transfer, phase transitions, gas laws, and heat engines.',
        coreMechanism:
          'Heat flows spontaneously from higher to lower temperature; pressure-volume work and phase changes absorb or release latent heat.',
        guidingQuestion:
          'How can a refrigerator move heat from its cold interior into a warm kitchen?',
        realLifeAnchor: 'Refrigerators, air conditioners, steam turbines, and weather fronts.',
      },
    ],
    realWorldConnections: [
      {
        title: 'How cars move',
        topicLink: 'Motion, Force & Energy',
        howItWorks:
          'An engine or electric motor applies torque to the wheels, pushing backward against the road. By Newton’s Third Law, static friction from the road pushes the car forward, while braking converts kinetic energy (½mv²) into thermal energy in the brake discs.',
        everydayObservation:
          'Doubling a car’s speed quadruples its kinetic energy—and quadruples the braking distance required to stop safely.',
      },
      {
        title: 'How electric motors work',
        topicLink: 'Electricity & Magnetism',
        howItWorks:
          'When electric current flows through a copper coil seated inside a magnetic field, the Lorentz force pushes one side of the loop up and the other side down, generating continuous rotational torque via a commutator.',
        everydayObservation:
          'Used in ceiling fans, water pumps, industrial lathes, and electric rickshaws.',
      },
      {
        title: 'How lenses help us see',
        topicLink: 'Optics',
        howItWorks:
          'Curved glass or polymer lenses refract incoming light rays according to Snell’s Law. Convex lenses converge rays for farsighted eyes, while concave lenses diverge rays so nearsighted eyes focus sharply on the retina.',
        everydayObservation:
          'The same refraction principle scales up in laboratory microscopes and astronomical telescopes.',
      },
      {
        title: 'How refrigerators cool food',
        topicLink: 'Thermodynamics',
        howItWorks:
          'A refrigerant fluid evaporates inside internal coils at low pressure, absorbing latent heat of vaporization from the food compartment. A compressor then pressurizes the gas so it condenses and releases that heat through external coils.',
        everydayObservation:
          'Feel the warm condenser grille on the back or side of a refrigerator—that is the heat extracted from inside.',
      },
      {
        title: 'How electricity reaches homes',
        topicLink: 'Electricity & Magnetism',
        howItWorks:
          'Power stations generate alternating current (AC) and use step-up transformers to raise voltage to hundreds of kilovolts, reducing current (I = P/V) and minimizing resistive heating loss (I²R) across long transmission lines before stepping down to 220–240V for homes.',
        everydayObservation:
          'Local pole-mounted transformers step distribution voltage down safely for neighborhood wiring.',
      },
    ],
    featuredPracticalExamples: [
      {
        id: 'phy-ex-1',
        title: 'Inside a DC Electric Motor: Turning Current into Rotation',
        topicBadge: 'Magnetism & Force',
        question: 'Why does a current-carrying copper coil spin continuously between two magnets?',
        explanation:
          'When current passes through a rectangular wire loop inside a magnetic field, opposite sides carry current in opposite directions. The magnetic field exerts an upward force on one arm and a downward force on the other, creating a turning couple (torque). A split-ring commutator reverses the current every half-turn so the coil keeps spinning in the same direction.',
        underlyingLaw: 'Lorentz Force Law: F = I (L × B) and Torque τ = N · I · A · B sin(θ)',
        imageSrc: PLATFORM_IMAGES.physicsElectricMotor,
        imageAlt:
          'Laboratory DC electric motor with copper armature between magnets connected to power supply and ammeter',
      },
      {
        id: 'phy-ex-2',
        title: 'Prism Refraction & Lens Focusing: Controlling the Path of Light',
        topicBadge: 'Optics & Waves',
        question: 'How does glass bend light rays and separate white light into a spectrum?',
        explanation:
          'Light slows down when entering optically denser glass. Because the refractive index of glass varies slightly with wavelength (dispersion), shorter blue/violet wavelengths bend at a steeper angle than longer red wavelengths. Shaped into a curved lens, this controlled bending brings parallel rays to a precise focal point.',
        underlyingLaw: "Snell's Law of Refraction: n₁ sin(θ₁) = n₂ sin(θ₂)",
        imageSrc: PLATFORM_IMAGES.physicsOptics,
        imageAlt:
          'Glass prism refracting a beam of light across a notebook with handwritten geometric ray diagrams',
      },
    ],
    experimentsAndActivities: [
      {
        id: 'phy-exp-1',
        title: 'Geometric Ray Tracing & Refractive Index of a Glass Prism',
        topic: 'Optics',
        duration: '30 minutes',
        materials: 'Triangular glass prism, narrow light slit or laser pointer, millimeter graph paper, pins, protractor.',
        procedure:
          'Place the prism on graph paper, trace its triangular boundary, direct a narrow light beam at 40° incidence, mark the emergent ray, and measure the angle of deviation with a protractor.',
        whatYouDiscover:
          'Verify Snell’s Law quantitatively and calculate the refractive index of glass (n ≈ 1.52) from your own plotted ray diagram.',
      },
      {
        id: 'phy-exp-2',
        title: 'Build a Working Single-Coil Homopolar or Commutated DC Motor',
        topic: 'Electricity & Magnetism',
        duration: '45 minutes',
        materials: 'Enameled copper wire (22 AWG), neodymium or ceramic magnet, 1.5V–3V DC battery source, paperclip supports, sandpaper.',
        procedure:
          'Wind a 15-turn balanced circular coil, sand off the insulating enamel from the top half of one lead and the full circumference of the other to act as a commutator, and suspend it over the magnet.',
        whatYouDiscover:
          'Observe electromagnetic torque directly and test how reversing magnet polarity reverses the spin direction.',
      },
    ],
    relatedProjects: [
      {
        id: 'phy-proj-1',
        title: 'Tabletop Optical Spectrometer & Focal Length Bench',
        subject: 'Physics · Optics',
        level: 'School · College',
        duration: '45 min build',
        imageSrc: PLATFORM_IMAGES.physicsOptics,
        imageAlt: 'Glass prism refracting light beam across notebook with geometric ray diagrams',
        whyItMatters:
          'Optical instruments from cameras to clinical spectrophotometers rely on collimating, refracting, and dispersing light accurately.',
        scientificPrinciple: "Snell's Law & Thin Lens Equation (1/f = 1/d_o + 1/d_i)",
        whatYouCreate:
          'A calibrated optical rail and prism/grating spectrometer that maps light spectra and lens focal lengths.',
      },
      {
        id: 'phy-proj-2',
        title: 'Instrumented DC Motor & Back-EMF Efficiency Tester',
        subject: 'Physics · Electromagnetism',
        level: 'College · University',
        duration: '60 min build',
        imageSrc: PLATFORM_IMAGES.physicsElectricMotor,
        imageAlt: 'Hand-built DC electric motor connected to power supply and analog ammeter',
        whyItMatters:
          'Electric motors consume over 40% of global electricity. Understanding current draw under mechanical load is essential for energy efficiency.',
        scientificPrinciple: "Lorentz Force & Faraday's Law of Back-EMF",
        whatYouCreate:
          'A hand-wound DC motor paired with an ammeter test rig to measure current vs. mechanical torque load.',
      },
    ],
    relatedSubjects: [
      {
        slug: 'mathematics',
        name: 'Mathematics',
        intersectionTitle: 'Calculus & Vectors in Motion and Fields',
        howTheyConnect:
          'Trigonometry decomposes force vectors, while derivatives and integrals model velocity, acceleration, work, and electromagnetic flux.',
      },
      {
        slug: 'engineering',
        name: 'Engineering & Innovation',
        intersectionTitle: 'From Physical Laws to Working Machines',
        howTheyConnect:
          'Civil, mechanical, and electrical engineering apply Newton’s laws, thermodynamics, and electromagnetism to build bridges, motors, and grids.',
      },
      {
        slug: 'chemistry',
        name: 'Chemistry',
        intersectionTitle: 'Thermodynamics, Atomic Spectra & Electrochemistry',
        howTheyConnect:
          'Gas laws, heat of reaction, electron energy transitions, and battery voltages bridge physical energy conservation with molecular structure.',
      },
    ],
  },

  mathematics: {
    slug: 'mathematics',
    route: '/learn/mathematics',
    title: 'Mathematics',
    shortTitle: 'Mathematics',
    disciplineCode: 'MAT-01',
    levelScope: 'School · College · University',
    accentColor: 'blue',
    heroHeadline: 'See the Hidden Patterns and Logic Behind Reality.',
    heroSubheadline:
      'From personal finance and architectural geometry to data analysis, engineering design, and satellite navigation.',
    shortDescription:
      'Discover mathematics not as isolated rules to memorize, but as the living language of quantity, algebra, geometry, uncertainty, and continuous change.',
    leadSummary:
      'Every formula in mathematics was invented to solve a real problem—measuring land after seasonal river floods, balancing trade ledgers, aiming telescopes, or modeling risk. When you see the visual and logical structure behind mathematics, symbols become intuitive.',
    coreFocus:
      'Arithmetic, Algebra, Geometry, Trigonometry, Statistics, Probability, and Calculus.',
    imageSrc: PLATFORM_IMAGES.mathematicsGeometry,
    imageAlt:
      'Mathematical modeling workspace with precision drafting compass, steel ruler, and hand-drawn calculus rate-of-change graphs',
    secondaryImageSrc: PLATFORM_IMAGES.engineeringBridgeTruss,
    secondaryImageAlt:
      'Geometric truss bridge structural model with force vector calculations in a notebook',
    exemplarTopics: [
      'Geometry & Trigonometry',
      'Statistics & Probability',
      'Algebra & Calculus',
    ],
    whyItMatters: {
      lead: 'Mathematics gives us the ability to reason precisely about quantity, space, uncertainty, and change. It is the shared foundation of science, finance, architecture, and computing.',
      pillars: [
        {
          title: 'Visual & Structural Intuition',
          description:
            'See equations as geometric shapes, balance scales, and rates of flow rather than arbitrary rules.',
        },
        {
          title: 'Quantitative Decision-Making',
          description:
            'Evaluate financial compounding, statistical data claims, and real-world probabilities without being misled.',
        },
        {
          title: 'Universal Modeling Toolkit',
          description:
            'Translate physical, economic, and computational challenges into mathematical models that can be optimized.',
        },
      ],
    },
    whatLearnersWillUnderstand: [
      {
        index: '01',
        title: 'How Numbers and Algebra Model Relationships',
        description:
          'Move from arithmetic operations to algebraic functions that express how unknown quantities constrain and determine one another.',
      },
      {
        index: '02',
        title: 'How Geometry and Trigonometry Measure Space',
        description:
          'Understand why triangles rigidify architectural trusses and how sine and cosine connect angles to distances and periodic waves.',
      },
      {
        index: '03',
        title: 'How Statistics and Probability Tame Uncertainty',
        description:
          'Extract honest patterns from noisy data distributions and quantify risk in real-world decisions.',
      },
      {
        index: '04',
        title: 'How Calculus Captures Continuous Change',
        description:
          'Use derivatives to find instantaneous rates of change and integrals to accumulate quantities across curved boundaries.',
      },
    ],
    topicCategories: [
      {
        id: 'arithmetic',
        name: 'Arithmetic',
        summary:
          'Number sense, ratios, proportions, percentages, exponents, and logarithmic scaling.',
        coreMechanism:
          'Proportional scaling, multiplicative growth, and place-value representation across orders of magnitude.',
        guidingQuestion:
          'How do ratios and percentages allow us to compare quantities across vastly different scales?',
        realLifeAnchor: 'Household budgets, currency conversion, dosage scaling, and interest rates.',
      },
      {
        id: 'algebra',
        name: 'Algebra',
        summary:
          'Variables, linear and quadratic equations, systems of constraints, inequalities, and functional mapping.',
        coreMechanism:
          'Representing structural invariants and unknown quantities as balanced symbolic relationships.',
        guidingQuestion:
          'How can we solve for an unknown quantity when multiple constraints must be satisfied simultaneously?',
        realLifeAnchor: 'Resource allocation, break-even financial modeling, and circuit equations.',
      },
      {
        id: 'geometry',
        name: 'Geometry',
        summary:
          'Euclidean shapes, congruence, similarity, area and volume optimization, and coordinate geometry.',
        coreMechanism:
          'Spatial invariance, deductive proof from axioms, and the relationship between perimeter, surface area, and volume.',
        guidingQuestion:
          'Why do honeybees, bridge engineers, and architects rely on triangles, hexagons, and parabolic arches?',
        realLifeAnchor: 'Architectural floor plans, structural trusses, and packaging optimization.',
      },
      {
        id: 'trigonometry',
        name: 'Trigonometry',
        summary:
          'Right-triangle ratios, the unit circle, periodic sine and cosine waves, and triangulation.',
        coreMechanism:
          'Mapping angles to side-length ratios and modeling cyclical oscillation via circular projection.',
        guidingQuestion:
          'How can you measure the height of a distant tower or river width without ever crossing it?',
        realLifeAnchor: 'Land surveying, GPS navigation, acoustic sound waves, and AC electricity.',
      },
      {
        id: 'statistics',
        name: 'Statistics',
        summary:
          'Data distributions, central tendency, variance, correlation vs. causation, and regression modeling.',
        coreMechanism:
          'Summarizing signal versus random variation in empirical datasets.',
        guidingQuestion:
          'When does a trend in real-world data represent a genuine cause rather than random noise?',
        realLifeAnchor: 'Public health studies, agricultural yield analysis, and economic indicators.',
      },
      {
        id: 'probability',
        name: 'Probability',
        summary:
          'Sample spaces, conditional probability, Bayes’ theorem, expected value, and decision trees.',
        coreMechanism:
          'Quantifying likelihood and updating beliefs systematically as new evidence arrives.',
        guidingQuestion:
          'Why can a medical test with 95% accuracy still produce false positives when a condition is rare?',
        realLifeAnchor: 'Weather forecasting, medical diagnostics, insurance, and reliability engineering.',
      },
      {
        id: 'calculus',
        name: 'Calculus',
        summary:
          'Limits, derivatives (instantaneous rates of change), optimization, and integrals (accumulation).',
        coreMechanism:
          'Analyzing non-linear systems by examining infinitesimal changes (dy/dx) and summing continuous slices (∫ f(x) dx).',
        guidingQuestion:
          'How can we find the exact angle or dimension that maximizes output while minimizing cost?',
        realLifeAnchor: 'Solar tilt optimization, flood hydrograph modeling, and orbital mechanics.',
      },
    ],
    realWorldConnections: [
      {
        title: 'Personal finance',
        topicLink: 'Arithmetic & Algebra',
        howItWorks:
          'Compound growth follows an exponential function A = P(1 + r/n)^(nt). Understanding the difference between linear simple interest and exponential compounding empowers smart savings, loan evaluation, and inflation planning.',
        everydayObservation:
          'The Rule of 72 (72 ÷ annual interest rate) quickly estimates how many years it takes for savings or debt to double.',
      },
      {
        title: 'Architecture',
        topicLink: 'Geometry & Trigonometry',
        howItWorks:
          'Architects use geometric proportions, load-bearing catenary and parabolic curves, and trigonometric sun-angle calculations to design buildings that remain structurally stable and naturally lit throughout the year.',
        everydayObservation:
          'Look at roof overhangs and window louvers designed using solar altitude angles at 23.8°N latitude.',
      },
      {
        title: 'Data analysis',
        topicLink: 'Statistics & Probability',
        howItWorks:
          'By measuring standard deviation, confidence intervals, and conditional probabilities, analysts separate meaningful trends in crop yields, traffic flow, or public health from random day-to-day fluctuations.',
        everydayObservation:
          'Comparing median versus mean income or prices reveals when a few extreme outliers skew an average.',
      },
      {
        title: 'Engineering',
        topicLink: 'Calculus, Algebra & Trigonometry',
        howItWorks:
          'Engineers resolve force vectors using trigonometry, solve simultaneous circuit or truss equations using linear algebra, and optimize material thickness and fluid flow rates using differential calculus.',
        everydayObservation:
          'Every bridge truss joint satisfies ΣF_x = 0 and ΣF_y = 0 through trigonometric components.',
      },
      {
        title: 'Navigation',
        topicLink: 'Trigonometry & Coordinate Geometry',
        howItWorks:
          'Triangulation and spherical trigonometry calculate exact latitude, longitude, and bearing from distance and angle measurements to reference landmarks or orbiting GPS satellites.',
        everydayObservation:
          'River vessels, aircraft, and mobile maps continuously solve geometric intersection equations to pinpoint location.',
      },
    ],
    featuredPracticalExamples: [
      {
        id: 'mat-ex-1',
        title: 'Calculus Optimization: Finding Peak Efficiency in Real Systems',
        topicBadge: 'Calculus & Algebra',
        question: 'How do you find the exact dimension or angle that maximizes performance without trial-and-error guessing?',
        explanation:
          'Whenever a quantity rises to a peak and then falls—such as solar energy captured across tilt angles, or the volume of a container folded from a fixed sheet of metal—its instantaneous rate of change (the derivative df/dx) passes through zero at the exact maximum.',
        underlyingLaw: 'First Derivative Optimization Criterion: df(x)/dx = 0 at local extrema',
        imageSrc: PLATFORM_IMAGES.mathematicsGeometry,
        imageAlt:
          'Mathematical modeling workspace with hand-drawn rate-of-change tangent graphs and drafting compass',
      },
      {
        id: 'mat-ex-2',
        title: 'Trigonometry in Structural Trusses: Why Triangles Never Collapse',
        topicBadge: 'Geometry & Trigonometry',
        question: 'Why does a four-sided frame fold under sideways pressure while a triangular truss holds rigid?',
        explanation:
          'A rectangle can shear into a parallelogram without changing any side lengths. A triangle’s angles are uniquely locked by the lengths of its three sides (Law of Cosines). By resolving vertical loads into diagonal tension and compression components (F·cos θ and F·sin θ), engineers span wide rivers safely.',
        underlyingLaw: 'Trigonometric Vector Resolution: ΣF_x = F cos(θ), ΣF_y = F sin(θ)',
        imageSrc: PLATFORM_IMAGES.engineeringBridgeTruss,
        imageAlt:
          'Scale structural truss bridge model undergoing weight load testing alongside force vector calculations',
      },
    ],
    experimentsAndActivities: [
      {
        id: 'mat-exp-1',
        title: 'Build a Clinometer & Measure Building Height via Triangulation',
        topic: 'Trigonometry & Geometry',
        duration: '25 minutes',
        materials: 'Protractor, drinking straw, string, small metal weight, measuring tape, notebook.',
        procedure:
          'Tape a sighting straw along the straight edge of a protractor with a plumb line hanging from the center mark. Stand a measured horizontal distance d from a tall tree or building, sight the top, read the elevation angle θ, and compute height H = h_eye + d · tan(θ).',
        whatYouDiscover:
          'Experience how indirect trigonometric measurement determines inaccessible heights with remarkable precision.',
      },
      {
        id: 'mat-exp-2',
        title: 'Volume Optimization of a Folded Open-Top Box',
        topic: 'Algebra & Calculus',
        duration: '30 minutes',
        materials: 'A4 millimeter grid paper, ruler, scissors, pencil, graph plot.',
        procedure:
          'Cut squares of side length x from the four corners of a 20 cm × 20 cm grid sheet, fold up the sides, plot volume V(x) = x(20 − 2x)² for x = 1, 2, 3, 4, 5 cm, and verify where the derivative V′(x) = 0 predicts the maximum volume.',
        whatYouDiscover:
          'See an abstract cubic polynomial and its derivative come alive as a physical 3D object whose maximum volume occurs at x = 10/3 cm.',
      },
    ],
    relatedProjects: [
      {
        id: 'mat-proj-1',
        title: 'Seasonal Solar Panel Tilt & Azimuth Mathematical Optimizer',
        subject: 'Mathematics · Trigonometry & Calculus',
        level: 'College · University',
        duration: '45 min project',
        imageSrc: PLATFORM_IMAGES.mathematicsGeometry,
        imageAlt: 'Mathematical modeling desk with geometric diagrams and rate-of-change graphs',
        whyItMatters:
          'Solar panels generate maximum power when sunlight strikes perpendicular to the panel surface across changing seasonal sun declinations.',
        scientificPrinciple: 'Spherical Trigonometry & Cosine Incidence Projection',
        whatYouCreate:
          'A month-by-month optimal tilt chart and geometric protractor jig calibrated for 23.8°N latitude (Bangladesh).',
      },
      {
        id: 'mat-proj-2',
        title: 'Warren Truss Load Distribution & Vector Calculator',
        subject: 'Mathematics · Geometry & Engineering',
        level: 'School · College',
        duration: '50 min project',
        imageSrc: PLATFORM_IMAGES.engineeringBridgeTruss,
        imageAlt: 'Truss bridge model on workbench with force gauge and vector calculations',
        whyItMatters:
          'Predicting which truss members experience tension versus compression prevents structural buckling before a bridge is built.',
        scientificPrinciple: 'Method of Joints & Trigonometric Equilibrium',
        whatYouCreate:
          'A complete joint-by-joint force diagram and physical balsa or craft-wood truss verified against calculated loads.',
      },
    ],
    relatedSubjects: [
      {
        slug: 'physics',
        name: 'Physics',
        intersectionTitle: 'Mathematical Laws of Motion, Waves & Fields',
        howTheyConnect:
          'Every physical conservation law and wave equation is written and solved using algebra, trigonometry, and calculus.',
      },
      {
        slug: 'technology',
        name: 'Technology & Computing',
        intersectionTitle: 'Algorithms, Discrete Logic & Machine Learning',
        howTheyConnect:
          'Computer algorithms, cryptography, data structures, and AI neural networks are built on linear algebra, probability, and discrete math.',
      },
      {
        slug: 'engineering',
        name: 'Engineering & Innovation',
        intersectionTitle: 'Structural Analysis & Control Optimization',
        howTheyConnect:
          'Engineers turn mathematical models into physical bridges, electrical grids, and feedback control systems.',
      },
    ],
  },

  chemistry: {
    slug: 'chemistry',
    route: '/learn/chemistry',
    title: 'Chemistry',
    shortTitle: 'Chemistry',
    disciplineCode: 'CHM-03',
    levelScope: 'School · College · University',
    accentColor: 'teal',
    heroHeadline: 'Decode the Molecular Architecture of Matter.',
    heroSubheadline:
      'From everyday cooking and life-saving medicines to rechargeable batteries, cleaning chemistry, and safe drinking water.',
    shortDescription:
      'Explore how atomic structure, chemical bonding, reactions, acids and bases, and organic molecules explain the materials and transformations all around us.',
    leadSummary:
      'Chemistry happens in every kitchen, battery cell, water treatment plant, and living cell. Instead of memorizing disconnected reaction equations, understand why atoms bond, what drives electron and proton transfer, and how molecular geometry determines material properties.',
    coreFocus:
      'Atomic structure, Chemical bonding, Chemical reactions, Acids and bases, Materials, and Organic chemistry.',
    imageSrc: PLATFORM_IMAGES.chemistryElectro,
    imageAlt:
      'Chemistry laboratory workbench showing a galvanic electrochemical cell experiment with copper and zinc electrodes connected to a digital multimeter',
    secondaryImageSrc: PLATFORM_IMAGES.iceFloatingMolecular,
    secondaryImageAlt:
      'Beaker of water with floating ice beside a thermometer and a 3D hexagonal molecular lattice model',
    exemplarTopics: [
      'Atomic Structure & Bonding',
      'Chemical Reactions, Acids & Bases',
      'Materials & Organic Chemistry',
    ],
    whyItMatters: {
      lead: 'Chemistry connects the invisible world of atoms and electrons to the tangible substances we eat, wear, build with, and rely on for health and clean energy.',
      pillars: [
        {
          title: 'Understand Everyday Transformations',
          description:
            'Know why bread rises, how soap lifts grease, why iron rusts, and how antacids neutralize stomach acid.',
        },
        {
          title: 'Energy Storage & Clean Water',
          description:
            'Grasp the electrochemical principles behind batteries and the chemical equilibria used to purify drinking water.',
        },
        {
          title: 'Safe & Informed Material Choices',
          description:
            'Evaluate polymers, fertilizers, pharmaceuticals, and household chemicals through scientific reasoning.',
        },
      ],
    },
    whatLearnersWillUnderstand: [
      {
        index: '01',
        title: 'Why Atoms Form Specific Bonds and Geometries',
        description:
          'Understand how valence electrons govern ionic, covalent, metallic, and hydrogen bonding—and how 3D molecular shape controls boiling point, solubility, and density.',
      },
      {
        index: '02',
        title: 'What Drives Chemical Reactions and Equilibrium',
        description:
          'See how bond energies, entropy, catalysts, and concentration shifts determine reaction rates and reversible equilibrium.',
      },
      {
        index: '03',
        title: 'How Proton and Electron Transfers Power Chemistry',
        description:
          'Master acid-base pH buffering and oxidation-reduction (redox) electron transfer in batteries and corrosion protection.',
      },
      {
        index: '04',
        title: 'How Carbon Chains Build Organic Materials & Medicines',
        description:
          'Explore functional groups, polymers, and biomolecules that link laboratory chemistry to life science and material engineering.',
      },
    ],
    topicCategories: [
      {
        id: 'atomic-structure',
        name: 'Atomic structure',
        summary:
          'Protons, neutrons, electron shells, orbitals, periodic trends, electronegativity, and ionization energy.',
        coreMechanism:
          'Outer valence electron configuration dictates how an element interacts chemically with every other element.',
        guidingQuestion:
          'Why does the periodic table group elements into families with remarkably predictable behaviors?',
        realLifeAnchor: 'Semiconductor silicon doping, neon lighting, and alloy selection.',
      },
      {
        id: 'chemical-bonding',
        name: 'Chemical bonding',
        summary:
          'Ionic lattices, covalent electron sharing, metallic bonding, molecular polarity, and intermolecular hydrogen bonds.',
        coreMechanism:
          'Atoms lower their potential energy by sharing or transferring valence electrons; dipole polarity governs intermolecular forces.',
        guidingQuestion:
          'Why is table salt a brittle high-melting crystal while water is a polar liquid whose solid ice floats?',
        realLifeAnchor: 'Ice floating on water, dissolving electrolytes, and heat-resistant ceramics.',
      },
      {
        id: 'chemical-reactions',
        name: 'Chemical reactions',
        summary:
          'Stoichiometry, conservation of mass, exothermic/endothermic enthalpy, reaction kinetics, catalysis, and redox.',
        coreMechanism:
          'Reactant bonds break and product bonds form while conserving every atom and transferring energy or electrons.',
        guidingQuestion:
          'How do catalysts speed up industrial and biological reactions without being consumed?',
        realLifeAnchor: 'Combustion engines, battery discharge, and catalytic converters.',
      },
      {
        id: 'acids-and-bases',
        name: 'Acids and bases',
        summary:
          'Proton donors and acceptors, the logarithmic pH scale, neutralization titrations, and buffer solutions.',
        coreMechanism:
          'Hydronium (H₃O⁺) and hydroxide (OH⁻) ion concentration equilibrium in aqueous solutions.',
        guidingQuestion:
          'How does human blood maintain a strict pH near 7.4 despite acidic metabolic byproducts?',
        realLifeAnchor: 'Soil pH management for crops, baking chemistry, and water quality testing.',
      },
      {
        id: 'materials',
        name: 'Materials',
        summary:
          'Metals, alloys, ceramics, glass, composites, synthetic polymers, and corrosion prevention.',
        coreMechanism:
          'Microscopic crystal packing and polymer cross-linking determine macroscopic tensile strength, conductivity, and durability.',
        guidingQuestion:
          'Why does adding a tiny percentage of carbon transform soft iron into high-strength structural steel?',
        realLifeAnchor: 'Galvanized steel roofs, biodegradable plastics, and concrete curing.',
      },
      {
        id: 'organic-chemistry',
        name: 'Organic chemistry',
        summary:
          'Hydrocarbons, functional groups (alcohols, carboxylic acids, esters, amines), polymers, and reaction mechanisms.',
        coreMechanism:
          'Carbon’s tetravalent bonding forms stable chains, rings, and reactive functional sites.',
        guidingQuestion:
          'How can rearranging a single functional group on a carbon ring turn a bitter compound into an effective medicine?',
        realLifeAnchor: 'Analgesic medicines, soaps and detergents, natural fibers, and fuels.',
      },
    ],
    realWorldConnections: [
      {
        title: 'Cooking',
        topicLink: 'Chemical Reactions & Acids and Bases',
        howItWorks:
          'Cooking is applied thermal and acid-base chemistry: baking powder reacts acid with sodium bicarbonate to release CO₂ bubbles that leaven dough, while the Maillard reaction links amino acids and sugars above 140°C to create golden crust flavors.',
        everydayObservation:
          'Adding lemon juice or vinegar (acid) curdles milk proteins by altering their electrostatic charge balance.',
      },
      {
        title: 'Medicines',
        topicLink: 'Organic Chemistry & Chemical Bonding',
        howItWorks:
          'Pharmaceutical molecules are designed with specific 3D functional groups that bind selectively to biological enzyme receptors, blocking pain pathways or inhibiting bacterial cell wall synthesis. Antacids use weak bases (Mg(OH)₂) to neutralize excess gastric HCl.',
        everydayObservation:
          'Oral rehydration salts (ORS) rely on precise molar ratios of sodium chloride and glucose to restore cellular electrolyte balance.',
      },
      {
        title: 'Cleaning products',
        topicLink: 'Chemical Bonding & Organic Chemistry',
        howItWorks:
          'Soap and detergent molecules are amphiphilic—they have a hydrophobic hydrocarbon tail that embeds in non-polar grease and a hydrophilic ionic head that bonds with polar water, wrapping oil droplets into washable micelles.',
        everydayObservation:
          'Plain water beads off oily dishes, but a drop of surfactant immediately emulsifies the oil into the rinse water.',
      },
      {
        title: 'Batteries',
        topicLink: 'Chemical Reactions (Electrochemistry)',
        howItWorks:
          'Inside a battery, a spontaneous oxidation reaction at the anode releases electrons that travel through your device’s circuit to a reduction reaction at the cathode, while ions migrate through an internal electrolyte to maintain charge balance.',
        everydayObservation:
          'A zinc-copper galvanic cell produces ~1.10V directly from the difference in metal reduction potentials.',
      },
      {
        title: 'Water treatment',
        topicLink: 'Acids and Bases, Reactions & Materials',
        howItWorks:
          'Safe drinking water treatment combines coagulation (alum neutralizing negatively charged suspended clay particles so they settle), activated carbon adsorption of organic molecules, pH buffering, and oxidation to remove dissolved iron, arsenic, and pathogens.',
        everydayObservation:
          'Conductivity and TDS probes measure dissolved ionic salts in river and tube-well water samples.',
      },
    ],
    featuredPracticalExamples: [
      {
        id: 'chm-ex-1',
        title: 'Galvanic Cells: How Two Metals and an Electrolyte Generate Voltage',
        topicBadge: 'Chemical Reactions & Electrochemistry',
        question: 'Why does connecting zinc and copper electrodes in salt solutions produce a measurable electric current?',
        explanation:
          'Zinc atoms hold their valence electrons less tightly than copper ions do. When connected by an external wire and an ion-conducting salt bridge, solid zinc oxidizes into Zn²⁺ ions and sends two electrons per atom through the multimeter to reduce Cu²⁺ ions onto the copper strip.',
        underlyingLaw: 'Nernst Equation & Standard Cell Potential: E°_cell = E°_cathode − E°_anode = 1.10 V',
        imageSrc: PLATFORM_IMAGES.chemistryElectro,
        imageAlt:
          'Copper and zinc galvanic electrochemical cell in glass beakers connected to a digital multimeter reading 1.103 V',
      },
      {
        id: 'chm-ex-2',
        title: 'Hydrogen Bonding in Water: Molecular Polarity & Density Anomaly',
        topicBadge: 'Chemical Bonding',
        question: 'How does the 104.5° bent shape of a water molecule explain why ice floats and why water dissolves salts?',
        explanation:
          'Oxygen is significantly more electronegative than hydrogen, pulling shared electrons closer and making H₂O a polar dipole. This polarity lets water surround and dissolve ionic salts, and upon freezing, locks molecules into an open hexagonal lattice that is 9% less dense than liquid water.',
        underlyingLaw: 'Dipole-Dipole Hydrogen Bonding & Hexagonal Crystal Packing',
        imageSrc: PLATFORM_IMAGES.iceFloatingMolecular,
        imageAlt:
          'Glass beaker with floating ice next to a 3D hexagonal water molecular model and thermometer',
      },
    ],
    experimentsAndActivities: [
      {
        id: 'chm-exp-1',
        title: 'Construct a Copper-Zinc Galvanic Cell & Measure Open-Circuit Voltage',
        topic: 'Chemical Reactions & Electrochemistry',
        duration: '40 minutes',
        materials: 'Copper and zinc metal strips, two glass beakers, electrolyte solution, filter-paper salt bridge, digital multimeter.',
        procedure:
          'Immerse the zinc strip in zinc sulfate (or saline) and the copper strip in copper sulfate, bridge the two beakers with an electrolyte-soaked strip, and measure DC voltage across the electrodes.',
        whatYouDiscover:
          'Observe how chemical redox potential converts directly into ~1.1V electrical potential and see what happens when you remove the salt bridge.',
      },
      {
        id: 'chm-exp-2',
        title: 'Natural Anthocyanin pH Indicator & Acid-Base Buffer Titration',
        topic: 'Acids and Bases',
        duration: '30 minutes',
        materials: 'Red cabbage extract, clear test glasses, lemon juice (citric acid), baking soda solution, vinegar, dropper.',
        procedure:
          'Prepare a purple anthocyanin indicator solution from boiled red cabbage leaves, add measured drops of household acids and bases, and map the color spectrum from crimson (pH 2) through violet (pH 7) to teal-green (pH 10).',
        whatYouDiscover:
          'Visualize how protonation changes the conjugated bond structure—and color—of an organic indicator molecule.',
      },
    ],
    relatedProjects: [
      {
        id: 'chm-proj-1',
        title: 'Solar-Powered Water Conductivity & Salinity Titration Kit',
        subject: 'Chemistry · Water Treatment',
        level: 'College · University',
        duration: '45 min build',
        imageSrc: PLATFORM_IMAGES.solarWaterProject,
        imageAlt: 'Student testing water conductivity probe in a beaker with a multimeter and breadboard circuit',
        whyItMatters:
          'Monitoring dissolved ionic salts (TDS) helps communities evaluate drinking and agricultural water quality.',
        scientificPrinciple: 'Electrolyte Ionic Dissociation & Conductance',
        whatYouCreate:
          'A calibrated conductivity testing station comparing rainwater, tap water, and saline standards.',
      },
      {
        id: 'chm-proj-2',
        title: 'Multi-Cell Electrochemical Battery Array Under Load',
        subject: 'Chemistry · Electrochemistry',
        level: 'School · College',
        duration: '40 min build',
        imageSrc: PLATFORM_IMAGES.chemistryElectro,
        imageAlt: 'Galvanic cell experiment with copper and zinc electrodes and multimeter',
        whyItMatters:
          'Connecting individual 1.1V galvanic cells in series vs. parallel shows how commercial battery packs scale voltage and current capacity.',
        scientificPrinciple: 'Redox Half-Cells & Series Potential Summation',
        whatYouCreate:
          'A 3-cell series electrochemical array capable of lighting an LED and driving a low-power digital clock.',
      },
    ],
    relatedSubjects: [
      {
        slug: 'biology',
        name: 'Biology & Life Science',
        intersectionTitle: 'Biochemistry, Cellular Respiration & Nutrition',
        howTheyConnect:
          'Every biological process—from enzyme catalysis and DNA base-pairing to blood pH buffering and photosynthesis—is organic and physical chemistry in action.',
      },
      {
        slug: 'physics',
        name: 'Physics',
        intersectionTitle: 'Atomic Electrons, Thermodynamics & Energy',
        howTheyConnect:
          'Quantum electron orbitals, gas thermodynamics, and electrical potential bridge atomic physics directly to chemical bonding.',
      },
      {
        slug: 'engineering',
        name: 'Engineering & Innovation',
        intersectionTitle: 'Materials Science, Batteries & Water Filtration',
        howTheyConnect:
          'Engineers rely on chemical principles to prevent structural corrosion, store renewable energy, and design water treatment systems.',
      },
    ],
  },

  biology: {
    slug: 'biology',
    route: '/learn/biology',
    title: 'Biology & Life Science',
    shortTitle: 'Biology',
    disciplineCode: 'BIO-04',
    levelScope: 'School · College · University',
    accentColor: 'teal',
    heroHeadline: 'Explore How Living Systems Function, Adapt, and Thrive.',
    heroSubheadline:
      'From microscopic cells and human nutrition to disease prevention, sustainable agriculture, and resilient ecosystems.',
    shortDescription:
      'Investigate cells, the human body, genetics, microorganisms, ecology, and evolution as dynamic, self-regulating biological systems.',
    leadSummary:
      'Biology is far more than memorizing Latin names or diagram labels. It is the study of how living cells harvest energy, how genetic information encodes structure, how organs maintain homeostasis, and how organisms interact across food webs and agriculture.',
    coreFocus:
      'Cells, Human body, Genetics, Microorganisms, Ecology, and Evolution.',
    imageSrc: PLATFORM_IMAGES.biologyMicroscopy,
    imageAlt:
      'Student researcher examining plant leaf specimens under a compound microscope in a bright laboratory',
    secondaryImageSrc: PLATFORM_IMAGES.biologyAgriculture,
    secondaryImageAlt:
      'Greenhouse laboratory table with young crop plants in clear root-observation containers, soil samples, and nutrient cycle notes',
    exemplarTopics: [
      'Cells, Genetics & Microorganisms',
      'Human Body, Nutrition & Health',
      'Ecology, Agriculture & Evolution',
    ],
    whyItMatters: {
      lead: 'Understanding living systems empowers you to make informed decisions about human health, nutrition, disease prevention, agricultural food security, and environmental stewardship.',
      pillars: [
        {
          title: 'Health, Nutrition & Physiology',
          description:
            'Understand how your digestive, circulatory, and immune systems process nutrients and defend against pathogens.',
        },
        {
          title: 'Sustainable Agriculture & Food Systems',
          description:
            'See how plant vascular transport, soil microorganisms, and genetics support resilient crops in changing climates.',
        },
        {
          title: 'Ecological Balance & Conservation',
          description:
            'Trace how energy and nutrients cycle through rivers, wetlands, forests, and agricultural landscapes.',
        },
      ],
    },
    whatLearnersWillUnderstand: [
      {
        index: '01',
        title: 'How Cells Operate as Self-Regulating Molecular Factories',
        description:
          'Understand cell membrane osmosis, enzyme catalysis, cellular respiration, and chloroplast photosynthesis.',
      },
      {
        index: '02',
        title: 'How the Human Body Maintains Homeostasis',
        description:
          'Trace how circulatory oxygen transport, neural signaling, digestion, and immune responses coordinate to keep internal conditions stable.',
      },
      {
        index: '03',
        title: 'How Genetics and Evolution Shape Biological Diversity',
        description:
          'Follow how DNA sequences transcribe into proteins, how traits inherit across generations, and how natural selection adapts populations.',
      },
      {
        index: '04',
        title: 'How Microorganisms and Ecosystems Sustain Life',
        description:
          'Explore nitrogen-fixing soil bacteria, fermentation, decomposers, and trophic energy flow across aquatic and terrestrial habitats.',
      },
    ],
    topicCategories: [
      {
        id: 'cells',
        name: 'Cells',
        summary:
          'Cell structure, semi-permeable membrane transport (diffusion and osmosis), enzymes, mitosis, and cellular energy.',
        coreMechanism:
          'Compartmentalized organelles and selective lipid membranes maintain electrochemical gradients and metabolic pathways.',
        guidingQuestion:
          'How does a microscopic cell control what enters and leaves through its membrane without mechanical valves?',
        realLifeAnchor: 'Oral rehydration therapy, plant turgor pressure, and microscopy diagnostics.',
      },
      {
        id: 'human-body',
        name: 'Human body',
        summary:
          'Cardiovascular oxygen transport, respiratory gas exchange, digestive metabolism, nervous control, and immune defense.',
        coreMechanism:
          'Negative feedback loops regulate body temperature, blood glucose, pH, and oxygen delivery across tissues.',
        guidingQuestion:
          'How does hemoglobin automatically release more oxygen to hard-working muscles than to resting tissues?',
        realLifeAnchor: 'Exercise physiology, balanced nutrition, blood pressure, and clinical health.',
      },
      {
        id: 'genetics',
        name: 'Genetics',
        summary:
          'DNA replication, RNA transcription, protein translation, Mendelian and polygenic inheritance, and genetic variation.',
        coreMechanism:
          'Nucleotide base sequences encode amino acid chains that fold into structural and enzymatic proteins.',
        guidingQuestion:
          'How does a four-letter chemical code in DNA instruct a single cell to build an entire organism?',
        realLifeAnchor: 'Selective crop breeding, hereditary trait analysis, and biotechnology.',
      },
      {
        id: 'microorganisms',
        name: 'Microorganisms',
        summary:
          'Bacteria, viruses, fungi, protists, beneficial microbiomes, fermentation, and infectious disease transmission.',
        coreMechanism:
          'Rapid microbial metabolism drives nutrient recycling, fermentation, and host-pathogen immune interactions.',
        guidingQuestion:
          'Why are the vast majority of microorganisms essential allies for soil fertility and human digestion rather than causes of disease?',
        realLifeAnchor: 'Yogurt fermentation, nitrogen-fixing root nodules, antibiotics, and hygiene.',
      },
      {
        id: 'ecology',
        name: 'Ecology',
        summary:
          'Food webs, trophic energy pyramids, carbon and nitrogen cycles, biodiversity, and ecosystem resilience.',
        coreMechanism:
          'Solar energy captured by primary producers flows through trophic levels while decomposers recycle finite mineral nutrients.',
        guidingQuestion:
          'How does removing a single keystone species or altering water salinity ripple across an entire river or mangrove ecosystem?',
        realLifeAnchor: 'Sundarbans mangrove ecology, wetland fisheries, and sustainable farming.',
      },
      {
        id: 'evolution',
        name: 'Evolution',
        summary:
          'Genetic variation, natural selection, environmental adaptation, speciation, and comparative anatomy.',
        coreMechanism:
          'Differential survival and reproduction of heritable traits shifts population gene frequencies across generations.',
        guidingQuestion:
          'Why do bacteria rapidly evolve resistance when antibiotics are misused or stopped early?',
        realLifeAnchor: 'Antibiotic stewardship, pest resistance in agriculture, and climate adaptation.',
      },
    ],
    realWorldConnections: [
      {
        title: 'Nutrition',
        topicLink: 'Human Body & Cells',
        howItWorks:
          'Digestive enzymes hydrolyze complex carbohydrates, proteins, and lipids into glucose, amino acids, and fatty acids that cells use to synthesize ATP and repair tissues, while vitamins and minerals act as essential enzyme cofactors.',
        everydayObservation:
          'Pairing iron-rich plant foods (like lentils and spinach) with vitamin C (lemon) chemically reduces iron to a form intestinal cells absorb far more efficiently.',
      },
      {
        title: 'Disease prevention',
        topicLink: 'Microorganisms & Human Body',
        howItWorks:
          'Understanding how waterborne and airborne pathogens replicate and spread explains why clean water filtration, handwashing with soap (which disrupts viral lipid envelopes), vaccination (training memory B and T cells), and completing full antibiotic courses prevent epidemics.',
        everydayObservation:
          'Vaccines introduce harmless antigen blueprints so the immune system builds antibodies before ever encountering the live pathogen.',
      },
      {
        title: 'Agriculture',
        topicLink: 'Cells, Genetics & Ecology',
        howItWorks:
          'Crop productivity depends on root osmotic water uptake, leaf stomatal gas exchange, symbiotic Rhizobium bacteria fixing atmospheric nitrogen (N₂ → NH₄⁺) in legume roots, and breeding varieties tolerant to flood or soil salinity.',
        everydayObservation:
          'Rotating rice crops with legumes naturally replenishes soil nitrogen and reduces synthetic fertilizer demand.',
      },
      {
        title: 'Ecosystems',
        topicLink: 'Ecology & Evolution',
        howItWorks:
          'Wetlands, rivers, and forests act as interconnected living filters where aquatic plants oxygenate water, decomposers break down organic waste, and predator-prey balances keep pest populations in check.',
        everydayObservation:
          'Floating winter ice or coastal mangrove root networks buffer temperature and salinity extremes for aquatic life.',
      },
    ],
    featuredPracticalExamples: [
      {
        id: 'bio-ex-1',
        title: 'Microscopic Stomatal Guard Cells: How Plants Breathe Without Drying Out',
        topicBadge: 'Cells & Plant Physiology',
        question: 'How does a plant leaf open and close thousands of microscopic pores in response to sunlight and humidity?',
        explanation:
          'Stomata are flanked by pairs of kidney-shaped guard cells. When sunlight triggers photosynthesis, proton pumps drive potassium ions (K⁺) into the guard cells; water follows by osmosis, swelling the cells and bowing their inner walls apart to let CO₂ in. In dry heat, water leaves, the cells go flaccid, and the pore seals shut.',
        underlyingLaw: 'Osmotic Turgor Pressure & Selective Ion Transport',
        imageSrc: PLATFORM_IMAGES.biologyMicroscopy,
        imageAlt:
          'Student examining plant leaf specimens under a compound microscope beside botanical sketches',
      },
      {
        id: 'bio-ex-2',
        title: 'Root-Microbe Symbiosis & The Nitrogen Cycle in Agriculture',
        topicBadge: 'Microorganisms & Ecology',
        question: 'Air is 78% nitrogen, yet plants cannot absorb N₂ gas directly. How does nitrogen enter the food web?',
        explanation:
          'The triple bond in atmospheric N₂ is too strong for plant enzymes to break. Nitrogen-fixing bacteria in soil and legume root nodules use the nitrogenase enzyme complex to convert N₂ into ammonia (NH₃) and nitrates (NO₃⁻) that plant roots absorb to synthesize amino acids and chlorophyll.',
        underlyingLaw: 'Biological Nitrogen Fixation & Ecological Nutrient Cycling',
        imageSrc: PLATFORM_IMAGES.biologyAgriculture,
        imageAlt:
          'Greenhouse study of young crop plants in clear root containers with soil petri dishes and nitrogen cycle notes',
      },
    ],
    experimentsAndActivities: [
      {
        id: 'bio-exp-1',
        title: 'Leaf Epidermal Impression & Stomatal Density Microscopy',
        topic: 'Cells & Ecology',
        duration: '35 minutes',
        materials: 'Fresh leaves from sun-loving and shade plants, clear film coat, transparent tape, glass microscope slide, microscope or high-power lens.',
        procedure:
          'Brush a thin spot of clear film onto the underside of a leaf, let it dry for 3 minutes, peel off the transparent cast with tape, mount on a glass slide, and count open vs. closed stomatal guard cells.',
        whatYouDiscover:
          'Compare stomatal density between upper and lower leaf surfaces and see how plants balance carbon uptake against water conservation.',
      },
      {
        id: 'bio-exp-2',
        title: 'Osmosis & Cellular Turgor Pressure Across Salt Concentrations',
        topic: 'Cells & Agriculture',
        duration: '40 minutes',
        materials: 'Uniform potato or carrot tissue cylinders, distilled water, 1% and 5% salt solutions, millimeter ruler, kitchen scale.',
        procedure:
          'Measure the initial mass and length of three identical plant tissue cylinders, immerse them in hypotonic (pure water), isotonic, and hypertonic (saline) beakers for 30 minutes, and re-measure rigidity and mass.',
        whatYouDiscover:
          'Observe directly why high soil salinity draws water out of crop roots (plasmolysis) and why freshwater restores cellular turgor.',
      },
    ],
    relatedProjects: [
      {
        id: 'bio-proj-1',
        title: 'Comparative Botanical Stomatal Atlas of Local Plant Species',
        subject: 'Biology · Cellular Microscopy',
        level: 'School · College',
        duration: '45 min project',
        imageSrc: PLATFORM_IMAGES.biologyMicroscopy,
        imageAlt: 'Compound microscope with plant leaf specimens in petri dishes and field notebook',
        whyItMatters:
          'Stomatal index and guard-cell behavior reveal how native and agricultural plants adapt to heat, humidity, and drought.',
        scientificPrinciple: 'Osmotic Guard Cell Mechanics & Transpiration',
        whatYouCreate:
          'A documented microscopy slide collection and illustrated comparison guide across 4 plant species.',
      },
      {
        id: 'bio-proj-2',
        title: 'Root Zone Growth & Soil Salinity Tolerance Investigation',
        subject: 'Biology · Agriculture & Ecology',
        level: 'College · University',
        duration: 'Multi-day observation',
        imageSrc: PLATFORM_IMAGES.biologyAgriculture,
        imageAlt: 'Clear root observation containers A, B, and C with young plants and nitrogen cycle notebook',
        whyItMatters:
          'Identifying how root architecture responds to soil composition and salinity informs resilient farming practices in delta regions.',
        scientificPrinciple: 'Water Potential Gradients & Root Nutrient Uptake',
        whatYouCreate:
          'A transparent root-observation chamber array tracking germination, root branching, and biomass across 3 soil treatments.',
      },
    ],
    relatedSubjects: [
      {
        slug: 'chemistry',
        name: 'Chemistry',
        intersectionTitle: 'Enzymes, pH Buffers & Biomolecules',
        howTheyConnect:
          'Cellular respiration, photosynthesis, digestion, and water osmosis operate through chemical bonding, redox reactions, and acid-base equilibria.',
      },
      {
        slug: 'mathematics',
        name: 'Mathematics',
        intersectionTitle: 'Biostatistics, Genetics Probability & Population Models',
        howTheyConnect:
          'Probability trees predict genetic inheritance, while statistics and differential equations model population growth and clinical trials.',
      },
      {
        slug: 'engineering',
        name: 'Engineering & Innovation',
        intersectionTitle: 'Biomedical Devices & Agricultural Technology',
        howTheyConnect:
          'Engineers combine biological insights with sensors and fluid mechanics to build medical monitors and automated irrigation systems.',
      },
    ],
  },

  technology: {
    slug: 'technology',
    route: '/learn/technology',
    title: 'Technology & Computing',
    shortTitle: 'Technology',
    disciplineCode: 'TEC-05',
    levelScope: 'School · College · University',
    accentColor: 'blue',
    heroHeadline: 'Understand How Digital Systems Compute, Connect, and Automate.',
    heroSubheadline:
      'From mobile applications and internet infrastructure to algorithms, artificial intelligence, digital security, and automation.',
    shortDescription:
      'Demystify programming, computer systems, algorithms, networking, artificial intelligence, and cybersecurity by understanding how hardware and software actually work.',
    leadSummary:
      'Technology should never feel like magic reserved for passive consumers. Learn how physical transistors execute binary logic, how algorithms sort and route data in milliseconds, how packets traverse the global internet, and how encryption keeps digital communication secure.',
    coreFocus:
      'Programming, Computer systems, Algorithms, Networking, Artificial Intelligence, and Cybersecurity.',
    imageSrc: PLATFORM_IMAGES.computingMicrocontroller,
    imageAlt:
      'Computer engineering desk with an embedded microcontroller board wired to sensors and an oscilloscope display',
    secondaryImageSrc: PLATFORM_IMAGES.heroCuriousLearners,
    secondaryImageAlt:
      'Students collaborating around an electronics and computing prototype with laptop and oscilloscope',
    exemplarTopics: [
      'Programming & Algorithms',
      'Computer Systems & Networking',
      'Artificial Intelligence & Cybersecurity',
    ],
    whyItMatters: {
      lead: 'Computing underpins modern communication, science, banking, healthcare, and industry. Understanding the principles beneath the screen turns you from a user of apps into an architect of solutions.',
      pillars: [
        {
          title: 'Algorithmic Problem-Solving',
          description:
            'Learn to decompose complex tasks into unambiguous, repeatable logical steps that scale effortlessly.',
        },
        {
          title: 'Hardware-to-Software Clarity',
          description:
            'Trace how high-level code compiles down to processor instructions, memory addresses, and sensor signals.',
        },
        {
          title: 'Safe & Responsible Digital Systems',
          description:
            'Understand how network protocols, cryptographic hashing, and AI models operate—and where their vulnerabilities lie.',
        },
      ],
    },
    whatLearnersWillUnderstand: [
      {
        index: '01',
        title: 'How Programming Expresses Logic and State',
        description:
          'Master variables, control flow, functions, modularity, and data structures independent of any single programming language trend.',
      },
      {
        index: '02',
        title: 'How Computer Systems Bridge Silicon and Software',
        description:
          'See how binary logic gates, CPUs, memory hierarchies, operating systems, and analog-to-digital converters process physical signals.',
      },
      {
        index: '03',
        title: 'How Algorithms and Networks Move and Process Information',
        description:
          'Compare algorithmic efficiency (time and space complexity) and trace how TCP/IP and DNS route data packets across networks.',
      },
      {
        index: '04',
        title: 'How AI Learns Patterns and Cybersecurity Protects Data',
        description:
          'Understand statistical machine learning models alongside public-key encryption, authentication, and defensive system design.',
      },
    ],
    topicCategories: [
      {
        id: 'programming',
        name: 'Programming',
        summary:
          'Variables, data types, conditional branching, iteration, modular functions, state management, and debugging.',
        coreMechanism:
          'Translating human problem specifications into deterministic sequences of state transformations.',
        guidingQuestion:
          'How do we structure a program so it remains readable, verifiable, and resilient as it grows?',
        realLifeAnchor: 'Web and mobile applications, data dashboards, and embedded firmware.',
      },
      {
        id: 'computer-systems',
        name: 'Computer systems',
        summary:
          'Binary representation, Boolean logic gates, CPU fetch-decode-execute cycle, memory management, and I/O sensors.',
        coreMechanism:
          'Transistor switches combine into logic gates (AND, OR, NOT, XOR) that perform arithmetic and store state in flip-flops.',
        guidingQuestion:
          'How do billions of simple on/off voltage switches inside a processor calculate mathematics and render graphics?',
        realLifeAnchor: 'Microcontrollers, smartphones, operating systems, and digital sensors.',
      },
      {
        id: 'algorithms',
        name: 'Algorithms',
        summary:
          'Searching, sorting, graph traversal, recursion, dynamic programming, and computational complexity (Big-O).',
        coreMechanism:
          'Organizing data structures (trees, hashes, graphs) to minimize the number of operations required as input size N grows.',
        guidingQuestion:
          'Why can a binary search find one record among a million items in 20 steps while a linear scan takes up to a million?',
        realLifeAnchor: 'Map shortest-path routing, database indexing, and search engines.',
      },
      {
        id: 'networking',
        name: 'Networking',
        summary:
          'Packet switching, IP addressing, DNS resolution, TCP reliability, HTTP/TLS requests, and wireless protocols.',
        coreMechanism:
          'Breaking large messages into addressed packets that route independently across hops and reassemble reliably at the destination.',
        guidingQuestion:
          'What actually happens in the 100 milliseconds between tapping a link on your phone and receiving a web page?',
        realLifeAnchor: 'Fiber-optic internet backbone, Wi-Fi routers, and cloud APIs.',
      },
      {
        id: 'artificial-intelligence',
        name: 'Artificial Intelligence',
        summary:
          'Pattern recognition, supervised and unsupervised learning, neural network weights, gradient optimization, and model evaluation.',
        coreMechanism:
          'Adjusting mathematical parameter weights iteratively to minimize prediction error over training examples.',
        guidingQuestion:
          'How does a machine learning model recognize handwritten script or forecast demand—and why can it still make mistakes?',
        realLifeAnchor: 'Optical character recognition, medical image triage, and language tools.',
      },
      {
        id: 'cybersecurity',
        name: 'Cybersecurity',
        summary:
          'Symmetric and asymmetric encryption, cryptographic hashing, authentication, input validation, and network defense.',
        coreMechanism:
          'Mathematical one-way functions (trapdoor primes and hashes) make verifying identity or decrypting with a key fast, while guessing without the key computationally infeasible.',
        guidingQuestion:
          'How can two devices agree on a secret encryption key over a public network where anyone might be listening?',
        realLifeAnchor: 'Mobile banking security, HTTPS certificates, and password hashing.',
      },
    ],
    realWorldConnections: [
      {
        title: 'Mobile applications',
        topicLink: 'Programming & Algorithms',
        howItWorks:
          'Mobile apps combine reactive user-interface state machines, local caching databases, and asynchronous network requests to deliver instant tools for education, mobile banking, health tracking, and communication.',
        everydayObservation:
          'Offline-capable apps store data structures locally and synchronize diffs when connectivity returns.',
      },
      {
        title: 'Internet infrastructure',
        topicLink: 'Networking & Computer Systems',
        howItWorks:
          'Submarine fiber-optic cables, regional internet exchange points (IXPs), cell towers, and routers forward IP packets using distributed routing tables, automatically routing around damaged links.',
        everydayObservation:
          'Every webpage image or message is split into ~1,500-byte packets, numbered by TCP, and verified by checksums.',
      },
      {
        title: 'Digital security',
        topicLink: 'Cybersecurity & Algorithms',
        howItWorks:
          'TLS encryption, SHA-256 cryptographic hashes, and multi-factor authentication protect sensitive transactions so intercepted network packets remain unreadable ciphertext.',
        everydayObservation:
          'Secure systems never store your raw password—they store a salted cryptographic hash value.',
      },
      {
        title: 'Automation',
        topicLink: 'Computer Systems, Programming & AI',
        howItWorks:
          'Microcontrollers and software pipelines read real-time sensor inputs (temperature, moisture, ultrasonic distance), evaluate control logic or classification models, and trigger actuators without manual intervention.',
        everydayObservation:
          'Used in automated irrigation controllers, industrial quality inspection, and smart power inverters.',
      },
    ],
    featuredPracticalExamples: [
      {
        id: 'tec-ex-1',
        title: 'Analog-to-Digital Conversion: How Computers Sense the Physical World',
        topicBadge: 'Computer Systems & Programming',
        question: 'How does a digital processor that only understands 0s and 1s measure continuous temperature, distance, or voltage?',
        explanation:
          'A physical sensor converts a real-world quantity into a continuous analog voltage (e.g., 0V to 3.3V). An Analog-to-Digital Converter (ADC) samples that voltage at regular intervals (shown on an oscilloscope as a sine wave versus a square clock pulse) and quantizes it into a binary integer that software algorithms can filter and display.',
        underlyingLaw: 'Nyquist-Shannon Sampling Theorem & Binary Quantization (2^n levels)',
        imageSrc: PLATFORM_IMAGES.computingMicrocontroller,
        imageAlt:
          'Computer engineering workbench with microcontroller wired to ultrasonic and humidity sensors and oscilloscope waveforms',
      },
      {
        id: 'tec-ex-2',
        title: 'Graph Shortest-Path Algorithms: How Navigation & Networks Route Traffic',
        topicBadge: 'Algorithms & Networking',
        question: 'How does a navigation map or network router find the fastest path across thousands of intersections in milliseconds?',
        explanation:
          'By modeling roads or network links as a weighted graph of nodes and edges, Dijkstra’s and A* search algorithms expand outward from the starting node in order of cumulative cost, guaranteeing the optimal route without testing every possible combination.',
        underlyingLaw: 'Graph Theory & Greedy Priority-Queue Relaxation (O((V + E) log V))',
        imageSrc: PLATFORM_IMAGES.heroCuriousLearners,
        imageAlt:
          'Students analyzing system architecture, circuit telemetry, and algorithmic notebooks',
      },
    ],
    experimentsAndActivities: [
      {
        id: 'tec-exp-1',
        title: 'Trace Binary Logic & Build a Half-Adder Truth Table',
        topic: 'Computer Systems',
        duration: '30 minutes',
        materials: 'Notebook or breadboard with two push-button switches, AND/XOR logic simulator or discrete transistors, LED indicators.',
        procedure:
          'Test all four input combinations (00, 01, 10, 11) of two binary bits A and B. Observe how an XOR gate produces the Sum bit while an AND gate produces the Carry bit.',
        whatYouDiscover:
          'See firsthand how physical logic gates perform binary addition—the core building block of every computer CPU.',
      },
      {
        id: 'tec-exp-2',
        title: 'Linear Scan vs. Binary Search Step-Count Benchmark',
        topic: 'Algorithms',
        duration: '25 minutes',
        materials: 'Ordered dictionary or numbered deck of 64 cards, stopwatch, step tally sheet.',
        procedure:
          'Search for a target item in an unsorted vs. sorted collection of 64 items. Count the exact number of comparisons required using sequential checking versus halving the search interval each step.',
        whatYouDiscover:
          'Verify experimentally how logarithmic time complexity (log₂ 64 = 6 steps max) outperforms linear search.',
      },
    ],
    relatedProjects: [
      {
        id: 'tec-proj-1',
        title: 'Microcontroller Ultrasonic Distance & Environmental Data Logger',
        subject: 'Technology · Computer Systems & Programming',
        level: 'College · University',
        duration: '60 min build',
        imageSrc: PLATFORM_IMAGES.computingMicrocontroller,
        imageAlt: 'Microcontroller development board wired to ultrasonic sensor, humidity sensor, and LCD display',
        whyItMatters:
          'Combining hardware sensor polling with a software moving-average filter is the foundation of modern automation and IoT telemetry.',
        scientificPrinciple: 'Time-of-Flight Acoustic Echo & Digital Signal Filtering',
        whatYouCreate:
          'A live breadboard sensor node that samples distance and humidity, filters noise, and displays calibrated readings.',
      },
      {
        id: 'tec-proj-2',
        title: 'Cryptographic Hash & Cipher Verification Sandbox',
        subject: 'Technology · Cybersecurity & Algorithms',
        level: 'School · College',
        duration: '40 min project',
        imageSrc: PLATFORM_IMAGES.mathematicsGeometry,
        imageAlt: 'Mathematical and algorithmic notebook showing modular arithmetic and state diagrams',
        whyItMatters:
          'Understanding modular arithmetic and avalanche hashing explains how digital signatures verify data integrity.',
        scientificPrinciple: 'Modular Arithmetic (c ≡ m^e mod n) & Deterministic Hashing',
        whatYouCreate:
          'A working verification script and manual modular-cipher worksheet demonstrating key exchange and tamper detection.',
      },
    ],
    relatedSubjects: [
      {
        slug: 'mathematics',
        name: 'Mathematics',
        intersectionTitle: 'Boolean Algebra, Graph Theory & Linear Algebra',
        howTheyConnect:
          'Every algorithm, cryptographic protocol, and machine learning model is built directly on discrete mathematics, matrices, and probability.',
      },
      {
        slug: 'engineering',
        name: 'Engineering & Innovation',
        intersectionTitle: 'Embedded Electronics, Robotics & Smart Devices',
        howTheyConnect:
          'Software algorithms come alive in the physical world when paired with electronic circuits, sensors, and mechanical actuators.',
      },
      {
        slug: 'physics',
        name: 'Physics',
        intersectionTitle: 'Semiconductor Physics, Optics & Signal Propagation',
        howTheyConnect:
          'Transistor switching, fiber-optic laser transmission, and wireless radio waves rely on solid-state physics and electromagnetism.',
      },
    ],
  },

  engineering: {
    slug: 'engineering',
    route: '/learn/engineering',
    title: 'Engineering & Innovation',
    shortTitle: 'Engineering',
    disciplineCode: 'ENG-06',
    levelScope: 'School · College · University',
    accentColor: 'amber',
    heroHeadline: 'Turn Scientific Understanding Into Practical Solutions.',
    heroSubheadline:
      'From resilient bridges and industrial machines to renewable energy micro-grids, electronics, robotics, and smart devices.',
    shortDescription:
      'Combine mechanical, electrical, civil, and electronic principles to design, prototype, test, and manufacture systems that solve real human challenges.',
    leadSummary:
      'Engineering is where conceptual knowledge meets real-world constraints. Learn how civil structures carry loads across rivers, how mechanical linkages multiply force, how renewable solar systems regulate power, and how sensors and actuators form intelligent robotic devices.',
    coreFocus:
      'Mechanical systems, Electrical systems, Civil engineering, Electronics, Robotics, and Design and manufacturing.',
    imageSrc: PLATFORM_IMAGES.engineeringBridgeTruss,
    imageAlt:
      'Engineering workbench featuring a scale structural truss bridge model undergoing weight load testing with a digital force gauge',
    secondaryImageSrc: PLATFORM_IMAGES.solarWaterProject,
    secondaryImageAlt:
      'Student testing a solar-powered breadboard circuit and water quality probe with a digital multimeter',
    exemplarTopics: [
      'Mechanical & Civil Engineering',
      'Electrical Systems & Electronics',
      'Robotics, Design & Manufacturing',
    ],
    whyItMatters: {
      lead: 'Science asks why nature behaves the way it does; engineering asks how we can use those laws responsibly to build safer infrastructure, cleaner energy, and better tools.',
      pillars: [
        {
          title: 'Design Under Real Constraints',
          description:
            'Balance strength, weight, energy efficiency, safety margins, and cost rather than solving idealized textbook problems.',
        },
        {
          title: 'Systems Thinking & Feedback',
          description:
            'Understand how mechanical, electrical, and software subsystems interact inside a complete machine or infrastructure project.',
        },
        {
          title: 'Prototype, Measure & Iterate',
          description:
            'Build physical models, test them with real instruments, analyze failure points, and refine your design.',
        },
      ],
    },
    whatLearnersWillUnderstand: [
      {
        index: '01',
        title: 'How Civil Structures Distribute Forces Safely',
        description:
          'Analyze tension, compression, shear, bending moments, and soil foundations in bridges, buildings, and water embankments.',
      },
      {
        index: '02',
        title: 'How Mechanical Systems Transmit Motion and Power',
        description:
          'Understand gears, levers, linkages, bearings, fluid hydraulics, and thermal efficiency in machines.',
      },
      {
        index: '03',
        title: 'How Electrical Systems and Electronics Regulate Energy & Signals',
        description:
          'Trace power generation, solar charge regulation, analog amplification, and digital sensor conditioning.',
      },
      {
        index: '04',
        title: 'How Robotics and Manufacturing Bring Designs to Life',
        description:
          'Combine closed-loop feedback control (sensors + controllers + actuators) with repeatable CAD, tolerance, and fabrication workflows.',
      },
    ],
    topicCategories: [
      {
        id: 'mechanical-systems',
        name: 'Mechanical systems',
        summary:
          'Gears, torque-speed trade-offs, linkages, stress-strain material mechanics, fluid pumps, and thermal transfer.',
        coreMechanism:
          'Mechanical advantage trades displacement for force (or speed for torque) while conserving mechanical power (P = τ · ω).',
        guidingQuestion:
          'How does a gear train allow a small motor or human hand to lift a load many times heavier than itself?',
        realLifeAnchor: 'Irrigation water pumps, bicycle drivetrains, cranes, and turbines.',
      },
      {
        id: 'electrical-systems',
        name: 'Electrical systems',
        summary:
          'Power generation, solar photovoltaics, transformers, three-phase distribution, battery storage, and circuit protection.',
        coreMechanism:
          'Converting mechanical or solar energy into regulated voltage and current with minimal transmission and conversion loss.',
        guidingQuestion:
          'How do we balance intermittent solar generation with battery storage to deliver steady, reliable electricity?',
        realLifeAnchor: 'Solar home systems, micro-grids, inverters, and industrial motors.',
      },
      {
        id: 'civil-engineering',
        name: 'Civil engineering',
        summary:
          'Structural trusses, beams, reinforced concrete, foundation geotechnics, river hydraulics, and flood protection.',
        coreMechanism:
          'Channelling dead loads, live traffic loads, and wind/water forces through structural members into stable ground foundations.',
        guidingQuestion:
          'How do engineers design a bridge to span a turbulent river while withstanding heavy loads and riverbed erosion?',
        realLifeAnchor: 'River bridges, flood embankments, drainage canals, and multi-story buildings.',
      },
      {
        id: 'electronics',
        name: 'Electronics',
        summary:
          'Semiconductor diodes, transistors, operational amplifiers, voltage regulators, PCB layout, and sensor interfacing.',
        coreMechanism:
          'Controlling electron flow through doped semiconductor junctions to amplify weak sensor signals and switch power precisely.',
        guidingQuestion:
          'How does a tiny transistor use a microampere signal to switch a high-current motor or amplify a sensor probe?',
        realLifeAnchor: 'Sensor instrumentation, audio amplifiers, power supplies, and circuit boards.',
      },
      {
        id: 'robotics',
        name: 'Robotics',
        summary:
          'Kinematics, actuators (stepper and servo motors), environmental sensors, and closed-loop PID feedback control.',
        coreMechanism:
          'A continuous sense-think-act feedback loop measures error between desired and actual state and adjusts actuator output.',
        guidingQuestion:
          'How does a robotic arm or autonomous machine correct its own position when bumped or loaded?',
        realLifeAnchor: 'Automated assembly arms, line-following mobile robots, and precision instruments.',
      },
      {
        id: 'design-and-manufacturing',
        name: 'Design and manufacturing',
        summary:
          'Engineering drawings, dimensional tolerances, material selection, prototyping, quality testing, and design for repairability.',
        coreMechanism:
          'Iterative cycle of requirement definition, CAD modeling, tolerance specification, physical prototyping, and load verification.',
        guidingQuestion:
          'Why is designing a product that can be manufactured reliably and repaired locally just as important as inventing the concept?',
        realLifeAnchor: 'Technical blueprints, caliper inspection, 3D fabrication, and workshop tooling.',
      },
    ],
    realWorldConnections: [
      {
        title: 'Bridges',
        topicLink: 'Civil Engineering & Mechanical Systems',
        howItWorks:
          'Truss, arch, and suspension bridges distribute the downward weight of vehicles into diagonal members under tension and compression, transferring the load into deep foundation piers engineered to resist river current scouring.',
        everydayObservation:
          'Triangular Warren and Pratt truss geometries prevent bending deflection across long spans.',
      },
      {
        title: 'Machines',
        topicLink: 'Mechanical Systems & Design',
        howItWorks:
          'Agricultural harvesters, textile looms, and water pumps combine rotating shafts, bearings, gear reductions, and linkages to convert rotary motor power into precise mechanical work.',
        everydayObservation:
          'Lubrication and ball bearings reduce sliding friction into rolling contact, preventing thermal wear.',
      },
      {
        title: 'Renewable energy',
        topicLink: 'Electrical Systems & Electronics',
        howItWorks:
          'Photovoltaic cells convert sunlight directly into DC electricity via the semiconductor photovoltaic effect; charge controllers regulate battery charging, and inverters synthesize AC waveforms for household appliances.',
        everydayObservation:
          'Solar micro-grids power lighting, irrigation pumps, and environmental telemetry across off-grid and rural communities.',
      },
      {
        title: 'Smart devices',
        topicLink: 'Electronics & Robotics',
        howItWorks:
          'Smart devices integrate physical transducers (temperature, conductivity, optical, or motion sensors) with analog conditioning circuits, microcontrollers, and feedback actuators to monitor and respond to real-world conditions.',
        everydayObservation:
          'An automatic water-level controller or water quality monitor senses thresholds and switches pumps autonomously.',
      },
    ],
    featuredPracticalExamples: [
      {
        id: 'eng-ex-1',
        title: 'Structural Truss Load Testing: Measuring Force Vectors & Deflection',
        topicBadge: 'Civil & Mechanical Engineering',
        question: 'How do engineers verify the load capacity and safety factor of a bridge before construction?',
        explanation:
          'By constructing a scale Warren truss model from uniform structural members, engineers apply calibrated dead weights at the mid-span deck and measure downward tension force and deflection with a digital force gauge and calipers. Comparing measured strain against static equilibrium calculations (ΣF = 0, ΣM = 0) identifies which diagonal struts require reinforcement.',
        underlyingLaw: 'Static Equilibrium (ΣF_x = 0, ΣF_y = 0, ΣM = 0) & Hooke’s Stress-Strain Law',
        imageSrc: PLATFORM_IMAGES.engineeringBridgeTruss,
        imageAlt:
          'Scale wood truss bridge model under calibrated brass weights and digital force gauge reading 132.4 N',
      },
      {
        id: 'eng-ex-2',
        title: 'Solar-Powered Environmental Telemetry: Designing Autonomous Field Instruments',
        topicBadge: 'Electrical Systems & Electronics',
        question: 'How do you engineer a sensor node that runs off sunlight and measures water quality accurately?',
        explanation:
          'A photovoltaic cell charges a regulated power rail on a breadboard. A voltage-divider and oscillator probe excites two electrodes immersed in a water sample, while a multimeter or ADC measures voltage as a function of dissolved ionic conductivity—documented with a calibration curve in the engineering notebook.',
        underlyingLaw: 'Photovoltaic Power Regulation & Sensor Voltage-Divider Calibration',
        imageSrc: PLATFORM_IMAGES.solarWaterProject,
        imageAlt:
          'Student measuring voltage on a solar-powered breadboard circuit connected to a water quality probe in a glass beaker',
      },
    ],
    experimentsAndActivities: [
      {
        id: 'eng-exp-1',
        title: 'Build & Load-Test a Triangular Warren Truss vs. Rectangular Beam',
        topic: 'Civil Engineering & Mechanical Systems',
        duration: '50 minutes',
        materials: 'Craft wood strips or balsa sticks, pins or glue joints, small weights, ruler or calipers, notebook.',
        procedure:
          'Construct two spans of identical length and weight: one flat rectangular frame and one triangular Warren truss. Support both at the ends, apply incremental weights at mid-span, and measure vertical deflection in millimeters.',
        whatYouDiscover:
          'Quantify how triangular truss geometry increases stiffness-to-weight ratio by converting bending forces into axial tension and compression.',
      },
      {
        id: 'eng-exp-2',
        title: 'Solar Panel Open-Circuit Voltage vs. Load Current Curve',
        topic: 'Electrical Systems & Electronics',
        duration: '35 minutes',
        materials: 'Small 5V–6V solar panel, breadboard, assortment of resistors (10Ω to 1kΩ), digital multimeter, protractor.',
        procedure:
          'Measure the solar panel’s voltage and current across different load resistances under sunlight and at 0°, 30°, and 60° incidence tilt angles. Plot Power (P = V × I) to locate the Maximum Power Point (MPP).',
        whatYouDiscover:
          'Understand why solar systems require Maximum Power Point Tracking (MPPT) and proper tilt orientation.',
      },
    ],
    relatedProjects: [
      {
        id: 'eng-proj-1',
        title: 'Scale Truss Bridge Prototype & Force Vector Analysis',
        subject: 'Engineering · Civil & Mechanical',
        level: 'School · College · University',
        duration: '60 min build',
        imageSrc: PLATFORM_IMAGES.engineeringBridgeTruss,
        imageAlt: 'Scale structural truss bridge model undergoing weight load testing with force gauge and blueprints',
        whyItMatters:
          'Bridges and roof trusses must carry heavy loads using minimal material without buckling or shearing.',
        scientificPrinciple: 'Truss Joint Equilibrium & Structural Stiffness',
        whatYouCreate:
          'A blueprint-drawn, load-tested scale truss bridge with a documented load-to-mass efficiency report.',
      },
      {
        id: 'eng-proj-2',
        title: 'Autonomous Solar-Powered Water Quality & Salinity Probe',
        subject: 'Engineering · Electrical & Electronics',
        level: 'College · University',
        duration: '45 min build',
        imageSrc: PLATFORM_IMAGES.solarWaterProject,
        imageAlt: 'Student testing solar-powered water sensor circuit with multimeter and engineering notebook',
        whyItMatters:
          'Low-cost, solar-powered instrumentation enables communities to monitor water salinity and agricultural irrigation quality.',
        scientificPrinciple: 'Photovoltaic Regulation & Ionic Conductance Sensing',
        whatYouCreate:
          'A working breadboard water sensor powered by a solar cell with a plotted voltage-to-TDS calibration curve.',
      },
    ],
    relatedSubjects: [
      {
        slug: 'physics',
        name: 'Physics',
        intersectionTitle: 'Mechanics, Thermodynamics & Electromagnetism',
        howTheyConnect:
          'Physics provides the fundamental force, energy, fluid, and circuit laws that every engineering discipline applies.',
      },
      {
        slug: 'mathematics',
        name: 'Mathematics',
        intersectionTitle: 'Trigonometry, Linear Algebra & Optimization',
        howTheyConnect:
          'Structural force calculations, dimensional tolerances, and control loops rely on geometry, matrices, and calculus.',
      },
      {
        slug: 'technology',
        name: 'Technology & Computing',
        intersectionTitle: 'Embedded Firmware, Automation & Robotics',
        howTheyConnect:
          'Modern engineering integrates mechanical and electronic hardware with microcontroller software and digital networks.',
      },
    ],
  },
};

/**
 * Helper to resolve both canonical (/learn/biology) and legacy slugs (biology-life-science)
 */
export function resolveSubjectSlug(rawSlug: string): SubjectCategorySlug {
  const normalized = rawSlug.toLowerCase().trim();
  if (normalized === 'biology-life-science') return 'biology';
  if (normalized === 'technology-computing') return 'technology';
  if (normalized === 'engineering-innovation') return 'engineering';
  if (normalized in SUBJECTS_DATA) {
    return normalized as SubjectCategorySlug;
  }
  return 'physics';
}

/**
 * Featured cross-disciplinary topics for the /learn Explore Learning hub page
 */
export const EXPLORE_FEATURED_TOPICS = [
  {
    id: 'ft-optics-lenses',
    subjectSlug: 'physics' as SubjectCategorySlug,
    subjectName: 'Physics',
    topicCategory: 'Optics',
    title: 'How Lenses & Prisms Bend Light to Help Us See',
    whyItMatters:
      'Connects Snell’s Law of refraction to corrective eyeglasses, compound microscopes, cameras, and high-speed fiber-optic cables.',
    coreQuestion: 'Why does light change direction when entering glass or water?',
  },
  {
    id: 'ft-electric-motors',
    subjectSlug: 'physics' as SubjectCategorySlug,
    subjectName: 'Physics',
    topicCategory: 'Electricity & Magnetism',
    title: 'How Electric Motors & Generators Convert Energy',
    whyItMatters:
      'Explains how magnetic fields push current-carrying coils to spin fans, pumps, and electric vehicles—and how power plants generate electricity.',
    coreQuestion: 'How do electricity and magnetism work together to create motion?',
  },
  {
    id: 'ft-truss-architecture',
    subjectSlug: 'mathematics' as SubjectCategorySlug,
    subjectName: 'Mathematics',
    topicCategory: 'Geometry & Trigonometry',
    title: 'Triangles, Vectors & Proportions in Architecture and Bridges',
    whyItMatters:
      'Shows why geometric rigidity and trigonometric force components prevent bridges and buildings from collapsing under load.',
    coreQuestion: 'Why is the triangle the strongest fundamental shape in structural design?',
  },
  {
    id: 'ft-water-electrochemistry',
    subjectSlug: 'chemistry' as SubjectCategorySlug,
    subjectName: 'Chemistry',
    topicCategory: 'Reactions, Batteries & Water Treatment',
    title: 'Electrochemistry & Ionic Equilibrium in Batteries and Clean Water',
    whyItMatters:
      'Links electron transfer and dissolved ions to rechargeable solar batteries and safe drinking-water filtration.',
    coreQuestion: 'How do chemical reactions store electricity and purify water?',
  },
  {
    id: 'ft-cells-agriculture',
    subjectSlug: 'biology' as SubjectCategorySlug,
    subjectName: 'Biology & Life Science',
    topicCategory: 'Cells, Ecology & Agriculture',
    title: 'Cellular Osmosis, Stomata & Nutrient Cycles in Agriculture',
    whyItMatters:
      'Reveals how crop roots absorb water and minerals, how soil microbes fix nitrogen, and how plants adapt to drought and salinity.',
    coreQuestion: 'How do microscopic cells and soil microbes sustain our entire food supply?',
  },
  {
    id: 'ft-algorithms-sensors',
    subjectSlug: 'technology' as SubjectCategorySlug,
    subjectName: 'Technology & Computing',
    topicCategory: 'Algorithms, Systems & Security',
    title: 'From Binary Logic & Sensors to Internet Routing and Encryption',
    whyItMatters:
      'Demystifies how microcontrollers digitize physical signals, how packets cross the internet, and how cryptography secures data.',
    coreQuestion: 'How do computers represent, route, and protect real-world information?',
  },
] as const;

/**
 * Suggested Learning Paths for the /learn Explore Learning hub page
 */
export const SUGGESTED_LEARNING_PATHS = [
  {
    id: 'path-energy-machines',
    pathNumber: 'PATH 01',
    title: 'How Energy, Electricity & Machines Power the Modern World',
    audience: 'School · College · Curious Learners',
    summary:
      'Trace energy from fundamental forces and electrochemical batteries to spinning electric motors and renewable solar micro-grids.',
    steps: [
      {
        step: '1',
        subject: 'Physics',
        slug: 'physics' as SubjectCategorySlug,
        topic: 'Force, Energy, Electricity & Magnetism (How electric motors and power grids work)',
      },
      {
        step: '2',
        subject: 'Chemistry',
        slug: 'chemistry' as SubjectCategorySlug,
        topic: 'Chemical Reactions & Batteries (How galvanic and rechargeable cells store energy)',
      },
      {
        step: '3',
        subject: 'Engineering',
        slug: 'engineering' as SubjectCategorySlug,
        topic: 'Electrical Systems & Renewable Energy (Designing solar-powered devices)',
      },
    ],
  },
  {
    id: 'path-water-life-environment',
    pathNumber: 'PATH 02',
    title: 'Water, Living Ecosystems & Sustainable Agriculture',
    audience: 'School · College · University',
    summary:
      'Understand water from its molecular hydrogen bonds and treatment chemistry to cellular osmosis, crop nutrition, and environmental sensors.',
    steps: [
      {
        step: '1',
        subject: 'Chemistry',
        slug: 'chemistry' as SubjectCategorySlug,
        topic: 'Chemical Bonding, Acids & Bases, and Water Treatment',
      },
      {
        step: '2',
        subject: 'Biology',
        slug: 'biology' as SubjectCategorySlug,
        topic: 'Cells, Microorganisms, Agriculture & Ecosystems',
      },
      {
        step: '3',
        subject: 'Engineering',
        slug: 'engineering' as SubjectCategorySlug,
        topic: 'Smart Devices & Environmental Water Quality Instrumentation',
      },
    ],
  },
  {
    id: 'path-structures-design',
    pathNumber: 'PATH 03',
    title: 'Geometry, Forces & Resilient Civil Infrastructure',
    audience: 'School · College · University',
    summary:
      'Connect geometric ratios, trigonometry, and calculus optimization directly to structural mechanics, bridges, and river hydraulics.',
    steps: [
      {
        step: '1',
        subject: 'Mathematics',
        slug: 'mathematics' as SubjectCategorySlug,
        topic: 'Geometry, Trigonometry & Calculus (Vectors, triangulation, and optimization)',
      },
      {
        step: '2',
        subject: 'Physics',
        slug: 'physics' as SubjectCategorySlug,
        topic: 'Motion, Force & Fluid Mechanics (Equilibrium and laminar vs. turbulent flow)',
      },
      {
        step: '3',
        subject: 'Engineering',
        slug: 'engineering' as SubjectCategorySlug,
        topic: 'Civil Engineering & Mechanical Systems (Load-testing truss bridges)',
      },
    ],
  },
  {
    id: 'path-computation-automation',
    pathNumber: 'PATH 04',
    title: 'Mathematical Logic, Algorithms & Intelligent Automation',
    audience: 'College · University · Independent Learners',
    summary:
      'Move from algebra, probability, and binary logic gates to software algorithms, network security, electronics, and robotics.',
    steps: [
      {
        step: '1',
        subject: 'Mathematics',
        slug: 'mathematics' as SubjectCategorySlug,
        topic: 'Algebra, Statistics & Probability (Modeling uncertainty and data)',
      },
      {
        step: '2',
        subject: 'Technology',
        slug: 'technology' as SubjectCategorySlug,
        topic: 'Programming, Computer Systems, Algorithms, Networking & Cybersecurity',
      },
      {
        step: '3',
        subject: 'Engineering',
        slug: 'engineering' as SubjectCategorySlug,
        topic: 'Electronics & Robotics (Sensors, microcontrollers, and closed-loop automation)',
      },
    ],
  },
] as const;

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
