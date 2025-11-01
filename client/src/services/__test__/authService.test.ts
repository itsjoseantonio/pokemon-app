import { describe, it, expect, vi, beforeEach } from 'vitest';
import { login } from '../authService';
import { api } from '../api';

vi.mock('../api', () => ({
  api: {
    post: vi.fn(),
  },
}));

describe('API auth calls', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Login user', () => {
    it('Login user successfully', async () => {
      const userData = { username: 'admin', password: 'admin' };
      const mockResponse = { data: { username: 'admin' } };

      (api.post as any).mockResolvedValueOnce(mockResponse);

      const result = await login(userData.username, userData.password);

      expect(result).toEqual(mockResponse.data);
    });
  });
});
