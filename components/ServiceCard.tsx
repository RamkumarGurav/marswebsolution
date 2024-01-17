import Link from "next/link";
import { IoMdDesktop } from "react-icons/io";

export default function ServiceCard({
  service,
}: {
  service: { title: string; desc: string; icon: React.ReactNode; link: string };
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 text-white">
      <Link href={service.link}>{service.icon}</Link>

      <h2 className="text-center text-2xl font-semibold">{service.title}</h2>
      <p className="text-center">{service.desc}</p>
      <Link href={`${service.link}`} className="underline border-b-slate-100">
        Learn More
      </Link>
    </div>
  );
}
