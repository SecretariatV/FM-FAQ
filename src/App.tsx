import { FAQ_DATA } from "@utils/dataUtils";
import S from "./App.module.scss";
import star from "@assets/icon-star.svg";
import { FAQItem } from "@components/faqItem";
import { useState } from "react";

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className={S.root}>
      <div className={S.root_bg} />
      <div className={S.root_card} role="region" aria-labelledby="card-title">
        <div className={S.root_card_header}>
          <img src={star} alt="Star image" />
          <h2 id="card-title">FAQs</h2>
        </div>
        <div>
          {FAQ_DATA.map((data, index) => (
            <FAQItem
              data={data}
              activeId={activeId}
              setActiveId={setActiveId}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
