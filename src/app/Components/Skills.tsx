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
    <div className="flex flex-col justify-center col-span-5 pl-6 pr-4 lg:pl-32 lg:pr-8">
      <div className="grid grid-cols-2 gap-y-6 lg:gap-y-8 lg:flex lg:flex-col">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-end">
            <p className="font-bold lg:font-extrabold text-xl lg:text-4xl mr-1 ml-2 lg:ml-0 lg:whitespace-nowrap">{label}:</p>
            {skills.map((skill, index) => (
              <p key={skill} className="text-md lg:text-xl font-semibold ml-6 lg:ml-1">
                {skill}<span className="hidden lg:inline">{index !== skills.length - 1 && ","}</span>
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </Panel>
)

export default Skills
