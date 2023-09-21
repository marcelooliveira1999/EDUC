import { Object } from "@/components/Objects";
import { objectList } from "@/db/objectList";

import "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <Object object={objectList} />
    </main>
  );
}
