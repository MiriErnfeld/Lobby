import { actions } from '../actions/staticAction'

// ---------------A function that extracts the jwt from the cookies----------------
export const getCookie = (c_name) => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end === -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
};

//I want to get the kind of the jwt according to the url
let jwt = ""

const getJwt = (url) => {
  url.href.includes('dev') ?
    jwt = document.cookie.includes('devJwt') ?
      document.cookie.split(";")
        .filter(s => s.includes('devJwt'))[0].split("=").pop() : null
    : url.href.includes('stg') ?
      jwt = document.cookie.includes('stgJwt') ?
        document.cookie.split(";")
          .filter(s => s.includes('stgJwt'))[0].split("=").pop() : null
      : jwt = document.cookie.includes('jwt') ?
        document.cookie.split(";")
          .filter(s => s.includes('jwt'))[0].split("=").pop() : null

}
export const getStaticData = ({ dispatch, getState }) => next => action => {
  // with this type client enter to application:INIT_DATA
  if (action.type === 'INIT_DATA') {
    let url = window.location;
    let userName = (url.pathname.split('/')[1]);
    getJwt(url);
    dispatch(actions.setJwt(jwt))

    return fetch(`https://lobby.dev.leader.codes/api/${userName}/getUserByUserName`,
      {
        method: 'GET', headers: { 'authorization': jwt }
      })
      .then((res) => {
        if (res.status === 401) {
          window.location.assign(`https://dev.leader.codes/login`);
        }
        return res.json();
      })
      .then((result) => {

        dispatch(actions.setUser(result));
        //  fetch to get sum of projects for user-----------------
        fetch(`https://reacthub.dev.leader.codes/api/${userName}/getAllProjectsForUser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: jwt,

          },
        })
          .then((data) => data.json())
          .then((data) => {

            //all data for project
            let projectData = data.userProjectsList
            //only sumProject

            if (projectData && projectData.length !== 0) {
              let sumProject = data.countProjectsForUser

              dispatch(actions.setProjectStatic(sumProject));
              dispatch(actions.setProjectData(projectData));
              dispatch(actions.setProjectChart(projectData));
              dispatch(actions.ProjectChartDay(projectData));

              console.log(data)
            }
          })
        // fetch to get sum tasks for user-------------
        fetch(`https://reacthub.dev.leader.codes/api/${userName}/getAllTasksForUser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJIZXNJaFlXaVU2Z1A3M1NkMHRXaDJZVzA4ZFkyIiwiZW1haWwiOiJyZW5hbmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA3NTkxOTI5fQ.U2FQ7I4qBXW9DF-SVJqxKiWgVs5tjSo06pyvmuwzCFU",
            Authorization: jwt,

          },
        })

          .then((data) => data.json())
          .then((data) => {

            //all data for project
            let taskData = data.userTasksList
            //only sumTask
            if (taskData && taskData.length !== 0) {

              let sumTask = (data.countTasksForUser)
              dispatch(actions.setTaskStatic(sumTask));
              dispatch(actions.setTaskData(taskData));
              dispatch(actions.setTaskChart(taskData));
              console.log(data)
            }
          })
        //  fetch to get sum of papers for user-----------------
        fetch(`https://papers.dev.leader.codes/api/${userName}/getAllQuote`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEWWMzVlVtRUhTY3FhWkJ3MzAwbHY4OWZuYTgyIiwiZW1haWwiOiJydXRoMTA5NDc2QGdtYWlsLmNvbSIsImlhdCI6MTYxMTcyNjEzN30.sDgXmAvDj3JirPgU5AksbPVMdtxHVIAU9rgTFAeAluE",
            Authorization: jwt,

          },
        })
          .then((data) => data.json())
          .then((data) => {
            // let sumPapers = (data.quotes.length)
            if (data.quotes && data.quotes.length !== 0) {

              let sumPapers = (data.quotes.length)
              let d = data.quotes

              dispatch(actions.setPaperStatic(sumPapers));
              dispatch(actions.setPaperData(d));
              dispatch(actions.setPaperChart(d));
              console.log(data)
            }
          })
        // fetch to get sum of contacts for user----------------------
        fetch(`https://api.dev.leader.codes/${userName}/getContacts/?includesConversations=false`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: jwt,
          },
        })
          .then((data) => data.json())
          .then((dataContact) => {
            //all data for contact
            let contactData = dataContact
            //only sumContact
            if (contactData && contactData.length !== 0) {

              let sumContact = (dataContact.length)

              dispatch(actions.setContactStatic(sumContact));
              dispatch(actions.setContactData(contactData));
              dispatch(actions.setContactChart(contactData));
              console.log(contactData)
            }
          })
      },
        (err) => {
          return err;
        })
  }
  return next(action)
}