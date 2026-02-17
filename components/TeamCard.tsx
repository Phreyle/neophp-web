import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export default function TeamCard({ name, role, bio, image }: TeamCardProps) {
  return (
    <article className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-neon-cyan/50">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={`${name} portrait`}
          width={72}
          height={72}
          className="rounded-2xl"
        />
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-neon-cyan">{role}</p>
        </div>
      </div>
      <p className="text-sm text-slate-300">{bio}</p>
    </article>
  );
}
