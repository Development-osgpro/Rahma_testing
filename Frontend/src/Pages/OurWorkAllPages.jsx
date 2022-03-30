import React, { useEffect, useState } from 'react'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import ourWorkBg from '../Assets/images/ourwork-bg.jpg'
import educationIcons1 from '../Assets/svgs/all-icons/educationIcons-01.svg'
import educationIcons2 from '../Assets/svgs/all-icons/educationIcons-02.svg'
import CountUp from 'react-countup';
import Educaimg from '../Assets/images/educaImage-02.jpg'

import { FreeMode, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux'
import { getServiceData } from '../Redux/service'

const OurWorkAllPages = ({ match }) => {

    const id = match.params.id

    const dispatch = useDispatch()

    const service = useSelector(state => state.getServiceData)
    const { loading, data, error } = service

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getServiceData(id))
    }, [dispatch, id])

    return (
        <>
            {data && (
                <>
                    {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                    <NavBar />
                    <section className='allpagesourwork'>
                        <div>
                            <img src={ourWorkBg} className="theIMageImage" alt="our work background" />
                            <h1 className="firsth1">{data['services'].service_title}</h1>
                        </div>
                        <div className="video_section">
                            <div className="container">
                                <h4>Rahma Worldwide launched an educational campaign for refugees
                                    nd displaced children we want you to be part of it!</h4>
                                <div className="videoDiv">
                                    <video className="videoBox" controls >
                                        <source src="#" type="video/mp4" />
                                    </video>
                                </div>
                                <div className="text_box_all">
                                    <h6>RAHMA WORLDWIDE, ONE OF THE LEADING CHARITIES FOR CHILDREN’S EDUCATION, STARTED
                                        ITS EDUCATIONAL PROGRAMS IN YEMEN BACK IN 2016, DURING 2019 AND 2020, THE PROGRAMS
                                        VARIED BETWEEN:
                                        <br />
                                        <br />
                                        <figure></figure> SCHOOL RESTORATION WITH A BUDGET OF 29,500 USD WAS POSSIBLE WITH THE
                                        SUPPORT OF MANY INDIVIDUALS AND THE TOP NON-PROFIT ORGANIZATIONS IN THE US.
                                        THOSE SCHOOLS WELCOMED 4,500 STUDENTS
                                        <br />
                                        <br />
                                        <figure></figure> WHITE BOARD DISTRIBUTION TO 500 CLASSROOMS WITH A BUDGET OF 4,500 UDS
                                        IN ADDITION TO THE NUTRITION AND SCHOOL SUPPLIES PROGRAMS THAT BENEFITED
                                        <br />
                                        <br />
                                        <figure></figure> IN ADDITION TO THE NUTRITION AND SCHOOL SUPPLIES PROGRAMS THAT BENEFITED
                                        MORE THAN 10,000 STUDENTS
                                        <br />
                                        <br />
                                        <figure></figure> TODAY, WE LAUNCH THE “TEACH ME, SO I CAN BE” CAMPAIGN FOR THE SIXTHS CONSECUTIVE
                                        YEAR. JOIN US IN THE JOURNEY.
                                    </h6>
                                </div>
                            </div>
                            <div className="countUp">
                                <img src={Educaimg} alt="" className="theIMageImage lan" />
                                <div className="container">
                                    <div>
                                        <h5>TOTAL BENEFICIARIES</h5>
                                        <img src={educationIcons1} alt="" />
                                        <h1><CountUp end={177642} /></h1>
                                    </div>
                                    <div>
                                        <h5>AREAS SERVED</h5>
                                        <img src={educationIcons2} alt="" />
                                        <h1><CountUp end={5} /><b>Countries</b></h1>
                                    </div>
                                </div>
                            </div>

                            <div className="videos_section">
                                <div className="container">
                                    <div className='theVideoitSelf'>
                                        <div>SYRIA</div>
                                        <video className="videoBox" controls >
                                            <source src="#" type="video/mp4" />
                                        </video>
                                        <figure></figure>
                                    </div>
                                    <div className='theVideoitSelf'>
                                        <div>PALESTINE</div>
                                        <video className="videoBox" controls >
                                            <source src="#" type="video/mp4" />
                                        </video>
                                        <figure></figure>
                                    </div>
                                    <div className='theVideoitSelf'>
                                        <div>TURKEY</div>
                                        <video className="videoBox" controls >
                                            <source src="#" type="video/mp4" />
                                        </video>
                                        <figure></figure>
                                    </div>
                                    <div className='theVideoitSelf'>
                                        <div>LEBANON</div>
                                        <video className="videoBox" controls >
                                            <source src="#" type="video/mp4" />
                                        </video>
                                        <figure></figure>
                                    </div>
                                </div>
                            </div>

                            <div className="text_box_all_page">
                                <div className="container">
                                    <h5>OUR NONPROFIT LOCATED IN MICHIGAN WAS ABLE TO PROVIDE SCHOOLING FOR MANY YOUNG
                                        CHILDREN. THEY HAD LOST THE CHANCE TO STUDY IN THEIR COUNTRY BECAUSE OF THE
                                        UNFAVORABLE CONDITIONS PREVAILING WHERE THEY LIVE. WE HAVE EARNED A PLACE AMONG
                                        THE BEST CHARITIES FOR CHILDREN’S EDUCATION SINCE OUR TEAM HAS GIVEN A SECOND
                                        CHANCE FOR THESE CHILDREN TO REALIZE THEIR DREAMS OF ACHIEVING SOMETHING IN LIFE.
                                        WE UNDERSTOOD THEIR NEEDS AND PROVIDED THEM WITH ALL THE FACILITIES TO MAKE THEM
                                        FEEL COMFORTABLE DURING THE LEARNING PROCESS. YOU CAN ALSO BE A PART OF OUR
                                        ENDEAVOR BY CHOOSING TO SPONSOR AN ORPHAN AND HELP WITH THE EDUCATION.
                                        <br />
                                        <br />
                                        RAHMA WORLDWIDE WORKED WITH OTHER CHARITIES FOR CHILDREN’S EDUCATION TO
                                        RENOVATE A SCHOOL IN YEMEN. IT WAS DONE WITH THE AIM TO FACILITATE A SMOOTH
                                        LEARNING EXPERIENCE. WE DID NOT WANT THE CHILDREN TO FACE ANY DIFFICULTY IN
                                        ACQUIRING THE EDUCATION THAT THEY REQUIRE.
                                        <br />
                                        <br />
                                        WE ALSO ESTABLISHED AN EDUCATIONAL CENTER IN TURKEY THAT PROVIDES EDUCATION IN
                                        ARABIC AND TURKISH LANGUAGES. THE STUDENTS GAIN A LOT OF EXPOSURE AS WE HAVE
                                        FORMAL AND NON-FORMAL COURSES LIKE SPORTS AND ARTS. IT ENSURES THAT THE STUDENTS
                                        EXCEL IN ACADEMICS AND ALSO DEVELOP EXTRA-CURRICULAR SKILLS AS WELL. OUR TEAM’S
                                        COMMITMENT IN PROVING THE HIGHEST-QUALITY EDUCATION HAS RANKED US AMONG THE BEST
                                        CHARITIES FOR CHILDREN’S EDUCATION. RAHMA WORLDWIDE WILL NEED YOUR SUPPORT TO
                                        TOUCH THE LIVES OF CHILDREN IN WAR-AFFECTED AND POLITICALLY UNSTABLE COUNTRIES.
                                        GIVE US A HELPING HAND TODAY!
                                    </h5>
                                </div>
                            </div>

                            <div className="Joinus">
                                <div className="container">
                                    <h1>Join us to Inspire, Enable, Celebrate and Educate
                                        For only <span style={{ color: '#34598a' }}>63¢</span> a day, we all should participate!</h1>
                                </div>
                                <div className="container">
                                    {/* <Swiper
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
                            </Swiper> */}
                                </div>
                                <ChartComponent />
                                <Footer />
                            </div>
                        </div>
                    </section>
                </>
            )}
        </>
    )
}

export default OurWorkAllPages