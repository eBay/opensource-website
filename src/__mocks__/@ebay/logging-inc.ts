export const logger = createLogger;
export const getLogger = createLogger;

function createLogger() {
  return {
    begin: createTx,
    debug: vi.fn(),
    error: vi.fn(),
    fatal: vi.fn(),
    info: vi.fn(),
    isLogLevelEnabled: vi.fn().mockReturnValue(false),
    profile: vi.fn(),
    type: createLogger,
    warn: vi.fn(),
  };
}

function createTx() {
  return {
    addData: vi.fn(),
    end: vi.fn(),
    fail: vi.fn(),
  };
}
