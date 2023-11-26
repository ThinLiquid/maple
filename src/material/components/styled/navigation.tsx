import md from "../../../tokens"
import styled from "styled-components"

export const NavigationRail = styled.div.attrs({
  className: 'nav-rail'
})`
  background: var(--md-sys-color-surface);
  height: 100%;
  width: 80px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 12px;
`

export const NavigationBar = styled.div.attrs({
  className: 'nav-bar'
})`
  background: var(--md-sys-color-surface);
  width: 100%;
  height: 80px;
  display: flex;
  gap: 8px;
  justify-content: center;
  padding: 12px 0;

  & > button {
    flex: 1;
  }
`

export const NavigationButton = styled.button<{ active: boolean }>`
    background: transparent;
    border: none;
    color: ${props => props.active ? 'var(--md-sys-color-on-surface)' : 'var(--md-sys-color-on-surface-variant)'};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 4px;

    &:hover i::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--md-sys-color-on-surface);
      opacity: ${md.sys.state.hover.state_layer_opacity};
      border-radius: ${32 / md.sys.shape.corner.full}px;
    }
  `

  export const NavigationRailIcon = styled.i.attrs({
    className: 'material-symbols-rounded'
  })<{ active: boolean }>`
    font-variation-settings: 'FILL' ${props => props.active ? '1' : '0'}, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    font-size: 24px;
    background: ${props => props.active ? 'var(--md-sys-color-secondary-container)' : 'transparent'};
    color: ${props => props.active ? 'var(--md-sys-color-on-secondary-container)' : 'var(--md-sys-color-on-surface)'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 32px;
    border-radius: ${32 / md.sys.shape.corner.full}px;
    position: relative;
  `