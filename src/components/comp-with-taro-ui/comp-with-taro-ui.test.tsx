    
import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

console.log(Nerv)
import CompWithTaroUi from '../../../.temp/components/comp-with-taro-ui/comp-with-taro-ui'


describe('CompWithTaroUi Snap', () => {
    it('render CompWithTaroUi', () => {
      const component = renderToString(<CompWithTaroUi />)
      expect(component).toMatchSnapshot()
    })
})