import Image from "next/image";

export function GateMark() {
  return (
    <Image
      className="gate-mark"
      src="/images/haf-mark.png"
      alt=""
      width={145}
      height={143}
    />
  );
}
