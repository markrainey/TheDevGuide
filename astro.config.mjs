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
			components: {
				Sidebar: './src/overrides/Sidebar.astro',
				PageTitle: './src/overrides/PageTitle.astro',
			},
			sidebar: [
  {
    label: 'The Craft (Programming & Architecture)',
    items: [
      { label: 'Overview', slug: 'thecraftprogrammingarchitecture' },
      {
        label: 'Language & Runtime Deep-Dives',
        items: [
          { label: 'Overview', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives' },
          { label: '100 Days of Code: The Complete Python Pro Bootcamp', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives/11fbb6f6-7e62-4610-a4f4-5ae76e312eb2' },
          { label: 'Python Mega Course: Build 20 Real-World Apps and AI Agents', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives/a3530853-1a13-459f-b775-6c7f0fdf423e' },
          { label: 'The Clean Coder: A Code of Conduct for Professional Programmers (Robert C. Martin Series)', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives/c159c9e0-3c08-4bdf-bc4d-19a39b32c0cc' },
          { label: 'CLR via C# (Developer Reference)', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives/0a83189c-a7ac-4e47-88e0-8786525e4da5' },
          {
            label: 'Modern JavaScript/TypeScript',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives/modernjavascripttypescript' },
            ],
          },
          {
            label: 'Systems Programming (Rust/Go)',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives/systemsprogrammingrustgo' },
            ],
          },
          {
            label: 'AI-First Python',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/languageruntimedeep-dives/ai-firstpython' },
            ],
          },
        ],
      },
      {
        label: 'Design Patterns & Architecture',
        items: [
          { label: 'Overview', slug: 'thecraftprogrammingarchitecture/designpatternsarchitecture' },
          { label: 'Design Microservices Architecture with Patterns & Principles', slug: 'thecraftprogrammingarchitecture/designpatternsarchitecture/bd5460b3-92c5-42d6-83dd-fd7610692d37' },
          { label: 'Designing Data–Intensive Applications: Big Ideas Behind Reliable, Scalable, and Maintainable Systems', slug: 'thecraftprogrammingarchitecture/designpatternsarchitecture/718b7433-9074-460c-ad2e-cef647fbfef4' },
          {
            label: 'Modular Monoliths to Microservices',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/designpatternsarchitecture/modularmonolithstomicroservices' },
            ],
          },
          {
            label: 'Structural Patterns',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/designpatternsarchitecture/structuralpatterns' },
            ],
          },
          {
            label: 'Reactive & Event-Driven Logic',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/designpatternsarchitecture/reactiveevent-drivenlogic' },
            ],
          },
        ],
      },
      {
        label: 'Algorithms & Data Structures (Applied)',
        items: [
          { label: 'Overview', slug: 'thecraftprogrammingarchitecture/algorithmsdatastructuresapplied' },
          {
            label: 'Performance Optimization',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/algorithmsdatastructuresapplied/performanceoptimization' },
            ],
          },
          {
            label: 'Graph Theory & Vector Math',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/algorithmsdatastructuresapplied/graphtheoryvectormath' },
            ],
          },
          {
            label: 'State Management Theory',
            items: [
              { label: 'Overview', slug: 'thecraftprogrammingarchitecture/algorithmsdatastructuresapplied/statemanagementtheory' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'The Stack (Technology & Integration)',
    items: [
      { label: 'Overview', slug: 'thestacktechnologyintegration' },
      {
        label: 'AI Integration & Agentic Frameworks',
        items: [
          { label: 'Overview', slug: 'thestacktechnologyintegration/aiintegrationagenticframeworks' },
          {
            label: 'LLM Orchestration',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/aiintegrationagenticframeworks/llmorchestration' },
            ],
          },
          {
            label: 'Retrieval-Augmented Generation (RAG)',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/aiintegrationagenticframeworks/retrieval-augmentedgenerationrag' },
            ],
          },
          {
            label: 'AI Evaluation & Guardrails',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/aiintegrationagenticframeworks/aievaluationguardrails' },
            ],
          },
        ],
      },
      {
        label: 'Frontend & Interaction Design',
        items: [
          { label: 'Overview', slug: 'thestacktechnologyintegration/frontendinteractiondesign' },
          {
            label: 'Meta-Frameworks',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/frontendinteractiondesign/meta-frameworks' },
            ],
          },
          {
            label: 'Design Systems & UI Kits',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/frontendinteractiondesign/designsystemsuikits' },
            ],
          },
          {
            label: 'Accessibility & Inclusive Design',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/frontendinteractiondesign/accessibilityinclusivedesign' },
            ],
          },
        ],
      },
      {
        label: 'Backend & Cloud Systems',
        items: [
          { label: 'Overview', slug: 'thestacktechnologyintegration/backendcloudsystems' },
          {
            label: 'Backend-as-a-Service (BaaS)',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/backendcloudsystems/backend-as-a-servicebaas' },
            ],
          },
          {
            label: 'Serverless & Edge Compute',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/backendcloudsystems/serverlessedgecompute' },
            ],
          },
          {
            label: 'Distributed Systems Reliability',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/backendcloudsystems/distributedsystemsreliability' },
            ],
          },
        ],
      },
      {
        label: 'Data Architecture & Storage',
        items: [
          { label: 'Overview', slug: 'thestacktechnologyintegration/dataarchitecturestorage' },
          {
            label: 'Modern Relational SQL',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/dataarchitecturestorage/modernrelationalsql' },
            ],
          },
          {
            label: 'NoSQL & Document Stores',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/dataarchitecturestorage/nosqldocumentstores' },
            ],
          },
          {
            label: 'Data Lakehouses & Warehousing',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/dataarchitecturestorage/datalakehouseswarehousing' },
            ],
          },
        ],
      },
      {
        label: 'API Design & Connectivity',
        items: [
          { label: 'Overview', slug: 'thestacktechnologyintegration/apidesignconnectivity' },
          {
            label: 'API Protocols',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/apidesignconnectivity/apiprotocols' },
            ],
          },
          {
            label: 'Contract-First Development',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/apidesignconnectivity/contract-firstdevelopment' },
            ],
          },
          {
            label: 'Real-time Streaming',
            items: [
              { label: 'Overview', slug: 'thestacktechnologyintegration/apidesignconnectivity/real-timestreaming' },
            ],
          },
        ],
      },
    ],
  },
  {
    label: 'The Lifecycle (Operations & Growth)',
    items: [
      { label: 'Overview', slug: 'thelifecycleoperationsgrowth' },
      {
        label: 'DevOps & Deployment',
        items: [
          { label: 'Overview', slug: 'thelifecycleoperationsgrowth/devopsdeployment' },
          {
            label: 'Infrastructure as Code (IaC)',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/devopsdeployment/infrastructureascodeiac' },
            ],
          },
          {
            label: 'CI/CD Pipelines',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/devopsdeployment/cicdpipelines' },
            ],
          },
          {
            label: 'Containerization',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/devopsdeployment/containerization' },
            ],
          },
        ],
      },
      {
        label: 'Security & Authentication',
        items: [
          { label: 'Overview', slug: 'thelifecycleoperationsgrowth/securityauthentication' },
          {
            label: 'Identity & Access Management (IAM)',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/securityauthentication/identityaccessmanagementiam' },
            ],
          },
          {
            label: 'Zero-Trust Architecture',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/securityauthentication/zero-trustarchitecture' },
            ],
          },
          {
            label: 'Compliance & Governance',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/securityauthentication/compliancegovernance' },
            ],
          },
        ],
      },
      {
        label: 'Testing & Observability',
        items: [
          { label: 'Overview', slug: 'thelifecycleoperationsgrowth/testingobservability' },
          {
            label: 'Automated Testing Suites',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/testingobservability/automatedtestingsuites' },
            ],
          },
          {
            label: 'Full-Stack Monitoring',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/testingobservability/full-stackmonitoring' },
            ],
          },
          {
            label: 'AIOps & Intelligent Alerting',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/testingobservability/aiopsintelligentalerting' },
            ],
          },
        ],
      },
      {
        label: 'Developer Productivity & DX',
        items: [
          { label: 'Overview', slug: 'thelifecycleoperationsgrowth/developerproductivitydx' },
          {
            label: 'AI-Enhanced Workflows',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/developerproductivitydx/ai-enhancedworkflows' },
            ],
          },
          {
            label: 'The Modern Terminal',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/developerproductivitydx/themodernterminal' },
            ],
          },
          {
            label: 'Documentation Systems',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/developerproductivitydx/documentationsystems' },
            ],
          },
        ],
      },
      {
        label: 'Career & Soft Skills',
        items: [
          { label: 'Overview', slug: 'thelifecycleoperationsgrowth/careersoftskills' },
          {
            label: 'System Design Interviews',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/careersoftskills/systemdesigninterviews' },
            ],
          },
          {
            label: 'Open Source & Personal Branding',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/careersoftskills/opensourcepersonalbranding' },
            ],
          },
          {
            label: 'Technical Communication',
            items: [
              { label: 'Overview', slug: 'thelifecycleoperationsgrowth/careersoftskills/technicalcommunication' },
            ],
          },
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
