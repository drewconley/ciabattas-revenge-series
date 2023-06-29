export default function LevelPlacementsLayer({ level }) {
  return level.placements
    .filter((placement) => {
      return !placement.hasBeenCollected;
    })
    .map((placement) => {
      // Wrap each Sprite in a positioned div
      const [x, y] = placement.displayXY();
      const style = {
        position: "absolute",
        transform: `translate3d(${x}px, ${y}px, 0)`,
        zIndex: placement.zIndex(),
      };

      return (
        <div
          key={placement.id}
          style={style}
          onClick={() => {
            if (!level.enableEditing || !placement.canBeDeleted()) {
              return;
            }
            level.deletePlacement(placement);
          }}
        >
          {placement.renderComponent()}
        </div>
      );
    });
}
