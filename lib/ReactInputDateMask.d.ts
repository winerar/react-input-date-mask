export interface InputDateMaskProps {
  mask?: string,
  showMaskOnFocus?: boolean,
  showMaskOnHove?: boolean,
  value?: string | number | readonly string[],
  className?: string,
  id?: string,
  defaultValue?: string | number | readonly string[],
  onChange?: ChangeEventHandler<HTMLInputElement>,
  onClick?: MouseEventHandler<HTMLInputElement>,
  disabled?: boolean,
  readOnly?: boolean,
}

declare function ReactInputDateMask(props: InputDateMaskProps): JSX.Element
export default ReactInputDateMask