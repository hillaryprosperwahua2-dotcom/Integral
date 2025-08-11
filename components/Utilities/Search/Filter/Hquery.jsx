import React from 'react'
import SmallArrowUp from '@/lib/svg/SmallArrowUp'
import SmallArrowDown from '@/lib/svg/SmallArrowDown'

const Hquery = () => {
    return (
        <React.Fragment>
             <form className='Hquery-form'>
                <div className="Hquery-form-top">
                  <div className="Hquery-input-con">
                    <label htmlFor="property-type">Looking</label>
                    <input type="text" name='property-type' id='property-type' placeholder='Enter type' />

                  </div>
                  <div className="Hquery-input-con">
                    <label htmlFor="price">Price</label>
                    <div className='Hquery-input'>
                      <div className="Hquery-input-div-con">
                        <div className='Hquery-div-input'>Price</div>
                        <span className='Hquery-input-span'>
                          <SmallArrowUp />
                          <SmallArrowDown />
                        </span>
                      </div>
                      <div className="Hquery-input-dropdown">
                        <div className="Hquery-input-dropdown-con">
                          <ul className='Hquery-input-list'>
                            <li className='Hquery-input-item'>
                              100,000 - 150,000
                            </li>

                            <li className='Hquery-input-item'>
                              100,500 - 200,000
                            </li>
                            <li className='Hquery-input-item'>
                              100,000 - 150,000
                            </li>

                            <li className='Hquery-input-item'>
                              100,500 - 200,000
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                   <div className="Hquery-input-con">
                    <label>Location</label>
                    <div className='Hquery-input'>
                      <div className="Hquery-input-div-con">
                        <div className='Hquery-div-input'>Location</div>
                        <span className='Hquery-input-span'>
                          <SmallArrowUp />
                          <SmallArrowDown />
                        </span>
                      </div>
                      <div className="Hquery-input-dropdown">
                        <div className="Hquery-input-dropdown-con">
                          <ul className='Hquery-input-list'>
                            <li className='Hquery-input-item'>
                              100,000 - 150,000
                            </li>

                            <li className='Hquery-input-item'>
                              100,500 - 200,000
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                   <div className="Hquery-input-con">
                    <label>Apartment size</label>
                    <div className='Hquery-input'>
                      <div className="Hquery-input-div-con">
                        <div className='Hquery-div-input'>2 Bedrooms</div>
                        <span className='Hquery-input-span'>
                          <SmallArrowUp />
                          <SmallArrowDown />
                        </span>
                      </div>
                      <div className="Hquery-input-dropdown">
                        <div className="Hquery-input-dropdown-con">
                          <ul className='Hquery-input-list'>
                            <li className='Hquery-input-item'>
                              100,000 - 150,000
                            </li>

                            <li className='Hquery-input-item'>
                              100,500 - 200,000
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>




                <div className="Hquery-form-bottom">
                  <div className="filter">
                    <div className='filter-label'>Filter:</div>
                    <div className="filter-list">
                      <div className={`filter-item filter-active`}>
                        Rural
                      </div>

                      <div className={`filter-item`}>
                            Urban      
                      </div>

                      <div className={`filter-item`}>
                           Commercial                 
                      </div>

                      <div className={`filter-item`}>
                        Residential
                      </div>

                      <div className={`filter-item`}>
                          Lands         
                      </div>

                    </div>
                  </div>
                  <input type="submit" value="search-properties" />
                </div>
              </form>
        </React.Fragment>
    )
}

export default Hquery