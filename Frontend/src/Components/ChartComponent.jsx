import React from 'react'
import { ReactComponent as Chart} from '../Assets/svgs/all-icons/chart.svg'

import { ReactComponent as HeroSvgicon7 } from '../Assets/svgs/all-icons/icon-07.svg'
import { ReactComponent as HeroSvgicon8 } from '../Assets/svgs/all-icons/newIcons-10.svg'
import { ReactComponent as HartIcon } from '../Assets/svgs/all-icons/donatehartIcon.svg'

const ChartComponent = () => {
    return (
        <>
            <div className='Chart'>
                <div className="container">
                    <div className='firstsection'>
                        <div className='allcampaigns'>
                            <div>
                                <HeroSvgicon7 />
                                <p>ALL CAMPAIGNS</p>
                                <span>1588</span>
                            </div>
                            <div className='text'>
                                <div>
                                    <p>FINISHED</p>
                                    <p>1588</p>
                                </div>
                                <div>
                                    <p>ONGOING</p>
                                    <p>1588</p>
                                </div>
                            </div>
                        </div>
                        <div className='allcampaigns'>
                            <div>
                                <HeroSvgicon8 />
                                <p>ALL CAMPAIGNS</p>
                                <span>1588</span>
                            </div>
                            <div className='text'>
                                <div>
                                    <p>FINISHED</p>
                                    <p>1588</p>
                                </div>
                                <div>
                                    <p>ONGOING</p>
                                    <p>1588</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chartcontainer">
                        <div className='chartitself'>
                            <h4>Our Efficiency</h4>
                            <Chart />
                        </div>
                        <div className='chartinfo'>
                            <div className='ProgramServices'>
                                <figure></figure>
                                <b>87%</b>
                                <p>Program Services</p>
                            </div>
                            <div className='MangmentGeneral'>
                                <figure></figure>
                                <b>8%</b>
                                <p>Mangment & General</p>
                            </div>
                            <div className="Fundraising">
                                <figure></figure>
                                <b>5%</b>
                                <p>Fundraising</p>
                            </div>
                            <button>Donate <HartIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChartComponent