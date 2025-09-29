import type * as serviceClient from "@ebay/service-client-ebay";
type MockHandler = (
  ctx: serviceClient.Context,
  client: serviceClient.Client,
) => unknown;
const mocksByService = new Map<string, Set<MockHandler>>();

/**
 * Only available in tests and is used to mock the response from the service client.
 * The handler will be called until it returns a value or throws an error.
 * If an error is thrown it is forwarded as the error result to the service client.
 *
 * @param service The name of the service to mock.
 * @param handler A handler which will intercept all requests to the service.
 * @return A function which will remove the mock handler.
 *
 * @example
 * const stop = mockService('searchservice', (ctx, client) => {
 *   if (ctx.method === 'post') {
 *     return { ... };
 *   }
 * });
 *
 * // Later you can call `stop()` to stop the mock.
 * stop();
 */
export function mockService(service: string, handler: MockHandler) {
  let mocksForService = mocksByService.get(service);
  if (mocksForService) {
    mocksForService.add(handler);
  } else {
    mocksForService = new Set([handler]);
    mocksByService.set(service, mocksForService);
  }

  return () => mocksForService!.delete(handler);
}

export function context(ctx: any) {
  return {
    getClient(service: string) {
      return {
        get: vi.fn().mockReturnThis(),
        put: vi.fn().mockReturnThis(),
        post: vi.fn().mockReturnThis(),
        set: vi.fn().mockReturnThis(),
        path: vi.fn().mockReturnThis(),
        headers: vi.fn().mockReturnThis(),
        end(cb: any) {
          (async () => {
            const interceptorsForService = mocksByService.get(service);

            if (interceptorsForService) {
              for (const handler of interceptorsForService) {
                try {
                  const result = await handler(ctx, this as any);
                  if (result) {
                    cb(null, result);
                    return;
                  }
                } catch (err) {
                  cb(err);
                  return;
                }
              }
            }

            cb(new Error("No interceptors handled the request"));
          })();
        },
      };
    },
  };
}

declare module "@ebay/service-client-ebay" {
  export function mockService(
    service: string,
    handler: (ctx: unknown, client: serviceClient.Client) => unknown,
  ): () => void;
}
