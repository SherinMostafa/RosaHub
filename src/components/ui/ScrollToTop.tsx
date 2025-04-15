"use client";

import { IconArrowUp } from "@tabler/icons-react";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Transition } from "@mantine/core";
import { ClickButton } from "../common/buttons";

export default function ScrollToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Affix className="bottom-4 right-8">
        <Transition transition="slide-up" mounted={scroll.y > 100}>
          {(transitionStyles) => (
            <ClickButton
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              buttonColor="border-none !p-2 size-10 shadow-lg rounded-full bg-primary-light text-white hover:bg-primary-dark hover:text-white !transition-all !duration-300"
            >
              <IconArrowUp size={18} />
            </ClickButton>
          )}
        </Transition>
      </Affix>
    </>
  );
}
