const mapping: Record<string, string> = {
  assessments: 'assessment',
  companies: 'company',
  'employee-assessments': 'employee_assessment',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
