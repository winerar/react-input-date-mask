export interface InputDateMaskProps {
  mask: string,
  showMaskOnFocus?: boolean,
  showMaskOnHove?: boolean,
  value?: string | number | readonly string[] | undefined,
  className?: string,
  id?: string,
  defaultValue?: string | number | readonly string[] | undefined,
  onChange?(): void,
  onClick?(): void,
  disabled?: boolean,
  readOnly?: boolean,
}

declare function ReactInputDateMask(props: InputDateMaskProps): JSX.Element
export default ReactInputDateMask