import { styled } from "styled-components";
import md from "../../../tokens";
import { hexFromArgb } from "@material/material-color-utilities";

export const BaseButton = styled.button`
  border-radius: ${40 / md.sys.shape.corner.full}px;
  height: 40px;
  padding: 0 24px;
  display: flex;
  gap: 8px;
  text-align: center;
  align-items: center;
  border: none;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &[disabled] {
    cursor: not-allowed;
    background: ${hexFromArgb(md.sys.color.onSurface)}0A!important;
    box-shadow: none!important;

    color: ${hexFromArgb(md.sys.color.onSurface)}2F!important;

    &::before {
      content: none;
    }

    &:hover {
      &::after {
        content: none;
      }
    }

    &:active {
      &::after {
        content: none;
      }
    }
  }

  &:has(i) {
    padding-left: 16px;

    .material-symbols-rounded {
      font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 18;
    }
  }

  &:hover {
    &::after {
      content: '';
      top:0;
      left:0;
      position: absolute;
      opacity: ${md.sys.state.hover.state_layer_opacity};
      border-radius: ${40 / md.sys.shape.corner.full}px;
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    &::after {
      content: '';
      top:0;
      left:0;
      position: absolute;
      opacity: ${md.sys.state.focus.state_layer_opacity};
      border-radius: ${40 / md.sys.shape.corner.full}px;
      width: 100%;
      height: 100%;
    }
  }
`

export const BaseCard = styled.div`
  border-radius: ${md.sys.shape.corner.medium};
  position: relative;
  width: 175px;

  & > img {
    border-radius: ${md.sys.shape.corner.medium};
    width: 100%;
  }

  & > img, & > div {
    z-index: 2;
  }

  &::after {
    content: '';
    top: 0; left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
  }
`