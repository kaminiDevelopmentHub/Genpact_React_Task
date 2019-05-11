import React from 'react';
import { connect } from 'react-redux';
import ReactSuperSelect from 'react-select';
import { getDepartment, getEmployeeId, getEmloyeeDetails, setTextFiled, clearData } from '../../actions/DashboardAction';
import './Dashboard.scss';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMasg: '',
      loader: false
    };
  }
  componentWillMount() {
    this.props.dispatch(getDepartment());
  }
  componentDidMount() {
    // this.props.dispatch(getDepartment);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps &&
      this.props.Dashboard.getEmployeeDetails !== nextProps.Dashboard.getEmployeeDetails &&
      nextProps.Dashboard.getEmployeeDetails.data
    ) {
      this.setState({ loader: false });
    }
  }
  getEmployeeId = (event) => {
    this.props.dispatch(getEmployeeId(event.value));
  }
  setTextFiled = (event) => {
    this.props.dispatch(
      setTextFiled({ event })
    );
  }
  getEmloyeeDetails = () => {
    const selectedEmpId = this.props.Dashboard.selcetedEmpId;
    if (selectedEmpId && selectedEmpId !== '') {
      this.setState({ loader: true, errorMasg: '' });
      window.setTimeout(() => {
        this.props.dispatch(getEmloyeeDetails(selectedEmpId));
      }, 1000);
    } else {
      this.setState({ errorMasg: 'Please Fill The Form' });
    }
  }
  clearData = () => {
    this.props.dispatch(clearData());
  }
  render() {
    return (
      <div className="page-panel">
        <div className="form-field">
          <label className="form-label">Department</label>
          <ReactSuperSelect
            className="form-input"
            options={this.props.Dashboard.Department}
            onChange={this.getEmployeeId}
            value={(this.props.Dashboard.Department && this.props.Dashboard.Department.length !== 0 && this.props.Dashboard.currentDepId !== 0) ?
              (this.props.Dashboard.Department).filter(obj => obj.value === this.props.Dashboard.currentDepId)[0] : {
                label: 'Select',
                value: 0
              }}
          />
        </div>
        <div className="form-field">
          <label className="form-label">EmployeeId</label>
          <ReactSuperSelect
            className="form-input"
            options={this.props.Dashboard.employeeId}
            onChange={this.setTextFiled}
            value={(this.props.Dashboard.employeeId && this.props.Dashboard.employeeId.length !== 0 && this.props.Dashboard.selcetedEmpId !== 0) ?
              (this.props.Dashboard.employeeId).filter(obj => obj.value === this.props.Dashboard.selcetedEmpId)[0] : {
                label: 'Select',
                value: 0
              }}
          />
        </div>
        <input className="log-in-submit btn btn-primary margin-right" onClick={this.getEmloyeeDetails} type="button" value="Details" />
        <input className="log-in-submit btn btn-primary margin-right" onClick={this.clearData} type="button" value="clear" />
        {(this.state.errorMasg !== '') && (<div className="card err">{this.state.errorMasg}</div>)}
        {(this.state.loader === true) && (<div className="card green">Loading...</div>)}
        {(this.props.Dashboard && this.props.Dashboard.getEmployeeDetails.data) && <div className="card">
          <img src={this.props.Dashboard.getEmployeeDetails.data.avatar} alt="John" className="imgCss" />
          <h6 className="title">Id: {this.props.Dashboard.getEmployeeDetails.data.id}</h6>
          <h6 className="title">Name: {this.props.Dashboard.getEmployeeDetails.data.first_name}</h6>
        </div>}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { Dashboard: state.dashboard.currentDashboard };
}
export default connect(mapStateToProps)(Dashboard);
