import * as yup from 'yup';

export const employeeAssessmentValidationSchema = yup.object().shape({
  employee_id: yup.string().nullable(),
  assessment_id: yup.string().nullable(),
});
