// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeSix from '@six-tech/starlight-theme-six'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Dev Guide',
      logo: {
        src: './src/assets/logo.webp',
        alt: 'The Dev Guide'
      },
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			customCss: ['./src/styles/custom.css'],
			markdown: { headingLinks: false },
			components: {
				Sidebar: './src/overrides/Sidebar.astro',
				PageTitle: './src/overrides/PageTitle.astro',
			},
			sidebar: [
  {
    label: 'The AI-Native Stack',
    items: [
      { label: 'Overview', slug: 'ainative' },
      {
        label: 'Foundational Models',
        items: [
          { label: 'Overview', slug: 'ainative/foundationalmodels' },
        ],
      },
      {
        label: 'AI-Native IDEs and Assistants',
        items: [
          { label: 'Overview', slug: 'ainative/ai-nativeidesandassistants' },
        ],
      },
      {
        label: 'The Model Context Protocol',
        items: [
          { label: 'Overview', slug: 'ainative/themodelcontextprotocol' },
        ],
      },
      {
        label: 'Local LLMs and Private Infrastructure',
        items: [
          { label: 'Overview', slug: 'ainative/localllmsandprivateinfrastructure' },
        ],
      },
    ],
  },
  {
    label: 'AI-Augmented SDLC',
    items: [
      { label: 'Overview', slug: 'aisdlc' },
      {
        label: 'Planning and Requirements',
        items: [
          { label: 'Overview', slug: 'aisdlc/planningandrequirements' },
        ],
      },
      {
        label: 'Intelligent Architecture',
        items: [
          { label: 'Overview', slug: 'aisdlc/intelligentarchitecture' },
        ],
      },
      {
        label: 'Implementation',
        items: [
          { label: 'Overview', slug: 'aisdlc/implementation' },
        ],
      },
      {
        label: 'Autonomous QA',
        items: [
          { label: 'Overview', slug: 'aisdlc/autonomousqa' },
        ],
      },
      {
        label: 'AIOps',
        items: [
          { label: 'Overview', slug: 'aisdlc/aiops' },
        ],
      },
    ],
  },
  {
    label: 'Engineering Patterns',
    items: [
      { label: 'Overview', slug: 'patterns' },
      {
        label: 'Agentic Orchestration',
        items: [
          { label: 'Overview', slug: 'patterns/agenticorchestration' },
        ],
      },
      {
        label: 'Advanced RAG',
        items: [
          { label: 'Overview', slug: 'patterns/advancedrag' },
        ],
      },
      {
        label: 'Evaluation-Driven Development',
        items: [
          { label: 'Overview', slug: 'patterns/evaluation-drivendevelopment' },
        ],
      },
      {
        label: 'Context Engineering',
        items: [
          { label: 'Overview', slug: 'patterns/contextengineering' },
        ],
      },
      {
        label: 'Bounded Autonomy',
        items: [
          { label: 'Overview', slug: 'patterns/boundedautonomy' },
        ],
      },
    ],
  },
  {
    label: 'The Human Element',
    items: [
      { label: 'Overview', slug: 'humanelement' },
      {
        label: 'From Coder to Orchestrator',
        items: [
          { label: 'Overview', slug: 'humanelement/fromcodertoorchestrator' },
        ],
      },
      {
        label: 'AI Security',
        items: [
          { label: 'Overview', slug: 'humanelement/aisecurity' },
        ],
      },
      {
        label: 'Ethics and Bias',
        items: [
          { label: 'Overview', slug: 'humanelement/ethicsandbias' },
        ],
      },
      {
        label: 'Governance',
        items: [
          { label: 'Overview', slug: 'humanelement/governance' },
        ],
      },
      {
        label: 'The Psychology of AI-Native Development',
        items: [
          { label: 'Overview', slug: 'humanelement/thepsychologyofai-nativedevelopment' },
        ],
      },
    ],
  },
],
			plugins: [
				starlightThemeSix({
					
				})
			],
		}),
	],
});
