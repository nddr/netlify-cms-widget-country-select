import './bootstrap.js'
import CMS, { init } from 'netlify-cms'
import 'netlify-cms/dist/cms.css'
import CountrySelectWidget from '../src'

const config = {
  backend: {
    name: 'test-repo',
    login: false,
  },
  media_folder: 'assets',
  collections: [{
    name: 'test',
    label: 'Test',
    files: [{
      file: 'test.yml',
      name: 'test',
      label: 'Test',
      fields: [
        { name: 'test_widget', label: 'Test Widget', widget: 'country-select' },
      ],
    }],
  }],
}

CMS.registerWidget(
  'country-select',
  CountrySelectWidget.CountrySelectControl,
  CountrySelectWidget.CountrySelectPreview
);

init({ config })
