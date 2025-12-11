import Link from "next/link";
import { Video, Image } from "./_components";
import { ArrowUpLeft } from "lucide-react";

export default function Home() {
  return (
    <div className="mx-auto my-6 max-w-[640px] flex flex-col gap-8">
      <div className="px-3 flex flex-col gap-3">
        <Link
          className="group inline-flex items-center gap-[2px] text-gray-500 cursor-pointer"
          href="/"
        >
          <ArrowUpLeft
            size={16}
            className="transform transition-transform duration-200 translate-x-[1px] translate-y-[0px] group-hover:translate-x-[-1px] group-hover:translate-y-[-2px]"
          />
          Home
        </Link>

        <h1 className="font-semibold text-4xl">Work</h1>
      </div>

      <p className="px-3 text-body">
        I’m trying to collect and document my design engineering work. Below you
        can see a collection of videos and interactive components that showcase
        some of the things I’ve built.
      </p>

      <Video
        playbackId="ip6Y5xQUUPw6H7KH01s2C00DMzTDElWf402aPPh1qGmBaw"
        title="Bidirectionally sortable table"
        aspectRatio="16/9"
        placeholderColor="#FFFFFF"
      />

      <Image
        url="https://bm4c4vapik.ufs.sh/f/GphVSedvuVZItVUm2mGarYjisfNSJH1Z5qb96EIcePWADmw8"
        title="Sidebar for Ophelia"
        width={640}
        height={360}
      />

      <Video
        playbackId="018EkXcMLP016kp02nUyOMTrzYOeTA4br01Cb67dCt02KfDE"
        title="Onboarding flow"
        aspectRatio="16/9"
        placeholderColor="#F5F6FE"
      />

      <Video
        playbackId="oWZP8nHnDz029MSo01626fGazI4XUkaC5mFSJ7AAQhgm4"
        title="Stateful button"
        aspectRatio="16/9"
        placeholderColor="#F1F1F6"
      />

      <Video
        playbackId="MG8uN02gdP7iW4xcmGmniNiRNqMGz02wbyzWHM3AWP27U"
        title="Search interaction"
        aspectRatio="638/328"
        placeholderColor="#FBFBFB"
      />

      <Video
        playbackId="QZoC02ySXGjKW8P01LYwXCLkxgCbFCmiptq9NKl01ctDeg"
        title="Microinteraction in a checkbox"
        aspectRatio="639/341"
        placeholderColor="#F6F6F6"
      />

      <Link
        className="group inline-flex items-center gap-[2px] text-gray-500 cursor-pointer"
        href="/"
      >
        <ArrowUpLeft
          size={16}
          className="transform transition-transform duration-200 translate-x-[1px] translate-y-[0px] group-hover:translate-x-[-1px] group-hover:translate-y-[-2px]"
        />
        Back
      </Link>
    </div>
  );
}
