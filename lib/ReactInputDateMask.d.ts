export interface InputDateMaskProps {
  mask: string,
  showMaskOnFocus?: boolean,
  showMaskOnHove?: boolean,
  value?: string,
  className?: string,
  id?: string,
  defaultValue?: string,
  onChange?(): void,
  disabled?: boolean,
  readOnly?: boolean,
}

declare function ReactInputDateMask(props: InputDateMaskProps): JSX.Element
export default ReactInputDateMask