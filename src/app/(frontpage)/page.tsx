import { ArrowUpRight } from "lucide-react";
import { Block, Links } from "./_components";

export default function Home() {
  return (
    <div className="mx-auto my-12 px-4 max-w-[800px] flex flex-col gap-12">
      <h1 className="ml-12 font-semibold text-xl">Jacob Baginski</h1>

      <Block.Root>
        <Block.Side>About</Block.Side>

        <Block.Content>
          <p>
            I’m a software engineer working at the intersection of design &
            technology.
          </p>

          <p>
            I’m currently living in Aarhus, Denmark with my girlfriend and two
            cats. We moved here from Wroclaw, Poland a couple of years back. In
            my spare time, I enjoy tinkering with software, like building side
            projects or random components that will never see the daylight. I
            love trying out new programming languages, Vim plugins, and steaks
            which I tend to eat hundreds of.
          </p>
        </Block.Content>
      </Block.Root>

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
            <i> Ophelia</i>, an applicant tracking system that includes
            generating custom job posting pages. The idea is to make this tool
            minimal so users can very quickly setup a job posting and share it
            on their Twitter, Linkedin or other channels.
          </p>
        </Block.Content>
      </Block.Root>

      <Block.Root>
        <Block.Side>Works</Block.Side>

        <Block.Content>
          <p>I’m trying to collect and document my design engineering work.</p>

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

      <Block.Root>
        <Block.Side>Tools</Block.Side>

        <Block.Content>
          <p>
            I mainly work with frontend technologies, so naturally most of my
            work is done in <i>Typescript</i>. On top of that, I’m a big fan of
            <i> Next.js</i> which I use on a daily basis.
          </p>

          <p>
            When it comes to other programming languages, I’ve had a chance to
            work with <i>Go</i> once, and I liked it a lot, especially the
            concurrency model.
          </p>
        </Block.Content>
      </Block.Root>

      <Block.Root>
        <Block.Side>Info</Block.Side>

        <Block.Content>
          <Links />
        </Block.Content>
      </Block.Root>
    </div>
  );
}
