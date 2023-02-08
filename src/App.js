import { useEffect, useState } from "react";
import { SPRITE_SHEET_SRC } from "./helpers/consts";
import RenderLevel from "./components/level-layout/RenderLevel";

function App() {
  const [spriteSheetImage, setSpriteSheetImage] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITE_SHEET_SRC;
    image.onload = () => {
      setSpriteSheetImage(image);
    };
  }, []);

  if (!spriteSheetImage) {
    return null;
  }

  return <RenderLevel spriteSheetImage={spriteSheetImage} />;
}

export default App;
