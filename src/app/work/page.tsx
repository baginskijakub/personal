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
        url={
          "https://bm4c4vapik.ufs.sh/f/GphVSedvuVZIJHJUBn1RWeLYUHVusp2kZwvKDG0P5JS3B6i9"
        }
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
        url={
          "https://bm4c4vapik.ufs.sh/f/GphVSedvuVZIXm4KfYtPcpNoCYLz0qBfF5JdDexVnmQMsTb7"
        }
        title="Onboarding flow"
        aspectRatio="16/9"
        placeholderColor="#F5F6FE"
      />

      <Video
        url={
          "https://bm4c4vapik.ufs.sh/f/GphVSedvuVZI9oVmYK2rfLZF1RYvgW9N46M2amcsKCHoIPA7"
        }
        title="Stateful button"
        aspectRatio="16/9"
        placeholderColor="#F1F1F6"
      />

      <Video
        url={
          "https://bm4c4vapik.ufs.sh/f/GphVSedvuVZIdb9LtKNRKzNMUA2BTqPn6iOmlwWV4Z8Ip57a"
        }
        title="Search interaction"
        aspectRatio="638/328"
        placeholderColor="#FBFBFB"
      />

      <Video
        url={
          "https://bm4c4vapik.ufs.sh/f/GphVSedvuVZInPQD3zS0zS2CfgX48qF1iblh3KPVamAEpYGN"
        }
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
