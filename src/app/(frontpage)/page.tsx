"use client";

import { ArrowUpRight } from "lucide-react";
import { Block, Links } from "./_components";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const blockVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="mx-auto my-12 px-4 pl-12 max-w-[640px] flex flex-col gap-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="font-semibold text-xl">Jacob Baginski</h1>

      <motion.div variants={blockVariants}>
        {" "}
        {}
        <Block.Root>
          <Block.Side>About</Block.Side>
          <Block.Content>
            <p>
              I’m a software engineer working at the intersection of design &
              technology.
            </p>
            <p>
              I’m currently living in Aarhus, Denmark with my girlfriend and two
              cats. We moved here from Wroclaw, Poland a couple of years back.
              In my spare time, I enjoy tinkering with software, like building
              side projects or random components that will never see the
              daylight. I love trying out new developer tools and Vim plugins.
              I’m big time into cooking as well. Currently, I’m fighting with
              sourdough bread baking.
            </p>
          </Block.Content>
        </Block.Root>
      </motion.div>

      <motion.div variants={blockVariants}>
        <Block.Root>
          <Block.Side>Now</Block.Side>
          <Block.Content>
            <p>
              I’m currently working as a software engineer at Whiteaway Group,
              building a large e-commerce solution along with internal tooling.
            </p>
            <p>
              In addition to that, I’m always building something as a side gig.
              Currently, together with a dear friend of mine, we are building
              <i> Ophelia</i>, a design system and componenent library builder.
              The idea is to allow designers and developers to create and
              maintain design systems without writing any code. Designers would
              just import the design system into Figma, and developers would get
              an npm package to use in their projects.
            </p>
          </Block.Content>
        </Block.Root>
      </motion.div>

      <motion.div variants={blockVariants}>
        <Block.Root>
          <Block.Side>Works</Block.Side>
          <Block.Content>
            <p>
              I’m trying to collect and document my design engineering work.
            </p>
            <p>
              You can see it{" "}
              <a
                className="group inline-flex items-center gap-[2px] text-gray-500 cursor-pointer"
                href="/work"
              >
                here
                <ArrowUpRight
                  size={16}
                  className="transform transition-transform duration-200 translate-x-[-1px] translate-y-[1px] group-hover:translate-x-[1px] group-hover:translate-y-[-1px]"
                />
              </a>
            </p>
            <p>
              I draw a lot of inspiration from tools like Vercel or Linear. I
              truly admire the craft and attention to detail of engineers and
              designers at those companies, especially <i>@rauno</i> and{" "}
              <i>@emilkowalski</i>.
            </p>
          </Block.Content>
        </Block.Root>
      </motion.div>

      <motion.div variants={blockVariants}>
        <Block.Root>
          <Block.Side>Tools</Block.Side>
          <Block.Content>
            <p>
              I mainly work with frontend technologies, so naturally most of my
              work is done in <i>Typescript</i>. On top of that, I’m a big fan
              of
              <i> Next.js</i> which I use on a daily basis.
            </p>
            <p>
              When it comes to other programming languages, I’ve had a chance to
              work with <i>Go</i> once, and I liked it a lot, especially the
              concurrency model.
            </p>
          </Block.Content>
        </Block.Root>
      </motion.div>

      <motion.div variants={blockVariants}>
        <Block.Root>
          <Block.Side>Info</Block.Side>
          <Block.Content>
            <Links />
          </Block.Content>
        </Block.Root>
      </motion.div>
    </motion.div>
  );
}
