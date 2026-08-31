import Panel from './UI/Panel'
import type { PanelProps } from './UI/panels'

const skillGroups: { label: string, skills: string[] }[] = [
  { label: "Languages", skills: ["JavaScript", "TypeScript", "Python", "Ruby", "SQL", "HTML", "CSS"] },
  { label: "Backend", skills: ["Django", "FastAPI", "Flask", "Celery", "Rails", "Node.js", "Express"] },
  { label: "Frontend", skills: ["React", "Next.js", "Vue", "Tailwind", "SASS"] },
  { label: "Data & Realtime", skills: ["PostgreSQL", "Redis", "ArcGIS", "WebSockets"] },
  { label: "Infrastructure", skills: ["Kubernetes", "Docker", "AWS", "Nginx", "Heroku", "Vercel"] },
  { label: "Tooling & Testing", skills: ["Git", "GitHub", "Figma", "Jira", "Sentry", "pytest", "RSpec", "Jest"] },
]

const Skills = ({ onNavigate }: PanelProps) => (
  <Panel current="skills" onNavigate={onNavigate}>
    <div className="flex flex-col justify-center col-span-5 px-8 lg:pl-24 lg:pr-12 py-8 lg:py-0">
      <div className="flex items-center gap-4 mb-10">
        <p className="eyebrow text-[10px] text-ink-faint">Technical</p>
        <span className="h-px flex-1 bg-rule" />
      </div>
      <dl className="lg:grid lg:grid-cols-[150px_1fr] lg:gap-x-8 lg:gap-y-7 space-y-6 lg:space-y-0">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="lg:contents">
            <dt className="eyebrow text-[10px] text-ink-faint mb-1.5 lg:mb-0 lg:pt-1">{label}</dt>
            <dd className="m-0 text-sm lg:text-base text-ink-soft leading-relaxed">
              {skills.join(', ')}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </Panel>
)

export default Skills
