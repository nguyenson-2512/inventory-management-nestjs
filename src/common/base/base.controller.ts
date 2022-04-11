import { codeCommonSuccess } from './base.code';

export class BaseController {
  resSuccess(res: any): any {
    return (data: any, message = 'Request success.') => {
      res.status(200).send({
        code: codeCommonSuccess,
        result: {
          data,
        },
        message,
      });
    };
  }
}
