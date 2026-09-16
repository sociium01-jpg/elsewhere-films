export const CTA = "Start a conversation";

export const ENGAGEMENT_LINE =
  "Engagements are structured per film — fixed fee, retainer, or partnership, depending on scope.";

export const STILL_CAPTION = "Film still · rights pending";

export const HOME = {
  banner: {
    eyebrow: "For films that are finished, or nearly there",
    headline: ["You made the film.", "We help it travel."] as const,
    support:
      "No one hands you a map for the journey after the cut — festivals, markets, audiences. We've drawn one, from 300 film journeys and the people who've walked them.",
  },
  vision:
    "A future where South Asian stories are discovered, celebrated, and sustained across the world — by design, not by chance.",
  mission:
    "We work with South Asian independent cinema — on visibility, circulation, and pathways. We help films reach the right festivals, markets, distributors, and audiences, pairing a pathway-intelligence model with the judgment of experienced practitioners. Everything we do serves one purpose: helping strong films travel, and keep travelling, long after their first screening.",
  why: {
    opening:
      "Some strong films travel the world. Others, just as good, disappear after their first screening.",
    body: [
      "The difference is rarely the film. A premiere in the wrong place. No one championing it in the rooms where decisions are made. No journalist given a reason to write about it. No plan for the film's life after its first festival. And it falls hardest on those with the least room for error — a first film, a fine film, and no banner behind it.",
      "An entire ecosystem exists to help films get made. Almost nothing exists to help a finished film into the world. Elsewhere is built for that gap — with evidence drawn from hundreds of film journeys, and the judgment of people who've spent their careers opening the doors that matter.",
    ] as const,
    pathwayLink: "Explore the Pathway Model",
    peopleLink: "The people around the work",
  },
  whatWeDo: {
    intro:
      "Our work begins when your film is finished, and follows it through festivals, markets, and distribution.",
    seeHow: "See how we work",
  },
} as const;

export const OFFERINGS_HOME = [
  {
    name: "Festival scheduling & entries",
    body: "A festival calendar built around your film — its archetype, its timeline, its eligibility. Premiere rules and submission costs mapped before anything is filed. We manage the entries.",
  },
  {
    name: "Full pathway recommendation",
    body: "A strategic route from festival premiere to markets, distribution and audience — with scenarios, opportunities and relevant industry connections.",
  },
  {
    name: "Positioning & packaging",
    body: "Loglines, synopses, director's statements, decks and buyer-facing materials — consistent positioning across everything the world sees.",
  },
  {
    name: "Distribution & audience",
    body: "The right sales agents, distributors, platforms and buyers identified. Introductions and deal conversations supported. Audiences defined beyond the home market — diaspora, cinephile, crossover.",
  },
  {
    name: "Co-production",
    body: "On a small number of films, Elsewhere comes on board as a co-producer — development, international positioning, production pathway.",
  },
] as const;

export const SERVICES = {
  journey: {
    headline: "Where is your film on its journey?",
    stages: [
      {
        id: "nearing",
        title: "Nearing completion",
        body: "A locked cut in sight. The best pathway decisions are made here, before the film is finished — premiere strategy, eligibility, timing.",
      },
      {
        id: "festival",
        title: "Festival ready",
        body: "The film is done. Now the questions that shape everything: which premiere, in what sequence, toward which rooms — or whether the festival route is the right one at all.",
      },
      {
        id: "circulation",
        title: "In circulation",
        body: "The premiere is behind you. The work now is momentum — markets, distributors, new audiences, the long life of the film.",
      },
    ] as const,
    beforeCut: {
      id: "before",
      title: "Before the cut",
      body: "Our work begins with finished films. But on a small number of projects, the relationship starts at the script — see Creative Partnership below.",
    },
  },
  twoWays: {
    head: "We usually work in one of two ways.",
    pathway: {
      title: "Pathway Partnership",
      body: "You've made the film. We chart what comes next — whether that's a festival premiere and the journey beyond it, or a straight line to platforms and distributors at home. This is how most filmmakers work with us — engagements shaped around each film, from a single scheduling brief to a full pathway plan.",
    },
    creative: {
      title: "Creative Partnership",
      body: "Sometimes the relationship begins earlier. On a small number of films, we come on board as co-producers — through development, international positioning, and the film's pathway into the world.",
    },
  },
} as const;

