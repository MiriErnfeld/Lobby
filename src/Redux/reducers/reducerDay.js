import produce from 'immer';
import { createReducer } from "./reducerUtils";
import moment from 'moment';

const initialState = {
    papers: [0, 0, 0, 0, 0, 0, 0, 0],
    projects: [0, 0, 0, 0, 0, 0, 0, 0],
    tasks: [0, 0, 0, 0, 0, 0, 0, 0],
    contacts: [0, 0, 0, 0, 0, 0, 0, 0]
}

const staticData = {
    TaskChartDay(state = initialState, action) {

        let allData = action.payload
        console.log(initialState.tasks)
        const arr = [...state.tasks];
        for (let i = 0; i < arr.length; i++) {

            const date1 = allData[i].startDate.split("/")
            let date2 = date1[0]
            if (date2[0] != 0) {
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
            else {
                date2 = date2[1]
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
        }
        state.tasks = [...arr];
        console.log(state.tasks)
    },
    ProjectChartDay(state = initialState, action) {

        let allData = action.payload
        const arr = [...state.projects];
        for (let i = 0; i < allData.length; i++) {
            let day = allData[i].dueDate
            let m = moment(day).weekday()
            console.log(moment().isoWeekday())
            let d = moment(day).isoWeekday()
            const date = moment(day); // Thursday Feb 2015

            const dow = date.day();
            const x = (arr[dow]) + 1
            arr[dow] = x;
        }
        state.projects = [...arr];
        console.log(state.projects)
    },
    PaperChartDay(state = initialState, action) {
        let allData = action.payload
        console.log(initialState.papers)
        const arr = [...state.papers];
        for (let i = 0; i < allData.length; i++) {
            const date1 = allData[i].createdDate
            let date11 = moment(date1).format("MM/DD/YYYY").split("/")
            let date2 = date11[1]
            if (date2[0] != 0) {
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
            else {
                date2 = date2[1]
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
        }
        state.papers = [...arr];
    },
    ContactChartDay(state = initialState, action) {
        let allData = action.payload
        console.log(initialState.contacts)
        const arr = [...state.contacts];
        for (let i = 0; i < allData.length; i++) {
            const date1 = allData[i].createDateAndTime
            let date11 = moment(date1).format("MM/DD/YYYY").split("/")
            let date2 = date11[0]
            if (date2[0] != 0) {
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
            else {
                date2 = date2[1]
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
        }
        state.contacts = [...arr];
    },
};
export default produce((state, action) => createReducer(state, action, staticData), initialState);