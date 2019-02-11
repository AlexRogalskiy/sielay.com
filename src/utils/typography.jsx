import Typography from 'typography'
import GrandView from 'typography-theme-grand-view'

GrandView.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete GrandView.googleFonts
GrandView.baseFontSize = '12px';
GrandView.bodyWeight = 100;
GrandView.boldWeight = 400;
const typography = new Typography(GrandView)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
