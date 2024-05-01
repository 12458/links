import { get } from "@vercel/edge-config";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaSnapchat, FaTelegram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';

interface Data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
}

interface Link {
  href: string;
  title: string;
  image?: string;
}

interface Social {
  href: string;
  title: string;
  image?: string;
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all 
      border border-gray-300 mb-3 bg-gray-100 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2
          className="flex justify-center items-center 
        font-semibold w-full text-gray-700 -ml-10"
        >
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default async function Home() {
  const data = await get<Data>("config");
  if (!data) {
    redirect("https://blog.shangen.org/");
  }
  return (
    <div className="flex flex-col justify-between min-h-screen w-full">
      <main
        className="flex items-center flex-col mx-auto w-full justify-center pt-16 h-full
    px-8"
      >
        <Image
          className="rounded-full"
          alt={data.name}
          src={data.avatar}
          width={96}
          height={96}
        />

        <h1 className="font-bold mt-4 text-xl mb-8 text-white">{data.name}</h1>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
        <div className="flex items-center gap-4 mt-8 text-white">
          {data.socials.map((social) => {
            if (social.href.includes("twitter")) {
              return <Link key={social.href} href={social.href}><FaTwitter key={social.href} /></Link>;
            }
            if (social.href.includes("github")) {
              return <Link key={social.href} href={social.href}><FaGithub key={social.href} /></Link>;
            }
            if (social.href.includes("facebook")) {
              return <Link key={social.href} href={social.href}><FaFacebook key={social.href} /></Link>;
            }
            if (social.href.includes("instagram")) {
              return <Link key={social.href} href={social.href}><FaInstagram key={social.href} /></Link>;
            }
            if (social.href.includes("linkedin")) {
              return <Link key={social.href} href={social.href}><FaLinkedin key={social.href} /></Link>;
            }
            if (social.href.includes("youtube")) {
              return <Link key={social.href} href={social.href}><FaYoutube key={social.href} /></Link>;
            }
            if (social.href.includes("t.me")) {
              return <Link key={social.href} href={social.href}><FaTelegram key={social.href} /></Link>;
            }
            if (social.href.includes("snapchat")) {
              return <Link key={social.href} href={social.href}><FaSnapchat key={social.href} /></Link>;
            }
            if (social.href.includes("tiktok")) {
              return <Link key={social.href} href={social.href}><FaTiktok key={social.href} /></Link>;
            }
          })}
        </div>
      </main>
      <footer className="p-4">
        <p className="text-slate-500 text-center">
          Made with ❤️ by Shang En. <Link href="https://github.com/12458/links">Source Code.</Link>
        </p>
      </footer>
    </div>
  );
}
