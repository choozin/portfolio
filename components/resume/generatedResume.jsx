import { useState } from 'react';
import styles from './generatedResume.module.css'

const GeneratedResume = (props) => {

    const [workArray, setWorkArray] = useState([
        {
            title: 'Web Developer',
            name: 'Freelance',
            date: '2015 - Present',
            period: 10,
            location: 'Via the Internet',
            description: 'description',
            keywords: [
                'techStuff',
                'creative',
                'clients',
                'programming',
                'problemSolving',
            ],
        },
        {
            title: 'Courrier',
            name: 'Skip the Dishes',
            date: '2019-Present',
            period: 10,
            location: 'London, ON',
            description: 'description',
            keywords: [
                'clients',
            ],
        },
        {
            title: 'Owner',
            name: 'Kandi & Color',
            date: '2018 - 2020',
            period: 8,
            location: 'Via the Internet',
            description: 'description',
            keywords: [
                'techStuff',
                'creative',
                'clients',
                'programming',
            ],
        },
        {
            title: 'SEO Manager & Web Developer',
            name: 'SmartWebPros',
            date: '2016',
            period: 7,
            location: 'London, ON',
            description: 'description',
            keywords: [
                'techStuff',
                'creative',
                'clients',
                'programming',
            ],
        },
        {
            title: 'Peer Tutor',
            name: 'Fanshawe College',
            date: '2014-2015',
            period: 6,
            location: 'London, ON',
            description: 'description',
            keywords: [
                'clients',
                'education',
            ],
        },
        {
            title: 'General Dynamics Land Systems - Canada',
            name: 'Subcontracting Administrative Assistant',
            date: '2011-2012',
            period: 5,
            location: 'location',
            description: 'description',
            keywords: [
                'techStuff',
                'clients',
            ],
        },
        {
            title: 'Pita Technician',
            name: 'U-Needa-Pita',
            date: '2009-2010',
            period: 3,
            location: 'St. Catharines, ON',
            description: 'description',
            keywords: [
                'clients',
            ],
        },
        {
            title: 'Charity Outreach Specialist',
            name: 'Customer Support Incorporated',
            date: '2009',
            period: 3,
            location: 'St. Catharines, ON',
            description: 'description',
            keywords: [
                'clients',
            ],
        },
        {
            title: 'Team Lead',
            name: 'Custom Cuisine Catering',
            date: '2006-2007',
            period: 2,
            location: 'London, ON',
            description: 'description',
            keywords: [
                'clients',
                'education',
            ],
        },
        {
            title: 'Burger Savant',
            name: 'Harvey\'s',
            date: '2003-2007',
            period: 2,
            location: 'London, ON',
            description: 'description',
            keywords: [
                'creative',
                'clients',
            ],
        },
        {
            title: 'Dispatcher & Student Liason',
            name: 'Empire Aviation',
            date: '2003-2004',
            period: 2,
            location: 'Via the Internet',
            description: 'description',
            keywords: [
                'clients',
            ],
        },
        {
            title: 'Modeller, Skinner & Programmer',
            name: 'Point of Existence Mod Team',
            date: '2003-2005',
            period: 2,
            location: 'Via the Internet',
            description: 'description',
            keywords: [
                'techStuff',
                'programming',
            ],
        },
        {
            title: 'Founder',
            name: 'Phantasy Gaming Network',
            date: '2002-2004',
            period: 2,
            location: 'Via the Internet',
            description: 'description',
            keywords: [
                'techStuff',
                'programming',
            ],
        },
    ])

    const [schoolArray, setSchoolArray] = useState([
        {
            title: 'Various Programming Courses',
            name: 'Udemy',
            date: '2019-2021',
            period: 10,
            location: 'Via the Internet',
            description: 'description',
            keywords: [
                'techStuff',
                'programming',
                'education',
            ],
        },
        {
            title: 'TEFL',
            name: 'International Open Academy',
            date: '2018',
            period: 9,
            location: 'Via the Internet',
            description: 'description',
            keywords: [
                'education',
                'interests',
            ],
        },
        {
            title: 'Web Application Development',
            name: 'Fanshawe College',
            date: '2013-2015',
            period: 6,
            location: 'location',
            description: 'description',
            keywords: [
                'techStuff',
                'creative',
                'programming',
                'education',
            ],
        },
        {
            title: 'Bachelor of Arts - Urban Planning & GIS',
            name: 'Brock University',
            date: '2007-2011',
            period: 3,
            location: 'St. Catharines, ON',
            description: 'description',
            keywords: [
                'techStuff',
                'education',
            ],
        },
        {
            title: 'Licenced Recreational Pilot',
            name: 'Empire Aviation',
            date: '2003-2004',
            period: 2,
            location: 'London, ON',
            description: 'description',
            keywords: [
                'techStuff',
                'education',
            ],
        },
    ])

    const [skillsArray, setSkillsArray] = useState([
        {
            title: 'Boardgame Creator',
            name: 'Society',
            date: '2021-Present',
            location: 'London',
            description: 'description',
            keywords: [
                'creative',
                'techStuff',
            ],
        },
        {
            title: 'DIY Automotive Repair',
            name: 'My Car',
            date: '2018-Present',
            location: 'My Driveway',
            description: 'description',
            keywords: [
                'techStuff',
            ],
        },
        {
            title: 'Hydroponic Gardening',
            name: 'My Parents\'',
            date: '2020-Present',
            location: 'location',
            description: 'description',
            keywords: [
                'creative',
                'techStuff',
            ],
        },
        {
            title: 'Cartography',
            name: 'Life',
            date: '2004-Present',
            location: 'location',
            description: 'description',
            keywords: [
                'education',
                'techStuff',
            ],
        },
        {
            title: 'Meteorology',
            name: 'Life',
            date: '2007-Present',
            location: 'location',
            description: 'description',
            keywords: [
                'education',
                'techStuff',
            ],
        },
        {
            title: 'Astronomy & Spaceflight',
            name: 'Life',
            date: '2000-Present',
            location: 'location',
            description: 'description',
            keywords: [
                'education',
                'techStuff',
            ],
        },
        {
            title: 'Aviation',
            name: 'Life',
            date: '2003-Present',
            location: 'location',
            description: 'description',
            keywords: [
                'education',
                'techStuff',
            ],
        },
        {
            title: 'Commodities Trading',
            name: 'Life',
            date: '2012-Present',
            location: 'location',
            description: 'description',
            keywords: [
                'techStuff',
                'education',
            ],
        },
    ])


    const compileCategoriesArray = () => {
        let categoriesArray = [];
        props.techStuff && categoriesArray.push('techStuff')
        props.creative && categoriesArray.push('creative')
        props.clients && categoriesArray.push('clients')
        props.problemSolving && categoriesArray.push('problemSolving')
        props.programming && categoriesArray.push('programming')
        props.education && categoriesArray.push('education')
        return categoriesArray;
    }

    const compileSkillsArray = () => {

        let newSkillsArray = [];
        let addSkill = false;

        for (let i = 0; i < skillsArray.length; i++) {
            for (let j = 0; j < skillsArray[i].keywords.length; j++) {
                compileCategoriesArray().includes(skillsArray[i].keywords[j]) && !newSkillsArray.some(skill => skill.title === skillsArray[i].title) && newSkillsArray.push(skillsArray[i])
            }
        }

        return newSkillsArray

    }

    const compileWorkArray = () => {

        let newWorkArray = [];
        let addWorkplace = false;

        for (let i = 0; i < workArray.length; i++) {
            for (let j = 0; j < workArray[i].keywords.length; j++) {
                compileCategoriesArray().includes(workArray[i].keywords[j]) && !newWorkArray.some(work => work.title === workArray[i].title) && newWorkArray.push(workArray[i])
            }
        }
        return newWorkArray.filter(obj => obj.period >= (props.period/10))

    }
    console.log(compileWorkArray())

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.heading}>
                    <h3>Cam Taylor's Resume</h3>
                </div>
            </div>
            <div className={styles.slogan}>
                <h4>Don't forget to bring a towel.</h4>
            </div>
            <div className={styles.workExperience}>
                <div className={styles.heading}>
                    <h3>Work Experience</h3>
                </div>
                <div className={styles.content}>
                    {compileWorkArray().map((obj, index) => (
                        <div className={styles.work}>
                            <h4 className={styles.workTitle}>{obj.title} - <span className={styles.workName}>{obj.name}</span></h4>
                            <p className={styles.workDate}>{obj.date}</p>
                            <p className={styles.workLocation}>{obj.location}</p>
                            <p className={styles.workDescription}>{obj.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            { props.education &&
                <div className={styles.education}>
                    <div className={styles.heading}>
                        <h3>Education</h3>
                    </div>
                    <div className={styles.content}>
                        {schoolArray.filter(school => school.period >= (props.period/10)).map((obj, index) => (
                            <div className={styles.school}>
                                <h4 className={styles.schoolTitle}>{obj.title} - <span className={styles.schoolName}>{obj.name}</span></h4>
                                <p className={styles.schoolDate}>{obj.date}</p>
                                <p className={styles.schoolLocation}>{obj.location}</p>
                                <p className={styles.schoolDescription}>{obj.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
            <div className={styles.skills}>
                <div className={styles.heading}>
                    <h3>Additional Interests & Accomplishments</h3>
                </div>
                <div className={styles.content}>
                    {
                        props.interests ?
                            skillsArray.map((obj, index) => (
                                <div className={styles.skillsList}>
                                    <h4 className={styles.skillTitle}>{obj.title} - <span className={styles.skillsName}>{obj.name}</span></h4>
                                    <p className={styles.skillDate}>{obj.date}</p>
                                    <p className={styles.skillLocation}>{obj.location}</p>
                                    <p className={styles.skillDescription}>{obj.description}</p>
                                </div>
                            ))
                            :
                            compileSkillsArray().map(obj => (
                                <div className={styles.skillsList}>
                                    <h4 className={styles.skillTitle}>{obj.title} - <span className={styles.skillsName}>{obj.name}</span></h4>
                                    <p className={styles.skillDate}>{obj.date}</p>
                                    <p className={styles.skillLocation}>{obj.location}</p>
                                    <p className={styles.skillDescription}>{obj.description}</p>
                                </div>
                            ))
                    }
                </div>
            </div>
            <div className={styles.footer}>
                <p>This is the footer.</p>
            </div>
        </div>
    )

}

export default GeneratedResume