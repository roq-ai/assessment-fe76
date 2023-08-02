import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { employeeAssessmentValidationSchema } from 'validationSchema/employee-assessments';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.employee_assessment
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getEmployeeAssessmentById();
    case 'PUT':
      return updateEmployeeAssessmentById();
    case 'DELETE':
      return deleteEmployeeAssessmentById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getEmployeeAssessmentById() {
    const data = await prisma.employee_assessment.findFirst(convertQueryToPrismaUtil(req.query, 'employee_assessment'));
    return res.status(200).json(data);
  }

  async function updateEmployeeAssessmentById() {
    await employeeAssessmentValidationSchema.validate(req.body);
    const data = await prisma.employee_assessment.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteEmployeeAssessmentById() {
    const data = await prisma.employee_assessment.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
