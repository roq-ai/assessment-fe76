import * as yup from 'yup';

export const assessmentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  hr_manager_id: yup.string().nullable(),
  team_leader_id: yup.string().nullable(),
});
