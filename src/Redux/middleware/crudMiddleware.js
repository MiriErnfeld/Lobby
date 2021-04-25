import { data } from 'jquery';
import { actions } from '../actions/staticAction'



// ---------------A function that extracts the jwt from the cookies----------------
export const getCookie = (c_name) => {
  debugger
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
  debugger
  jwt = document.cookie.includes('devJwt') ?
    document.cookie.split(";")
      .filter(s => s.includes('devJwt'))[0].split("=").pop()
    : null

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
          window.location.assign(`https://accounts.codes/lobby/login`);
        }
        return res.json();
      })
      .then((result) => {
        debugger
        dispatch(actions.setUser(result));
        console.log("All User Details" + result);
        //  fetch to get sum of Deals-(Project) for user-----------------
        fetch(`https://contacts.dev.leader.codes/api/deal/${userName}/getAllDealsByUser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: jwt,
          },
        }).then((data) => data.json())
          .then((data) => {
            checkPermission(dataContact).then((ifOk) => {
              if (!data.status) {
                debugger
                //all data for project
                let projectData = data
                //only sumProject
                if (projectData && projectData.length !== 0) {
                  debugger
                  // let sumProject = data.countProjectsForUser
                  let result = projectData.result.length
                  dispatch(actions.setProjectStatic(result));
                  dispatch(actions.setProjectData(projectData));
                  dispatch(actions.setProjectChart(projectData));
                  console.log(data)
                }
              } else {
                dispatch(actions.setProjectStatic("0"));
                dispatch(actions.setProjectData(null));
                dispatch(actions.setProjectChart(null));
              }
            }

            )
          })

        // fetch to get sum tasks for user-------------
        fetch(`https://reacthub.dev.leader.codes/api/${userName}/getAllTasksForUser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: jwt,
          },
        })
          .then((data) => data.json())
          .then((data) => {
            if (!data.status) {
              debugger
              //all data for project
              let taskData = data.userTasksList
              debugger
              //only sumTask
              if (taskData && taskData.length !== 0) {
                let sumTask = (data.countTasksForUser)
                dispatch(actions.setTaskStatic(sumTask));
                dispatch(actions.setTaskData(taskData));
                dispatch(actions.setTaskChart(taskData));
                console.log("task data!!!!!!!!@@@@@" + data)
              }
            }
            else {
              debugger
              dispatch(actions.setTaskStatic("0"));
              dispatch(actions.setTaskData(null));
              dispatch(actions.setTaskChart(null));
            }
          })
        //  fetch to get sum of papers for user-----------------
        fetch(`https://papers.dev.leader.codes/api/${userName}/getAllQuote`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: jwt,

          },
        })
          .then((data) => data.json())
          .then((data) => {

            if (!data.status) {
              // let sumPapers = (data.quotes.length)
              if (data.quotes && data.quotes.length !== 0) {
                let sumPapers = (data.quotes.length)
                let dataQuotes = data.quotes
                dispatch(actions.setPaperStatic(sumPapers));
                dispatch(actions.setPaperData(dataQuotes));
                dispatch(actions.setPaperChart(dataQuotes));
                console.log(data)
              }
            }
            else {
              dispatch(actions.setPaperStatic("0"));
              dispatch(actions.setPaperData(null));
              dispatch(actions.setPaperChart(null));
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
          .then((data) => {
            debugger

            if (!data.status) {
              let contactData = data
              //only sumContact
              if (contactData && contactData.length !== 0) {
                let sumContact = (contactData.length)
                dispatch(actions.setContactStatic(sumContact));
                dispatch(actions.setContactData(contactData));
                dispatch(actions.setContactChart(contactData));
                console.log(contactData)
              }
            }
            else {
              dispatch(actions.setContactStatic("0"));
              dispatch(actions.setContactData(null));
              dispatch(actions.setContactChart(null));
            }
          })
      },
        (err) => {
          return err;
        })
  }
  return next(action)
}
export const extractJwt = ({ dispatch, getState }) => next => action => {
  if (action.type === 'EXTRACT_JWT') {


    let params = (new URL(document.location)).searchParams;
    let jwtGlobal = params.get('jwt');
    if (jwtGlobal) {
      let newUrl = window.location.href
      newUrl = newUrl.split('?jwt=')
      newUrl = newUrl[0]
      let date = new Date(Date.now() + 86400e3);
      date = date.toUTCString();
      var expires = "expires=" + date;
      document.cookie = "devJwt" + "=" + jwtGlobal + ";" + expires + ";domain=.dev.leader.codes;path=/";
      window.location.replace(newUrl)
    }
    else {
      dispatch({ type: 'INIT_DATA' });
    }
  }
  return next(action)
}