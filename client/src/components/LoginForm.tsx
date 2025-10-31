import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import type { User } from '@/types';

interface LoginFromProps {
  onSubmit: (username: string, password: string) => void;
  error: string | null;
}

const LoginForm = ({ onSubmit, error }: LoginFromProps) => {
  const [formData, setFormData] = useState<User>({
    username: '',
    password: '',
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData.username, formData.password);
      }}
      className='w-full max-w-sm'
    >
      <Card className=''>
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='username'>Username</Label>
              <Input
                id='username'
                type='text'
                placeholder='username'
                required
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='*********'
                required
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
          </div>
          {error && (
            <p className='text-red-500 text-sm mt-2 text-center'>{error}</p>
          )}
        </CardContent>

        <CardFooter className='flex-col gap-2'>
          <Button type='submit' className='w-full'>
            Login
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default LoginForm;
