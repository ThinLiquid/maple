import { LargeLabel } from "./styled/typography";
import useRipple from '../useRipple'
import { ElevatedButton, FilledButton, OutlinedButton, TextButton, TonalButton } from "./styled/buttons";



const map = {
  elevated: ElevatedButton,
  filled: FilledButton,
  tonal: TonalButton,
  outlined: OutlinedButton,
  text: TextButton
}

export const Button = ({ type = 'filled', disabled = false, icon, children }: {
  type?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text',
  icon?: string,
  disabled?: boolean,
  children: string
}) => {
  const ChosenButton = map[type]
  const [ addRipple, ripples ] = useRipple({
    background: 'white'
  })

  return (
    <ChosenButton onMouseDown={addRipple} disabled={disabled}>
      {ripples}
      {icon ? <i className="material-icons-rounded">{icon}</i> : <></>}
      <LargeLabel>{children}</LargeLabel>
    </ChosenButton>
  )
}