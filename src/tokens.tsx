import { argbFromHex, themeFromSourceColor } from "@material/material-color-utilities";
window.localStorage.setItem('sourceColor', `#ff0000`)
const theme = themeFromSourceColor(argbFromHex(window.localStorage.getItem('sourceColor') as string));

const ref = {
  typeface: {
    brand: 'Syne',
    plain: 'Plus Jakarta Sans',
    weight_medium: 500,
    weight_regular: 400
  }
}

const sys = {
  color: theme.schemes.dark,
  typescale: {
    large_display: {
      font: ref.typeface.brand,
      line_height: '64px',
      size: '57px',
      weight: ref.typeface.weight_regular,
      tracking: '-0.25px'
    },
    medium_display: {
      font: ref.typeface.brand,
      line_height: '52px',
      size: '45px',
      weight: ref.typeface.weight_regular,
      tracking: '0px'
    },
    small_display: {
      font: ref.typeface.brand,
      line_height: '44px',
      size: '36px',
      weight: ref.typeface.weight_regular,
      tracking: '0px'
    },

    large_headline: {
      font: ref.typeface.brand,
      line_height: '40px',
      size: '32px',
      weight: ref.typeface.weight_regular,
      tracking: '0px'
    },
    medium_headline: {
      font: ref.typeface.brand,
      line_height: '36px',
      size: '28px',
      weight: ref.typeface.weight_regular,
      tracking: '0px'
    },
    small_headline: {
      font: ref.typeface.brand,
      line_height: '32px',
      size: '24px',
      weight: ref.typeface.weight_regular,
      tracking: '0px'
    },

    large_title: {
      font: ref.typeface.brand,
      line_height: '28px',
      size: '22px',
      weight: ref.typeface.weight_regular,
      tracking: '0px'
    },
    medium_title: {
      font: ref.typeface.brand,
      line_height: '24px',
      size: '16px',
      weight: ref.typeface.weight_medium,
      tracking: '0.15px'
    },
    small_title: {
      font: ref.typeface.brand,
      line_height: '20px',
      size: '14px',
      weight: ref.typeface.weight_medium,
      tracking: '0.1px'
    },

    large_body: {
      font: ref.typeface.plain,
      line_height: '24px',
      size: '16px',
      weight: ref.typeface.weight_regular,
      tracking: '0.5px'
    },
    medium_body: {
      font: ref.typeface.plain,
      line_height: '20px',
      size: '14px',
      weight: ref.typeface.weight_regular,
      tracking: '0.25px'
    },
    small_body: {
      font: ref.typeface.plain,
      line_height: '16px',
      size: '12px',
      weight: ref.typeface.weight_medium,
      tracking: '0.4px'
    },

    large_label: {
      font: ref.typeface.plain,
      line_height: '20px',
      size: '14px',
      weight: ref.typeface.weight_medium,
      tracking: '0.1px'
    },
    medium_label: {
      font: ref.typeface.plain,
      line_height: '16px',
      size: '12px',
      weight: ref.typeface.weight_medium,
      tracking: '0.5px'
    },
    small_label: {
      font: ref.typeface.plain,
      line_height: '16px',
      size: '11px',
      weight: ref.typeface.weight_medium,
      tracking: '0.5px'
    },
  },
  state: {
    hover: {
      state_layer_opacity: 0.08,
    },
    focus: {
      state_layer_opacity: 0.1,
    }
  },
  shape: {
    corner: {
      full: 2,
      extra_large: '28px',
      large: '16px',
      medium: '12px',
      small: '8px',
      extra_small: '4px'
    }
  },
  elevation: {
    level5: `0 12px 24px`,
    level4: `0 8px 16px`,
    level3: `0 6px 12px`,
    level2: `0 3px 6px`,
    level1: `0 1px 2px`,
    level0: `0 0px 0px`
  }
};

const md = {
  theme,
  ref,
  sys
}

export default md;