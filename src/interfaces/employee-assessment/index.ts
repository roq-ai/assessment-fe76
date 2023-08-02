import { UserInterface } from 'interfaces/user';
import { AssessmentInterface } from 'interfaces/assessment';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeAssessmentInterface {
  id?: string;
  employee_id?: string;
  assessment_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  assessment?: AssessmentInterface;
  _count?: {};
}

export interface EmployeeAssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  assessment_id?: string;
}
