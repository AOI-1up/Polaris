import { useState } from "react";
import Image from "next/image";
import { UseCanvasState } from "@/hooks/UseCanvasState";
import { Props } from "@/types/resources";
import { ServiceSelector } from "@/utils/serviceSelector";
import { DragAndDrop } from "@/utils/dragAndDrop";
import { useSetAtom } from "jotai";
import { CanvasElement } from "@/components/atom/CanvasElement";
import { CanvasElementObject } from "@/types/canvas";

export const ArchitectureIcon = (props: Props) => {
  const [showDragged, setShowDragged] = useState(false);
  const [draggedSrc, setDraggedSrc] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const serviceList = ServiceSelector({ type: props.resources });
  const state = UseCanvasState();

  /* 要素を Jotai に追加する関数 */
  const setCanvasElementArray = useSetAtom(CanvasElement);
  const setCanvasElement = (newCanvasElement: CanvasElementObject) => {
    setCanvasElementArray((prevArray) => [...prevArray, newCanvasElement]);
  };

  return (
    <div className="w-full flex flex-wrap items-end">
      {serviceList.map((service, index) => (
        <div key={index} className="flex w-1/4 justify-center mb-1">
          <div
            className="w-[45px] h-[45px] flex justify-center items-center hover:bg-gray-300 active:opacity-50 rounded"
            onMouseDown={() => {
              const serviceIcon = {
                name: service.name,
                src: service.src,
                width: service.width,
                height: service.height,
                resources: service.resources,
              };
              DragAndDrop(
                setShowDragged,
                setPosition,
                setCanvasElement,
                serviceIcon,
                state
              );
              setDraggedSrc(serviceIcon.src);
            }}
          >
            <Image
              src={service.src}
              className="pointer-events-none"
              width={35}
              height={35}
              alt=""
              priority
            />
          </div>
        </div>
      ))}

      {showDragged && (
        <Image
          src={draggedSrc}
          className="pointer-events-none opacity-50"
          width={80}
          height={80}
          style={{
            position: "fixed",
            left: position.x + "px",
            top: position.y + "px",
          }}
          alt=""
          priority
        />
      )}
    </div>
  );
};