export const OFFERINGS_SCOPE = [
  {
    name: "Festival scheduling & entries",
    body: "The starting point is the film itself — what kind of film it is, when it will be ready, and which festivals genuinely fit its profile. From there, a calendar: premiere rules checked, eligibility windows mapped, submission costs laid out before anything is filed. Then we manage the entries — deadlines, materials, submissions — so the housekeeping never costs the film an opportunity. Often the first engagement; sized as a single scheduling brief.",
  },
  {
    name: "Full pathway recommendation",
    body: "The whole journey, thought through before it begins. Where the film should premiere, and why. What follows, in what order. Which markets and buyers matter for this film. What happens if plan A doesn't land. You receive a written route with scenarios — not a list of festivals, a sequence of decisions — and the introductions that make it real.",
  },
  {
    name: "Positioning & packaging",
    body: "The words and materials that travel ahead of the film. Loglines, synopses, director's statements, decks — refined until they say the same true thing everywhere, then adapted to each opportunity: what a programmer needs to read is not what a buyer needs to see. Built alongside the pathway work, or as standalone support.",
  },
  {
    name: "Distribution & audience",
    body: "The right sales agents, distributors, platforms and buyers for this film — identified, approached, and the deal conversations supported. For some films this follows the festival journey; for others it is the journey — a straight line to OTT and home audiences, no festival detour. Audience thinking runs through all of it: the home market first, then diaspora, cinephile and crossover segments where the film can carry — with an outreach and communication plan to match.",
  },
  {
    name: "Co-production",
    body: "On a small number of films, Elsewhere joins as co-producer — active in development, international positioning, and the film's pathway from the start. These are relationships more than engagements; they usually begin in conversation, before the cut.",
  },
] as const;

export const FILM_STAGES = [
  "Nearing completion",
  "Festival ready",
  "In circulation",
  "Before the cut",
] as const;

export const PATHWAY_MODEL = {
  title: "Pathway Model",
  steps: [
    {
      heading: "The founding question",
      line: "Why do some finished films travel, and others — just as strong — stop after a first screening?",
    },
    {
      heading: "A golden dataset",
      line: "300 South Asian independent film journeys, studied over years.",
    },
    {
      heading: "Manual coding",
      line: "More than 30 pre-release parameters, coded by hand against each film.",
    },
    {
      heading: "Compared with what actually happened",
      line: "The coded picture set beside the real journey each film took.",
    },
    {
      heading: "Festival signals",
      line: "A two-year study of 30 international festivals — what they signal, and to whom.",
    },
    {
      heading: "Practitioner research",
      line: "The judgment of filmmakers, programmers and industry practitioners, held next to the data.",
    },
    {
      heading: "A continuous validation loop",
      line: "Every new film we work on tests and refines the model.",
    },
  ] as const,
  judgment:
    "We are not trying to replace the judgment of filmmakers, programmers and industry practitioners with a model. We are putting evidence beside it.",
  disclaimer: "This is not predicting creative success.",
} as const;

export const KNOWLEDGE_HUB = {
  title: "Knowledge Hub",
  framing:
    "Publications and The After Cut are the open, public side of our pathway work.",
} as const;

export const ABOUT = {
  originHeading: "Where This Began",
  founders: [
    { name: "Triparna Banerjee", role: "Filmmaker" },
    { name: "Ramakanth Thumrugoti", role: "Institutional access" },
    { name: "Mohit Arora", role: "Pathway & strategy" },
  ] as const,
  advisoryHeading: "The advisory network",
  advisoryNote:
    "Named roster appears only with explicit consent. Copy pending.",
} as const;
