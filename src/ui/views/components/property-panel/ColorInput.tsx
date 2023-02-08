import { forwardRef, ReactNode, useCallback, useMemo } from "react";
import { RgbColor, RgbaColor, RgbColorPicker, RgbaColorPicker } from "react-colorful";
import * as Popover from "@radix-ui/react-popover";

import { Label } from "../../../atoms/text/Label";
import { NumericInput } from "../../../atoms/input/NumericInput";
import "./ColorInput.css";

type ColorPreviewProps = {
  label: string;
  color: Float32Array;
  onClick?: () => void;
  disabled?: boolean;
};

export const ColorPreview = forwardRef<HTMLButtonElement, ColorPreviewProps>(
  ({ label, color, onClick, disabled }, ref) => (
    <button aria-label={label} className="ColorPreview" onClick={onClick} ref={ref} disabled={disabled}>
      <span style={{ backgroundColor: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3] ?? 1})` }} />
    </button>
  )
);

type ColorType = "rgb" | "rgba";
type ColorInputProps<T extends ColorType> = {
  type: T;
  value: Float32Array;
  onChange: (value: Float32Array) => void;
};

type ColorPickerProps<T extends ColorType> = ColorInputProps<T> & {
  children: ReactNode;
};

export function ColorPicker<T extends ColorType>({ type, value, onChange, children }: ColorPickerProps<T>) {
  const color = useMemo(() => ({ r: value[0], g: value[1], b: value[2], a: value[3] }), [value]);

  const setColor = useCallback(
    (value: RgbColor | RgbaColor) => {
      if (type === "rgb") {
        const rgb = value as RgbColor;
        onChange(new Float32Array([rgb.r, rgb.g, rgb.b]));
      } else {
        const rgba = value as RgbaColor;
        onChange(new Float32Array([rgba.r, rgba.g, rgba.b, rgba.a]));
      }
    },
    [type, onChange]
  );

  return (
    <Popover.Root>
      <Popover.Trigger asChild>{children}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={5}>
          <div className="ColorPicker">
            {type === "rgb" ? (
              <RgbColorPicker color={color} onChange={setColor} />
            ) : (
              <RgbaColorPicker color={color} onChange={setColor} />
            )}
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function ColorInput<T extends ColorType>({
  value,
  type,
  onChange,
  disabled,
}: ColorInputProps<T> & { disabled?: boolean }) {
  const setColor = useCallback(
    (index: number, element: number, value: Float32Array) => {
      const color = [...value];
      color[index] = element;

      onChange(new Float32Array(color));
    },
    [onChange]
  );

  return (
    <div className=" ColorInput flex items-center grow">
      <ColorPicker type="rgba" value={value} onChange={onChange}>
        <ColorPreview label="Pick Color" color={value} disabled={disabled} />
      </ColorPicker>
      <NumericInput
        before={
          <Label color="surface-low" className="shrink-0">
            R
          </Label>
        }
        className="flex grow basis-0"
        type="u32"
        min={0}
        max={255}
        value={value[0]}
        inputSize="sm"
        onChange={(r) => setColor(0, r, value)}
        outlined
        disabled={disabled}
      />

      <NumericInput
        before={
          <Label color="surface-low" className="shrink-0">
            G
          </Label>
        }
        className="flex grow basis-0"
        type="u32"
        min={0}
        max={255}
        value={value[1]}
        inputSize="sm"
        onChange={(g) => setColor(0, g, value)}
        outlined
        disabled={disabled}
      />

      <NumericInput
        before={
          <Label color="surface-low" className="shrink-0">
            B
          </Label>
        }
        className="flex grow basis-0"
        type="u32"
        min={0}
        max={255}
        value={value[2]}
        inputSize="sm"
        onChange={(b) => setColor(0, b, value)}
        outlined
        disabled={disabled}
      />
      {type === "rgba" && (
        <>
          <NumericInput
            before={
              <Label color="surface-low" className="shrink-0">
                A
              </Label>
            }
            className="flex grow basis-0"
            type="f32"
            min={0}
            max={1}
            displayPrecision={3}
            mdStep={0.1}
            value={value[3]}
            inputSize="sm"
            onChange={(a) => setColor(0, a, value)}
            outlined
            disabled={disabled}
          />
        </>
      )}
    </div>
  );
}
