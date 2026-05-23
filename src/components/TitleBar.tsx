import { getCurrentWindow } from "@tauri-apps/api/window";

export function TitleBar() {
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      getCurrentWindow().startDragging();
    }
  };

  const handleMinimize = () => {
    getCurrentWindow().minimize();
  };

  const handleClose = () => {
    getCurrentWindow().close();
  };

  return (
    <div className="flex items-center justify-between h-8 px-3 select-none">
      <div
        data-tauri-drag-region
        onMouseDown={handleMouseDown}
        className="flex items-center gap-2 flex-1 cursor-grab active:cursor-grabbing"
      >
        <span className="text-sm font-semibold">DevPad</span>
      </div>

      <div className="flex items-center gap-1">
        <button
          onMouseDown={(e) => e.stopPropagation()}
          onClick={handleMinimize}
        >
          —
        </button>
        <button onMouseDown={(e) => e.stopPropagation()} onClick={handleClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
