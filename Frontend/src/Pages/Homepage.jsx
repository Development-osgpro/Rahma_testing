import React, { useState, useRef, useEffect } from 'react'
import SLider from "react-slick"

// import navbar and footer
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import supportlogo from '../Assets/images/unnamed.jpg'



import videomp4 from "../Assets/videos/insta.mp4"
import thumbnail from "../Assets/videos/videothumb.png"

// importing some testing images
import hand from '../Assets/images/handimg.png'
import mainHeroimg from '../Assets/images/hero-main-img.png'
import testImg from '../Assets/images/test-12.jpg'
import testImage from '../Assets/images/imagetest-01.jpg'
import afterImg from "../Assets/images/after-before-slider-01.jpg"
import beforeImg from "../Assets/images/after-before-slider-02.jpg"
import child from "../Assets/images/child.jpg"
import bulls from '../Assets/svgs/all-icons/bulls.svg'
import girl from '../Assets/images/girlmage.jpg'
import support3 from '../Assets/images/supportedBy-03.jpg'
import support4 from '../Assets/images/supportedBy-04.jpg'
import pngTestIMage from '../Assets/images/orphan.png'

import { FreeMode, Pagination, Navigation } from "swiper";

// importing hero svgs
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

import { ReactComponent as Icon1 } from '../Assets/svgs/all-icons/socialIcons-05.svg'
import { ReactComponent as Icon2 } from '../Assets/svgs/all-icons/socialIcons-06.svg'
import { ReactComponent as Icon3 } from '../Assets/svgs/all-icons/socialIcons-07.svg'
import { ReactComponent as Icon4 } from '../Assets/svgs/all-icons/socialIcons-08.svg'

// importing framer motion 
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import ModalVideo from 'react-modal-video'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

// importing swiper js 
// import "swiper/css/free-mode";
// importing mui 
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';

// importing the map
import MapChart from '../MapChart'
import { ReactComponent as Map1icon } from '../Assets/svgs/all-icons/map-icons-01.svg'
import { ReactComponent as Map2icon } from '../Assets/svgs/all-icons/map-icons-02.svg'
import MapComponent from '../MapJs/MapComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'

import SwiperCore, { Autoplay } from 'swiper'
import ChartComponent from '../Components/ChartComponent'

import { useDispatch, useSelector } from 'react-redux'
import { getHomeData } from '../Redux/home'

