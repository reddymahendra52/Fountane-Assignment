import Image from "next/image";
import Link from "next/link";
import jetstream from "../public/jetprotocol.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <nav className=" px-5 py-5 border-0 border-t-1 rounded-full flex w-full justify-between bg-black items-center">
        <div>
          <Image src={jetstream} width={119} height={25} />
        </div>

        <ul className="flex gap-x-10">
          <li className="text-white">products</li>
          <li className="text-white">dao</li>
          <li className="text-white">build</li>
          <li className="text-white">docs</li>
        </ul>

        <Link href={"/login"}>
          <button className="w-1/8 h-[37px] px-5 py-2 border-1 rounded-full bg-gradient-to-r from-[#64AE9D] to-[#64AE9D], from-[rgba(255,255,255,0.24)] to-[rgba(255,255,255,0.24)] border-[1px] border-[#FFFFFF3D] bg-[#64AE9D] text-black">
            launch app
          </button>
        </Link>
      </nav>
      <section className="text-ceter">
        <h1>The next generation of defi governance</h1>
      </section>
    </main>
  );
}
