import { MediumLabel } from "./styled/typography"
import { NavigationButton, NavigationRailIcon } from "./styled/navigation"

export const NavigationItem = ({ active = false, icon, children }: {
  active: boolean
  icon: string
  children: string
}) => {
  return (
    <NavigationButton active={active}>
      <NavigationRailIcon active={active}>{icon}</NavigationRailIcon>
      <MediumLabel>{children.toString()}</MediumLabel>
    </NavigationButton>
  )
}