const Homepage = () => {

    const dispatch = useDispatch()

    SwiperCore.use([Autoplay])
    const [clicked, setClicked] = useState(false)
    const [clickedInfo, setClickedInfo] = useState(false)
    const [showMapInfo, setShowMapInfo] = useState(false)
    const [countyName, setCountyName] = useState('')

    const homeData = useSelector(state => state.getHomeData)
    const { loading, data, error } = homeData

    useEffect(() => {
        console.log('test')
        console.log("DISPATCH")
        dispatch(getHomeData())
    }, [dispatch])

    const [test, setTest] = useState(false)

    // useEffect(() => {


    // }, [])

    const mapFunction = () => {
        const US = document.getElementById('US')
        const JO = document.getElementById('JO')
        const LB = document.getElementById('LB')
        const PS = document.getElementById('PS')
        const SY = document.getElementById('SY')
        const TR = document.getElementById('TR')
        const YE = document.getElementById('YE')
        const ML = document.getElementById('ML')
        const GH = document.getElementById('GH')
        const CM = document.getElementById('CM')
        const TD = document.getElementById('TD')
        const SD = document.getElementById('SD')
        const KE = document.getElementById('KE')
        const SL = document.getElementById('SL')

        let AllCOUNTRYS = [US, JO, LB, PS, SY, TR, YE, ML, GH, TD, CM, SD, KE, SL]

        AllCOUNTRYS.forEach(country => {

            country.addEventListener('click', () => {
                AllCOUNTRYS.forEach(ele => {
                    ele.classList.remove("active");
                })
                country.classList.add("active")
            })

            country.onclick = () => {
                setClicked(true)
                setTimeout(() => {
                    setShowMapInfo(true)
                    setClickedInfo(true)
                }, 1000);
                setCountyName(country.getAttribute('data-name'))
            }
        })
    }


    useEffect(() => {
        setClickedInfo(false)
        setTimeout(() => {
            setClickedInfo(true)
        }, 500);

        return () => {
            setClickedInfo(false)
        }
    }, [countyName])


    // all map variants
    const MapContainerAnimate = {
        hidden: { width: `${100}%` },
        visible: {
            width: `${55}%`,
            transition: { duration: 1, ease: 'easeInOut', },
        }
    }

    const maph1animation = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut', },
        }
    }

    const mapbuttonanimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut', },
        }
    }

    const mapContextAnimation1 = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: .2, ease: 'easeInOut', },
        }
    }

    const mapContextAnimation2 = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: .4, ease: 'easeInOut', },
        }
    }

    const mapContextAnimation3 = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: .6, ease: 'easeInOut', },
        }
    }

    const mapContextAnimation4 = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: .8, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const HandimageVariants = {
        hidden: { opacity: 0, y: 200 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const RightimageVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 3 },
        }
    }

    const RightimageVariants1 = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1.5 },
        }
    }

    // framer motion variants
    const TextHeroVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeInOut' },
        }
    }

    // framer motion variants
    const buttonHeroVariants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, },
        }
    }

    const facebookHeroVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .1, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const instaHeroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .2, ease: 'easeInOut', },
        }
    }

    // framer motion variants
    const twitterHeroVariants = {
        hidden: { opacity: 0, y: 75 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .3 },
        }
    }

    // framer motion variants
    const youtubeHeroVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .4, ease: 'easeInOut', },
        }
    }


    const [mapProgram, setMapProgram] = useState([])

    useEffect(() => {
        if (data) {
            var mapPrograms = data['programs']
            mapPrograms = mapPrograms.filter(program => (
                program.region.country === countyName
            ))
            setMapProgram(mapPrograms)
            console.log(countyName)
            console.log(mapPrograms)
        }

    }, [countyName])

    var firstSliderImage
    var secondSliderImage

    // // handle all hero animations
    const mainRightImage = useRef();
    const mainH4Title = useRef();
    const handImage = useRef();
    const [iconId, setIconId] = useState(1)
    const [handleAnimate, setHandleAnimate] = useState(true)
    const [handleAnimateClick, setHandleAnimateClick] = useState(false)

    const handleIconClick = (id) => {
        setIconId(id)
        if (id === 1) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-environment-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-environment-h4")
            handImage.current.src = handImage.current.getAttribute("data-environment-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 2) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-protection-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-protection-h4")
            handImage.current.src = handImage.current.getAttribute("data-protection-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 3) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-shelter-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-shelter-h4")
            handImage.current.src = handImage.current.getAttribute("data-shelter-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 4) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-nutrition-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-nutrition-h4")
            handImage.current.src = handImage.current.getAttribute("data-nutrition-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 5) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-orphan-sponsorship-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-orphan-sponsorship-h4")
            handImage.current.src = handImage.current.getAttribute("data-orphan-sponsorship-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 6) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-food-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-food-h4")
            handImage.current.src = handImage.current.getAttribute("data-food-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 7) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-health-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-health-h4")
            handImage.current.src = handImage.current.getAttribute("data-health-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 8) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-education-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-education-h4")
            handImage.current.src = handImage.current.getAttribute("data-environment-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 9) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-w-a-s-h-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-w-a-s-h-h4")
            handImage.current.src = handImage.current.getAttribute("data-w-a-s-h-handimage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        } else if (id === 10) {
            mainRightImage.current.src = mainRightImage.current.getAttribute("data-non-food-items-rightimage")
            mainH4Title.current.textContent = mainH4Title.current.getAttribute("data-non-food-items-h4")
            handImage.current.src = handImage.current.getAttribute("data-non-food-items-handiImage")
            setHandleAnimate(false)
            // setHandleAnimateClick(true)
            setTimeout(() => {
                setHandleAnimate(true)
            }, 100);
        }
    }

    const [content, setContent] = useState("");
    const [videoIsOpen, setVideoIsOpen] = useState(false)

    // map importing
    const Testcomp = ({ content }) => {
        return (
            <h1 style={{ position: "absolute", top: "0", left: "0" }}>
                {content}
            </h1>
        )
    }

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    // campaigns
    const [slideIndex, setSlideIndex] = useState(null)
    const camp_h2 = useRef()
    const camp_p_second = useRef()
    const camp_p_country = useRef()
    const camp_p_date = useRef()

    const handleCampaignsSlideChanges = () => {
        if (slideIndex === 0) {
            camp_h2.current.textContent = camp_h2.current.getAttribute('data-h2-camp-one')
            camp_p_second.current.textContent = camp_p_second.current.getAttribute('data-second-p-camp-one')
            camp_p_country.current.textContent = camp_p_country.current.getAttribute('data-country-p-camp-one')
            camp_p_date.current.textContent = camp_p_date.current.getAttribute('data-date-p-camp-one')
        } else if (slideIndex === 1) {
            camp_h2.current.textContent = camp_h2.current.getAttribute('data-h2-camp-two')
            camp_p_second.current.textContent = camp_p_second.current.getAttribute('data-second-p-camp-two')
            camp_p_country.current.textContent = camp_p_country.current.getAttribute('data-country-p-camp-two')
            camp_p_date.current.textContent = camp_p_date.current.getAttribute('data-date-p-camp-one')
        } else if (slideIndex === 2) {
            camp_h2.current.textContent = camp_h2.current.getAttribute('data-h2-camp-three')
            camp_p_second.current.textContent = camp_p_second.current.getAttribute('data-second-p-camp-three')
            camp_p_country.current.textContent = camp_p_country.current.getAttribute('data-country-p-camp-three')
            camp_p_date.current.textContent = camp_p_date.current.getAttribute('data-date-p-camp-three')
        }
    }
    handleCampaignsSlideChanges()

    // ourlatestnews
    const [slideIndexNews, setSlideIndexNews] = useState(null)
    console.log(slideIndexNews)
    const news_h6 = useRef()
    const news_span_date = useRef()
    const news_span_country = useRef()
    const news_p_title = useRef()
    const handleNewsSlideChanges = () => {
        if (slideIndexNews === 0) {
            news_h6.current.textContent = news_h6.current.getAttribute('data-h6-news-one')
            news_span_date.current.textContent = news_span_date.current.getAttribute('data-span-news-date-one')
            news_span_country.current.textContent = news_span_country.current.getAttribute('data-span-news-country-one')
            news_p_title.current.textContent = news_p_title.current.getAttribute('data-p-news-title-one')
        } else if (slideIndexNews === 1) {
            news_h6.current.textContent = news_h6.current.getAttribute('data-h6-news-tow')
            news_span_date.current.textContent = news_span_date.current.getAttribute('data-span-news-date-tow')
            news_span_country.current.textContent = news_span_country.current.getAttribute('data-span-news-country-tow')
            news_p_title.current.textContent = news_p_title.current.getAttribute('data-p-news-title-tow')
        } else if (slideIndexNews === 2) {
            news_h6.current.textContent = news_h6.current.getAttribute('data-h6-news-three')
            news_span_date.current.textContent = news_span_date.current.getAttribute('data-span-news-date-three')
            news_span_country.current.textContent = news_span_country.current.getAttribute('data-span-news-country-three')
            news_p_title.current.textContent = news_p_title.current.getAttribute('data-p-news-title-three')
        }
    }
    handleNewsSlideChanges()

    const [smType, setSmType] = useState("id-fb");

    const handleNewsChange = (id) => {
        setSmType(id)
    }

    const FIRST_IMAGE = {
        imageUrl: afterImg
    };
    const SECOND_IMAGE = {
        imageUrl: beforeImg
    };

    return (

        <>
            {data && (
                <>
                    <NavBar />
                    {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                    <div className="homepage">
                        <div className="hero-section">
                            <div className='animation-screen'>
                                <div className='container'>
                                    <div className='donate-now'>
                                        <motion.h4
                                            variants={TextHeroVariants}
                                            initial='hidden'
                                            animate={handleAnimate ? 'visible' : 'heddin'}
                                            ref={mainH4Title}
                                            data-environment-h4={data['heros'][0]?.title}
                                            data-protection-h4={data['heros'][1]?.title}
                                            data-shelter-h4={data['heros'][2]?.title}
                                            data-nutrition-h4={data['heros'][3]?.title}
                                            data-orphan-sponsorship-h4={data['heros'][4]?.title}
                                            data-food-h4={data['heros'][5]?.title}
                                            data-health-h4={data['heros'][6]?.title}
                                            data-education-h4={data['heros'][7]?.title}
                                            data-w-a-s-h-h4={data['heros'][8]?.title}
                                            data-non-food-items-h4={data['heros'][9]?.title}
                                        >{data['heros'][0]?.title}</motion.h4>
                                        <motion.button
                                            variants={buttonHeroVariants}
                                            className='donateBtnHomeHero'
                                            initial='hidden'
                                            style={{ width: '220px', height: '70px' }}
                                            animate='visible'
                                        ><a href="https://rahmaww.donorsupport.co/-/XGDAEUZV"> DONATE NOW</a></motion.button>
                                        <div>
                                            <motion.a
                                                variants={facebookHeroVariants}
                                                initial='hidden'
                                                animate='visible'
                                                href='https://www.facebook.com/RahmaWorldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-facebook-f"></i></motion.a>
                                            <motion.a
                                                variants={instaHeroVariants}
                                                initial='hidden'
                                                animate='visible'
                                                href='https://www.instagram.com/rahmaworldwide/' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i></motion.a>
                                            <motion.a
                                                variants={twitterHeroVariants}
                                                initial='hidden'
                                                animate='visible'
                                                href='https://twitter.com/rahmaworldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-twitter"></i></motion.a>
                                            <motion.a
                                                variants={youtubeHeroVariants}
                                                initial='hidden'
                                                animate='visible'
                                                href='https://www.youtube.com/c/RahmaWorldwide' target="_blank" rel='noopener noreferrer'><i className="fa-brands fa-youtube"></i></motion.a>
                                        </div>
                                    </div>
                                </div>
                                <div className='hero-hand-img'>
                                    <motion.img
                                        variants={HandimageVariants}
                                        initial='hidden'
                                        animate={handleAnimate ? 'visible' : 'heddin'}
                                        src={hand}
                                        ref={handImage}
                                        data-environment-handimage={data['heros'][0]?.center_image}
                                        data-protection-handimage={data['heros'][1]?.center_image}
                                        data-shelter-handimage={data['heros'][2]?.center_image}
                                        data-nutrition-handimage={data['heros'][3]?.center_image}
                                        data-orphan-sponsorship-handimage={data['heros'][4]?.center_image}
                                        data-food-handimage={data['heros'][5]?.center_image}
                                        data-health-handimage={data['heros'][6]?.center_image}
                                        data-education-handimage={data['heros'][7]?.center_image}
                                        data-w-a-s-h-handimage={data['heros'][8]?.center_image}
                                        data-non-food-items-handiImage={data['heros'][9]?.center_image}
                                        alt="hero middle img"
                                    />
                                </div>
                                <div className='hero-main-img'>
                                    <div></div>
                                    <motion.img
                                        variants={handleAnimateClick ? RightimageVariants1 : RightimageVariants}
                                        initial='hidden'
                                        animate={handleAnimate ? 'visible' : 'hidden'}
                                        src={data['heros'][0]?.right_image}
                                        ref={mainRightImage}
                                        data-environment-rightimage={data['heros'][0]?.right_image}
                                        data-protection-rightimage={data['heros'][1]?.right_image}
                                        data-shelter-rightimage={data['heros'][2]?.right_image}
                                        data-nutrition-rightimage={data['heros'][3]?.right_image}
                                        data-orphan-sponsorship-rightimage={data['heros'][4]?.right_image}
                                        data-food-rightimage={data['heros'][5]?.right_image}
                                        data-health-rightimage={data['heros'][6]?.right_image}
                                        data-education-rightimage={data['heros'][7]?.right_image}
                                        data-w-a-s-h-rightimage={data['heros'][8]?.right_image}
                                        data-non-food-items-rightimage={data['heros'][9]?.right_image}
                                        alt="hero right img" />
                                </div>
                            </div>
                        </div>
                        <div className='animation-remotecontrol'>
                            <div className="container">
                                <Swiper
                                    slidesPerView="auto"
                                    spaceBetween={0}
                                    freeMode={false}
                                    modules={[FreeMode]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className={iconId === 1 ? "boxbeforestyle environment active" : "environment box-style"} onClick={() => (handleIconClick(1), setHandleAnimate(false))} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon2 />
                                            </div>
                                            <p>Environment</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 2 ? "boxbeforestyle protection active" : "protection box-style"} onClick={() => (handleIconClick(2), setHandleAnimate(false))} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon3 />
                                            </div>
                                            <p>Protection</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 3 ? "boxbeforestyle shelter active" : "shelter box-style"} onClick={() => handleIconClick(3)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon4 />
                                            </div>
                                            <p>Shelter</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 4 ? "boxbeforestyle nutrition active" : "nutrition box-style"} onClick={() => handleIconClick(4)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon5 />
                                            </div>
                                            <p>Nutrition</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 5 ? "boxbeforestyle orphan-sponsorship active" : "orphan-sponsorship box-style"} onClick={() => handleIconClick(5)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon6 />
                                            </div>
                                            <p>Orphan
                                                sponsorship</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 6 ? "boxbeforestyle food active" : "food box-style"} onClick={() => handleIconClick(6)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon7 />
                                            </div>
                                            <p>Food</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 7 ? "boxbeforestyle health active" : "health box-style"} onClick={() => handleIconClick(7)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon8 />
                                            </div>
                                            <p>Health</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 8 ? "boxbeforestyle education active" : "education box-style"} onClick={() => handleIconClick(8)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon9 />
                                            </div>
                                            <p>Education</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 9 ? "boxbeforestyle w-a-s-h active" : "w-a-s-h box-style"} onClick={() => handleIconClick(9)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon10 />
                                            </div>
                                            <p>W.A.S.H</p>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className={iconId === 10 ? "boxbeforestyle non-food-items active" : "non-food-items box-style"} onClick={() => handleIconClick(10)} id='donate-option'>
                                            <div>
                                                <div className='circle'></div>
                                                <HeroSvgicon11 />
                                            </div>
                                            <p>Non-Food Items</p>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                        <div className="aboutus-section">
                            <div className="container">
                                <div className='about'>
                                    <div className='about-text-video'>
                                        <h1 className='h1-styles'>ABOUT <span>US</span></h1>
                                        <h4 style={{ whiteSpace: "break-spaces" }}>{data['aboutus_section']?.sub_title}</h4>
                                        <p style={{ whiteSpace: "break-spaces" }}>{data['aboutus_section']?.description}</p>
                                        <ul>
                                            <li><i className="fa-solid fa-check"></i> {data['aboutus_section']?.value_1}</li>
                                            <li><i className="fa-solid fa-check"></i> {data['aboutus_section']?.value_2}</li>
                                            <li><i className="fa-solid fa-check"></i> {data['aboutus_section']?.value_3}</li>
                                        </ul>
                                        <div className='video'>
                                            <ModalVideo channel='youtube' autoplay isOpen={videoIsOpen} videoId={data['aboutus_section']?.video_link_code} onClose={() => setVideoIsOpen(false)} />
                                            <button className="btn-primary" onClick={() => setVideoIsOpen(true)}><i className="fa-solid fa-circle-play"></i></button>
                                            <h6><span>Watch</span>  video</h6>
                                        </div>
                                    </div>
                                    <div className='about-images'>
                                        <div><img src={testImg} alt="img" /></div>
                                        <div><img src={mainHeroimg} alt="img" /></div>
                                        <div><img src={testImage} alt="img" /></div>
                                    </div>
                                </div>
                                <div className='success-stories'>
                                    <div className='success-stories-text'>
                                        <h1>SUCCESS STORIES</h1>
                                        <p style={{ whiteSpace: "break-spaces" }}>{data['successStories'][0]?.description}</p>
                                        <button>Read More <i class="fa-solid fa-angles-right"></i></button>
                                    </div>
                                    <div className='success-stories-video'>
                                        <div>
                                            <video controlslist="nodownload" controls poster={data['successStories'][0]?.video_thumbnail_image} >
                                                <source src={data['successStories'][0]?.video} />
                                                Your browser does not support the video element.
                                            </video>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="best_moment">
                            <div className="container">
                                <h1>BEST MOMENT IN OUR LIFE</h1>
                                <p><i class="fa-solid fa-chevron-right"></i></p>
                                <ReactBeforeSliderComponent
                                    firstImage={firstSliderImage = { imageUrl: data['before_after_images']?.before_image }}
                                    secondImage={secondSliderImage = { imageUrl: data['before_after_images']?.after_image }}
                                />
                            </div>
                        </div>

                        <div className="our-causes">
                            <div className="container">
                                <div className='our-text'>
                                    <h4>OUR CAUSES</h4>
                                    <h1 className='h1-styles'>SUPPORT OUR <span>CAUSE</span></h1>
                                </div>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                    breakpoints={{
                                        // when window width is >= 640px
                                        280: {
                                            slidesPerView: 1
                                        },
                                        // when window width is >= 768px
                                        768: {
                                            slidesPerView: 2
                                        },
                                        // when window width is >= 992px
                                        992: {
                                            slidesPerView: 3
                                        },
                                    }}
                                >
                                    {data['forms']?.map(form => (
                                        <SwiperSlide key={form.id} className='the-swiper-slide'>
                                            <div className='cause'>
                                                <div className='image-holder'>
                                                    <img src={form.image} alt="children img" />
                                                    <span>{form.type}</span>
                                                </div>
                                                <div className='context'>
                                                    <h4>{form.title}</h4>
                                                    <p>{form.description}
                                                    </p>
                                                    <hr />
                                                    <Box width={300}>
                                                        <Slider defaultValue={(form.raised / form.goal) * 100} aria-label="Always visible" valueLabelDisplay="on" disabled={true} />
                                                    </Box>
                                                    <div className='raised-goal'>
                                                        <p>RAISED : ${form.raised} </p>
                                                        <p>GOAL : ${form.goal}</p>
                                                    </div>
                                                    <div className='heddin-massage'>
                                                        <p>{form.hidden_message}
                                                        </p>
                                                        <button><a href={form.fundraiseup_code}></a><span>Donate</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        <div className="campaingns">
                            <div className="container">
                                <section className='campaingns-container'>
                                    <div className='campaingns-img-slider'>
                                        <h3>CAMPAIGNS</h3>
                                        <Swiper
                                            cssMode={true}
                                            navigation={true}
                                            pagination={true}
                                            mousewheel={true}
                                            keyboard={true}
                                            modules={[Pagination, Navigation]}
                                            className="mySwiper"
                                            onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}
                                        >
                                            {data['campaigns']?.map(campaign => (
                                                <SwiperSlide key={campaign.id}><img src={campaign.image} alt={campaign.title} /></SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                    <div className='context'>
                                        <img src={bulls} alt="small bulls img" />
                                        <h2
                                            data-h2-camp-one={data['campaigns'][0]?.title}
                                            data-h2-camp-two={data['campaigns'][1]?.title}
                                            data-h2-camp-three={data['campaigns'][2]?.title}
                                            ref={camp_h2}
                                        >{data['campaigns'][0]?.title}</h2>
                                        {/* <p
                                            data-first-p-camp-one='MONTREAL, QC. 111'
                                            data-first-p-camp-tow='MONTREAL, QC. 222'
                                            ref={camp_p_first}
                                        >MONTREAL, QC. {slideIndex}</p> */}
                                        <p
                                            data-second-p-camp-one={data['campaigns'][0]?.description}
                                            data-second-p-camp-two={data['campaigns'][1]?.description}
                                            data-second-p-camp-three={data['campaigns'][2]?.description}
                                            ref={camp_p_second}
                                            style={{ whiteSpace: "break-spaces" }}
                                        >{data['campaigns'][0]?.description}</p>
                                        <div>
                                            <div>
                                                <i class="fa-solid fa-location-dot"></i><p
                                                    data-country-p-camp-one={data['campaigns'][0]?.region.country}
                                                    data-country-p-camp-two={data['campaigns'][1]?.region.country}
                                                    data-country-p-camp-three={data['campaigns'][2]?.region.country}
                                                    ref={camp_p_country}
                                                >{data['campaigns'][0]?.region.country}</p>
                                                <i class="fa-solid fa-calendar-days"></i> <p
                                                    data-date-p-camp-one={data['campaigns'][0]?.posted_at.slice(0, 10)}
                                                    data-date-p-camp-two={data['campaigns'][1]?.posted_at.slice(0, 10)}
                                                    data-date-p-camp-three={data['campaigns'][2]?.posted_at.slice(0, 10)}
                                                    ref={camp_p_date}
                                                >{data['campaigns'][0]?.posted_at.slice(0, 10)}</p>
                                            </div>
                                            <button>Learn More</button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        {/* data['news'][0].title */}
                        {/* data['news'][0].content */}
                        {/* data['news'][0].region.country */}
                        {/* data['news'][0].created_at */}
                        <div className="our-latest-news">
                            <div className="container">
                                <div>
                                    <h1 className='h1-styles'>OUR LATEST <span>NEWS</span></h1>
                                </div>
                                <section className='our-latest'>
                                    <div className='context'>
                                        <h6
                                            // data-h6-news-one='“SKILLS OF EVALUATING FOREIGN FUNDING” COURSES HELD IN JORDAN 111'
                                            // data-h6-news-tow='“SKILLS OF EVALUATING FOREIGN FUNDING” COURSES HELD IN JORDAN 222'
                                            data-h6-news-one={data['news'][0]?.title}
                                            data-h6-news-tow={data['news'][1]?.title}
                                            data-h6-news-three={data['news'][2]?.title}
                                            ref={news_h6}
                                        >“SKILLS OF EVALUATING FOREIGN
                                            FUNDING” COURSES HELD IN
                                            JORDAN</h6>
                                        <span
                                            data-span-news-date-one={data['news'][0]?.created_at}
                                            data-span-news-date-tow={data['news'][1]?.created_at}
                                            data-span-news-date-three={data['news'][2]?.created_at}
                                            ref={news_span_date}
                                        >
                                            <span
                                                data-span-news-country-one={data['news'][0]?.region.country}
                                                data-span-news-country-tow={data['news'][1]?.region.country}
                                                data-span-news-country-three={data['news'][2]?.region.country}
                                                ref={news_span_country}
                                            >JORDAN</span> - 26 Oct at 3:32 pm</span>
                                        <p
                                            // data-p-news-title-one='Rahma Worldwide collaborated with
                                            // the Department of Foreign Societies
                                            // at the Jordanian 
                                            // Ministry of Social Development, held
                                            // a workshop entitled “Skills of
                                            // Evaluating Foreign Funding”
                                            // which revolved around the
                                            // legislation and governing foreign 
                                            // funding and the mechanism 
                                            // of its application for organizations
                                            // operating in Jordan. Rahma
                                            // Worldwide’s Representative
                                            // in Jordan… 111'
                                            // data-p-news-title-tow='Rahma Worldwide collaborated with
                                            // the Department of Foreign Societies
                                            // at the Jordanian 
                                            // Ministry of Social Development, held
                                            // a workshop entitled “Skills of
                                            // Evaluating Foreign Funding”
                                            // which revolved around the
                                            // legislation and governing foreign 
                                            // funding and the mechanism 
                                            // of its application for organizations
                                            // operating in Jordan. Rahma
                                            // Worldwide’s Representative
                                            // in Jordan… 222'
                                            data-p-news-title-one={data['news'][0]?.content}
                                            data-p-news-title-tow={data['news'][0]?.content}
                                            data-p-news-title-three={data['news'][0]?.content}
                                            ref={news_p_title}
                                        >Rahma Worldwide collaborated with
                                            the Department of Foreign Societies
                                            at the Jordanian
                                            Ministry of Social Development, held
                                            a workshop entitled “Skills of
                                            Evaluating Foreign Funding”
                                            which revolved around the
                                            legislation and governing foreign
                                            funding and the mechanism
                                            of its application for organizations
                                            operating in Jordan. Rahma
                                            Worldwide’s Representative
                                            in Jordan…</p>
                                        <figure></figure>
                                    </div>
                                    <div className="img-slider">
                                        <Swiper
                                            cssMode={true}
                                            navigation={true}
                                            pagination={true}
                                            mousewheel={true}
                                            keyboard={true}
                                            modules={[Navigation, Pagination]}
                                            className="mySwiper"
                                            onSlideChange={(swiper) => setSlideIndexNews(swiper.realIndex)}
                                        >
                                            {data['news']?.map(el => (
                                                <>
                                                    <SwiperSlide key={el.id}><img src={el.image} alt={el.title} /></SwiperSlide>
                                                </>
                                            ))}
                                        </Swiper>
                                        <button><i class="fa-solid fa-arrow-right"></i> READ MORE</button>
                                    </div>
                                    <div className='social-media-filter'>
                                        <div className='social-media'>
                                            <div className='social-icons'>
                                                <div onClick={() => handleNewsChange("id-fb")}><i style={{ color: smType === "id-fb" && "#3b5998" }} className="fa-brands fa-facebook-f"></i></div>
                                                <div onClick={() => handleNewsChange("id-tw")}><i style={{ color: smType === "id-tw" && "#1DA1F2" }} className="fa-brands fa-twitter"></i></div>
                                                <div onClick={() => handleNewsChange("id-ins")}><i style={{ color: smType === "id-ins" && "#bc2a8d" }} className="fa-brands fa-instagram"></i></div>
                                                <div onClick={() => handleNewsChange("id-yt")}><i style={{ color: smType === "id-yt" && "#FF0000" }} className="fa-brands fa-youtube"></i></div>
                                            </div>
                                            {smType === "id-fb" ? (
                                                <>
                                                    {data['fb_posts']?.map(el => (
                                                        <div key={el.id} className='social-box'>
                                                            <img src={el.image} alt="img" />
                                                            <div>
                                                                <div>
                                                                    <span>{el.region.country}</span>
                                                                    <br />
                                                                    <b>{el.title}</b>
                                                                    <p>{el.content.length < 200 ? el.content : el.content.slice(0, 200)}...</p>
                                                                </div>
                                                                <div>
                                                                    <span>{el.created_at.slice(0, 10)}</span>
                                                                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : smType === "id-tw" ? (
                                                <>
                                                    {data['tw_posts']?.map(el => (
                                                        <div key={el.id} className='social-box'>
                                                            <img src={el.image} alt="img" />
                                                            <div>
                                                                <div>
                                                                    <span>{el.region.country}</span>
                                                                    <br />
                                                                    <b>{el.title}</b>
                                                                    <p>{el.content.length < 200 ? el.content : el.content.slice(0, 200)}...</p>
                                                                </div>
                                                                <div>
                                                                    <span>{el.created_at.slice(0, 10)}</span>
                                                                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : smType === "id-ins" ? (
                                                <>
                                                    {data['insta_posts']?.map(el => (
                                                        <div key={el.id} className='social-box'>
                                                            <img src={el.image} alt="img" />
                                                            <div>
                                                                <div>
                                                                    <span>{el.region.country}</span>
                                                                    <br />
                                                                    <b>{el.title}</b>
                                                                    <p>{el.content.length < 200 ? el.content : el.content.slice(0, 200)}...</p>
                                                                </div>
                                                                <div>
                                                                    <span>{el.created_at.slice(0, 10)}</span>
                                                                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : smType === "id-yt" ? (
                                                <>
                                                    {data['yt_posts']?.map(el => (
                                                        <div key={el.id} className='social-box'>
                                                            <img src={el.image} alt="img" />
                                                            <div>
                                                                <div>
                                                                    <span>{el.region.country}</span>
                                                                    <br />
                                                                    <b>{el.title}</b>
                                                                    <p>{el.content.length < 200 ? el.content : el.content.slice(0, 200)}...</p>
                                                                </div>
                                                                <div>
                                                                    <span>{el.created_at.slice(0, 10)}</span>
                                                                    <button><i class="fa-solid fa-arrow-right-long"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div className="map-world" style={{ position: 'relative' }}>
                            <div className="container">
                                <div>
                                    <h3>WORLD MAP SHOWS SOME OF OUR CURRENT</h3>
                                    <h4>WORK AROUND THE WORLD</h4>
                                    <h5>RAHMA WORLDWIDE HAS DIFFERENT PROGRAMS IMPLEMENTED IN EACH COUNTRY.
                                        THEIR HUMANITARIAN AID REACHES VARIOUS COUNTRIES INCLUDING:</h5>
                                    <h5>UNITED STATES – AFRICA – JORDAN – LEBANON – PALESTINE – SYRIA – TURKEY – YEMEN</h5>
                                </div>
                                <section className='map'>
                                    <motion.div
                                        onMouseOver={() => mapFunction()}
                                        variants={MapContainerAnimate}
                                        initial={'hidden'}
                                        animate={clicked ? 'visible' : 'hidden'}
                                        className='the-map'
                                        id='MapContainer'
                                    >
                                        <MapComponent />
                                        <div className='video'>
                                            <ModalVideo channel='youtube' autoplay isOpen={videoIsOpen} videoId="X9uLXfjpzho" onClose={() => setVideoIsOpen(false)} />
                                            <button className="btn-primary" onClick={() => setVideoIsOpen(true)}><i className="fa-solid fa-circle-play"></i></button>
                                            <h6><span>Watch</span> demo <br /> video</h6>
                                        </div>
                                    </motion.div>
                                    {showMapInfo ?
                                        <div
                                            className='map-context'>
                                            <motion.h1
                                                variants={maph1animation}
                                                initial={'hidden'}
                                                animate={clickedInfo ? 'visible' : 'hidden'}>{countyName}</motion.h1>
                                            {mapProgram?.map(el => (
                                                <motion.div
                                                    variants={mapContextAnimation1}
                                                    initial={'hidden'}
                                                    animate={clickedInfo ? 'visible' : 'hidden'}
                                                    key={el.id}
                                                >
                                                    <div className='the-svg'>
                                                        <img src={el.mainImg} />
                                                    </div>
                                                    <div>
                                                        <h5>{el.total_beneficiaries}</h5>
                                                        <h5>{el.areas_served}</h5>
                                                    </div>
                                                    <div>
                                                        <Map1icon />
                                                        <Map2icon />
                                                    </div>
                                                    <div style={{ whiteSpace: "break-spaces" }}>
                                                        {el.description.length < 140 ? el.description : el.description.slice(0, 140)}...
                                                    </div>
                                                </motion.div>
                                            ))}
                                            <motion.button
                                                variants={mapbuttonanimation}
                                                initial={'hidden'}
                                                animate={clickedInfo ? 'visible' : 'hidden'}><i class="fa-solid fa-arrow-right-long"></i></motion.button>
                                        </div> : ''}
                                </section>
                            </div>
                        </div>

                        <div className="supported-by">
                            <div className="container">
                                <p><i class="fa-solid fa-chevron-right"></i></p>
                                {data['awards']?.map(el => (
                                    <>
                                        {el.id % 2 === 0 ? (
                                            <div key={el.id} className='secound-support'>
                                                <img src={el.image} alt="" />
                                                <div>
                                                    <h4>{el.title}</h4>
                                                    <p>
                                                        {el.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={el.id} className='first-support'>
                                                <img src={el.image} alt="" />
                                                <div>
                                                    <h4>{el.title}</h4>
                                                    <p>
                                                        {el.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </>
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

export default Homepage