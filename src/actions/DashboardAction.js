import axios from 'axios';
import { DashboardType } from './ActionType';

const Department = [
  {
    label: 'HR',
    value: 1
  },
  {
    label: 'Engineering',
    value: 2
  }
];

const EmployeeId = [
  {
    label: 1,
    value: 1
  },
  {
    label: 2,
    value: 1
  },
  {
    label: 3,
    value: 1
  },
  {
    label: 4,
    value: 1
  },
  {
    label: 5,
    value: 1
  },
  {
    label: 6,
    value: 2
  },
  {
    label: 7,
    value: 2
  },
  {
    label: 8,
    value: 2
  },
  {
    label: 9,
    value: 2
  },
  {
    label: 10,
    value: 2
  }
];

export function setTextFiled(data) {
  return { type: DashboardType.SET_EMPLOYEE_FIELD, data };
}
export function clearData() {
  return { type: DashboardType.CLEAR_EMP_DATA };
}


export function getDepartment() {
  return (dispatch) => {
    dispatch({
      type: DashboardType.GET_DEPARTMENT,
      data: { Department }
    });
  };
}
export function getEmployeeId(empId) {
  return (dispatch) => {
    if (empId !== null) {
      const filteredEmployeeId = EmployeeId.filter(obj => obj.value === empId);

      dispatch({
        type: DashboardType.GET_EMP_ID,
        data: { EmployeeId: filteredEmployeeId, currentDepId: empId }
      });
    } else {
      dispatch({
        type: DashboardType.GET_EMP_ID,
        data: { EmployeeId: [] }
      });
    }
  };
}
export function getEmloyeeDetails(empId) {
  return (dispatch) => {
    axios
      .get(`https://reqres.in/api/users/${empId}`, DashboardType)
      .then(response => {
        dispatch({
          type: DashboardType.GET_EMP_DETAIL,
          data: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: DashboardType.GET_EMP_DETAIL_FAILED,
          date: { message: `${err}wrong employee id` }
        });
      });
  };
}
