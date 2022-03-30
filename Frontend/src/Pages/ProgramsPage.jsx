import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import headerImg from "../Assets/images/ourwork-bg.jpg"
import orphanBg from "../Assets/images/orphan_bg.jpg"
import orphanContent from "../Assets/images/orphan_sponsorship_content.png"
import { useDispatch, useSelector } from 'react-redux'
import { getHomeData } from '../Redux/home'
import ModalVideo from 'react-modal-video'
import { Accordion } from 'react-bootstrap'
import ChartComponent from '../Components/ChartComponent'
import DonateBtnAndsocialMedia from '../Components/DonateBtnAndsocialMedia'
import { getProgramsData } from '../Redux/programs'

const ProgramsPage = ({ history }) => {

    const dispatch = useDispatch()

    const programsData = useSelector(state => state.getProgramsData)
    const { loading, data, error } = programsData

    const [videoIsOpen, setVideoIsOpen] = useState(false)

    const [windosY, setWindowY] = useState()
    window.addEventListener('scroll', () => {
        setWindowY(window.scrollY)
    })

    useEffect(() => {
        dispatch(getProgramsData())
    }, [dispatch])
    return (
        <>
            {loading ? (
                <></>
            ) : data ? (
                <>
                    <NavBar history={history} />
                    {windosY >= 700 ? <DonateBtnAndsocialMedia /> : ""}
                    <section className="programsPage-header">
                        <h1>PROGRAMS</h1>
                        <img className='' src={headerImg} />
                    </section>

                    <section className="programsPage-body">
                        <h1>{data['programs'][0].title}</h1>
                        <div className="container">
                            <div className="row row1">
                                <div className="col-md-6">
                                    {data['programs'][0].image ? (
                                        <img src={data['programs'][0].image} />
                                    ) : (
                                        <></>
                                    )}
                                    {/* <button className="btn-primary programs-video-cta" onClick={() => setVideoIsOpen(true)}><i className="fa-solid fa-circle-play"></i></button> */}
                                </div>
                            </div>
                            <div className="row row2">
                                <div className="col-md-8">
                                    <p>{data['programs'][0].description}</p>
                                </div>
                            </div>

                            <div className="row row3 mb-5">
                                <h1 className='h1-styles'>PROGRAMS <span>OFFERED</span></h1>

                                <div className="row">
                                    {data['intAcademy'].map(el => (
                                        <div key={el.id} className="col-md-6">{el.title}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="orphans">
                        <img src={orphanBg} alt="" />
                        <div className="container">
                            <div className='orphan_sponsorship'>
                                <h1>ORPHAN SPONSORSHIP</h1>
                                <div>
                                    <div>
                                        <img src={orphanContent} alt="" />
                                    </div>
                                    <p>
                                        LOREM IPSUM, DIZGI VE BASKI ENDÜSTRISINDE KULLANILAN
                                        MIGIR METINLERDIR. LOREM IPSUM, ADI BILINMEYEN BIR
                                        MATBAACININ BIR HURUFAT NUMUNE KITABI OLUŞTURMAK
                                        ÜZERE BIR YAZI GALERISINI ALARAK KARIŞTIRDIĞI
                                        1500'LERDEN BERI ENDÜSTRI STANDARDI SAHTE METINLER
                                        OLARAK KULLANILMIŞTIR. BEŞYÜZ YIL BOYUNCA VARLIĞINI
                                        SÜRDÜRMEKLE KALMAMIŞ, AYNI ZAMANDA PEK DEĞIŞMEDEN
                                        ELEKTRONIK DIZGIYE DE SIÇRAMIŞTIR
                                    </p>
                                </div>
                                <button>Orphan Sponsorship</button>
                            </div>
                        </div>
                    </section>

                    <section className="programsPage-body">
                        <h1>{data['programs'][2].title}</h1>
                        <div className="container">
                            <div className="row row1">
                                <div className="col-md-6">
                                    {data['programs'][2].image ? (
                                        <img src={data['programs'][2].image} />
                                    ) : (
                                        <div className="my-3"></div>
                                    )}
                                    {/* <button className="btn-primary programs-video-cta" onClick={() => setVideoIsOpen(true)}></button> */}
                                </div>
                            </div>
                            <div className="row row2">
                                <div className="col-md-8">
                                    <p>{data['programs'][2].description}</p>
                                </div>
                            </div>

                            <div className="row row3">
                                <h1 className='h1-styles'>PROGRAMS <span>OFFERED</span></h1>

                                <Accordion className="Accordion mb-5" style={{ borderRadius: '10px' }}>
                                    {data['mentalHealth'].map(el => (
                                        <Accordion.Item key={el.id} eventKey={el.id} style={{ borderRadius: '10px', width: "100%" }}>
                                            <Accordion.Header style={{ fontSize: "28px", borderRadius: '10px', width: "100%" }}><h4 style={{ color: "gray", letterSpacing: "0", textAlign: 'right', fontWeight: '300' }}>{el.title}</h4></Accordion.Header>
                                            <Accordion.Body style={{ borderRadius: '10px', width: "100%" }}>
                                                <p style={{ letterSpacing: "0", width: "100%", textAlign: "left" }}>{el.description}</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            </div>
                        </div>
                    </section>
                    <ChartComponent />
                    <Footer />
                </>
            ) : (
                <div className="alert alert-danger">{error}</div>
            )}
        </>
    )
}

export default ProgramsPage