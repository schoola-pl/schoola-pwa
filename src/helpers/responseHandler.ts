import { Response } from '../types/responses';

// Default messages for application errors & success responses
const defaultErrorMessage = 'Coś poszło nie tak...';
const defaultSuccessMessage = 'Operacja została pomyślnie wykonana!';

// Asynchronous response handler
export function withAsyncResponseHandler<args = any, response = any>(
  fn: ({}: args) => Promise<response>,
  resController?: { success?: string; errors?: string | { [k: string]: string } }
): ({}: args) => Promise<Response<response>> {
  // Return callback with try{}...catch{}
  return async (...args) => {
    try {
      // Get data from function (if exists)
      const data = await fn(...args);
      // Build success response (with data if exists)
      return {
        success: true,
        message: resController?.success || defaultSuccessMessage,
        data
      };
    } catch (error) {
      // Build error response (with custom errors if exist)
      let message = defaultErrorMessage;
      const AWSError = String(error) as string;
      // Get __type from AWSError response
      const __type = AWSError.split(':')[0];
      if (__type) message = __type;
      // Check do errors exist in response controller
      if (resController?.errors) {
        if (typeof resController.errors === 'string') {
          message = resController.errors;
        } else if (typeof resController.errors === 'object') {
          if (__type in resController.errors) {
            message = resController.errors[__type];
          }
        }
      }
      // Return error response
      return {
        success: false,
        message
      };
    }
  };
}

// Asynchronous response without arguments handler
export function withAsyncResponseWithoutArgsHandler<response = any>(
  fn: () => Promise<response>,
  resController?: { success?: string; errors?: string | { [k: string]: string } }
): () => Promise<Response<response>> {
  // Return callback with try{}...catch{}
  return async () => {
    try {
      // Get data from function (if exists)
      const data = await fn();
      // Build success response (with data if exists)
      return {
        success: true,
        message: resController?.success || defaultSuccessMessage,
        data
      };
    } catch (error) {
      // Build error response (with custom errors if exist)
      let message = defaultErrorMessage;
      const AWSError = String(error) as string;
      // Get __type from AWSError response
      const __type = AWSError.split(':')[0];
      if (__type) message = __type;
      // Check do errors exist in response controller
      if (resController?.errors) {
        if (typeof resController.errors === 'string') {
          message = resController.errors;
        } else if (typeof resController.errors === 'object') {
          if (__type in resController.errors) {
            message = resController.errors[__type];
          }
        }
      }
      // Return error response
      return {
        success: false,
        message
      };
    }
  };
}

// Response handler
export function withResponseHandler<args = any, response = any>(
  fn: ({}: args) => response,
  resController?: { success?: string; errors?: string | { [k: string]: string } }
): ({}: args) => Response<response> {
  // Return callback with try{}...catch{}
  return (...args) => {
    try {
      // Get data from function (if exists)
      const data = fn(...args);
      // Build success response (with data if exists)
      return {
        success: true,
        message: resController?.success || defaultSuccessMessage,
        data
      };
    } catch (error) {
      // Build error response (with custom errors if exist)
      let message = defaultErrorMessage;
      const AWSError = String(error) as string;
      // Get __type from AWSError response
      const __type = AWSError.split(':')[0];
      if (__type) message = __type;
      // Check do errors exist in response controller
      if (resController?.errors) {
        if (typeof resController.errors === 'string') {
          message = resController.errors;
        } else if (typeof resController.errors === 'object') {
          if (__type in resController.errors) {
            message = resController.errors[__type];
          }
        }
      }
      // Return error response
      return {
        success: false,
        message
      };
    }
  };
}
