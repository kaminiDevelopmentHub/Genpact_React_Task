import { DashboardType } from '../actions/ActionType';
// import { clearData } from '../actions/DashboardAction';

const DEFAULT_EMP_ID = {
  userDashboardInfo: {},
  //   isRegistered: false,
  //   registrationMessage: '',
  currentDashboard: {
    Department: [],
    employeeId: [],
    currentDepId: '',
    selcetedEmpId: '',
    getEmployeeDetails: {}
  }
  //   registerPostSucess: ''
};

const setTextField = (state, action) => {
  const Dashboard = {};
  Object.assign(Dashboard, state.currentDashboard);
  Dashboard.selcetedEmpId = action.data.event.label;
  const newState = {};
  Object.assign(newState, state, { currentDashboard: Dashboard });
  return newState;
};

const getDepartment = (state, action) => {
  const Dashboard = {};
  Object.assign(Dashboard, state.currentDashboard);
  Dashboard.Department = action.data.Department;
  const newState = {};
  Object.assign(newState, state, { currentDashboard: Dashboard });
  return newState;
};

const getEmployeeId = (state, action) => {
  const Dashboard = {};
  Object.assign(Dashboard, state.currentDashboard);
  Dashboard.employeeId = action.data.EmployeeId;
  Dashboard.currentDepId = action.data.currentDepId;
  const newState = {};
  Object.assign(newState, state, { currentDashboard: Dashboard });
  return newState;
};

const getEmployeeDetails = (state, action) => {
  const Dashboard = {};
  Object.assign(Dashboard, state.currentDashboard);
  Dashboard.getEmployeeDetails = action.data;
  const newState = {};
  Object.assign(newState, state, { currentDashboard: Dashboard });
  return newState;
};

const clearEmpdata = (state) => {
  const Dashboard = {};
  Object.assign(Dashboard, state.currentDashboard);
  Dashboard.employeeId = [];
  Dashboard.selcetedEmpId = '';
  Dashboard.currentDepId = 0;
  Dashboard.getEmployeeDetails = {};
  Dashboard.getEmployeeDetails = {};
  const newState = {};
  Object.assign(newState, state, { currentDashboard: Dashboard });
  return newState;
};

export default function reducer(state = DEFAULT_EMP_ID, action) {
  switch (action.type) {
    case DashboardType.SET_EMPLOYEE_FIELD:
      return setTextField(state, action);

    case DashboardType.GET_DEPARTMENT:
      return getDepartment(state, action);

    case DashboardType.GET_EMP_ID:
      return getEmployeeId(state, action);

    case DashboardType.GET_EMP_DETAIL:
      return getEmployeeDetails(state, action);
    case DashboardType.CLEAR_EMP_DATA:
      return clearEmpdata(state, action);
    default:
      return state;
  }
}
