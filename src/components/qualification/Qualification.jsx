import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {

    const [toggle, setToggle] = useState(1)

    const toggleTab = (index) => {
        setToggle(index)
    }

    return (
        <section className="qualification section" id='services'>
            <h2 className="section__title">Qualification</h2>
            <p className="section__subtitle">My personal journey</p>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${toggle === 1 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(1)}>
                        <i className='uil uil-graduation-cap'></i>
                        Education
                    </div>
                    <div
                        className={`qualification__button button--flex ${toggle === 2 ? 'qualification__active' : ''}`}
                        onClick={() => toggleTab(2)}>
                        <i className='uil uil-briefcase-alt'></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={`qualification__content ${toggle === 1 ? 'qualification__content-active' : ''}`}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UNIVERSITY OF IOWA</h3>
                                <h2 className="qualification__title_sub">Tippie School of Business, Iowa City, IA</h2>
                                <span className="qualification__subtitle">Master of Science in Business Analytics</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2017 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">UNIVERSITY OF IOWA</h3>
                                <h2 className="qualification__title_sub">Tippie School of Business, Iowa City, IA</h2>
                                <span className="qualification__subtitle">Master of Business Administration (M.B.A)</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2015 - 2018
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">CITY UNIVERSITY OF NEW YORK (CUNY)</h3>
                                <h2 className="qualification__title_sub">City College of New York (CCNY), New York, NY</h2>
                                <span className="qualification__subtitle">Bachelor of Engineering in Chemical Engineering</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    2002 - 2008
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={`qualification__content ${toggle === 2 ? 'qualification__content-active' : ''}`}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Scientist | Data Strategist</h3>
                                <h2 className="qualification__title_sub_exp">​JOHN DEERE</h2>
                                <span className="qualification__subtitle">Environmental, Health & Safety (EHS)</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    Sept 2021 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Data Scientist</h3>
                                <h2 className="qualification__title_sub_exp">​JOHN DEERE</h2>
                                <span className="qualification__subtitle">Data Science Enablement</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    JUN 2021 – SEPT 2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Scientist</h3>
                                <h2 className="qualification__title_sub_exp">​JOHN DEERE</h2>
                                <span className="qualification__subtitle">Order Fulfillment</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    JUN 2020 – JUN 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Data Scientist</h3>
                                <h2 className="qualification__title_sub_exp">​JOHN DEERE</h2>
                                <span className="qualification__subtitle">Global Market Research and Analytics

                                </span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    JUN 2019 – JUN 2020
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Data Analyst</h3>
                                <h2 className="qualification__title_sub_exp">​JOHN DEERE</h2>
                                <span className="qualification__subtitle">Supply Chain Management</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    OCT 2018 – JUN 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <h2 className='engineering_exp'>Engineering Experience</h2>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Process Engineer</h3>
                                <h2 className="qualification__title_sub_exp">​BAYER</h2>
                                <span className="qualification__subtitle">Crop Protection</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    FEB 2014 - FEB 2016
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Production Engineer</h3>
                                <h2 className="qualification__title_sub_exp">PRAXAIR</h2>
                                <span className="qualification__subtitle">Thermal Spray Coating</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    JUN 2008 - SEPT 2011
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Chemical Engineering Intern</h3>
                                <h2 className="qualification__title_sub_exp">PRATT AND WHITNEY</h2>
                                <span className="qualification__subtitle">Materials and Processes Engineering (MPE)</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    SUMMER 2006
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Chemical Engineering CO-OP</h3>
                                <h2 className="qualification__title_sub_exp">PRATT AND WHITNEY</h2>
                                <span className="qualification__subtitle">GMaterials and Processes Engineering (MPE)</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    JAN 2005 – SEPT 2006
                                </div>
                            </div>
                        </div>
                        <h2 className='engineering_exp'>Volunteering Experience</h2>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Volunteer Teacher</h3>
                                <h2 className="qualification__title_sub_exp">PEACE CORPS</h2>
                                <span className="qualification__subtitle">Education</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i>
                                    SEPT 2011 - DEC 2013
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <h2 className='engineering_exp'>Data Science & Analytics Projects</h2>
                        <h4 className='engineering_exp_sub'>Professional</h4>
                        <div className="qualification__data">
                            <div>
                                <span className="qualification__subtitle">Chemical Approval Process Automation and Standardization</span>
                                <h3 className="qualification__title">Power Automate, Microsoft Forms, SharePoint</h3>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <a href="https://www.malonganicolas.com/projects" target="_blank" rel="noopener noreferrer" className="work__button work_link" >Monthly Product | Demand Forecasting Tool | Linear Regression, Hypothesis Testing using R, R Shiny</a>
                                <h3 className="qualification__title">R, R Shiny</h3>

                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <a href="https://www.malonganicolas.com/projects" target="_blank" rel="noopener noreferrer" className="work__button work_link" >Supply Chain Risky Resiliency Assessment and Reporting Automation</a>
                                <h3 className="qualification__title">R, R Shiny, Databricks, Sparklyr, PySpark</h3>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <span className="qualification__subtitle">Market Share Estimation and Reporting Automation.</span>
                                <h3 className="qualification__title">R, SQL, Tableau, Databricks, PostgreSQL</h3>

                            </div>
                        </div>
                        <h4 className='engineering_exp_sub'>Academic & Recreational</h4>
                        <div className="qualification__data">
                            <div>
                                <a href="https://www.malonganicolas.com/projects" target="_blank" rel="noopener noreferrer" className="work__button work_link" >Stock Portfolio Optmization | Stock Market Seasonality Analysis</a>
                                <h3 className="qualification__title">R, R Shiny</h3>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <span className="qualification__subtitle">Topic Classification | Text Analytics and Classification</span>
                                <h3 className="qualification__title">Python, PySpark, Scikit-learn</h3>

                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <span className="qualification__subtitle">Loan Default Prediction | KNN, SVM, Decision Tree and Logistic Regression</span>
                                <h3 className="qualification__title">R, Python, DataRobot</h3>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">

                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <span className="qualification__subtitle">License Registration Suspension Prediction | Random Forrest and Linear Regression</span>
                                <h3 className="qualification__title">R, SQL, Tableau</h3>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Qualification