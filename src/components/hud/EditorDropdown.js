import {
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_SWITCH_DOOR,
} from "../../helpers/consts";
import styles from "./EditorDropdown.module.css";

export default function EditorDropdown({ level }) {
  if (!level.enableEditing) {
    return null;
  }

  return (
    <div className={styles.dropdownContainer}>
      <select
        value={level.editModePlacementType}
        onChange={(event) => {
          level.setEditModePlacementType(event.target.value);
        }}
      >
        <option value={PLACEMENT_TYPE_WALL}>Wall</option>
        <option value={PLACEMENT_TYPE_FIRE}>Fire</option>
        <option value={PLACEMENT_TYPE_WATER}>Water</option>
        <option value={PLACEMENT_TYPE_SWITCH}>Switch</option>
        <option value={PLACEMENT_TYPE_SWITCH_DOOR}>Door</option>
      </select>
      <button
        onClick={() => {
          level.copyPlacementsToClipboard();
        }}
      >
        Get JSON
      </button>
    </div>
  );
}
