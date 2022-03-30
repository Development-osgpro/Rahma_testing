import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import ourWorkBg from '../Assets/images/ourwork-bg.jpg'
import Footer from '../Components/Footer'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'

import { ReactComponent as HeroSvgicon2 } from '../Assets/svgs/all-icons/icon-02.svg'
import { ReactComponent as HeroSvgicon3 } from '../Assets/svgs/all-icons/newIcons-06.svg'
import { ReactComponent as HeroSvgicon4 } from '../Assets/svgs/all-icons/newIcons-07.svg'
import { ReactComponent as HeroSvgicon5 } from '../Assets/svgs/all-icons/newIcons-08.svg'
import { ReactComponent as HeroSvgicon6 } from '../Assets/svgs/all-icons/newIcons-09.svg'
import { ReactComponent as HeroSvgicon7 } from '../Assets/svgs/all-icons/icon-07.svg'
import { ReactComponent as HeroSvgicon8 } from '../Assets/svgs/all-icons/newIcons-10.svg'
import { ReactComponent as HeroSvgicon9 } from '../Assets/svgs/all-icons/newIcons-11.svg'
import { ReactComponent as HeroSvgicon10 } from '../Assets/svgs/all-icons/newIcons-12.svg'
import { ReactComponent as HeroSvgicon11 } from '../Assets/svgs/all-icons/icon-11.svg'

import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOurWorkData } from '../Redux/ourWork'

const OurWork = () => {

    const dispatch = useDispatch()

    const getWorkData = useSelector(state => state.getOurWorkData)
    const { loading, data, error } = getWorkData

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getOurWorkData())
    }, [dispatch])

    return (
        <>
            {data && (
                <>
                    <NavBar />
                    {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                    <section className='ourWorkPage'>
                        <div>
                            <img src={ourWorkBg} alt="our work background" />
                            <h1 className="firsth1">Our Work</h1>
                        </div>
                        <div className="container">
                            <div className="work-items">
                                <h4>THESE ARE A FEW OF OUR MOST RECENT PROGRAMS. EACH AND EVERY YEAR, WE CARRY OUT
                                    MORE THAN 1000 PROGRAMS ACROSS VARIOUS COUNTRIES, INVOLVING PEOPLE OF EVERY
                                    AGE, INTEREST AND NEED.</h4>
                                <div className='items'>
                                    {data['services'].map(el => (
                                        <Link key={el.id} to={`/services/${el.id}`}>
                                            <img src={el.service_image} />
                                            <p>{el.service_title}</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="seasonal_campaigns">
                        <div className="container">
                            <h1 className='h1-styles'>SEASONAL <span>CAMPAIGNS</span></h1>
                            <p className="seasonal-p">WE RUN VARIOUS CAMPAIGNS FOR EACH SEASON AND RELIGIOUS
                                HOLIDAYS AND EVENTS SUCH AS WINTER WARMING CAMPAIGNS FOR
                                REFUGEES, UDHIYA, RAMADAN AND ZAKAAT CAMPAIGNS AND MORE</p>
                            <div className='seasonal_campaigns_box'>
                                {data['campaigns'].map(el => (
                                    <div key={el.id}>
                                        <img src={el.image} alt="" />
                                        <h5>{el.title}</h5>
                                        <p>{el.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <ChartComponent />
                    <Footer />
                </>
            )}
        </>
    )
}

export default OurWork