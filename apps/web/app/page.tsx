import Image from "next/image";
import QRCode from 'qrcode'

export default async function Page() {
  const code = await QRCode.toDataURL('I am a pony!')
  return (
    <div>
      <h1>Hello World</h1>
      <Image src={code} alt="QR Code" width={100} height={100} />
    </div>
  );
}
