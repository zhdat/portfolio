import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Bot,
  Car,
  Dices,
  LucideIcon,
  Search,
  ShieldAlert,
  Wand,
} from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] w-full">
        <Card className="w-full flex flex-col gap-2 p-4">
          <p className="text-lg text-muted-foreground">Projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <Projects key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-1 gap-4 w-full h-full flex flex-col">
        <Card className="p-4 w-full flex-1">
          <p className="text-lg text-muted-foreground">Works</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Works key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 w-full flex-1">
          <p className="text-lg text-muted-foreground">Contact Me !</p>
          <div className="flex flex-col gap-4">
            {CONTACTS.map((contact, index) => (
              <Contact key={index} {...contact} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: ProjectsProps[] = [
  {
    Logo: Bot,
    title: "Sudoku assistant",
    description:
      "Software developed in the Qt Creator environment, designed to provide intelligent assistance to Sudoku enthusiasts.",
    url: "https://github.com/zhdat/assistant-de-resolution-de-sudoku",
  },
  {
    Logo: ShieldAlert,
    title: "Hatecheck Detector",
    description:
      "Detection of Hate Speech in French content on social network sentences",
    url: "https://github.com/zhdat/hatecheck-detector",
  },
  {
    Logo: Search,
    title: "License to kill",
    description:
      "This project is a complex simulation of a spy network operating in a fictional city.",
    url: "https://github.com/zhdat/License-to-Kill",
  },
  {
    Logo: Wand,
    title: "Mentalism",
    description:
      "The “Magie Mentalisme” stopwatch application was designed for Android and iOS platforms with a unique functionality: integrating elements of magic into the use of the stopwatch.",
    url: "https://github.com/zhdat/mentalism",
  },
  {
    Logo: Car,
    title: "Vrouuuum",
    description:
      "The proposed challenge consisted of programming a Formula 1 driver racing on a virtual circuit, communicating with a race manager who provided information on the race and the other drivers.",
    url: "https://github.com/zhdat/vrooum",
  },
  {
    Logo: Dices,
    title: "vie_ma_vie_d_ensicaenais",
    description:
      "This project consists of creating a goose game adapted to the life of a student at ENSICAEN.",
    url: "https://github.com/zhdat/vie_ma_vie_d_ensicaenais",
  },
];

type ProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
};

const Projects = (props: ProjectsProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo size={20} />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};

const WORKS: WorksProps[] = [
  {
    image: "https://c.woopic.com/logo-orange.png",
    title: "Orange Innovation Academy",
    role: "Project",
    date: "Present",
    url: "https://www.ensicaen.fr/orange-innovation-academy-dispositif-unique-service-de-transformation-numerique/",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOFqxRLidfm5yYpvptY4XH1y96TrvQESOQdQ&s",
    title: "NTNU",
    role: "Internship",
    date: "2024",
    url: "https://www.ntnu.edu/",
  },
  {
    image:
      "data:image/png;base64,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",
    title: "GD Patisserie",
    role: "Developer Freelance",
    date: "Present",
    url: "https://www.instagram.com/g.dpatisserie/",
    freelance: true,
  },
  {
    image:
      "https://www.economie.gouv.fr/files/styles/blocs_mis_en_avant/public/files/directions_services/dgfip/dgfip_logo_bloc_accueil.jpg?itok=HknrNJt9",
    title: "Centre des Impôts d’Avranches",
    role: "Employee",
    date: "2023",
    url: "https://www.economie.gouv.fr/dgfip",
  },
];

type WorksProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
};

const Works = (props: WorksProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
          {props.freelance && (
            <Badge
              variant="outline"
              className="bg-accent text-accent-foreground"
            >
              Mission
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-xs text-muted-foreground text-end">{props.date}</p>
      </div>
    </Link>
  );
};

const CONTACTS: ContactProps[] = [
  {
    image: "https://www.linkedin.com/favicon.ico",
    title: "LinkedIn",
    description: "Professional network",
    url: "https://www.linkedin.com/in/calliste-ravix-0715b6210/",
  },
  {
    image: "https://www.github.com/favicon.ico",
    title: "GitHub",
    description: "Projects",
    url: "https://github.com/zhdat",
  },
];

type ContactProps = {
  image: string;
  title: string;
  url: string;
  description: string;
};

const Contact = (props: ContactProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
    </Link>
  );
};
