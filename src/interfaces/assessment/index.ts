import { EmployeeAssessmentInterface } from 'interfaces/employee-assessment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AssessmentInterface {
  id?: string;
  title: string;
  hr_manager_id?: string;
  team_leader_id?: string;
  created_at?: any;
  updated_at?: any;
  employee_assessment?: EmployeeAssessmentInterface[];
  user_assessment_hr_manager_idTouser?: UserInterface;
  user_assessment_team_leader_idTouser?: UserInterface;
  _count?: {
    employee_assessment?: number;
  };
}

export interface AssessmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  hr_manager_id?: string;
  team_leader_id?: string;
}
