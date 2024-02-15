'use client';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { auth } from '../../../../firebase';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Input = {
    email: string;
    password: string;
};

const Register = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = async (data) => {
        await createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((UserCredential) => {
                const user = UserCredential.user;
                router.push('/auth/login');
            })
            .catch((error) => {
                alert(error.message);
                if (error.code === 'auth/email-already-in-use') {
                    alert('すでに登録されているメールアドレスです');
                } else {
                    alert(error.message);
                }
            });
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-5 rounded-lg shadow-md w-96"
            >
                <h1 className="mb-4 text-2x1 text-gray700 font-medium">
                    新規登録
                </h1>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        {...register('email', {
                            required: 'メールアドレスは必須です',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                                message: '不適切なメールアドレスです',
                            },
                        })}
                        type="text"
                        className="mt-1 border-2 rounded-md w-full p-2"
                    ></input>
                    {errors.email && (
                        <span className="text-red-600 text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">
                        Password
                    </label>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'パスワードは必須です',
                            pattern: {
                                value: /^[a-zA-Z0-9.?/-]{6,20}$/,
                                message:
                                    '6文字以上20文字以下の英数字記号を含むパスワードを設定してください',
                            },
                        })}
                        className="mt-1 border-2 rounded-md w-full p-2"
                    ></input>
                    {errors.password && (
                        <span className="text-red-600 text-sm">
                            {errors.password.message}
                        </span>
                    )}
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                    >
                        新規登録
                    </button>
                </div>
                <div className="mt-4">
                    <span className="text-gray-600 text-sm">
                        すでにアカウントをお持ちですか？
                    </span>
                    <Link href={'login'} className="text-blue-500 text-sm font-bold ml-1 hover:text-blue-700">
                        ログインページへ
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
