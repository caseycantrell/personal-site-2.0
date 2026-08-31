import Image from 'next/image'
import Panel from './UI/Panel'
import selfPic from '../../../public/images/self.jpg'
import type { PanelProps } from './UI/panels'

const About = ({ onNavigate }: PanelProps) => (
  <Panel current="about" onNavigate={onNavigate}>
    <div className="flex flex-col col-span-5 justify-center px-8 lg:pl-24 lg:pr-12 py-8 lg:py-0">
      <div className="flex flex-row items-center gap-6 mb-10">
        {/* 100x107 keeps the source 1079x1159 ratio; shrink-0 stops the flex row
            from squashing one axis and tripping next/image's aspect warning */}
        <Image src={selfPic} width={100} height={107} alt="Casey Cantrell" placeholder="blur" className="rounded-lg shadow-md shrink-0" />
        <div>
          <p className="eyebrow text-[10px] text-ink-faint mb-2">About</p>
          <p className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">Casey Cantrell</p>
        </div>
      </div>
      <div className="max-w-2xl space-y-6">
        <p className="text-sm lg:text-base text-ink-soft leading-relaxed">
          I&apos;m a full-stack engineer in Austin, four years into shipping production web
          applications. These days I&apos;m on a distributed remote team building a geospatial
          monitoring platform, working across the interfaces and the Python and Django
          services behind them. Before that I spent three years in a Rails and Next.js
          codebase at a custom apparel manufacturer here in Austin.
        </p>
        <p className="text-sm lg:text-base text-ink-soft leading-relaxed">
          I came to engineering from music, after about a decade as a DJ and producer. Most
          of that work lived in the last ten percent, the part where a mix is technically
          finished and you keep going anyway, and software turns out to be the same. It left
          me with a stubborn eye for interface detail and a lot of patience for revision. I
          still play out whenever possible.
        </p>
      </div>
    </div>
  </Panel>
)

export default About
