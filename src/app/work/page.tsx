import { Block } from "../(frontpage)/_components";
import { Video } from "./_components";

export default function Home() {
  return (
    <div className="mx-auto my-12 max-w-[800px] flex flex-col gap-8">
      <h1 className="ml-10 font-semibold text-4xl">Work</h1>

      <Block.Root>
        <Block.Side>Desc</Block.Side>

        <Block.Content>
          <p className="text-body">
            I’m trying to collect and document my design engineering work. Below
            you can see a collection of videos and interactive components that
            showcase some of the things I’ve built.
          </p>
        </Block.Content>
      </Block.Root>

      <Video
        url={
          "https://bm4c4vapik.ufs.sh/f/GphVSedvuVZIh8cnqj6r7NeLduVbcsJ1kywqUZWmIGfHzSFQ"
        }
        title="Onboarding flow for Ophelia"
      />
    </div>
  );
}
