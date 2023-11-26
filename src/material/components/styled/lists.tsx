import md from "../../../tokens"
import { hexFromArgb } from "@material/material-color-utilities"
import styled from "styled-components"

export const ListItem = styled.div`
  display: flex;
  padding: 12px 12px 16px 16px;
  height: 72px!important;
  align-items: center;
  gap: 16px;
  width: 100%;
  position: relative;

  i {
    color: var(--md-sys-color-on-surface-variant);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;
    border-bottom: 1px solid ${hexFromArgb(md.sys.color.outline)}5F;
    width: calc(100% - 32px);
  }

  &:hover {
    &::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      opacity: ${md.sys.state.hover.state_layer_opacity};
      width: 100%;
      height: 100%;
      background: var(--md-sys-color-on-surface);
    }
  }

  &:active {
    &::after {
      content: '';
      position: absolute;
      top: 0; left: 0;
      opacity: ${md.sys.state.focus.state_layer_opacity};
      width: 100%;
      height: 100%;
      background: var(--md-sys-color-on-surface);
    }
  }

  img {
    height: 56px;
  }
`

export const ListItemContent = styled.div``

export const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  width: 100%;
`