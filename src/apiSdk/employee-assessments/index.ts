import axios from 'axios';
import queryString from 'query-string';
import { EmployeeAssessmentInterface, EmployeeAssessmentGetQueryInterface } from 'interfaces/employee-assessment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEmployeeAssessments = async (
  query?: EmployeeAssessmentGetQueryInterface,
): Promise<PaginatedInterface<EmployeeAssessmentInterface>> => {
  const response = await axios.get('/api/employee-assessments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEmployeeAssessment = async (employeeAssessment: EmployeeAssessmentInterface) => {
  const response = await axios.post('/api/employee-assessments', employeeAssessment);
  return response.data;
};

export const updateEmployeeAssessmentById = async (id: string, employeeAssessment: EmployeeAssessmentInterface) => {
  const response = await axios.put(`/api/employee-assessments/${id}`, employeeAssessment);
  return response.data;
};

export const getEmployeeAssessmentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/employee-assessments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEmployeeAssessmentById = async (id: string) => {
  const response = await axios.delete(`/api/employee-assessments/${id}`);
  return response.data;
};
