export default function LevelPlacementsLayer({ level }) {
  return level.placements.map((placement) => {
    // Wrap each Sprite in a positioned div
    const [x, y] = placement.displayXY();
    const style = {
      position: "absolute",
      transform: `translate3d(${x}px, ${y}px, 0)`,
    };

    return (
      <div key={placement.id} style={style}>
        {placement.renderComponent()}
      </div>
    );
  });
}
