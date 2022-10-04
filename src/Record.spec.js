import {getDataAPI} from 'getAPI';


const getDataAPI.mockImplementation(()=> {
  return { NSE}
})

it('', ()=>{
    const recordComp = shallow(<Record companyId={'NIIT'}/>)
    expect(recordComp.find('label').text()).toBe('NIIT');
}