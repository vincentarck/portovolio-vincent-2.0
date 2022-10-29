import Head from "next/head";
import {
  Header,
  Hero,
  About,
  WorkExperience,
  Skils,
  Projects,
  Contact,
} from "../components";
import Image from "next/image";
import Link from "next/link";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocial";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};
const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#2FF3E0]/80 z-0">
      <Head>
        <title>Vincent Portofolio</title>
      </Head>

      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About about={pageInfo}/>
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skils skills={skills}/>
      </section>

      {/* Projects */}

      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact contact={pageInfo}/>
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="/profile.png"
              width={40}
              height={40}
              alt="footer"
              className="rounded-full gracycale hover:grayscale-0"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> =async () => {
  const pageInfo:PageInfo = await fetchPageInfo()
  const experiences:Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }
  }
}

export default Home;
