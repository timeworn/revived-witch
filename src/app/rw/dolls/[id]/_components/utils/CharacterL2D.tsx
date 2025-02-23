import React, { useEffect, useRef, useCallback, useState } from "react";
import { config, Live2DModel, MotionPriority } from "pixi-live2d-display";
import { Application, SCALE_MODES, settings, Ticker } from "pixi.js";
import {
  ReactZoomPanPinchContentRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import {
  SetShowSkinParams,
  SKIN_TYPES,
} from "../../../../../../interfaces/CharacterInterfaces";
import { RWCharacter } from "../../../../../../classes/character/RWCharacter";
import {
  MagnifyingGlassMinusIcon,
  MinusIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

settings.ROUND_PIXELS = true;
settings.SCALE_MODE = SCALE_MODES.NEAREST;

Live2DModel.registerTicker(Ticker);
config.idleMotionFadingDuration = 0;

const SCALE_FACTOR = 0.25;
const IDLE_ANIM_PATH = "motions/normal01.motion3.json";
const MOTION_CACHE = new Map();
const MIN_SCALE = 0.5;

const preloadMotion = async (url: string) => {
  if (MOTION_CACHE.has(url)) return MOTION_CACHE.get(url);
  try {
    const res = await fetch(url, { priority: "high" });
    const json = await res.json();
    MOTION_CACHE.set(url, json);
    return json;
  } catch (err) {
    console.error(`Failed to preload motion: ${url}`, err);
    return null;
  }
};

interface L2DSetupResult {
  live2DModel: Live2DModel | null;
  cleanup: () => void;
}

const l2dCanvas = async (
  character: RWCharacter,
  pixiApp: Application,
  skinIndex: number,
): Promise<L2DSetupResult> => {
  const { stage, view } = pixiApp;
  const l2d = character.skins.list[skinIndex]?.l2d;
  if (!l2d) return { live2DModel: null, cleanup: () => {} };

  let model: Live2DModel | null = null;

  const cleanup = () => {
    if (model) {
      model.destroy();
      for (const key in model) {
        if (Object.prototype.hasOwnProperty.call(model, key)) {
          if (Array.isArray((model as any)[key])) {
            (model as any)[key].length = 0;
          } else {
            (model as any)[key] = null;
          }
        }
      }
      model = null;
    }
    stage.removeChildren();
    MOTION_CACHE.clear();
  };

  try {
    const dimensions = {
      width: view.width,
      height: view.height,
      centerX: view.width / 2,
      centerY: view.height / 2,
    };

    cleanup();

    const modelUrl = `${l2d.path}/${l2d.name}.model3.json`;

    const modelJson = await fetch(modelUrl).then((res) => res.json());
    modelJson.url = modelUrl;

    modelJson.FileReferences.Motions.Idle = [
      {
        File: IDLE_ANIM_PATH,
      },
    ];

    model = await Live2DModel.from(modelJson, {
      autoUpdate: true,
    });

    if (!model) throw new Error("Failed to load model");

    const { motionManager } = model.internalModel;
    const definitionList = motionManager.definitions[""] ?? [];

    const loadMotions = async () => {
      const motions = await Promise.all(
        definitionList.map(async (motionDef, i) => {
          const motionUrl = motionManager.settings.resolveURL(motionDef.File);

          try {
            const json = await preloadMotion(motionUrl);
            if (!json) return null;

            const motion = motionManager.createMotion(json, "motion", i);
            return motion;
          } catch (error) {
            console.warn(`Failed to load motion: ${motionDef.File}`, error);
            return null;
          }
        }),
      );

      return motions.filter(Boolean);
    };

    const setupModel = () => {
      if (!model) return;

      const x = dimensions.centerX;
      const y = dimensions.centerY;

      model.scale.set(SCALE_FACTOR);
      model.position.set(x, y);
      model.anchor.set(0.5);

      stage.sortChildren();
    };

    const motions = await loadMotions();
    motions.forEach((motionData) => {
      if (motionData) {
        const motion = motionData;
        if (motion) {
          motionManager.motionGroups[""]?.push(motion);
        }
      }
    });

    setupModel();
    stage.addChild(model);

    return {
      live2DModel: model,
      cleanup: () => {
        cleanup();
      },
    };
  } catch (err) {
    console.error("L2D initialization error:", err);
    cleanup();
    return { live2DModel: model, cleanup: () => {} };
  }
};

interface ControlsProps {
  character: RWCharacter;
  showSkin: SetShowSkinParams;
  utils: ReactZoomPanPinchContentRef;
  handleClose: () => void;
  live2DModel: Live2DModel | null;
}

const Controls: React.FC<ControlsProps> = ({
  utils,
  character,
  showSkin,
  handleClose,
  live2DModel,
}) => {
  const motions = live2DModel?.internalModel?.motionManager.definitions[""];

  return (
    <>
      <div className="none-gray navbar relative top-0 z-10 flex w-full flex-row items-center !bg-opacity-75">
        <p className="text-title flex-1 text-center text-2xl">
          {character.skins.list[showSkin.index]?.name}
        </p>
        <div className="flex-none gap-2">
          <div hidden={!motions}>
            <details className="dropdown dropdown-end">
              <summary className="btn btn-ghost">
                <svg
                  className="svg-fill-alt"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M360-80q-58 0-109-22t-89-60q-38-38-60-89T80-360q0-81 42-148t110-102q20-39 49.5-68.5T350-728q33-68 101-110t149-42q58 0 109 22t89 60q38 38 60 89t22 109q0 85-42 150T728-350q-20 39-49.5 68.5T610-232q-35 68-102 110T360-80Zm0-80q33 0 63.5-10t56.5-30q-58 0-109-22t-89-60q-38-38-60-89t-22-109q-20 26-30 56.5T160-360q0 42 16 78t43 63q27 27 63 43t78 16Zm120-120q33 0 64.5-10t57.5-30q-59 0-110-22.5T403-403q-38-38-60.5-89T320-602q-20 26-30 57.5T280-480q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm120-120q18 0 34.5-3t33.5-9q22-60 6.5-115.5T621-621q-38-38-93.5-53.5T412-668q-6 17-9 33.5t-3 34.5q0 42 15.5 78t43.5 63q27 28 63 43.5t78 15.5Zm160-78q20-26 30-57.5t10-64.5q0-42-15.5-78T741-741q-27-28-63-43.5T600-800q-35 0-65.5 10T478-760q59 0 110 22.5t89 60.5q38 38 60.5 89T760-478Z" />
                </svg>
              </summary>
              <ul className="bg-color menu dropdown-content z-[1] mt-4 w-52 rounded-box bg-base-100 p-2 shadow">
                {motions?.map((motionDef, index) => (
                  <li key={index}>
                    <button
                      className="btn-ghost"
                      onClick={() => {
                        live2DModel?.motion("", index, MotionPriority.FORCE);
                      }}
                    >
                      {(motionDef.File as string)
                        .split("/")
                        .pop()
                        ?.replace(".motion3.json", "")}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>
          <button
            className="btn btn-circle btn-ghost fill-white"
            onClick={() => {
              utils.resetTransform(0);
              handleClose();
            }}
            aria-label="close"
          >
            <XMarkIcon className="svg-fill-alt" width={32} height={32} />
          </button>
        </div>
      </div>
      <div className="round-gray absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 justify-center gap-2 p-2">
        <button
          className="btn-round-gray btn-anim p-1"
          onClick={() => utils.zoomOut()}
        >
          <MinusIcon className="svg-fill-alt" width={24} height={24} />
        </button>
        <button
          className="btn-round-gray btn-anim p-1"
          onClick={() => utils.resetTransform()}
        >
          <MagnifyingGlassMinusIcon
            className="svg-fill-alt"
            width={24}
            height={24}
          />
        </button>
        <button
          className="btn-round-gray btn-anim p-1"
          onClick={() => utils.zoomIn()}
        >
          <PlusIcon className="svg-fill-alt" width={24} height={24} />
        </button>
      </div>
    </>
  );
};

interface CharacterL2DProps {
  character: RWCharacter;
  showSkin: SetShowSkinParams;
  setShowSkin: ({ index, type }: SetShowSkinParams) => void;
}

const CharacterL2D: React.FC<CharacterL2DProps> = ({
  character,
  showSkin,
  setShowSkin,
}) => {
  const pixiCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const pixiAppRef = useRef<Application | undefined>(undefined);
  const destroyFnRef = useRef<(() => void) | undefined>(undefined);
  const live2DModelRef = useRef<Live2DModel | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    return () => {
      if (pixiAppRef.current) {
        pixiAppRef.current.destroy(true);
        pixiAppRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (showSkin.type === SKIN_TYPES.L2D) {
      const canvas = pixiCanvasRef.current;
      if (!canvas) return;

      setIsLoading(true);

      try {
        if (!pixiAppRef.current) {
          pixiAppRef.current = new Application({
            view: canvas,
            width: 1500,
            height: 1500,
            backgroundAlpha: 0,
            antialias: true,
            powerPreference: "high-performance",
          });
        }

        (async () => {
          if (destroyFnRef.current) {
            destroyFnRef.current();
          }

          const result = await l2dCanvas(
            character,
            pixiAppRef.current as Application,
            showSkin.index,
          );

          if (result) {
            const { live2DModel, cleanup } = result;
            destroyFnRef.current = cleanup;
            live2DModelRef.current = live2DModel;
          }

          setIsLoading(false);
        })();
      } catch (error) {
        console.error("Failed to initialize L2D:", error);
        setIsLoading(false);
      }
    }

    return () => {
      if (destroyFnRef.current) {
        destroyFnRef.current();
        destroyFnRef.current = undefined;
      }
    };
  }, [showSkin, character]);

  const handleClose = useCallback(() => {
    setShowSkin({ index: -1, type: null });
  }, [setShowSkin]);

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex flex-col justify-center gap-2">
      {isLoading && (
        <div className="absolute left-1/2 -translate-x-1/2 text-white">
          Loading...
        </div>
      )}
      <TransformWrapper
        initialScale={MIN_SCALE}
        minScale={0.25}
        maxScale={3}
        centerOnInit={true}
      >
        {(utils) => (
          <div className="flex h-full flex-col items-center">
            <Controls
              utils={utils}
              character={character}
              showSkin={showSkin}
              handleClose={handleClose}
              live2DModel={live2DModelRef.current}
            />
            <TransformComponent wrapperClass="!h-full">
              <canvas
                ref={pixiCanvasRef}
                hidden={showSkin.type !== SKIN_TYPES.L2D}
              />
              <img
                src={character.skins.list[showSkin.index]?.card}
                alt={character.skins.list[showSkin.index]?.name}
                loading="lazy"
                hidden={showSkin.type !== SKIN_TYPES.IMAGE}
              />
            </TransformComponent>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
};

export default CharacterL2D;
