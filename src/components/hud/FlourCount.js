import { PLACEMENT_TYPE_FLOUR } from "../../helpers/consts";

export default function FlourCount({ level }) {
  const count = level.placements.filter((p) => {
    return p.type === PLACEMENT_TYPE_FLOUR && !p.hasBeenCollected;
  }).length;

  return (
    <p
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        color: "#fff",
      }}
    >
      Flour Remaining: {count}
    </p>
  );
}
