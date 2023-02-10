import Contact from '../../components/Contact';
import Header from '../../components/Header';
import Section from '../../components/Section';
import TechCard from '../../components/TechCard';

export const metadata = {
  title: 'About Me',
};

type CardLink = { title: string; href: string };

export type CardLinks = CardLink[];

const cardOneLinks: CardLinks = [
  {
    title: 'JavaScript',
    href: 'https://javascript.info/',
  },
  {
    title: 'React',
    href: 'https://reactjs.org/',
  },
  {
    title: 'Tailwind',
    href: 'https://tailwindcss.com/',
  },
  {
    title: 'Figma',
    href: 'https://www.figma.com/',
  },
  {
    title: 'NextJS',
    href: 'https://nextjs.org/',
  },
];

const cardTwoLinks: CardLinks = [
  {
    title: 'Supabase',
    href: 'https://supabase.com/',
  },
  {
    title: 'Firebase',
    href: 'https://firebase.google.com/',
  },
  {
    title: 'Framer Motion',
    href: 'https://www.framer.com/motion/',
  },
];

export default function About() {
  return (
    <>
      <Header title="About Me">
        <p className="text-lg">
          I&apos;m Brandon, a frontend web developer interested in making cool
          and interesting web apps using modern technologies. I am based in
          York, England, currently self teaching myself web development (using
          good ol YouTube and docs).
        </p>
      </Header>

      <Section>
        <TechCard title="Tech I use currently:" links={cardOneLinks} />
        <TechCard
          title="Tech I want to learn / am currently learing:"
          links={cardTwoLinks}
        />
      </Section>

      <Contact />
    </>
  );
}