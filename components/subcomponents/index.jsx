import Image from "next/image";
export const ProfileImage = () => (
  <Image
    className="rounded-full"
    src="/assets/images/profile.png"
    width={37}
    height={37}
    alt="profile"
  />
);
