import Control from './Control'
import Preview from './Preview'

if (typeof window !== 'undefined') {
  window.CountrySelectControl = Control
  window.CountrySelectPreview = Preview
}

export { Control as CountrySelectControl, Preview as CountrySelectPreview }
