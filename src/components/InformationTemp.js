import React, { useState } from 'react';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Container } from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import $ from 'jquery'

import './InformationTemp.css';
import iconFive from '../img/iconFive.png'
import iconOne from '../img/iconOne.png'
import iconTwo from '../img/iconTwo.png';
import iconThree from '../img/iconThree.png'
import { actions } from '../Redux/actions/staticAction'
import Chart2 from './Chart2'
import '../App.css'
import '../components/applictaionsCards/SourcesCardsStyles.css'



// -------get new date in correct format to filter data----------------------------------------------------

let currentDate = moment().format("MM/DD/YYYY");
let dateBeforeWeek = moment().subtract(1, 'week').format('MM/DD/YYYY');
let dateBeforeMonth = moment().subtract(1, 'month').format('MM/DD/YYYY');
let dateBeforeYear = moment().subtract(1, 'year').format('MM/DD/YYYY')

let circleStyle1 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    backgroundColor: "rgb(247, 181, 0)",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 0
};
let circleStyle2 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    // position:'absolute',
    backgroundColor: "rgb(1, 220, 209)",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 0
};
let circleStyle3 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    // position:'absolute',
    backgroundColor: "rgb(103, 114, 222)",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 0
};
let circleStyle4 = {
    padding: 6,
    margin: 6,
    display: "inline-block",
    // position:'absolute',
    backgroundColor: "#ff4560",
    borderRadius: "50%",
    width: 1,
    height: 1,
    left: 0,
    top: 1
};

