import md from "../../../tokens"
import { hexFromArgb } from "@material/material-color-utilities"
import styled from "styled-components"
import { BaseCard } from "./base"

export const CardRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const ElevatedCard = styled(BaseCard)`
  background: var(--md-sys-color-surface-container-low);
  box-shadow: ${md.sys.elevation.level1} ${hexFromArgb(md.sys.color.shadow)}5F;

  &::after {
    background: ${hexFromArgb(md.sys.color.primary)}0F;
  }  
`

export const FilledCard = styled(BaseCard)`
  background: var(--md-sys-color-surface-container-highest);

  &::after {
    background: ${hexFromArgb(md.sys.color.primary)}0F;
  }  
`

export const OutlinedCard = styled(BaseCard)`
  background: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-outline-variant);

  &::after {
    background: ${hexFromArgb(md.sys.color.primary)}0F;
  }  
`

export const CardContent = styled.div`
  padding: 16px;

  & > div:nth-of-type(1) {
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
  }

  & > div:nth-of-type(2) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: initial;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`