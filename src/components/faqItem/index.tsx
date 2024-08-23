import { IFAQProps } from "@utils/typeUtils";
import S from "./index.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
import puls from "@assets/icon-plus.svg";
import minus from "@assets/icon-minus.svg";
import { FAQ_DATA } from "@utils/dataUtils";
import clsx from "clsx";

interface IProps {
  data: IFAQProps;
  activeId: number | null;
  setActiveId: Dispatch<SetStateAction<number | null>>;
}

export const FAQItem: FC<IProps> = ({ data, activeId, setActiveId }) => {
  const isActive = activeId === data.id;

  const handleClick = () => {
    setActiveId(isActive ? null : data.id);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    } else if (e.key === "ArrowDown") {
      const nextElement = (
        e.currentTarget.parentElement?.nextElementSibling as HTMLElement
      )?.querySelector("button");
      nextElement?.focus();
    } else if (e.key === "ArrowUp") {
      const prevElement = (
        e.currentTarget.parentElement?.previousElementSibling as HTMLElement
      )?.querySelector("button");
      prevElement?.focus();
    }
  };

  return (
    <div className={S.root}>
      <button
        type="button"
        className={S.root_toggle}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isActive}
        aria-controls={`faq-content-${data.id}`}
        data-testid={`faq-button-${data.id}`}
      >
        <h3 id={`faq-title-${data.id}`}>{data.title}</h3>
        <img
          src={isActive ? minus : puls}
          alt={isActive ? "Collapse" : "Expand"}
        />
      </button>
      <span
        id={`faq-content-${data.id}`}
        className={clsx(S.root_content, isActive && S.active)}
        aria-hidden={!isActive}
        role="region"
        aria-labelledby={`faq-title-${data.id}`}
        data-testid={`faq-content-${data.id}`}
      >
        {data.content}
      </span>
      {data.id < FAQ_DATA.length && <div className={S.line} />}
    </div>
  );
};
