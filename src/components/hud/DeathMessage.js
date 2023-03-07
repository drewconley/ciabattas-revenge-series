export default function DeathMessage({ level }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 64,
        color: "red",
        fontWeight: "bold",
      }}
    >
      <p>Death: {level.deathOutcome}</p>
    </div>
  );
}
