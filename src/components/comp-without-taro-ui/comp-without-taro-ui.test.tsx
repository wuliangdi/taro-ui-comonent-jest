    
import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

console.log(Nerv)
import CompWithoutTaroUi from '../../../.temp/components/comp-without-taro-ui/comp-without-taro-ui'


describe('CompWithoutTaroUi Snap', () => {
    it('render CompWithoutTaroUi', () => {
      const component = renderToString(<CompWithoutTaroUi />)
      expect(component).toMatchSnapshot()
    })
})