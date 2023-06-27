import { PLACEMENT_TYPE_WALL, PLACEMENT_TYPE_FIRE } from "../../helpers/consts";

export default function EditorDropdown({ level }) {
  if (!level.enableEditing) {
    return null;
  }

  return (
    <div>
      <select
        value={level.editModePlacementType}
        onChange={(event) => {
          level.setEditModePlacementType(event.target.value);
        }}
      >
        <option>{PLACEMENT_TYPE_WALL}</option>
        <option>{PLACEMENT_TYPE_FIRE}</option>
      </select>
    </div>
  );
}
