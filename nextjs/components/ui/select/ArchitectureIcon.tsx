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
  const [draggedImage, setDraggedImage] = useState({
    src: "",
    width: 0,
    height: 0,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const serviceList = ServiceSelector({ type: props.resources });
  const state = UseCanvasState();

  /* 要素を Jotai に追加する関数 */
  const setCanvasElementArray = useSetAtom(CanvasElement);
  const setCanvasElement = (newCanvasElement: CanvasElementObject) => {
    setCanvasElementArray((prevArray) => [...prevArray, newCanvasElement]);
  };

  return (
    <div className="flex w-full flex-wrap items-end">
      {serviceList.map((service, index) => (
        <div key={index} className="mb-1 flex w-1/4 justify-center">
          <div
            className="flex h-[45px] w-[45px] items-center justify-center rounded hover:bg-gray-300 active:opacity-50"
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
                state,
              );
              setDraggedImage({
                src: serviceIcon.src,
                width: serviceIcon.width,
                height: serviceIcon.height,
              });
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
          src={draggedImage.src}
          className="pointer-events-none opacity-50"
          width={draggedImage.width}
          height={draggedImage.height}
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
