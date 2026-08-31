import Image from 'next/image'
import Panel from './UI/Panel'
import selfPic from '../../../public/images/self.jpg'
import type { PanelProps } from './UI/panels'

const About = ({ onNavigate }: PanelProps) => (
  <Panel current="about" onNavigate={onNavigate}>
    <div className="flex flex-col col-span-5 px-8 lg:pl-32 justify-center mb-4">
      <div className="flex flex-col lg:flex-row items-center mb-6 mt-4 lg:mt-0 ml-0 lg:ml-1">
        {/* 100x107 keeps the source 1079x1159 ratio; shrink-0 stops the flex row
            from squashing one axis and tripping next/image's aspect warning */}
        <Image src={selfPic} width={100} height={107} alt="Casey Cantrell" placeholder="blur" className="rounded-md shadow-md shrink-0" />
        <p className="text-4xl lg:text-5xl font-extrabold lg:ml-6 mt-4 lg:mt-0">About</p>
      </div>
      <div className="mt-2">
        <p className="flex text-sm lg:text-lg font-semibold">
          I&apos;m a full-stack engineer in Austin, four years into shipping production web
          applications. These days I&apos;m on a distributed remote team building a geospatial
          monitoring platform, working across the interfaces and the Python and Django
          services behind them. Before that I spent three years in a Rails and Next.js
          codebase at a custom apparel manufacturer here in Austin.
        </p>
        <p className="flex mt-8 text-sm lg:text-lg font-semibold">
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
