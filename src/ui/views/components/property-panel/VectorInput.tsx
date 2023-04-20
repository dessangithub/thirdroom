import { Label } from "../../../atoms/text/Label";
import { NumericInput } from "../../../atoms/input/NumericInput";

interface VectorInputProps {
  type: "vec2" | "vec3" | "vec4";
  value: Float32Array;
  onChange: (value: Float32Array) => void;
  disabled?: boolean;
}

export function VectorInput({ value, type, onChange, disabled }: VectorInputProps) {
  const [x = 0, y = 0, z = 0, w = 0] = value;

  const handleChange = (x: number, y: number, z: number, w: number) => {
    const values = [x, y];
    if (type == "vec3" || type === "vec4") values.push(z);
    if (type === "vec4") values.push(w);
    onChange(new Float32Array(values));
  };

  return (
    <div className="flex items-center grow gap-xs">
      <NumericInput
        before={
          <Label color="surface-low" className="shrink-0">
            X
          </Label>
        }
        className="flex grow basis-0"
        type="f32"
        value={x}
        displayPrecision={3}
        inputSize="sm"
        onChange={(value) => handleChange(value, y, z, w)}
        outlined
        disabled={disabled}
      />
      <NumericInput
        before={
          <Label color="surface-low" className="shrink-0">
            Y
          </Label>
        }
        className="flex grow basis-0"
        type="f32"
        value={y}
        displayPrecision={3}
        inputSize="sm"
        onChange={(value) => handleChange(x, value, z, w)}
        outlined
        disabled={disabled}
      />
      {type === "vec3" ||
        (type === "vec4" && (
          <>
            <NumericInput
              before={
                <Label color="surface-low" className="shrink-0">
                  Z
                </Label>
              }
              className="flex grow basis-0"
              type="f32"
              value={z}
              displayPrecision={3}
              inputSize="sm"
              onChange={(value) => handleChange(x, y, value, w)}
              outlined
              disabled={disabled}
            />
          </>
        ))}
      {type === "vec4" && (
        <>
          <NumericInput
            before={
              <Label color="surface-low" className="shrink-0">
                W
              </Label>
            }
            className="flex grow basis-0"
            type="f32"
            value={w}
            displayPrecision={3}
            inputSize="sm"
            onChange={(value) => handleChange(x, y, z, value)}
            outlined
            disabled={disabled}
          />
        </>
      )}
    </div>
  );
}
