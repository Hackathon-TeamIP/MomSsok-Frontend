import type { Transportation } from "@/shared/types/space";

interface TransportationInfoProps {
  transportation: Transportation;
}

export const TransportationInfo = ({
  transportation,
}: TransportationInfoProps) => {
  return (
    <div className="space-y-1">
      {transportation.subway.map((subway, index) => (
        <div key={index} className="text-sm">
          <span className="text-primary">{subway.station} </span>
          <span className="text-[#424242]">
            {subway.exit}번 {subway.directions}
          </span>
        </div>
      ))}
      {transportation.bus.map((bus, index) => (
        <div key={index} className="text-sm">
          <span className="text-[#6290C7]">{bus.type}</span>{" "}
          <span className="text-[#424242]">
            {bus.bus_number} {bus.directions}
          </span>
        </div>
      ))}
    </div>
  );
};
