/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import picture from "../images/photo-identite.png";
import { Section } from "./Section";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        className,
        "bg-accent/30 hover:bg-accent/60 border border-accent p-1 font-mono rounded-sm text-primary transition-colors cursor-pointer whitespace-nowrap"
      )}
      {...props}
    />
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col gap-2">
        <h2 className="font-caption text-5xl text-primary font-bold">
          Calliste RAVIX
        </h2>
        <h3 className="text-3xl font-caption">Software developper student</h3>
        <p className="font-sans text-justify">
          I am a software developer student at{" "}
          <Link href={"https://www.ensicaen.fr/"}>
            <Code>🎓 ENSICaen</Code>
          </Link>
          . I am passionate about web development and I am always looking for
          new challenges. I am currently looking for an internship in{" "}
          <Code>🧑‍💻 software development</Code> or <Code>🔐 cybersecurity</Code>{" "}
          on Caen, Marseille or Paris 🇫🇷.
        </p>
      </div>
      <div className="flex-1 max-md:m-auto ml-auto">
        <img
          src={picture.src}
          alt="calliste's pictures"
          className="w-28 h-auto max-w-xs rounded-xl"
        />
      </div>
    </Section>
  );
};
