import FooterNav from "./FooterNav";
import ScheduleCallback from "./ScheduleCallback";

export default function Footer() {
  return (
    <>
      <div className="bg-cover bg-[#E3F1FF]">
        <ScheduleCallback />
      </div>
      <div>
        <FooterNav />
      </div>
    </>
  );
}
