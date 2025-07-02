import { cookies } from 'next/headers';
import * as jose from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export const getUserId = async (): Promise<string | null> => {
  const token = cookies().get('token')?.value;

  if (!token) {
    return null;
  }

  try {
    const { payload } = await jose.jwtVerify(token, secret);
    return payload.userId as string;
  } catch (error) {
    console.error('JWT Verification Error on server:', error);
    return null;
  }
}; 