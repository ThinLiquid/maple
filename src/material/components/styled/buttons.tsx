import md from "../../../tokens";
import styled from "styled-components";
import { hexFromArgb } from "@material/material-color-utilities";
import { BaseButton } from "./base";

export const ElevatedButton = styled(BaseButton)`
  background: var(--md-sys-surface-container-low);
  box-shadow: ${md.sys.elevation.level1} ${hexFromArgb(md.sys.color.shadow)}5F;
  color: var(--md-sys-color-primary);

  &::before {
    content: '';
    top:0;
    left:0;
    position: absolute;
    background: ${hexFromArgb(md.sys.color.primary)}1F;
    border-radius: ${40 / md.sys.shape.corner.full}px;
    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: ${md.sys.elevation.level2} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-primary);
    }
  }

  &:active {
    outline: none;
    box-shadow: ${md.sys.elevation.level1} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-primary);
    }
  }
`;

export const FilledButton = styled(BaseButton)`
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);

  &:hover {
    box-shadow: ${md.sys.elevation.level1} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-on-primary);
    }
  }

  &:active {
    outline: none;
    box-shadow: ${md.sys.elevation.level0} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-on-primary);
    }
  }
`;

export const TonalButton = styled(BaseButton)`
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);

  &:hover {
    box-shadow: ${md.sys.elevation.level1} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-on-secondary-container);
    }
  }

  &:active {
    outline: none;
    box-shadow: ${md.sys.elevation.level0} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-on-secondary-container);
    }
  }
`;

export const OutlinedButton = styled(BaseButton)`
  background: transparent;
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-outline);

  &[disabled] {
    border: 1px solid ${hexFromArgb(md.sys.color.outline)}5F!important;
  }

  &:hover {
    box-shadow: ${md.sys.elevation.level1} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-primary);
    }
  }

  &:active {
    outline: none;
    box-shadow: ${md.sys.elevation.level0} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-primary);
    }
  }
`;

export const TextButton = styled(BaseButton)`
  background: transparent;
  color: var(--md-sys-color-primary);

  &[disabled] {
    background: transparent!important;
  }

  &:hover {
    box-shadow: ${md.sys.elevation.level1} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-primary);
    }
  }

  &:active {
    outline: none;
    box-shadow: ${md.sys.elevation.level0} ${hexFromArgb(md.sys.color.shadow)}5F;

    &::after {
      background: var(--md-sys-color-primary);
    }
  }
`;