// --------------------------------------------------------------------------------------------------------------
const useStyles = () => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    paper: {
        borderRadius: '17px',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
})
export default withStyles(useStyles)(function Information() {
    const ReducerData = useSelector(state => state.staticDetailsReducer)

    const user = ReducerData.user
    const dispatch = useDispatch()
    const [more, setMore] = useState(false);


    //  ---filter by: last day,last week,last month,year
    function filterByDay() {

        $(".filterBy").css("font-weight", "unset")
        $("#day").css("font-weight", "bold")
        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (dateFormater === currentDate)
        })

        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)
            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (detaContact === currentDate)
        })
        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (dateFormater === currentDate)
        })

        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            return (detaPaper === currentDate)
        })
        dispatch(actions.setTaskStatic(AllTaskData.length))
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));

    }

    function filterByWeek() {
        $(".filterBy").css("font-weight", "unset")
        $("#week").css("font-weight", "bold")

        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (new Date(dateFormater) >= new Date(dateBeforeWeek))
        })
        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            // const dateFormater = detaPaper[1] + "/" + detaPaper[0] + "/" + detaPaper[2];
            return (new Date(detaPaper) >= new Date(dateBeforeWeek))

        })

        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (new Date(dateFormater) >= new Date(dateBeforeWeek))

        })
        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)
            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (new Date(detaContact) >= new Date(dateBeforeWeek))

        })
        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setTaskStatic(AllTaskData.length))
    }
    function filterByMonth() {
        $(".filterBy").css("font-weight", "unset")
        $("#month").css("font-weight", "bold")

        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))
        })
        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            // const dateFormater = detaPaper[1] + "/" + detaPaper[0] + "/" + detaPaper[2];
            return (new Date(detaPaper) >= new Date(dateBeforeMonth))

        })
        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {
            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (new Date(dateFormater) >= new Date(dateBeforeMonth))

        })
        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)
            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (new Date(detaContact) >= new Date(dateBeforeMonth))

        })

        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setTaskStatic(AllTaskData.length))
    }
    function filterByYear() {
        $(".filterBy").css("font-weight", "unset")
        $("#year").css("font-weight", "bold")

        let AllProjectData = (ReducerData.AllProject).filter(function (AllProject) {
            const dateProject = AllProject.dueDate.split("/")
            const dateFormater = dateProject[1] + "/" + dateProject[0] + "/" + dateProject[2];
            return (new Date(dateFormater) >= new Date(dateBeforeYear))

        })
        let AllPapersData = (ReducerData.AllPapers).filter(function (AllPapers) {

            const datePaper1 = AllPapers.createdDate
            let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
            // const dateFormater = detaPaper[1] + "/" + detaPaper[0] + "/" + detaPaper[2];
            return (new Date(detaPaper) >= new Date(dateBeforeYear))

        })
        let AllTaskData = (ReducerData.AllTask).filter(function (AllTask) {

            const dateTask = AllTask.startDate.split("/")
            const dateFormater = dateTask[1] + "/" + dateTask[0] + "/" + dateTask[2];
            return (new Date(dateFormater) >= new Date(dateBeforeYear))

        })
        let AllContactData = (ReducerData.AllContact).filter(function (AllContact) {
            const dateContact1 = (AllContact.createDateAndTime)

            let detaContact = moment(dateContact1).format("MM/DD/YYYY");
            return (new Date(detaContact) >= new Date(dateBeforeYear))

        })
        dispatch(actions.setContactStatic(AllContactData.length))
        dispatch(actions.setTaskStatic(AllTaskData.length))
        dispatch(actions.setProjectStatic(AllProjectData.length));
        dispatch(actions.setPaperStatic(AllPapersData.length));
        dispatch(actions.ClickFilter(1));

    }
    // function cssChangePadding(x) {
    //     if (x===1)
    //         $(".in-small-profil").css("padding-top", "unset")
    // }
    return (
        <div className="container-fluid mt-5">
            <div className="row pb-5" style={{ marginRight: '12%', marginLeft: '12%' }} >
                <div className="col-3 leadsInformation">
                    Leads Information
                </div>
                <div className="col-3.5" style={{ direction: "rtl" }}>
                    <div className="col-3.5" style={{ direction: "rtl" }}>
                    </div>
                </div>‏
             <Grid container spacing={4} style={{ marginLeft: "3px" }}>
                    <Grid item xs={12} sm={3} >
                        <Paper className="paperOne" onClick={() => { window.location.assign(` https://contacts.dev.leader.codes/${user.username}`) }}
                            style={{ cursor: 'pointer', padding: 10, borderRadius: '14px', background: '#FFFDFA', border: '2px Solid #F7B500', color: '#F7B500' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Contacts {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2" >
                                    <div class="col-6 ml-2">
                                        <h5>
                                            {ReducerData.leaderStatic.sumContacts ? ReducerData.leaderStatic.sumContacts : "0"}</h5>
                                    </div>
                                </div>
                                <div class="col-4" >
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: '0px 0px 20px #00000033' }}>
                                        <img src={iconOne} style={{ height: '50%' }} alt="icon one" />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px', fontWeight: 'bolder' }}>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Paper className="paperTwo" onClick={() => { window.location.assign(`https://papers.dev.leader.codes/admin/${user.username}`) }} style={{ padding: 10, background: '#ECFAFA', cursor: 'pointer', border: '2px Solid #01DCD1', color: '#01DCD1', borderRadius: '14px' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Papers {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2" >
                                    <div class="col-6 ml-2">
                                        <h5> {ReducerData.leaderStatic.sumPapers ? ReducerData.leaderStatic.sumPapers : "0"}</h5>
                                    </div>
                                </div>
                                <div class="col-4" >
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: '0px 0px 20px #00000033' }}>
                                        <img src={iconTwo} style={{ height: '50%' }} alt="icon one" />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px' }}>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}  >
                        <Paper className="paperThree"
                            onClick={() => { window.location.assign(` https://reacthub.dev.leader.codes/${user.username}/allWorkspace`) }}
                            style={{ cursor: 'pointer', padding: 10, background: '#F2F3FF', border: '2px Solid #6772DE', color: '#6772DE', borderRadius: '14px' }}>
                            <div className="ml-2" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Projects {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div className="ml-2">
                                    <div class="col-6 ml-2">
                                        <h5>
                                            {ReducerData.leaderStatic.sumProjects ? ReducerData.leaderStatic.sumProjects : "0"}
                                        </h5>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: ' 0px 0px 20px #00000033' }}>
                                        <img src={iconThree} alt="icon three" />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px' }}>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3}  >
                        <Paper className="paperFour" style={{ padding: 10, background: '#fadbe091', border: '2px Solid rgba(255, 69, 96, 0.85)', color: 'rgba(255, 69, 96, 0.85)', borderRadius: '14px', cursor: 'pointer' }}>
                            <div className="ml-2 cardFor" style={{ textAlign: 'start', fontWeight: 'bolder' }}>
                                Total Tasks  {" "}
                            </div>
                            <div class="row justify-content-between">
                                <div class=" ml-2">
                                    <div className=" col-6 ml-2" >
                                        <h5>{ReducerData.leaderStatic.sumTasks ? ReducerData.leaderStatic.sumTasks : "0"}
                                        </h5>
                                    </div>
                                </div>
                                <div class="col-4" >
                                    <Avatar style={{ background: '#FFFFFF', boxShadow: '0px 0px 20px #00000033' }}>
                                        <img src={iconFive} alt="icon five" style={{ paddingLeft: '16px', paddingBottom: '6px' }} />
                                    </Avatar>
                                </div>
                            </div>
                            <div className="row" style={{ margin: '1px' }}>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            {more ?
                <>
                    <p className="moreTxt1  moreBtn " onClick={() => { setMore(!more) }}>Less-</p>

                    <div className="div-container">
                        <Container className="p-0">
                            <div class="container p-0">
                                <div class="row">
                                    <div class="col-md-6 mb-0 text-time-container">
                                        <Navbar expand="md" variant="light" className="nav mb-0 d-flex" style={{ justifyContent: "flex-start" }}>
                                            <p id="day" onClick={filterByDay} className="filterBy">Day</p>
                                            <p id="week" onClick={filterByWeek} className="filterBy">Week</p>
                                            <p id="month" onClick={filterByMonth} className="filterBy">Month</p>
                                            <p id="year" onClick={filterByYear} className="filterBy">Year</p>
                                        </Navbar>
                                    </div>
                                    <div class="col-md-6 circle-menu-container">
                                        <Navbar expand="md" variant="light" className="justify-content-end is-small">
                                            <p style={circleStyle1}>
                                            </p>
                                            <Navbar.Brand style={{ fontSize: "14px" }}>Contacts</Navbar.Brand>
                                            <div style={circleStyle2}>
                                            </div>
                                            <Navbar.Brand style={{ fontSize: "14px" }}>Papers</Navbar.Brand>
                                            <div style={circleStyle3}>
                                            </div>
                                            <Navbar.Brand style={{ fontSize: "14px" }}>Projects</Navbar.Brand>
                                            <div style={circleStyle4}>
                                            </div>
                                            <Navbar.Brand style={{ fontSize: "14px" }}>Tasks</Navbar.Brand>
                                        </Navbar>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                    <Chart2 />
                    <div className="add-div"></div>
                </>
                : <><p className="moreTxt1  moreBtn add" onClick={() => { setMore(!more) }}>More+</p>
                    {/* {cssChangePadding(1)} */}
                </>
                // REMEMBER!!!!!!!!!!1 $(".in-small-profil").css("padding-top", "unset")
            }

            {/* $(".in-small-profil").css("padding-top", "unset") */}
        </div>
    )
})

