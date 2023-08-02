interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Organization Owner'],
  customerRoles: [],
  tenantRoles: ['Organization Owner', 'HR Manager', 'Team Leader', 'Employee'],
  tenantName: 'Company',
  applicationName: 'assessment',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
